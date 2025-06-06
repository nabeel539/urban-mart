import { useContext } from "react";
import Title from "./Title";
import { assets } from "@/assets/assets";
import { ShopContext } from "@/context/ShopContext";

const ShopByCategory = () => {
  const { navigate } = useContext(ShopContext);

  const handleCategoryClick = (category) => {
    navigate("/collection", { state: { category } }); // Navigate to the Collection page
  };

  const categories = [
    {
      title: "Watch",
      icon: assets.catSmartWatch,
    },
    {
      title: "Phone",
      icon: assets.catSmartPhone,
    },
    {
      title: "Computer",
      icon: assets.catComputer,
    },
    {
      title: "Headphones",
      icon: assets.catHeadphone,
    },
    {
      title: "Gaming",
      icon: assets.catGaming,
    },
  ];

  return (
    <div className="my-10">
      <div className="py-8 text-3xl text-start">
        <Title text1={"Categores"} text2={"Shop By Category"} />
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-5 gap-7 p-2">
        {categories.map((category, index) => (
          <div
            onClick={() => handleCategoryClick(category.title)}
            key={index}
            className="flex flex-col items-center p-4 rounded-lg shadow-md hover:shadow-sm transition border border-black/80 cursor-pointer"
          >
            <img
              src={category.icon}
              alt={category.title}
              className="w-6 h-6 mb-2"
            />
            <p className="text-[14px] font-normal">{category.title}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ShopByCategory;
