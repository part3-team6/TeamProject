import { useState } from "react";
import * as S from "./styled";
import Image from "next/image";

function Input() {
  const [status, setStatus] = useState(false);
  const [pwd, setPwd] = useState(true);

  const handlePwd = () => {
    setPwd((prev) => !prev);
  };

  return (
    <>
      {status ? (
        <S.inputWrap>
          <S.label htmlFor="email">이메일</S.label>
          <S.input
            type="email"
            id="email"
            placeholder="이메일을 입력해 주세요"
          ></S.input>
          <S.wrong>이메일 형식으로 작성해 주세요.</S.wrong>
        </S.inputWrap>
      ) : (
        <S.inputWrap>
          <S.label htmlFor="password">비밀번호</S.label>
          <S.inputInner>
            <S.input
              type={pwd ? "password" : "text"}
              id="password"
              placeholder="비밀번호를 입력해 주세요"
            ></S.input>
            <S.imageWrap onClick={handlePwd}>
              {pwd ? (
                <Image src={"/images/visibilityOff.svg"} alt="off" fill />
              ) : (
                <Image src={"/images/visibilityOn.svg"} alt="on" fill />
              )}
            </S.imageWrap>
          </S.inputInner>
          <S.wrong>8자 이상 입력해 주세요.</S.wrong>
        </S.inputWrap>
      )}
    </>
  );
}

export default Input;
