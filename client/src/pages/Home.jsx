import { useEffect, useState } from "react";
import RecipeCard from "../components/RecipeCard";
import axios from "axios";
import { PacmanLoader } from "react-spinners";

const Home = () => {
  const [recipes, setRecipes] = useState([]);
  const [loading, setLoading] = useState(false);

  const getRecipes = async (text) => {
    setLoading(true);
    try {
      const res = await axios.get(
        `https://www.themealdb.com/api/json/v1/1/filter.php?i=${text}`
      );
      const data = res.data;
      setRecipes(data.meals);
    } catch (error) {
      console.error("Error fetching recipes:", error);
      setRecipes([]);
    } finally {
      setLoading(false);
    }
  };

  const getInitialRecipes = async () => {
    setLoading(true);
    try {
      const res = await axios.get(
        `https://www.themealdb.com/api/json/v1/1/filter.php?i=`
      );
      const data = res.data;
      setRecipes(data.meals || []);
    } catch (error) {
      console.error("Error fetching initial recipes:", error);
      setRecipes([]);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getInitialRecipes();
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
            onChange={(e) => getRecipes(e.target.value)}
            className="outline-none border px-5 py-3 rounded-xl w-[80vw] md:w-[60vw] shadow-md focus:border-red-500"
          />
        </form>
      </div>
      <div className="my-10 w-[40vw] sm:w-[60vw] lg:w-[70vw] grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 items-center mx-auto gap-3">
        {loading ? (
          <PacmanLoader />
        ) : recipes && recipes.length > 0 ? (
          recipes.map((recipe) => (
            <RecipeCard
              key={recipe.idMeal}
              id={recipe.idMeal}
              title={recipe.strMeal}
              image={recipe.strMealThumb}
            />
          ))
        ) : (
          <h1>No Recipes to show</h1>
        )}
      </div>
    </div>
  );
};

export default Home;
