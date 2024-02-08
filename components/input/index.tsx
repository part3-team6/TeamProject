import React, { useState } from "react";
import Image from "next/image";

import * as S from "./styled";

interface InputProps {
  title?: string;
  placeholder?: string;
  data?: string;
  wrong?: boolean;
  handleBlur?: any;
  value?: string;
  hookform?: any;
  name?: string;
  disabled?: boolean;
  defaultValue?: string;
  handleFocus: (event: React.FocusEvent<HTMLInputElement>) => void;
}
function Input({
  data,
  placeholder,
  title,
  wrong,
  handleBlur,
  value,
  hookform,
  name,
  disabled,
  defaultValue,
  handleFocus,
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
            {...hookform}
            onBlur={handleBlur}
            type={data === "이메일" ? "email" : "text"}
            id={data}
            placeholder={placeholder}
            value={value}
            onFocus={handleFocus}
            wrong={wrong}
            name={name}
            disabled={disabled}
            defaultValue={defaultValue}
          ></S.input>
          {wrong && data === "이메일" && (
            <S.wrong>{data} 형식으로 작성해 주세요.</S.wrong>
          )}
          {wrong && data === "닉네임" && (
            <S.wrong>10자 이하로 작성해주세요.</S.wrong>
          )}
        </S.inputWrap>
      ) : (
        <S.inputWrap>
          <S.label htmlFor={data + title}>{title}</S.label>
          <S.inputInner>
            <S.input
              {...hookform}
              type={pwd ? "password" : "text"}
              id={data + title}
              placeholder={placeholder}
              onBlur={handleBlur}
              value={value}
              onFocus={handleFocus}
              wrong={wrong}
              name={name}
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
