import Image from "next/image";
import Index from "./Screen/Index";
import NewArrivals from "./Screen/NewArrivals";

export default function Home() {
  return (
    <div>
      <Index />
      <NewArrivals />
     <h1 className="text-3xl font-bold underline">
      Hello world!
    </h1>
    </div>
  );
}
