import { ReactNode } from "react";
import * as S from "./styled";

interface ButtonProps {
  children: ReactNode;
}

function Button({ children }: ButtonProps) {
  return <S.button>{children}</S.button>;
}

export default Button;
