import { Routes, Route } from "react-router-dom";
import "./App.css";
import Navbar from "./widgets/Navbar";
import SearchBar from "./widgets/SearchBar";
import Home from "./screens/Home";
import Collection from "./screens/Collection";
import About from "./screens/About";
import Contact from "./screens/Contact";
import Product from "./screens/Product";
import Cart from "./screens/Cart";
import Login from "./screens/Login";
import Footer from "./widgets/Footer";
import Placeorder from "./screens/Placeorder";
import Orders from "./screens/Orders";
import Verify from "./screens/Verify";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Profile from "./screens/Profile";

function App() {
  return (
    <>
      <div className="">
        <ToastContainer />
        {/* <div className="w-full h-9 bg-black text-white text-xs flex items-center gap-2 justify-center">
          Summer Sale For All Accessories And Free Express Delivery - OFF 50%!{" "}
          <span className="underline cursor-pointer">Shop now!</span>
        </div> */}
        <div className="w-full h-9 bg-black text-white text-xs flex items-center gap-2 overflow-hidden">
          <div className="animate-scroll whitespace-nowrap">
            Summer Sale For All Accessories And Free Express Delivery - OFF 50%!{" "}
            {/* <span className="underline cursor-pointer">Shop now!</span> */}
          </div>
        </div>
        <div className="px-4 sm:px-[4vw] md:px-[7vw] lg:px-[9vw]">
          <Navbar />
          <SearchBar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/collection" element={<Collection />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/product/:productId" element={<Product />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/login" element={<Login />} />
            <Route path="/place-order" element={<Placeorder />} />
            <Route path="/orders" element={<Orders />} />
            <Route path="/verify" element={<Verify />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </>
  );
}

export default App;
