import { useEffect } from "react";
import { getFavorites } from "../helpers/helper";
import RecipeCard from "../components/RecipeCard";
import { useDispatch, useSelector } from "react-redux";
import { setFavorites } from "../../redux/slices/authSlice";

const Favorites = () => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.auth.user);
  const favorites = useSelector((state) => state.auth.favorites);

  useEffect(() => {
    getFavorites(user._id).then((res) => dispatch(setFavorites(res)));
  }, []);

  return (
    <div className="my-10">
      <div className="lg:w-[70vw] grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 justify-center items-center gap-3">
        {favorites.map((recipe) => (
          <RecipeCard
            key={recipe.idMeal}
            id={recipe.idMeal}
            title={recipe.strMeal}
            image={recipe.strMealThumb}
          />
        ))}
      </div>
    </div>
  );
};

export default Favorites;
