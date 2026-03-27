import React from "react";

interface Props extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  className?: string;
}

const ScrollView = ({ children, className = "", ...rest }: Props) => {
  return (
    <div className={`overflow-y-auto ${className}`} {...rest}>
      {children}
    </div>
  );
};

export default ScrollView;
