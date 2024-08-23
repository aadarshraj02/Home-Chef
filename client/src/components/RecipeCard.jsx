import { IoIosHeart } from "react-icons/io";
import { MdDelete } from "react-icons/md";
import { useLocation } from "react-router-dom";

const RecipeCard = ({ id, image, title }) => {
  const pathname = useLocation();

  return (
    <div className="flex flex-col justify-between bg-white p-3 rounded-lg shadow-md">
      <div className="overflow-hidden">
        <img
          src={image}
          alt={title}
          className="rounded-lg hover:scale-110 transition-all duration-300 ease-linear"
          width={250}
        />
      </div>
      <div className="flex justify-between items-center mt-3">
        <h3 className="text-sm text-zinc-600 leading-none tracking-tighter">
          {title.slice(0, 20)}
          {title.length > 20 ? "..." : null}
        </h3>
        {pathname === "/favorites" ? (
          <MdDelete className="text-red-500 text-lg hover:scale-125 transition-all duration-300 ease-linear cursor-pointer" />
        ) : (
          <IoIosHeart className="text-red-500 text-lg hover:scale-125 transition-all duration-300 ease-linear cursor-pointer" />
        )}
      </div>
    </div>
  );
};

export default RecipeCard;
