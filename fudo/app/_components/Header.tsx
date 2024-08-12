import Image from "next/image";
import logo from "../../assets/logo.png";
import { FC } from "react";
import Button from "./Button";
import { LogIn } from "lucide-react";

const Header: FC = () => {
  return (
    <header className="bg-[#FEEDED]">
      <div className="max-w-7xl mx-auto flex items-center justify-between p-7">
        <div className="flex gap-2 items-center font-semibold">
          <Image src={logo} alt="Logo" quality={100} width={40} height={40} />
          <h1 className="font-semibold text-segundary text-2xl">Fudo</h1>
        </div>
        <nav>
          <ul className="flex gap-14 text-segundary font-medium">
            <li className="hover:text-primary cursor-pointer transition-all ease-in 0.3">O que é o Fudo</li>
            <li className="hover:text-primary cursor-pointer transition-all ease-in 0.3">Serviços</li>
            <li className="hover:text-primary cursor-pointer transition-all ease-in 0.3">Menu</li>
            <li className="hover:text-primary cursor-pointer transition-all ease-in 0.3">Contato</li>
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
