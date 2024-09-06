import Image from "next/image";
import Button from "./Button";
import Subtext from "./Subtext";

import App from "../../assets/download.png";

const GetStarted = () => {
  return (
    <div className="bg-[#FEF6F6]">
      <main className="colorbg mx-auto mt-40 flex max-w-80 flex-col items-center justify-between gap-20 py-5 lg:max-w-7xl lg:flex-row">
        <section>
          <div data-aos="fade-up" data-aos-delay="500">
            <Subtext>DOWNLOAD APP</Subtext>
          </div>
          <h1
            data-aos="fade-up"
            data-aos-delay="800"
            className="mb-10 mt-10 max-w-2xl text-2xl font-bold text-gray-900 lg:text-5xl"
          >
            Comece a usar o Fudo hoje mesmo!
          </h1>
          <p
            data-aos="fade-up"
            data-aos-delay="1100"
            className="text-gra=y-500 mb-14 max-w-lg text-justify text-lg font-normal"
          >
            Descubra comida onde e quando quiser e receba sua comida na hora
            certa, sempre.
          </p>
          <div data-aos="fade-up" data-aos-delay="1500">
            <Button>Get The App</Button>
          </div>
        </section>
        <section data-aos="fade-left">
          <Image src={App} alt="App" quality={100} />
        </section>
      </main>
    </div>
  );
};

export default GetStarted;
