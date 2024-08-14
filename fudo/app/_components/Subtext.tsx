import { PropsWithChildren} from "react";

const Subtext = ({children}: PropsWithChildren) => {
  return (
    <div>
      <p  className="font-semibold tracking-[4px] text-primary">
        {children}
      </p>
    </div>
  );
};

export default Subtext;
