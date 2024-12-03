/* eslint-disable no-unused-vars */
import { useContext, useEffect, useState } from "react";
import { ShopContext } from "../context/ShopContext";
import Title from "../widgets/Title";
import { assets } from "../assets/assets";
import CartTotal from "../widgets/CartTotal";
import { NavLink } from "react-router-dom";

const Cart = () => {
  const { products, currency, cartItems, updateQuantity, navigate } =
    useContext(ShopContext);
  const [cartData, setCartData] = useState([]);

  useEffect(() => {
    console.log("Cart Items:", cartItems);
    if (products.length > 0) {
      const tempData = [];
      for (const itemId in cartItems) {
        if (cartItems[itemId] > 0) {
          tempData.push({
            _id: itemId,
            quantity: cartItems[itemId],
          });
        }
      }
      setCartData(tempData);
    }
  }, [cartItems, products]);

  return (
    // <div className="border-t pt-14">
    //   <div className="text-2xl mb-3 text-start">
    //     <Title text1={"Cart"} text2={"Your Cart"} />
    //   </div>
    //   <div>
    //     {/* Check if cartData is empty and display an image */}
    //     {cartData.length === 0 ? (
    //       <div className="text-center text-2xl">
    //         <img
    //           src={assets.emptyCart} // Replace with the actual image path
    //           alt="Empty Cart"
    //           className="mx-auto w-56 object-contain"
    //         />
    //         <NavLink to={"/"}>
    //           <button className="mt-4 bg-red-500 rounded text-[12px] text-white py-2 px-6">
    //             Return to shop
    //           </button>
    //         </NavLink>
    //       </div>
    //     ) : (
    //       cartData.map((item, index) => {
    //         const productData = products.find(
    //           (product) => product._id === item._id
    //         );

    //         return (
    //           <>
    //             <div className="bg-gray-100 py-4">
    //               <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-[3fr_2fr_2fr_2fr] items-center gap-4 text-sm sm:text-base font-medium">
    //                 <div className="text-left">Product</div>
    //                 <div className="text-right">Quantity</div>
    //                 <div className="text-right">Price</div>
    //                 <div className="text-right">Actions</div>
    //               </div>
    //             </div>

    //             <div
    //               key={index}
    //               className="px-12 py-1 border-t border-b text-gray-700 grid grid-cols-[3fr_2fr_2fr_2fr] items-center gap-4"
    //             >
    //               <div className="flex items-center gap-6">
    //                 <img
    //                   className="w-[40px] "
    //                   src={`http://localhost:4000${productData.image}`}
    //                   alt="product"
    //                 />
    //                 <div>
    //                   <p className="text-[12px] sm:text-[14px] font-medium">
    //                     {productData.name}
    //                   </p>
    //                   <div className="flex items-center gap-5 mt-2 text-[12px]">
    //                     <p>
    //                       {currency}
    //                       {productData.price}
    //                     </p>
    //                     <input
    //                       onChange={(e) =>
    //                         e.target.value === "" || e.target.value === "0"
    //                           ? null
    //                           : updateQuantity(item._id, Number(e.target.value))
    //                       }
    //                       className="border max-w-5 sm:max-w-20 px-1 sm:px-2 py-3"
    //                       type="number"
    //                       min={1}
    //                       defaultValue={item.quantity}
    //                     />
    //                   </div>
    //                 </div>
    //               </div>
    //               <div className="text-end">
    //                 <p className="text-[12px]  font-medium">{item.quantity}</p>
    //               </div>
    //               <div className="text-end">
    //                 <p className="text-[12px] font-medium">
    //                   {currency}
    //                   {(productData.price * item.quantity).toFixed(2)}
    //                 </p>
    //               </div>
    //               <div className="flex justify-end">
    //                 <img
    //                   onClick={() => updateQuantity(item._id, 0)}
    //                   src={assets.bin_icon}
    //                   className="w-4 sm:w-5 cursor-pointer"
    //                   alt="delete-icon"
    //                 />
    //               </div>
    //             </div>
    //           </>
    //         );
    //       })
    //     )}
    //   </div>
    //   <div className="flex justify-end my-20">
    //     <div className="w-full sm:w-[450px] border border-black rounded p-5">
    //       <CartTotal />
    //       <div className="w-full text-center">
    //         <button
    //           onClick={() => navigate("/place-order")}
    //           className=" bg-red-500 rounded text-[12px] text-white py-2 px-6 mt-8"
    //         >
    //           PROCEED TO CHECKOUT
    //         </button>
    //       </div>
    //     </div>
    //   </div>
    // </div>
    <div className="border-t pt-14">
      <div className="text-2xl mb-3 text-start">
        <Title text1={"Cart"} text2={"Your Cart"} />
      </div>

      {/* Header */}
      {cartData.length === 0 ? null : (
        <div className="bg-gray-100 py-4">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-[3fr_2fr_2fr_2fr] items-center gap-4 text-sm sm:text-base font-medium">
            <div className="text-left">Product</div>
            <div className="text-right">Quantity</div>
            <div className="text-right">Price</div>
            <div className="text-right">Actions</div>
          </div>
        </div>
      )}

      {/* Cart Items */}
      <div>
        {cartData.length === 0 ? (
          <div className="text-center text-2xl">
            <img
              src={assets.emptyCart} // Replace with the actual image path
              alt="Empty Cart"
              className="mx-auto w-56 object-contain"
            />
            <NavLink to={"/"}>
              <button className="mt-4 bg-red-500 rounded text-[12px] text-white py-2 px-6">
                Return to shop
              </button>
            </NavLink>
          </div>
        ) : (
          cartData.map((item, index) => {
            const productData = products.find(
              (product) => product._id === item._id
            );

            return (
              <div
                key={index}
                className="px-12 py-1 border-t border-b text-gray-700 grid grid-cols-[3fr_2fr_2fr_2fr] items-center gap-4"
              >
                <div className="flex items-center gap-6">
                  <img
                    className="w-[40px] "
                    src={`http://localhost:4000${productData.image}`}
                    alt="product"
                  />
                  <div>
                    <p className="text-[12px] sm:text-[14px] font-medium">
                      {productData.name}
                    </p>
                    <div className="flex items-center gap-5 mt-2 text-[12px]">
                      <p>
                        {currency}
                        {productData.price}
                      </p>
                      <input
                        onChange={(e) =>
                          e.target.value === "" || e.target.value === "0"
                            ? null
                            : updateQuantity(item._id, Number(e.target.value))
                        }
                        className="border max-w-5 sm:max-w-20 px-1 sm:px-2 py-3"
                        type="number"
                        min={1}
                        defaultValue={item.quantity}
                      />
                    </div>
                  </div>
                </div>
                <div className="text-end">
                  <p className="text-[12px] font-medium">{item.quantity}</p>
                </div>
                <div className="text-end">
                  <p className="text-[12px] font-medium">
                    {currency}
                    {(productData.price * item.quantity).toFixed(2)}
                  </p>
                </div>
                <div className="flex justify-end">
                  <img
                    onClick={() => updateQuantity(item._id, 0)}
                    src={assets.bin_icon}
                    className="w-4 sm:w-5 cursor-pointer"
                    alt="delete-icon"
                  />
                </div>
              </div>
            );
          })
        )}
      </div>

      <div className="flex justify-end my-20">
        <div className="w-full sm:w-[450px] border border-black rounded p-5">
          <CartTotal />
          <div className="w-full text-center">
            <button
              onClick={() => navigate("/place-order")}
              className=" bg-red-500 rounded text-[12px] text-white py-2 px-6 mt-8"
            >
              PROCEED TO CHECKOUT
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
