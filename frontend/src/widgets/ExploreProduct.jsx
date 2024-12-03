import { useContext, useState, useEffect } from "react";
import { ShopContext } from "../context/ShopContext";
import Title from "./Title"; // Assuming you have a Title component
import Productitem from "./Productitem"; // Assuming you have a Productitem component
import { useNavigate } from "react-router-dom";

const ExploreProduct = () => {
  const { products } = useContext(ShopContext);
  const [bestseller, setBestseller] = useState([]);

  const navigate = useNavigate();

  useEffect(() => {
    setBestseller(products.slice(0, 4));
  }, [products]);

  return (
    <div className="my-10">
      <div className="flex justify-between">
        <div className="text-start py-8 text-3xl mb-4">
          <Title text1={"This month"} text2={"Best Selling Products"} />
        </div>
        <button
          onClick={() => navigate("/collection")}
          className="bg-red-500 text-white text-[12px] rounded px-4 py-2 items-center my-auto font-normal"
        >
          View All
        </button>
      </div>

      {/* Render products */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-4 gap-4 gap-y-6">
        {bestseller.map((item, index) => (
          <Productitem
            key={index}
            id={item.id}
            image={item.image}
            name={item.name}
            description={item.description}
            price={item.price}
            rating={item.rating}
            discountPercentage={item.discountPercentage}
            discountPrice={item.discountPrice}
          />
        ))}
      </div>
    </div>
  );
};

export default ExploreProduct;
