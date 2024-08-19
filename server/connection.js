const mongoose = require("mongoose");
const connectDB = async () => {
  try {
    const connection = await mongoose.connect(process.env.MONGO_URI);
    if (connection.connection.readyState === mongoose.STATES.connected)
      console.log("Database Connected");
    else console.log("Connection Failed");
  } catch (error) {
    console.log(error.message);
  }
};

module.exports = { connectDB };
