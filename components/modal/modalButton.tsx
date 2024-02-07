import { ReactNode } from "react";
import * as S from "./styled";

interface ButtonProps {
  children: ReactNode;
  submit: any;
  disabled?: boolean;
}

function Button({ children, submit, disabled }: ButtonProps) {
  return (
    <S.button onClick={submit} disabled={disabled} type="button">
      {children}
    </S.button>
  );
}

export default Button;
