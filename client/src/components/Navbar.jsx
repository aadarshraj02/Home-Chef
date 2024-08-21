import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="flex justify-between bg-white items-center px-5 py-4 shadow-md mb-10">
      <Link to="/" className="TITLE_TEXT text-xl font-bold text-red-500">
        HomeChef
      </Link>
      <div className="flex gap-5">
        <Link to="">About</Link>
        <Link to="">Login</Link>
        <Link to="">Signup</Link>
      </div>
    </nav>
  );
};

export default Navbar;
