const express = require("express");
const router = express.Router();
const {
  signup,
  login,
  logout,
  checkUser,
} = require("./controllers/authController");
const { verifyToken } = require("./middlewares/verifyToken");
const {
  addToFavorites,
  removeFromFavorites,
  getFavorites,
} = require("./controllers/featureController");

router.post("/signup", signup);
router.post("/login", login);
router.get("/logout", logout);
router.get("/checkUser", verifyToken, checkUser);
router.post("/addToFavorites/:id", addToFavorites);
router.post("/removeFromFavorites/:id", removeFromFavorites);
router.get("/getFavorites/:id", getFavorites);

module.exports = router;
