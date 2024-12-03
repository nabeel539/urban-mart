import { NavLink } from "react-router-dom";
import { assets } from "../assets/assets";

function Hero() {
  return (
    <NavLink to={"/collection"}>
      <div className="border border-gray-400">
        <img className="w-full" src={assets.image_banner} alt="" />
      </div>
    </NavLink>
  );
}

export default Hero;
