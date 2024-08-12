import Image from "next/image";
import delivery from "../../assets/delivery-bike.png";

const Homepage = () => {
  return (
    <main className="mx-auto max-w-7xl">
      <section>
        <div className="bg-red-100 text-red-500 mt-20 flex w-52 flex-row-reverse items-center justify-center gap-4 rounded-full p-3">
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
          <h1 className="text-gray-600 font-bold text-6xl max-w-lg mt-10">
            Seja o mais rápido na entrega de sua <span className="text-[#F44648]">comida</span>
          </h1>
        </div>
      </section>
      <section></section>
    </main>
  );
};

export default Homepage;
