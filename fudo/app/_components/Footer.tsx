import Image from "next/image";
import logo from "../../assets/logo.png";
import { Facebook, Instagram, X } from "lucide-react";

const Footer = () => {
  return (
    <footer className="mx-auto flex max-w-7xl py-10">
      {/* Seção com logo e informações */}
      <section className="flex-1 flex flex-col items-start">
        <div className="flex items-center gap-3 mb-4">
          <Image width={50} height={50} src={logo} alt="Logo" quality={100} />
          <h1 className="text-2xl font-bold text-gray-900">Fudo</h1>
        </div>
        <p className="max-w-96 py-3 font-medium text-gray-500">
          Nosso trabalho é encher sua barriga com comida deliciosa e com entrega
          rápida e gratuita.
        </p>
        <div className="flex items-center gap-3 mt-4">
          <Instagram />
          <Facebook />
          <X />
        </div>
      </section>
      <section className="flex-1 gap-40 flex justify-end space-x-8">
        <div>
          <h1 className="text-2xl font-semibold mb-7">Sobre</h1>
          <ul className="space-y-2 flex flex-col gap-2">
            <li className="text-gray-500 font-medium cursor-pointer transition-colors duration-300 ease-in-out hover:text-primary ">Sobre Nós</li>
            <li className="text-gray-500 font-medium cursor-pointer transition-colors duration-300 ease-in-out hover:text-primary ">Características</li>
            <li className="text-gray-500 font-medium cursor-pointer transition-colors duration-300 ease-in-out hover:text-primary ">Notícias</li>
            <li className="text-gray-500 font-medium cursor-pointer transition-colors duration-300 ease-in-out hover:text-primary ">Cardápio</li>
          </ul>
        </div>
        <div>
          <h1 className="text-2xl font-semibold mb-7">Empresa</h1>
          <ul className="space-y-2">
            <li className="text-gray-500 font-medium cursor-pointer transition-colors duration-300 ease-in-out hover:text-primary ">Por que Fudo?</li>
            <li className="text-gray-500 font-medium cursor-pointer transition-colors duration-300 ease-in-out hover:text-primary ">Seja nosso parceiro</li>
            <li className="text-gray-500 font-medium cursor-pointer transition-colors duration-300 ease-in-out hover:text-primary ">FAQ</li>
            <li className="text-gray-500 font-medium cursor-pointer transition-colors duration-300 ease-in-out hover:text-primary ">Blog</li>
          </ul>
        </div>
        <div>
          <h1 className="text-2xl font-semibold mb-7">Suporte</h1>
          <ul className="space-y-2">
            <li className="text-gray-500 font-medium cursor-pointer transition-colors duration-300 ease-in-out hover:text-primary ">Minha conta</li>
            <li className="text-gray-500 font-medium cursor-pointer transition-colors duration-300 ease-in-out hover:text-primary ">Central de suporte</li>
            <li className="text-gray-500 font-medium cursor-pointer transition-colors duration-300 ease-in-out hover:text-primary ">Feedback</li>
            <li className="text-gray-500 font-medium cursor-pointer transition-colors duration-300 ease-in-out hover:text-primary ">Contate-nos</li>
            <li className="text-gray-500 font-medium cursor-pointer transition-colors duration-300 ease-in-out hover:text-primary ">Acessibilidade</li>
          </ul>
        </div>
      </section>
    </footer>
  );
};

export default Footer;
