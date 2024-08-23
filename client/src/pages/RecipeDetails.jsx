import axios from "axios";
import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

const RecipeDetails = () => {
  const { id } = useParams();
  const [details, setDetails] = useState([]);
  const navigate = useNavigate();

  const getRecipeDetails = async () => {
    const res = await axios.get(
      `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`
    );
    const data = res.data;
    setDetails(data.meals[0]);
  };

  useEffect(() => {
    getRecipeDetails();
  }, []);

  return (
    <div className="flex justify-center items-center">
      <div className="w-[60vw] p-5 bg-white" key={details?.idMeal}>
        <div className="flex justify-evenly items-center">
          <img
            src={details?.strMealThumb}
            width={250}
            className="rounded-full"
          />
          <span className="text-4xl">{details?.strMeal}</span>
        </div>
        <div className="my-3">
          <h1 className="text-lg font-bold text-gray-800">Recipe</h1>
          <p className="text-md">{details?.strInstructions}</p>
        </div>
        <button
          className="mt-4 px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600"
          onClick={() => navigate("/")}
        >
          Go Back to Home
        </button>
      </div>
    </div>
  );
};

export default RecipeDetails;
