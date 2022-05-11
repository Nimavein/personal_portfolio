import React, { ReactNode, HTMLAttributes } from "react";
import { Button as StyledButton } from "./Button.styled";

type ButtonProps = {
  children?: ReactNode;
  isBlack?: boolean;
  type: "button" | "submit" | "reset" | undefined;
} & HTMLAttributes<HTMLButtonElement>;

export const Button: React.FC<ButtonProps> = ({ children, isBlack, type }) => {
  return (
    <StyledButton type={type} $isBlack={isBlack}>
      {children}
      <div className="top-bar"></div>
      <div className="bot-bar"></div>
      <div className="left-bar"></div>
      <div className="right-bar"></div>
    </StyledButton>
  );
};
