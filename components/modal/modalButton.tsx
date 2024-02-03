import { ReactNode } from "react";
import * as S from "./styled";

interface ButtonProps {
  children: ReactNode;
  submit: any;
}

function Button({ children, submit }: ButtonProps) {
  return <S.button onClick={submit}>{children}</S.button>;
}

export default Button;
