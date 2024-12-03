import { useContext, useState, useEffect } from "react";
import { ShopContext } from "../context/ShopContext";
import ProductItem from "../widgets/Productitem";
import Title from "../widgets/Title";
import { useLocation } from "react-router-dom";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet";
import { assets } from "@/assets/assets";

const Collection = () => {
  const { products, showSearch, search } = useContext(ShopContext);

  const location = useLocation();
  const [isSheetOpen, setIsSheetOpen] = useState(false); // For the ShadCN filter sheet
  const [filterProducts, setFilterProducts] = useState([]);
  const [category, setCategory] = useState(
    location.state?.category ? [location.state.category] : [] // Initialize category from state
  );
  const [sortType, setSortType] = useState("relevant");

  const toggleCategory = (e) => {
    if (category.includes(e.target.value)) {
      setCategory((prev) => prev.filter((item) => item !== e.target.value));
    } else {
      setCategory((prev) => [...prev, e.target.value]);
    }
  };

  const applyFilter = () => {
    let productscopy = [...products];

    if (search) {
      productscopy = productscopy.filter((item) =>
        item.name.toLowerCase().includes(search.toLowerCase())
      );
    }
    if (category.length > 0) {
      productscopy = productscopy.filter((item) =>
        category.includes(item.category)
      );
    }
    setFilterProducts(productscopy);
    setIsSheetOpen(false); // Close the sheet after applying filters
  };

  const sortProduct = () => {
    let filterProductsCopy = filterProducts.slice();

    switch (sortType) {
      case "low-high":
        setFilterProducts(filterProductsCopy.sort((a, b) => a.price - b.price));
        break;

      case "high-low":
        setFilterProducts(filterProductsCopy.sort((a, b) => b.price - a.price));
        break;
      default:
        applyFilter();
    }
  };

  useEffect(() => {
    setFilterProducts(products);
  }, [products]);

  useEffect(() => {
    sortProduct();
  }, [sortType]);

  useEffect(() => {
    applyFilter();
  }, [category, search, showSearch, products]);

  return (
    <div className="flex flex-col sm:flex-row gap-1 sm:gap-10 py-10 border-t">
      {/* Product List */}
      <div className="flex-grow">
        <div className="flex justify-between text-base sm:text-2xl mb-4">
          <Title text1={"All Collections"} text2={"Explore Products"} />
          {/* Product Sort */}
          <select
            onChange={(e) => setSortType(e.target.value)}
            className="border border-gray-300 text-[12px] px-2 py-2 h-[fit-content] "
          >
            <option value="relevant">Sort by: Popularity</option>
            <option value="low-high">Sort by: Low To High</option>
            <option value="high-low">Sort by: High To Low</option>
          </select>
        </div>
        {/* Map products */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {filterProducts.length > 0 ? (
            filterProducts.map((item) => (
              <ProductItem
                key={item._id}
                name={item.name}
                id={item._id}
                price={item.price}
                image={item.image}
                discountPercentage={item.discountPercentage}
                discountPrice={item.discountPrice}
                rating={item.rating}
              />
            ))
          ) : (
            <p>No products available</p>
          )}
        </div>
      </div>
      {/* Filter Button */}
      <button
        onClick={() => setIsSheetOpen(true)}
        className="fixed bottom-5 right-5 bg-red-500 text-[12px] text-black px-4 py-2 rounded shadow-md flex gap-4"
      >
        Filter <img src={assets.filterIcon} alt="filter" className="w-4" />
      </button>

      {/* Filter Sheet using ShadCN */}
      <Sheet open={isSheetOpen} onOpenChange={setIsSheetOpen}>
        <SheetContent side="right" className="w-96">
          <SheetHeader>
            <SheetTitle>Filter Options</SheetTitle>
          </SheetHeader>
          <div className="flex flex-col gap-2 mt-4 text-sm font-light text-gray-700">
            <p className="font-medium mb-2">Categories</p>
            {["Watch", "Phone", "Computer", "Headphones", "Gaming"].map(
              (item) => (
                <label key={item} className="flex gap-2 items-center">
                  <input
                    type="checkbox"
                    value={item}
                    onChange={toggleCategory}
                    checked={category.includes(item)} // Preserve selection
                  />
                  {item}
                </label>
              )
            )}
          </div>
          <button
            onClick={applyFilter}
            className="mt-6 w-full text-[12px] bg-red-500 hover:bg-red-600 text-white py-2 rounded"
          >
            Apply Filter
          </button>
        </SheetContent>
      </Sheet>
    </div>
  );
};

export default Collection;
