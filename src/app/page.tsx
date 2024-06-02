import Image from "next/image";
import Index from "./Screen/Index";
import NewArrivals from "./Screen/NewArrivals";
import Categories from "./Screen/Categories";
import ReadyForOrder from "./Screen/ReadyForOrder";
import Poster from "./Screen/Poster";
import FeaturedProducts from "./Screen/FeaturedProducts";
import FlashSale from "./Screen/FlashSale";

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
     <h1 className="text-3xl font-bold underline">
      Hello world!
    </h1>
    </div>
  );
}
