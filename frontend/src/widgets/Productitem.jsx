/* eslint-disable react/prop-types */
import { useState } from "react";
import { useContext } from "react";
import { ShopContext } from "../context/ShopContext";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet";
import { assets } from "@/assets/assets";
import { Link } from "react-router-dom";

const ProductItem = ({
  id,
  image,
  name,
  price,
  description,
  discountPrice,
  rating,
  reviews,
  discountPercentage,
}) => {
  const { currency, addToCart, getCartCount } = useContext(ShopContext);

  // State for managing the side sheet
  const [isSheetOpen, setIsSheetOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);

  // Function to handle product click
  const handleProductClick = () => {
    setSelectedProduct({
      id,
      image,
      name,
      price,
      discountPrice,
      rating,
      reviews,
      description,
    });
    setIsSheetOpen(true); // Open side sheet
  };

  return (
    <>
      {/* Product Card */}
      <div
        className="text-gray-700 cursor-pointer flex flex-col items-center"
        onClick={handleProductClick} // Open side sheet on click
      >
        {/* Image Section */}
        <div className="relative">
          <div className="overflow-hidden flex justify-start items-center">
            <img
              className="hover:scale-110 transition-all ease-in-out object-contain duration-500 w-full h-44"
              src={`http://localhost:4000${image}`}
              alt={name}
            />
          </div>
          {discountPercentage && (
            <p className="absolute top-0 right-0 bg-red-500 text-white text-[8px] p-2 rounded">
              {discountPercentage}
            </p>
          )}
        </div>

        {/* Product Info Section */}
        <div className="w-[100%] p-4">
          <p className="text-[14px] font-medium pb-2 text-start">{name}</p>

          {/* Price Section */}
          <div className="flex items-center gap-2">
            {discountPrice ? (
              <>
                <p className="text-sm font-medium text-red-500">
                  {currency}
                  {discountPrice}
                </p>
                <p className="text-xs text-gray-500 line-through">
                  {currency}
                  {price}
                </p>
              </>
            ) : (
              <p className="text-sm font-medium">
                {currency}
                {price}
              </p>
            )}
          </div>

          {/* Rating Section */}
          <p className="text-xs text-gray-500 mt-2 text-start">
            {rating} ⭐ (65)
          </p>
        </div>
      </div>

      {/* Side Sheet for Product Details */}
      <Sheet open={isSheetOpen} onOpenChange={setIsSheetOpen}>
        <SheetContent side="right" className="w-96">
          <SheetHeader>
            <SheetTitle>Product Details</SheetTitle>
            {selectedProduct && (
              <div className="p-4">
                <img
                  src={`http://localhost:4000${selectedProduct.image}`}
                  alt={selectedProduct.name}
                  className="w-full h-36 object-contain"
                />
                <h2 className="text-sm font-medium">{selectedProduct.name}</h2>
                <SheetDescription className="text-[12px] py-2">
                  {selectedProduct.description}
                </SheetDescription>
                <div className="flex gap-11 items-center mb-6">
                  <p className="text-[12px] text-black">
                    Price: {currency}
                    {selectedProduct.discountPrice || selectedProduct.price}
                  </p>
                  <SheetDescription className="text-[12px]">
                    {selectedProduct.rating} ⭐ (65 reviews)
                  </SheetDescription>
                </div>
                {/* <div className="flex flex-col gap-4">
                  {selectedProduct.reviews &&
                    selectedProduct.reviews.map((review, index) => (
                      <div
                        key={index}
                        className="border-b pb-4 flex flex-col items-start"
                      >
                        <p className="font-semibold">{review.user}</p>
                        <p>{review.comment}</p>
                        <p className="text-yellow-500">
                          ⭐ {review.rating} / 5
                        </p>
                      </div>
                    ))}
                </div> */}
                <div className="flex gap-4 items-center">
                  <button
                    onClick={() => addToCart(selectedProduct.id)}
                    className="bg-black text-white px-6 py-3 text-[12px] active:bg-gray-700 w-full"
                  >
                    ADD TO CART
                  </button>

                  <Link to={"/cart"} className="relative">
                    <img
                      src={assets.cart_icon}
                      className="w-8 min-w-5"
                      alt="Cart Icon"
                    />
                    <p className="absolute  left-5 top-0 w-4 text-center leading-4 bg-red-500 text-white aspect-square rounded-full text-[8px]">
                      {getCartCount()}
                    </p>
                  </Link>
                </div>
              </div>
            )}
          </SheetHeader>
        </SheetContent>
      </Sheet>
    </>
  );
};

export default ProductItem;
