import Image from "next/image";
import Index from "./Screen/Index";
import NewArrivals from "./Screen/NewArrivals";
import Categories from "./Screen/Categories";
import ReadyForOrder from "./Screen/ReadyForOrder";
import Poster from "./Screen/Poster";
import FeaturedProducts from "./Screen/FeaturedProducts";
import FlashSale from "./Screen/FlashSale";
import TopBrandProducts from "./Screen/TopBrandProducts";
import ShopByCategories from "./Screen/ShopByCategories";
import FashionTrends from "./Screen/FashionTrends";
import About from "./about/page";
import Contact from "./contact/page";




export default function Home() {
  return (
    <div>
      <Index />
      <Categories />
      <NewArrivals />
      <ReadyForOrder />
      <Poster />
      <FeaturedProducts />
      <FlashSale />
      <TopBrandProducts />
      <ShopByCategories />
      <FashionTrends />
      <Contact />
      <About />

      
    </div>
  );
}
