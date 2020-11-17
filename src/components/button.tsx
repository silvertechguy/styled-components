import React from "react";
import styled, { css } from "styled-components";

const MyStyledButton = styled("button")<{
  primary?: boolean;
  bgColor?: string;
}>`
  background-color: white;
  color: palevioletred;
  font-size: 1.2rem;
  margin: 1rem;
  padding: 0.5rem 1rem;
  border: 1px solid palevioletred;
  border-radius: 3px;

  ${({ primary, bgColor }) =>
    primary &&
    css`
      background-color: ${bgColor};
      color: white;
      box-shadow: 0 0.5rem 1.5rem rgba(0, 0, 0, 0.2);
    `}
`;

interface ButtonProps {
  children: string;
  primary?: boolean;
  bgColor?: string;
}

const Button: React.FC<ButtonProps> = ({ children, primary, bgColor }) => {
  return (
    <MyStyledButton primary={primary} bgColor={bgColor}>
      {children}
    </MyStyledButton>
  );
};

export default Button;
