import Carrossel from "./Carrossel";
import Subtext from "./Subtext";

const List = () => {
  return (
    <div className="mx-auto max-w-7xl">
      <div className="mx-auto mt-40 flex flex-col items-start justify-start gap-8">
        <div className="mx-auto lg:m-0">
          <Subtext>NOSSO CARDÁPIO</Subtext>
        </div>
        <h1 className="mx-auto max-w-80 text-center text-2xl font-bold leading-snug text-gray-900 lg:mx-0 lg:max-w-2xl">
          Cardápio Que Sempre Faz Você Se Apaixonar
        </h1>
      </div>
      <div className="mt-20">
        <Carrossel />
      </div>
    </div>
  );
};

export default List;
