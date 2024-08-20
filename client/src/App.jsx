import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import RecipeDetails from "./pages/RecipeDetails";
import Favorites from "./pages/Favorites";
import Navbar from "./components/Navbar";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/recipe/:id" element={<RecipeDetails />} />
          <Route path="/favorites" element={<Favorites />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
