const User = require("../models/User");
const bcrypt = require("bcrypt");

exports.signup = async (req, res) => {
  const { username, email, password } = req.body;

  try {
    let user;
    user = await User.findOne({ email });
    if (user) {
      return res.status(400).json({
        success: false,
        message: "Account already exist",
      });
    }

    const hashPassword = await bcrypt.hash(password, 10);
    user = await User.create({
      username,
      email,
      password: hashPassword,
    });

    await user.save();
    return res.status(201).json({
      success: true,
      message: "Signup Successful",
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

exports.login = async (req, res) => {
  let { email, password } = req.body;

  try {
    let user;
    user = await User.findOne({ email });

    if (!user)
      return res.status(400).json({
        success: false,
        message: "Account Doesn't exist, Please Signup",
      });
    const isMatch = await bcrypt.compare(password, user.password);

    if (!isMatch)
      return res.status(400).json({
        success: false,
        message: "Incorrect Password",
      });

    const token = jwt.sign(
      {
        id: user._id,
      },
      process.env.JWT_SECRET,
      {
        expiresIn: "1h",
      }
    );
    res.cookie("token", token, {
      httpOnly: true,
      expires: new Date(Date.now() + 1000 * 60 * 60),
    });
    res.status(200).json({
      success: true,
      message: "Login Successful",
      user,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

exports.logout = async (req, res) => {
  try {
    res.cookie("token", "", {
      expires: new Date(Date.now()),
    });
    return res.status(200).json({
      success: true,
      message: "Logout successful",
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

exports.checkUser = async (req, res) => {
  const id = req.id;
  try {
    const user = await User.findById(id).select("-password");

    if (!user)
      return res.status(400).json({
        success: false,
        message: "Please Signup",
      });
    return res.status(200).json({
      success: true,
      user,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};
