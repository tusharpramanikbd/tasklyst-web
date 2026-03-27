import React from "react";
import View from "./View";

interface Props {
  children: React.ReactNode;
  className?: string;
}

const ViewWrapper = ({ children, className = "" }: Props) => {
  return <View className={`min-h-screen w-full ${className}`}>{children}</View>;
};

export default ViewWrapper;
