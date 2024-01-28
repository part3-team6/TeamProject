import { useState } from "react";
import * as S from "./styled";
import Image from "next/image";

interface InputProps {
  title: string;
  placeholder: string;
  data: string;
  wrong: boolean;
}
function Input({ data, placeholder, title, wrong = false }: InputProps) {
  const [pwd, setPwd] = useState(true);

  const handlePwd = () => {
    setPwd((prev) => !prev);
  };

  return (
    <>
      {data !== "pwd" ? (
        <S.inputWrap>
          <S.label htmlFor={data}>{title}</S.label>
          <S.input
            type={data === "이메일" ? "email" : "text"}
            id={data}
            placeholder={placeholder}
          ></S.input>
          {wrong && <S.wrong>{data} 형식으로 작성해 주세요.</S.wrong>}
        </S.inputWrap>
      ) : (
        <S.inputWrap>
          <S.label htmlFor={data}>{title}</S.label>
          <S.inputInner>
            <S.input
              type={pwd ? "password" : "text"}
              id={data}
              placeholder={placeholder}
            ></S.input>
            <S.imageWrap onClick={handlePwd}>
              {pwd ? (
                <Image src={"/images/visibilityOff.svg"} alt="off" fill />
              ) : (
                <Image src={"/images/visibilityOn.svg"} alt="on" fill />
              )}
            </S.imageWrap>
          </S.inputInner>

          {wrong &&
            (title === "비밀번호" ? (
              <S.wrong>8자 이상 입력해 주세요.</S.wrong>
            ) : (
              <S.wrong>비밀번호를 확인해 주세요.</S.wrong>
            ))}
        </S.inputWrap>
      )}
    </>
  );
}

export default Input;
