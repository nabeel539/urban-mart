import { assets } from "../assets/assets";
import Title from "../widgets/Title";

const Contact = () => {
  return (
    <div>
      <div className="text-start text-2xl pt-10 border-t">
        <Title text1={"Contact Us"} text2={"Contact Us"} />
      </div>
      <div className="my-10 flex flex-col justify-between items-center md:flex-row gap-10 mb-28">
        <div className="flex flex-col justify-center items-start gap-6">
          <p className="font-semibold text-2xl">Our Store</p>
          <div className="flex flex-col gap-4 border-black">
            <div className="flex gap-4 items-center">
              <img src={assets.phoneIcon} className="" />
              <p className="text-lg font-semibold">Call to Us</p>
            </div>
            <p className="text-[12px] text-start">
              We are available 24/7, 7 days a week.
            </p>
            <p className="text-[12px] text-start">Phone: +8801611112222</p>
          </div>
          <hr className="w-full border-none h-[1px] bg-black" />
          <div className="flex flex-col gap-4 border-black">
            <div className="flex gap-4 items-center">
              <img src={assets.mailIcon} className="" />
              <p className="text-lg font-semibold">Write to Us</p>
            </div>
            <p className="text-[12px] text-start">
              Fill out our form and we will contact you within 24 hours.
            </p>
            <p className="text-[12px] text-start">
              Emails: customer@exclusive.com
            </p>
            <p className="text-[12px] text-start">
              Emails: support@exclusive.com
            </p>
          </div>
        </div>
        <img
          className="w-full md:max-w-[480px]"
          src={assets.contact_img}
          alt=""
        />
      </div>
    </div>
  );
};

export default Contact;
