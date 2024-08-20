const User = require("../models/User");

exports.addToFavorites = async (req, res) => {
  const { id } = req.params;
  const favorite = req.body;

  try {
    let user = await User.findById(id);

    if (!user)
      return res.status(404).json({
        success: false,
        message: "User not Found",
      });

    const existingFavorite = user.favorites.some(
      (fav) => fav.idMeal === favorite.idMeal
    );

    if (existingFavorite)
      return res.status(400).json({
        success: false,
        message: "Recipe already in Favorites",
      });
    else {
      user.favorites = [...user.favorites, favorite];
      await user.save();
      return res.status(200).json({
        success: true,
        message: "Recipe added to favorites",
      });
    }
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};
