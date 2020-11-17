import React from "react";
import styled, { css, keyframes } from "styled-components";

const fadeIn = keyframes`
  0% {
    opacity: 0;
  }

  110% {
    opacity: 1;
  }
`;

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
  animation: 2s ${fadeIn} ease-in;

  ${({ primary, bgColor }) =>
    primary &&
    css`
      background-color: ${bgColor};
      color: white;
      box-shadow: 0 0.5rem 1.5rem rgba(0, 0, 0, 0.2);
    `}

  &:hover {
    color: white;
    background-color: palevioletred;
  }
`;

const OuterWrapper = styled("div")`
  width: 100%;
  background-color: blueviolet;
  margin-top: 2rem;

  &:hover ${MyStyledButton} {
    color: red;
  }
`;

interface ButtonProps {
  children: string;
  primary?: boolean;
  bgColor?: string;
}

const Button: React.FC<ButtonProps> = ({ children, primary, bgColor }) => {
  return (
    <OuterWrapper>
      <MyStyledButton primary={primary} bgColor={bgColor}>
        {children}
      </MyStyledButton>
    </OuterWrapper>
  );
};

export default Button;
