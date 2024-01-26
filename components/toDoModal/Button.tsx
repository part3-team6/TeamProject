import { MouseEvent, ReactNode } from "react";
import * as S from "./styled";

export interface ButtonProps {
  onClick: (e: MouseEvent) => void;
  children: ReactNode;
}

const Button = ({ children, onClick }: ButtonProps) => {
  return <S.StyledButton onClick={onClick}>{children}</S.StyledButton>;
};

export default Button;
