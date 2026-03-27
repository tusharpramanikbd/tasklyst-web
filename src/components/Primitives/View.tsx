import React from "react";

interface Props extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  className?: string;
}

const View = ({ children, className = "", ...rest }: Props) => {
  return (
    <div className={className} {...rest}>
      {children}
    </div>
  );
};

export default View;
