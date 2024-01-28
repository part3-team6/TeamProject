import Image from "next/image";
import * as S from "./styled";
import Link from "next/link";
import Input from "@/components/input";
import axios from "@/lib/axios";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

function SignIn() {
  const [emailError, setEmailError] = useState(false);
  const [passwordError, setPasswordError] = useState(false);

  const [value, setValue] = useState({
    email: "",
    password: "",
  });
  console.log(value);
  const router = useRouter();
  //   useEffect(() => {
  //     const LS = localStorage.getItem("login");
  //     if (LS !== null) {
  //       router.push(`/`);
  //     }
  //   }, []);

  const validateEmail = (email: string) => {
    const isValidEmail = /\S+@\S+\.\S+/.test(email);
    setEmailError(!isValidEmail); // 이메일이 유효하지 않을 때 true 설정

    setValue((prev) => ({
      ...prev,
      email: email,
    }));
  };

  const validatePassword = (password: string) => {
    const isPasswordValid = password.length >= 8;
    setPasswordError(!isPasswordValid);

    setValue((prev) => ({
      ...prev,
      password: password,
    }));
  };
  //   email: "codeit@codeit.com",
  //       password: "123456789",
  const handleFocusOut = (e: React.FocusEvent<HTMLInputElement>) => {
    if (e.target.id === "이메일") {
      validateEmail(e.target.value);
    } else if (e.target.id === "pwd비밀번호") {
      validatePassword(e.target.value);
    }
  };

  async function login() {
    const res = await axios.post(`auth/login`, value);
    console.log(res.data.accessToken);
    localStorage.removeItem("login");
    localStorage.setItem("login", res.data.accessToken);
    router.push("/");
  }

  async function getFd() {
    const res = await axios.get(`users/me`);
    console.log(res);
  }
  return (
    <S.signinback>
      <S.signin>
        <S.logoWrap>
          <S.logo>
            <Link href={"/"}>
              <Image src={"/images/logoLogin.svg"} alt="로고" fill />
            </Link>
          </S.logo>
          <p>오늘도 만나서 반가워요!</p>
        </S.logoWrap>

        <S.loginForm onSubmit={login}>
          <Input
            title="이메일"
            placeholder="이메일을 입력해 주세요"
            data="이메일"
            wrong={emailError}
            event={handleFocusOut}
          />
          <Input
            title="비밀번호"
            placeholder="비밀번호를 입력해 주세요"
            data="pwd"
            wrong={passwordError}
            event={handleFocusOut}
          />

          <S.submit type="submit" value="로그인" />
        </S.loginForm>

        <S.signup>
          회원이 아니신가요?
          <span>
            <Link href={"/signup"}>회원가입하기</Link>
          </span>
        </S.signup>
      </S.signin>
    </S.signinback>
  );
}

export default SignIn;
