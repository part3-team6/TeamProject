import * as S from "./styled";
import Input from "@/components/input";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import axios from "@/lib/axios";
import { useRouter } from "next/router";

function Signup() {
  const [isChecked, setIsChecked] = useState(false);
  const router = useRouter();
  const [emailError, setemailError] = useState<boolean>(false);
  const [pwdError, setpwdError] = useState<boolean>(false);
  const [pwdCheckError, setpwdCheckError] = useState<boolean>(false);
  const [nicknameError, setNicknameError] = useState<boolean>(false);
  const [values, setValues] = useState({
    이메일: "",
    닉네임: "",
    pwd비밀번호: "",
    pwd비밀번호확인: "",
  });
  console.log(pwdError);

  // 이용약관 체크 확인
  const handleCheckBoxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setIsChecked(e.target.checked);
  };

  const { 이메일: email, 닉네임: nickname, pwd비밀번호: password } = values;
  console.log(values);

  // 각 input value값 추출
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { id, value } = e.target;
    console.log(e.target.id);

    setValues((prevValues) => ({
      ...prevValues,
      [id]: value,
    }));
  };

  // 회원가입 실행
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (isChecked && !emailError && !pwdCheckError && !nicknameError) {
      await axios.post("users", { email, nickname, password });
    }

    router.push("/login");
  };

  const validateEmail = (email: string) => {
    const isvalidateEmail = /\S+@\S+\.\S+/.test(email);
    setemailError(!isvalidateEmail);

    setValues((prev) => ({
      ...prev,
      이메일: email,
    }));
  };

  const validatePassword = (password: string) => {
    const isvalidatePassword = password.length >= 8;
    setpwdError(!isvalidatePassword);

    setValues((prev) => ({
      ...prev,
      pwd비밀번호: password,
    }));
  };

  const validatePasswordCheck = (passwordCheck: string, password?: string) => {
    const isvalidatePasswordCheck = password === passwordCheck;
    setpwdCheckError(!isvalidatePasswordCheck);

    setValues((prev) => ({
      ...prev,
      pwd비밀번호확인: passwordCheck,
    }));
  };

  const validateNickname = (nickname: string) => {
    const isvalidateNuckname = nickname.length <= 10;
    setNicknameError(!isvalidateNuckname);

    setValues((prev) => ({
      ...prev,
      닉네임: nickname,
    }));
  };

  const handleBlur = (e: React.FocusEvent<HTMLInputElement>) => {
    switch (e.target.id) {
      case "이메일":
        console.log(validateEmail(e.target.id));
        validateEmail(e.target.value);
        break;
      case "닉네임":
        console.log(validateNickname(e.target.id));
        validateNickname(e.target.value);
        break;
      case "pwd비밀번호":
        console.log(validatePassword(e.target.id));
        validatePassword(e.target.value);
        break;
      case "pwd비밀번호확인":
        console.log(validatePasswordCheck(e.target.id));
        validatePasswordCheck(e.target.value);
        break;
      default:
        break;
    }
  };

  return (
    <>
      <S.container>
        <S.logo>
          <Link href={"/"}>
            <Image src="images/logoLogin.svg" alt="로고" fill />
          </Link>
        </S.logo>
        <S.text>첫 방문을 환영합니다!</S.text>

        <S.form onSubmit={handleSubmit}>
          <Input
            data="이메일"
            title="이메일"
            placeholder="이메일을 입력해 주세요"
            handleBlur={handleBlur}
            wrong={emailError}
            handleChange={handleChange}
            value={values.이메일}
          />
          <Input
            data="닉네임"
            title="닉네임"
            placeholder="닉네임을 입력해 주세요"
            handleChange={handleChange}
            value={values.닉네임}
            wrong={nicknameError}
            handleBlur={handleBlur}
          />
          <Input
            title="비밀번호"
            placeholder="8자 이상 입력해 주세요"
            data="pwd"
            handleChange={handleChange}
            value={values.pwd비밀번호}
            wrong={pwdError}
            handleBlur={handleBlur}
          />
          <Input
            title="비밀번호확인"
            placeholder="비밀번호를 한번 더 입력해 주세요"
            data="pwd"
            handleChange={handleChange}
            value={values.pwd비밀번호확인}
            wrong={pwdCheckError}
            handleBlur={handleBlur}
          />
          <S.checkBox>
            <S.checkInput
              type="checkbox"
              id="agree"
              name="agree"
              onChange={handleCheckBoxChange}
            />
            <S.label htmlFor="agree">이용약관에 동의합니다</S.label>
          </S.checkBox>
          <S.button type="submit">가입하기</S.button>
          <S.logintext>
            이미 가입하셨나요?
            <S.linkLogin>
              <Link href={"/login"}>로그인하기</Link>
            </S.linkLogin>
          </S.logintext>
        </S.form>
      </S.container>
    </>
  );
}

export default Signup;
