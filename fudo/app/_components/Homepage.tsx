import Image from "next/image";
import delivery from "../../assets/delivery-bike.png";
import Button from "./Button";
import Play from "../_components/Play";
import GoodGirl from "../../assets/header.png";

const Homepage = () => {
  return (
    <main className="mx-auto flex w-full flex-col-reverse items-center justify-center pt-10 lg:flex-row">
      <section>
        <div
          data-aos="fade-up"
          data-aos-delay="500"
          className="mx-auto mt-20 flex w-52 flex-row-reverse items-center justify-center gap-4 rounded-full bg-red-100 p-3 text-red-500 lg:m-0 lg:mb-10"
        >
          <Image
            src={delivery}
            quality={100}
            height={30}
            width={30}
            alt="Delivery"
          />
          <p>Mais que rápido</p>
        </div>
        <div>
          <h1
            data-aos="fade-up"
            data-aos-delay="800"
            className="mx-auto mt-10 max-w-80 text-2xl font-bold text-gray-800 lg:mt-0 lg:max-w-3xl lg:text-7xl"
          >
            Seja o Mais Rápido na Entrega de Sua{" "}
            <span className="text-primary">Comida</span>
          </h1>
          <p
            data-aos="fade-up"
            data-aos-delay="1200"
            className="mx-5 my-7 max-w-xl text-lg text-gray-500 lg:mx-0"
          >
            Nosso trabalho é encher sua barriga com comida deliciosa e com
            entrega rápida e gratuita.
          </p>
          <div
            data-aos="fade-up"
            data-aos-delay="1500"
            className="mx-auto flex items-center justify-center gap-5 lg:m-0 lg:justify-start lg:gap-10"
          >
            <Button className="">Fazer pedido</Button>
            <div className="flex items-center gap-3">
              <Play />
              <p className="cursor-pointer font-semibold text-gray-500 transition-all ease-in hover:text-primary">
                Assistir vídeo
              </p>
            </div>
          </div>
        </div>
      </section>
      <section data-aos="fade-left">
        <Image
          src={GoodGirl}
          width={600}
          height={600}
          quality={100}
          alt="Logo"
        />
      </section>
    </main>
  );
};

export default Homepage;
