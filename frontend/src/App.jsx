import { useLocation, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Age from "./components/Age";
import Categories from "./components/Categories";
import Login from "./components/Login";
import Signup from "./components/Signup";
import Cart from "./components/Cart";
import Wishlist from "./components/Wishlist";
import "./App.css";

function App() {
  const location = useLocation();

  // Navbar hidden on these routes
  const hideNavbarPaths = [
    "/login",
    "/login/signup",
    "/categories",
    "/cart",
    "/wishlist",
    "/age" // hides navbar for /age AND /age/0-1, /age/6-12 etc.
  ];

  const shouldHideNavbar = hideNavbarPaths.some((path) =>
    location.pathname.toLowerCase().startsWith(path)
  );

  return (
    <>
      {!shouldHideNavbar && <Navbar />}

      <Routes>
        <Route path="/" element={<Home />} />

        {/* Age Routes (No Navbar) */}
        <Route path="/age" element={<Age />} />
        <Route path="/age/:range" element={<Age />} />

        {/* Other Pages */}
        <Route path="/categories" element={<Categories />} />
        <Route path="/login" element={<Login />} />
        <Route path="/login/signup" element={<Signup />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/wishlist" element={<Wishlist />} />
      </Routes>
    </>
  );
}

export default App;
