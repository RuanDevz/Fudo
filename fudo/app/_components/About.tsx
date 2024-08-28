import React from "react";
import chef from "../../assets/client.png";
import Image from "next/image";
import Subtext from "./Subtext";
import User from "../../assets/user.jpg";

const About = () => {
  return (
    <main className="mx-auto mt-52 flex max-w-7xl flex-col items-start justify-center lg:flex-row">
      <section>
        <Image width={2200} height={2200} src={chef} quality={100} alt="Chef" />
      </section>
      <section>
        <div className="mx-auto text-center mt-5 lg:m-0">
          <Subtext>O QUE ELES DIZEM</Subtext>
        </div>
        <h1 className="mb-20 mt-5 text-2xl lg:text-5xl max-w-80 lg:max-w-3xl font-bold text-gray-900 mx-auto">
          O Que Nossos Clientes Dizem Sobre Nós
        </h1>
        <p className="text-xl font-medium text-gray-500 mx-5 ml-9">
          O Fudo é simplesmente extraordinário! A variedade e a delícia de suas
          refeições são inigualáveis, oferecendo algo para todos os paladares. O
          que diferencia o Fudo é seu serviço excepcional. A entrega é
          impressionantemente rápida, garantindo que sua comida chegue quente e
          fresca.
        </p>
        <div className="mt-10 flex items-center gap-5 justify-center lg:justify-start">
          <Image
            className="rounded-full"
            width={60}
            height={60}
            src={User}
            alt="user"
          />
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
