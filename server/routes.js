const express = require("express");
const router = express.Router();
const {
  signup,
  login,
  logout,
  checkUser,
} = require("./controllers/authController");

router.post("/signup", signup);
router.post("/login", login);
router.get("/logout", logout);
router.get("/checkUser", checkUser);

module.exports = router;
