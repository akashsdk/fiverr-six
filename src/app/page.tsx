import Image from "next/image";
import Index from "./Screen/Index";

export default function Home() {
  return (
    <div>
      <Index />
     <h1 className="text-3xl font-bold underline">
      Hello world!
    </h1>
    </div>
  );
}
