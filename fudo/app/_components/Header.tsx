import Image from "next/image";
import logo from "../../assets/logo.png";
import { FC } from "react";
import Button from "./Button";
import { LogIn } from "lucide-react";

const Header: FC = () => {
  return (
    <header className="bg-[#fdf3f3] shadow-md">
      <div className="mx-auto flex max-w-7xl items-center justify-between p-7">
        <div className="flex items-center gap-2 font-semibold">
          <Image src={logo} alt="Logo" quality={100} width={40} height={40} />
          <h1 className="text-2xl font-semibold text-gray-800 transition-colors duration-300 ease-in-out hover:text-primary">
            Fudo
          </h1>
        </div>
        <nav>
          <ul className="flex gap-14 font-medium text-gray-700">
            <li className="cursor-pointer transition-colors duration-300 ease-in-out hover:text-primary">
              O que é o Fudo
            </li>
            <li className="cursor-pointer transition-colors duration-300 ease-in-out hover:text-primary">
              Serviços
            </li>
            <li className="cursor-pointer transition-colors duration-300 ease-in-out hover:text-primary">
              Menu
            </li>
            <li className="cursor-pointer transition-colors duration-300 ease-in-out hover:text-primary">
              Contato
            </li>
          </ul>
        </nav>
        <div>
          <Button className="flex gap-2 transition-colors duration-300 ease-in-out hover:bg-gray-100">
            <LogIn />
            Login
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;
