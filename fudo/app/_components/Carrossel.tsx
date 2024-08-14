import Image from "next/image";
import pizza1 from "../../assets/menu-1.jpg";
import pizza2 from "../../assets/menu-2.jpg";
import pizza3 from "../../assets/menu-3.jpg";
import pizza4 from "../../assets/menu-4.jpg";
import pizza5 from "../../assets/menu-5.jpg";
import pizza6 from "../../assets/menu-6.jpg";
import Button from "./Button";

const Carrossel = () => {
  const ListProducts = [
    {
      src: pizza1,
      name: "Pizza Italiana",
      price: 20.99,
    },
    {
      src: pizza2,
      name: "Enrolado de burrito",
      price: 4.49,
    },
    {
      src: pizza3,
      name: "Macarrão vermelho souse",
      price: 14.99,
    },
    {
      src: pizza4,
      name: "Pizza fresca",
      price: 25.99,
    },
    {
      src: pizza5,
      name: "Dum biryani",
      price: 34.99,
    },
    {
      src: pizza6,
      name: "Dum biryani",
      price: 23.99,
    },
  ];

  return (
    <div className="flex max-w-7xl flex-wrap justify-between">
      {ListProducts.map((product, index) => (
        <div className="relative rounded-2xl p-5 shadow-2xl" key={index}>
          <Image
            className="rounded-2xl"
            src={product.src}
            quality={100}
            width={300}
            height={300}
            alt={product.name}
          />
          <div className="flex justify-center items-center flex-col">
            <h1 className="mt-4 text-center text-lg font-semibold">
              {product.name}
            </h1>
            <p className="my-4 text-gray-800 font-semibold">R$ {product.price}</p>
            <Button>Comprar agora</Button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Carrossel;
