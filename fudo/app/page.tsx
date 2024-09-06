'use client'
import Homepage from "./_components/Homepage";
import Delivery from "./_components/Delivery";
import List from "./_components/List";
import About from "./_components/About";
import Header from "./_components/Header";
import GetStarted from "./_components/GetStarted";
import Footer from "./_components/Footer";
import aos from 'aos'
import 'aos/dist/aos.css';
import { useEffect } from "react";

export default function Home() {

  useEffect(() =>{
    aos.init({duration: 1000})
  },[])
  return (
    <div>
      <div className="color">
        <Header />
        <Homepage />
      </div>
      <Delivery />
      <List />
      <About />
      <GetStarted />
      <Footer/>
    </div>
  );
}
