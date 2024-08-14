import Image from "next/image";
import OrderImage from "../../assets/service-1.png"; 
import DeliveryImage from "../../assets/service-2.png"; 
import QualityImage from "../../assets/service-3.png"; 
import Subtext from "./Subtext";

const Delivery = () => {
  return (
    <div className="mx-auto max-w-7xl">
      <section className="mt-56 flex flex-col items-center flex-wrap justify-center">
        <Subtext>O QUE SERVIMOS</Subtext>
        <h1 className="mt-5 max-w-3xl text-center text-5xl font-bold text-gray-800 leading-normal">
          Seu Parceiro De Entrega De Comida Favorito
        </h1>
      </section>
      <section className="mt-20 flex items-center justify-between">
        <div className="max-w-80">
          <Image width={270} height={270} src={OrderImage} alt="Order" />
          <h1 className="text-center text-2xl font-bold text-gray-800">
            Fácil de pedir
          </h1>
          <p className="mt-3 text-center text-gray-500">
            Você só precisa de alguns passos para pedir comida
          </p>
        </div>
        <div className="max-w-80">
          <Image width={270} height={270} src={DeliveryImage} alt="Delivery" />
          <h1 className="text-center text-2xl font-bold text-gray-800">
            Entrega mais rápida
          </h1>
          <p className="mt-3 text-center text-gray-500">
            Entrega sempre pontual e ainda mais rápida
          </p>
        </div>
        <div className="max-w-80">
          <Image width={270} height={270} src={QualityImage} alt="Quality" />
          <h1 className="text-center text-2xl font-bold text-gray-800">
            Melhor qualidade
          </h1>
          <p className="mt-3 text-center text-gray-500">
            Não só a rapidez para nós é a qualidade também é número um
          </p>
        </div>
      </section>
    </div>
  );
};

export default Delivery;
