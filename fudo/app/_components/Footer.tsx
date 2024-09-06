'use client'
import Image from "next/image";
import logo from "../../assets/logo.png";
import { Facebook, Instagram, X } from "lucide-react";
const Footer = () => {

  return (
    <footer className="mx-auto flex flex-col max-w-7xl py-20">
      <section className="flex-1 flex flex-col items-start">
        <div className="flex items-center gap-3 mb-4 mx-auto lg:m-0">
          <Image width={50} height={50} src={logo} alt="Logo" quality={100} />
          <h1 className="text-2xl font-bold text-gray-900">Fudo</h1>
        </div>
        <p className="max-w-80 mx-auto lg:m-0 lg:max-w-96 py-3 font-medium text-gray-500">
          Nosso trabalho é encher sua barriga com comida deliciosa e com entrega
          rápida e gratuita.
        </p>
        <div className="flex items-center justify-center mx-auto lg:justify-start lg:m-0 gap-3 mt-7  lg:mt-0 ">
          <Instagram />
          <Facebook />
          <X />
        </div>
      </section>
      <section className="flex-1 flex flex-col lg:flex-row justify-between gap-14 lg:gap-40 mx-auto lg:justify-end mt-10">
        <div>
          <h1 className="text-2xl font-semibold mb-7">Sobre</h1>
          <ul className="space-y-2">
            <li className="text-gray-500 font-medium cursor-pointer transition-colors duration-300 ease-in-out hover:text-primary">
              Sobre Nós
            </li>
            <li className="text-gray-500 font-medium cursor-pointer transition-colors duration-300 ease-in-out hover:text-primary">
              Características
            </li>
            <li className="text-gray-500 font-medium cursor-pointer transition-colors duration-300 ease-in-out hover:text-primary">
              Notícias
            </li>
            <li className="text-gray-500 font-medium cursor-pointer transition-colors duration-300 ease-in-out hover:text-primary">
              Cardápio
            </li>
          </ul>
        </div>
        <div>
          <h1 className="text-2xl font-semibold mb-7">Empresa</h1>
          <ul className="space-y-2">
            <li className="text-gray-500 font-medium cursor-pointer transition-colors duration-300 ease-in-out hover:text-primary">
              Por que Fudo?
            </li>
            <li className="text-gray-500 font-medium cursor-pointer transition-colors duration-300 ease-in-out hover:text-primary">
              Seja nosso parceiro
            </li>
            <li className="text-gray-500 font-medium cursor-pointer transition-colors duration-300 ease-in-out hover:text-primary">
              FAQ
            </li>
            <li className="text-gray-500 font-medium cursor-pointer transition-colors duration-300 ease-in-out hover:text-primary">
              Blog
            </li>
          </ul>
        </div>
        <div>
          <h1 className="text-2xl font-semibold mb-7">Suporte</h1>
          <ul className="space-y-2">
            <li className="text-gray-500 font-medium cursor-pointer transition-colors duration-300 ease-in-out hover:text-primary">
              Minha conta
            </li>
            <li className="text-gray-500 font-medium cursor-pointer transition-colors duration-300 ease-in-out hover:text-primary">
              Central de suporte
            </li>
            <li className="text-gray-500 font-medium cursor-pointer transition-colors duration-300 ease-in-out hover:text-primary">
              Feedback
            </li>
            <li className="text-gray-500 font-medium cursor-pointer transition-colors duration-300 ease-in-out hover:text-primary">
              Contate-nos
            </li>
            <li className="text-gray-500 font-medium cursor-pointer transition-colors duration-300 ease-in-out hover:text-primary">
              Acessibilidade
            </li>
          </ul>
        </div>
      </section>
    </footer>
  );
};

export default Footer;
