import Carrossel from "./Carrossel";
import Subtext from "./Subtext";

const List = () => {
  return (
    <div className="mx-auto max-w-7xl">
      <div className="mt-40 flex flex-col items-start justify-start gap-8">
        <Subtext>NOSSO CARDÁPIO</Subtext>
        <h1 className="max-w-2xl text-5xl font-bold leading-snug text-gray-900">
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
