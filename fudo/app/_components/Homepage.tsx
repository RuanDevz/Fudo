import Image from "next/image";
import delivery from "../../assets/delivery-bike.png";
import Button from "./Button";
import Play from '../_components/Play'
import GoodGirl from '../../assets/header.png'

const Homepage = () => {
  return (
    <main className="mx-auto max-w-7xl flex items-center mt-10">
      <section>
        <div className="mt-20 flex w-52 flex-row-reverse items-center justify-center gap-4 rounded-full bg-red-100 p-3 text-red-500">
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
          <h1 className="mt-10 max-w-3xl text-7xl font-bold text-gray-800">
            Seja o mais rápido na entrega de sua{" "}
            <span className="text-primary">comida</span>
          </h1>
          <p className="my-7 max-w-xl text-lg text-gray-500">
            Nosso trabalho é encher sua barriga com comida deliciosa e com
            entrega rápida e gratuita.
          </p>
          <div className="flex items-center gap-10">
            <Button className="">Fazer pedido</Button>
            <div className="flex items-center gap-3">
              <Play/>
              <p className="text-gray-500 font-semibold hover:text-primary cursor-pointer transition-all ease-in ">Assistir vídeo</p>
            </div>
          </div>
        </div>
      </section>
      <section>
        <Image src={GoodGirl} width={600} height={600} quality={100} alt="Logo"/>
      </section>
    </main>
  );
};

export default Homepage;
