import Image from "next/image";
import Homepage from "./_components/Homepage";
import Delivery from "./_components/Delivery";
import List from "./_components/List";

export default function Home() {
  return (
    <div>
      <Homepage />
      <Delivery/>
      <List/>
    </div>
  );
}
