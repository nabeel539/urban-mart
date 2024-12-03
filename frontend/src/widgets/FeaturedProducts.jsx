import { assets } from "@/assets/assets";
import Title from "./Title";
import { useContext } from "react";
import { ShopContext } from "@/context/ShopContext";

const FeaturedProduct = () => {
  const { navigate } = useContext(ShopContext);
  return (
    <div className="my-10">
      <div className="text-start py-8 text-3xl">
        <Title text1={"Featured"} text2={"New Arrivals"} />
      </div>

      {/* Render products */}
      <div className="grid grid-cols-2 grid-rows-1 w-full gap-2">
        <div className="col-span-1">
          <img
            onClick={() =>
              navigate("/collection", { state: { category: "Gaming" } })
            }
            src={assets.featuredimg1}
            className="w-full h-full object-contain cursor-pointer"
          />
        </div>
        <div className="col-span-1 row-span-1 grid grid-cols-2 grid-rows-2 gap-2">
          <div className="col-span-2 row-span-1">
            <img
              onClick={() => navigate("/collection")}
              src={assets.featuredimg2}
              className="w-full h-full object-contain cursor-pointer"
            />
          </div>
          <div className="col-span-1 row-span-1">
            <img
              onClick={() => navigate("/collection")}
              src={assets.featuredimg3}
              className="w-full h-full object-contain cursor-pointer"
            />
          </div>
          <div className="col-span-1 row-span-1">
            <img
              onClick={() =>
                navigate("/collection", { state: { category: "Headphones" } })
              }
              src={assets.featuredimg4}
              className="w-full h-full object-contain cursor-pointer"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeaturedProduct;
