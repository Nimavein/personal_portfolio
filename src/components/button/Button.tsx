import React, { ReactNode } from "react";
import { Button as StyledButton } from "./Button.styled";

interface ButtonProps {
  children?: ReactNode;
  isBlack?: boolean;
  onClick?: () => void;
}

export const Button: React.FC<ButtonProps> = ({ children, isBlack }) => {
  return (
    <StyledButton $isBlack={isBlack}>
      {children}
      <div className="top-bar"></div>
      <div className="bot-bar"></div>
      <div className="left-bar"></div>
      <div className="right-bar"></div>
    </StyledButton>
  );
};
