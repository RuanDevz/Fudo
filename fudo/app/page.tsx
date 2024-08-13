import Image from "next/image";
import Homepage from "./_components/Homepage";
import Delivery from "./_components/Delivery";

export default function Home() {
  return (
    <div>
      <Homepage />
      <Delivery/>
    </div>
  );
}
