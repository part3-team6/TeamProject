import { ReactNode, useState } from "react";
import Button from "./modalButton";
import * as S from "./styled";

interface ModalProps {
  title: string;
  name: string;
  submitButton?: string;
  children?: ReactNode;
  Placeholder: string;
  cancelButton: string;
}

// 중복된 컬럼인지 아닌지 테스트용 나중 변경 요망.
const test = {
  column: "test",
  column1: "test2",
};

function Modal({
  title,
  name,
  submitButton,
  children,
  Placeholder,
  cancelButton,
}: ModalProps) {
  const [values, setValues] = useState("");

  return (
    <>
      <S.background>
        <S.container>
          <div>
            <S.title>{title}</S.title>
            <S.name>{name}</S.name>
          </div>
          <S.input
            placeholder={Placeholder}
            onChange={(e) => setValues(e.target.value)}
          ></S.input>
          {title === "새 컬럼생성" && values === test.column && (
            <S.errText>중복된 컬럼 이름입니다.</S.errText>
          )}
          {children}
          <S.buttonFlex>
            <S.cancelButton>{cancelButton}</S.cancelButton>
            <Button>{submitButton}</Button>
          </S.buttonFlex>
        </S.container>
      </S.background>
    </>
  );
}

export default Modal;
