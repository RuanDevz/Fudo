import { ComponentProps, ReactNode } from "react";

type ButtonProps = ComponentProps<"button"> & {
  children: ReactNode;
};

const Button = ({ children, ...props }: ButtonProps) => {
  return (
    <button
      {...props}
      className="0.3 flex gap-2 rounded-full bg-[#F44648] p-3 px-7 text-[#fff] transition-all ease-in hover:bg-[#db3f42]"
    >
      {children}
    </button>
  );
};

export default Button;
