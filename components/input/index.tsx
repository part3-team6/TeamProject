import React, { useState } from "react";
import * as S from "./styled";
import Image from "next/image";

interface InputProps {
  title: string;
  placeholder: string;
  data: string;
  wrong: boolean;
  handleBlur: (e: React.FocusEvent<HTMLInputElement>) => void;
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  value: string;
}
function Input({
  data,
  placeholder,
  title,
  wrong,
  handleBlur,
  handleChange,
  value,
}: InputProps) {
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
            onBlur={handleBlur}
            type={data === "이메일" ? "email" : "text"}
            id={data}
            placeholder={placeholder}
            onChange={handleChange}
            value={value}
          ></S.input>
          {wrong && data === "이메일" && (
            <S.wrong>{data} 형식으로 작성해 주세요.</S.wrong>
          )}
          {wrong && data === "닉네임" && (
            <S.wrong>열 자 이하로 작성해주세요.</S.wrong>
          )}
          {/* {wrong && data === "이메일" ? (
            <S.wrong>{data} 형식으로 작성해 주세요.</S.wrong>
          ) : (
            <S.wrong>열 자 이하로 작성해주세요.</S.wrong>
          )} */}
        </S.inputWrap>
      ) : (
        <S.inputWrap>
          <S.label htmlFor={data + title}>{title}</S.label>
          <S.inputInner>
            <S.input
              type={pwd ? "password" : "text"}
              id={data + title}
              placeholder={placeholder}
              onChange={handleChange}
              onBlur={handleBlur}
              value={value}
            ></S.input>
            <S.imageWrap onClick={handlePwd}>
              {pwd ? (
                <Image src={"/images/visibilityOff.svg"} alt="off" fill />
              ) : (
                <Image src={"/images/visibilityOn.svg"} alt="on" fill />
              )}
            </S.imageWrap>
          </S.inputInner>
          {/* {wrong && title === "비밀번호" && (
            <S.wrong>8자 이상 입력해 주세요.</S.wrong>
          )} */}
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
