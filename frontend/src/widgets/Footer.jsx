import { assets } from "@/assets/assets";
import { ShopContext } from "@/context/ShopContext";
import { useContext } from "react";
import NewslatterBox from "./Newslaterbox";

const Footer = () => {
  const { navigate } = useContext(ShopContext);
  return (
    <div className="bg-black text-white px-4 sm:px-8 lg:px-16">
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-3 gap-8 text-gray-700 xl:grid-cols-5">
        {/* Logo and Description */}
        <div>
          <img src={assets.appLogoDark} className="w-36 py-5" alt="Logo" />
          <NewslatterBox />
        </div>

        {/* Contact Information */}
        <div className="text-start text-white">
          <h3 className="text-lg font-bold my-4">Support</h3>
          <p className="text-[12px] mb-2">Chicago United States</p>
          <p className="text-[12px] mb-2">+88015-88888-9999</p>
          <p className="text-[12px] mb-2">contact@urbanmart.com</p>
        </div>
        <div className="text-start text-white">
          <h3 className="text-lg font-bold my-4">Account</h3>
          <p className="text-[12px] mb-2">My Account</p>
          <link to={"/login"} className="text-[12px] mb-2">
            Login / Register
          </link>
          <link to={"/cart"} className="text-[12px] mb-2">
            cart
          </link>
          <link to={"/collection"} className="text-[12px] mb-2">
            shop
          </link>
        </div>

        {/* Company Links */}
        <div className="text-start text-white">
          <h3 className="text-lg font-bold my-4">Quick Link</h3>
          <ul className="space-y-2 text-[12px] mb-2">
            <li>
              <button
                onClick={() => navigate("/")}
                className="hover:text-gray-400"
              >
                Home
              </button>
            </li>
            <li>
              <button
                onClick={() => navigate("/about")}
                className="hover:text-gray-400"
              >
                About Us
              </button>
            </li>
            <li>
              <a href="#" className="hover:text-gray-400">
                Delivery
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-gray-400">
                Privacy Policy
              </a>
              <a href="#" className="hover:text-gray-400">
                FAQ
              </a>
            </li>
          </ul>
        </div>
        <div>
          <h3 className="text-lg font-bold my-4 text-start text-white">
            Download App
          </h3>
          <img src={assets.footerCTA} className="w-36" />
        </div>
      </div>

      {/* Full-Width Horizontal Line and Copyright Information */}
      <div className="mt-12">
        <hr className="border-gray-200" />
        <p className="py-5 text-xs text-center text-white/40">
          &copy; Copyright UrbanMart 2024. All right reserved.
        </p>
      </div>
    </div>
  );
};

export default Footer;
