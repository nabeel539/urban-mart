import { assets } from "../assets/assets";

const Ourpolicy = () => {
  return (
    <div className="flex flex-col sm:flex-row justify-around gap-12 sm:gap-2 text-center py-20 text-xs sm:text-sm md:text-base text-gray-700">
      <div>
        <img
          src={assets.truck_icon}
          alt="Exchange Policy"
          className="w-12 m-auto mb-5"
        />
        <p className="font-semibold text-[18px]">FREE AND FAST DELIVERY</p>
        <p className="text-[10px] font-normal">
          Free delivery for all orders over $140
        </p>
      </div>

      <div>
        <img
          src={assets.support_img}
          alt="Customer Support"
          className="w-12 m-auto mb-5"
        />
        <p className="font-semibold text-[18px]">24/7 CUSTOMER SERVICE</p>
        <p className="text-[10px] font-normal">
          Friendly 24/7 customer support
        </p>
      </div>
      <div>
        <img
          src={assets.quality_icon}
          alt="Return Policy"
          className="w-12 m-auto mb-5"
        />
        <p className="font-semibold text-[18px]">MONEY BACK GUARANTEE</p>
        <p className="text-[10px] font-normal">We reurn money within 30 days</p>
      </div>
    </div>
  );
};

export default Ourpolicy;
