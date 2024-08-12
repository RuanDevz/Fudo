import { ComponentProps, ReactNode } from "react";

type ButtonProps = ComponentProps<'button'> & {
    children: ReactNode;
};

const Button = ({ children, ...props }: ButtonProps) => {
  return (
    <button {...props} className='bg-[#F44648] p-3 px-7 rounded-full text-[#fff] flex gap-2 hover:bg-[#db3f42] transition-all ease-in 0.3 '>
      {children}
    </button>
  );
};

export default Button;
