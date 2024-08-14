import React from "react";
import chef from "../../assets/client.png";
import Image from "next/image";
import Subtext from "./Subtext";
import User from "../../assets/user.jpg";

const About = () => {
  return (
    <main className="mx-auto mt-52 flex max-w-7xl items-start justify-center">
      <section>
        <Image width={2200} height={2200} src={chef} quality={100} alt="Chef" />
      </section>
      <section>
        <Subtext>O QUE ELES DIZEM</Subtext>
        <h1 className="mb-20 mt-5 text-6xl font-bold text-gray-900">
          O Que Nossos Clientes Dizem Sobre Nós
        </h1>
        <p className="text-xl font-medium text-gray-500">
          O Fudo é simplesmente extraordinário! A variedade e a delícia de suas
          refeições são inigualáveis, oferecendo algo para todos os paladares. O
          que diferencia o Fudo é seu serviço excepcional. A entrega é
          impressionantemente rápida, garantindo que sua comida chegue quente e
          fresca.
        </p>
        <div className="flex items-center gap-5 mt-10">
          <Image className="rounded-full" width={60} height={60} src={User} alt="user" />
          <div className="my-3">
            <h1 className="font-bold text-gray-950">Theresa Jordan</h1>
            <p className="font-semibold text-gray-500">Entusiasta em comida</p>
          </div>
        </div>
      </section>
    </main>
  );
};

export default About;
