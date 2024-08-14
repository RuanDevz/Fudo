import Image from "next/image";
import Homepage from "./_components/Homepage";
import Delivery from "./_components/Delivery";
import List from "./_components/List";
import About from "./_components/About";
import Header from "./_components/Header";

export default function Home() {
  return (
    <div>
<div className="color">
<Header/>
<Homepage />
</div>
      <Delivery/>
      <List/>
      <About/>
    </div>
  );
}
