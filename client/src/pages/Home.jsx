import { useEffect, useState } from "react";
import RecipeCard from "../components/RecipeCard";
import axios from "axios";

const Home = () => {
  const [recipes, setRecipes] = useState([]);

  const getRecipes = async () => {
    const res = await axios.get(
      "https://www.themealdb.com/api/json/v1/1/filter.php?i=chicken_breast"
    );
    const data = await res.data;
    setRecipes(data.meals);
  };

  useEffect(() => {
    getRecipes();
  }, []);

  return (
    <div className="flex flex-col justify-center items-center">
      <div>
        <form>
          <input
            type="text"
            name="search"
            id="search"
            placeholder="Search Dish.."
            className="outline-none border px-5 py-3 rounded-xl w-[80vw] md:w-[60vw] shadow-md focus:border-red-500"
          />
        </form>
      </div>
      <div className="my-10 w-[40vw] sm:w-[60vw] lg:[70vw] grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 items-center mx-auto  gap-3">
        {recipes.map((recipe) => (
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

export default Home;
