import RecipeCard from "../components/RecipeCard";

const Home = () => {
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
      <div className="my-10">
        <RecipeCard />
      </div>
    </div>
  );
};

export default Home;
