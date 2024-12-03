import { useContext, useEffect, useState } from "react";
import Title from "./Title";
import Productitem from "./Productitem";
import { ShopContext } from "@/context/ShopContext";
import Timer from "./Timer";

const Latestcollection = () => {
  const { products } = useContext(ShopContext);
  const [latestproduct, setLatestproduct] = useState([]);

  useEffect(() => {
    setLatestproduct(products.slice(0, 10));
  }, [products]);

  return (
    <div className="my-10">
      <div className="flex gap-28 items-center">
        <div className="py-8 text-3xl text-start">
          <Title text1={"Today's"} text2={"Flash Sales"} />
        </div>
        <Timer />
      </div>

      {/* Render products */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-4 gap-4 gap-y-6">
        {latestproduct.map((item, index) => (
          <Productitem
            key={index}
            id={item._id}
            image={item.image}
            name={item.name}
            description={item.description}
            price={item.price}
            discountPrice={item.discountPrice}
            discountPercentage={item.discountPercentage}
            inStock={item.inStock}
            rating={item.rating}
            reviews={item.reviews}
            freeShipping={item.freeShipping}
          />
        ))}
      </div>
    </div>
  );
};

export default Latestcollection;
