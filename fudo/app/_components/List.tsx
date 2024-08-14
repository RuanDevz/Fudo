import Carrossel from "./Carrossel";
import Subtext from "./Subtext";

const List = () => {
  return (
    <div className="mx-auto max-w-7xl">
      <div className="flex flex-col gap-8 justify-start items-start mt-40">
        <Subtext>NOSSO CARDÁPIO</Subtext>
        <h1 className="text-5xl max-w-2xl font-bold text-gray-900 leading-snug">
          Cardápio que sempre faz você se apaixonar
        </h1>
      </div>
      <div className="mt-20">
        <Carrossel/>
      </div>
    </div>
  );
};

export default List;
