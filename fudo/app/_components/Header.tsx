import Image from "next/image";
import logo from "../../assets/logo.png";
import { FC } from "react";
import Button from "./Button";
import { LogIn } from "lucide-react";

const Header: FC = () => {
  return (
    <header className="">
      <div className="mx-auto flex max-w-7xl items-center justify-between p-7">
        <div className="flex items-center gap-2 font-semibold">
          <Image src={logo} alt="Logo" quality={100} width={40} height={40} />
          <h1 className="text-2xl font-semibold text-segundary">Fudo</h1>
        </div>
        <nav>
          <ul className="flex gap-14 font-medium text-segundary">
            <li className="0.3 cursor-pointer transition-all ease-in hover:text-red-500">
              O que é o Fudo
            </li>
            <li className="0.3 cursor-pointer transition-all ease-in hover:text-red-500">
              Serviços
            </li>
            <li className="0.3 cursor-pointer transition-all ease-in hover:text-red-500">
              Menu
            </li>
            <li className="0.3 cursor-pointer transition-all ease-in hover:text-red-500">
              Contato
            </li>
          </ul>
        </nav>
        <div>
          <Button className="flex gap-2">
            <LogIn />
            Login
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;
