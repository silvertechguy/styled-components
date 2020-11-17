import React from "react";
import styled from "styled-components";

const MyStyledButton = styled("button")<{ primary?: boolean }>`
  border: none;
  outline: none;
  color: ${({ primary }) => (primary ? "red" : "#fff")};
  background-color: #333;
  font-size: 1.8rem;
  padding: 1rem 1.5rem;
  margin-bottom: 1rem;
`;

interface ButtonProps {
  children: string;
  primary?: boolean;
}

const Button: React.FC<ButtonProps> = ({ children, primary }) => {
  return <MyStyledButton primary={primary}>{children}</MyStyledButton>;
};

export default Button;
