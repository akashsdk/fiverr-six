import Image from "next/image";
import Index from "./Screen/Index";
import NewArrivals from "./Screen/NewArrivals";
import Categories from "./Screen/Categories";
import ReadyForOrder from "./Screen/ReadyForOrder";

export default function Home() {
  return (
    <div>
      <Index />
      <Categories />
      <NewArrivals />
      <ReadyForOrder />
     <h1 className="text-3xl font-bold underline">
      Hello world!
    </h1>
    </div>
  );
}
