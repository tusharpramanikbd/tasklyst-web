import React from "react";
import Text from "./Text";

type TypographyType = "small" | "regular" | "large" | "xlarge" | "xxlarge";

interface Props extends React.HTMLAttributes<HTMLSpanElement> {
  type?: TypographyType;
  className?: string;
  children: React.ReactNode;
}

const fontSizeMap = {
  small: "text-sm",
  regular: "text-base",
  large: "text-lg",
  xlarge: "text-xl",
  xxlarge: "text-2xl",
};

const Typography = ({
  type = "regular",
  className = "",
  children,
  ...rest
}: Props) => {
  return (
    <Text className={`text-black ${fontSizeMap[type]} ${className}`} {...rest}>
      {children}
    </Text>
  );
};

export default Typography;
