import FeaturedProduct from "@/widgets/FeaturedProducts";
import Hero from "../widgets/Hero";
import Latestcollection from "../widgets/Latestcollection";
import Ourpolicy from "../widgets/Ourpolicy";
import ShopByCategory from "@/widgets/ShopByCategory";
import ExploreProduct from "@/widgets/ExploreProduct";

const Home = () => {
  return (
    <>
      <Hero />
      <Latestcollection />
      <ShopByCategory />
      <ExploreProduct />
      <FeaturedProduct />
      <Ourpolicy />
    </>
  );
};
export default Home;
