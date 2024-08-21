import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="flex justify-between bg-white items-center px-5 py-4 shadow-md mb-10">
      <Link to="/" className="TITLE_TEXT text-xl font-bold text-red-500">
        HomeChef
      </Link>
      <div className="flex gap-5 items-center justify-center text-zinc-600 ">
        <Link to="/about" className="hover:text-black duration-300 ease-linear">
          About
        </Link>
        <Link to="/login" className="hover:text-black duration-300 ease-linear">
          Login
        </Link>
        <Link
          to="/signup"
          className="hover:text-black duration-300 ease-linear"
        >
          Signup
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
