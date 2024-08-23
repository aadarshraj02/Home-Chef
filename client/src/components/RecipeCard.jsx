import axios from "axios";
import { IoIosHeart } from "react-icons/io";
import { MdDelete } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import toast from "react-hot-toast";
import { getFavorites } from "../helpers/helper";
import { setFavorites } from "../../redux/slices/authSlice";

const RecipeCard = ({ id, image, title }) => {
  const { pathname } = useLocation();
  const dispatch = useDispatch();

  const user = useSelector((state) => state.auth.user);
  const isAuth = useSelector((state) => state.auth.isAuth);

  const addToFavorites = async (favorite) => {
    const res = await axios.post(
      `http://localhost:5000/api/addToFavorites/${user._id}`,
      favorite,
      {
        withCredentials: true,
      }
    );
    const data = res.data;
    if (data.success) {
      toast.success(data.message);
    }
  };

  const removeFromFavorites = async (favorite) => {
    const res = await axios.post(
      `http://localhost:5000/api/removeFromFavorites/${user._id}`,
      favorite,
      {
        withCredentials: true,
      }
    );
    const data = res.data;
    if (data.success) {
      toast.success(data.message);
    }
  };

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
          <MdDelete
            onClick={() => {
              removeFromFavorites({
                idMeal: id,
                strMeal: title,
                strMealThumb: image,
              });
              getFavorites(user._id).then((res) => dispatch(setFavorites(res)));
            }}
            className="text-red-500 text-lg hover:scale-125 transition-all duration-300 ease-linear cursor-pointer"
          />
        ) : (
          <IoIosHeart
            onClick={() => {
              isAuth
                ? addToFavorites({
                    idMeal: id,
                    strMeal: title,
                    strMealThumb: image,
                  })
                : toast.error("Please login to add to Favorite");
            }}
            className="text-red-500 text-lg hover:scale-125 transition-all duration-300 ease-linear cursor-pointer"
          />
        )}
      </div>
    </div>
  );
};

export default RecipeCard;
