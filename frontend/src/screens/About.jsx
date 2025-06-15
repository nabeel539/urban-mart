import Title from "../widgets/Title";
import { assets } from "../assets/assets";
import Ourpolicy from "@/widgets/Ourpolicy";
const About = () => {
  return (
    <>
      <div className="text-2xl text-start pt-8 border-t">
        <Title text1={"About Us"} text2={"About Us"} />
      </div>
      <div className="my-10 flex flex-col md:flex-row gap-16">
        <div className="flex flex-col justify-center gap-4 md:w-2/4 text-[12px]  text-start">
          <p className="text-3xl font-semibold ">Our Story</p>
          <p>
            Launced in 2015, Exclusive is South Asia’s premier online shopping
            makterplace with an active presense in Bangladesh. Supported by wide
            range of tailored marketing, data and service solutions, Exclusive
            has 10,500 sallers and 300 brands and serves 3 millioons customers
            across the region.
          </p>
          <p>
            Exclusive has more than 1 Million products to offer, growing at a
            very fast. Exclusive offers a diverse assotment in categories
            ranging from consumer.
          </p>
        </div>
        <img
          className="w-full md:w-2/5 my-auto "
          src={assets.about_img}
          alt=""
        />
      </div>
      <div className="text-xl py-4 text-start">
        <Title text1={"Our Mission"} text2={"WHY CHOOSE US"} />
      </div>
      {/* <div className="flex flex-col md:flex-row my-20 gap-3">
        <img src={assets.card1} className="w-[250px] h-[220px]" />
        <img src={assets.card2} className="w-[250px] h-[220px]" />
        <img src={assets.card3} className="w-[250px] h-[220px]" />
        <img src={assets.card4} className="w-[250px] h-[220px]" />
      </div> */}
      <div className="flex flex-wrap justify-center gap-x-16 my-20">
        {[assets.card1, assets.card2, assets.card3, assets.card4].map(
          (card, index) => (
            <img
              key={index}
              src={card}
              className="w-[250px] cursor-pointer h-[220px] object-contain rounded-sm transition-transform duration-300 hover:scale-105 hover:shadow-sm"
              alt={`card-${index}`}
            />
          )
        )}
      </div>

      <div>
        <Ourpolicy />
      </div>
    </>
  );
};

export default About;
