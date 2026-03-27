import React from "react";

interface Props extends React.HTMLAttributes<HTMLSpanElement> {
  children: React.ReactNode;
  className?: string;
}

const Text = ({ children, className = "", ...rest }: Props) => {
  return (
    <p className={className} {...rest}>
      {children}
    </p>
  );
};

export default Text;
