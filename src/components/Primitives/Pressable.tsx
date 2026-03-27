import React from "react";

interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  className?: string;
}

const Pressable = ({ children, className = "", ...rest }: Props) => {
  return (
    <button className={className} {...rest}>
      {children}
    </button>
  );
};

export default Pressable;
