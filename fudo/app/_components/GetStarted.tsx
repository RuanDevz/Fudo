import Image from "next/image";
import Button from "./Button";
import Subtext from "./Subtext";

import App from "../../assets/download.png";

const GetStarted = () => {
  return (
    <div className="bg-[#FEF6F6]">
      <main className="colorbg mx-auto mt-40 flex lg:max-w-7xl max-w-80 flex-col items-center justify-between gap-20 py-5 lg:flex-row">
        <section>
          <Subtext>DOWNLOAD APP</Subtext>
          <h1 className="mb-10 mt-10 max-w-2xl text-2xl lg:text-5xl font-bold text-gray-900">
            Comece a usar o Fudo hoje mesmo!
          </h1>
          <p className="mb-14 max-w-lg text-justify text-lg font-normal text-gra=y-500">
            Descubra comida onde e quando quiser e receba sua comida na hora
            certa, sempre.
          </p>
          <Button>Get The App</Button>
        </section>
        <section>
          <Image src={App} alt="App" quality={100} />
        </section>
      </main>
    </div>
  );
};

export default GetStarted;
