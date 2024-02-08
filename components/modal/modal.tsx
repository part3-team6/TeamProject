import { MouseEventHandler, ReactNode, useEffect, useState } from "react";
import Button from "./modalButton";
import * as S from "./styled";

export interface ModalProps {
  title: string;
  name: string;
  submitButton?: string;
  children?: ReactNode;
  Placeholder: string;
  cancelButton: string;
  cancel: MouseEventHandler;
  value: (value: string) => void;
  submit: any;
  handleModalEsc?: any;
  // (e: KeyboardEvent) => void;
}

const test: any = {
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
  cancel,
  value,
  submit,
  handleModalEsc,
}: ModalProps) {
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        handleModalEsc(event);
      }
    };

    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [handleModalEsc]);

  const handleStopPropagation = (
    e: React.MouseEvent<HTMLDivElement, MouseEvent>,
  ) => {
    e.stopPropagation();
  };

  return (
    <>
      <S.background>
        <S.container onClick={handleStopPropagation}>
          <div>
            <S.title>{title}</S.title>
            <S.name>{name}</S.name>
          </div>
          <S.input
            placeholder={Placeholder}
            onChange={(e) => value(e.target.value)}
          ></S.input>
          {title === "새 컬럼생성" && value === test.column && (
            <S.errText>중복된 컬럼 이름입니다.</S.errText>
          )}
          {children}
          <S.buttonFlex>
            <S.cancelButton onClick={cancel}>{cancelButton}</S.cancelButton>
            <Button submit={submit}>{submitButton}</Button>
          </S.buttonFlex>
        </S.container>
      </S.background>
    </>
  );
}

export default Modal;
