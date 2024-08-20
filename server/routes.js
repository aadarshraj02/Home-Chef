const express = require("express");
const router = express.Router();
const {
  signup,
  login,
  logout,
  checkUser,
} = require("./controllers/authController");
const { verifyToken } = require("./middlewares/verifyToken");

router.post("/signup", signup);
router.post("/login", login);
router.get("/logout", logout);
router.get("/checkUser", verifyToken, checkUser);

module.exports = router;
