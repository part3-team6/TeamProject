import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import axios from "@/lib/axios";

import Input from "@/components/input";
import ModalCheckIt from "@/components/modal/modalCheckIt";

import useUserStore from "@/store/user";
import useToggle from "@/hooks/useToggle";

import * as S from "./styled";

interface IFormInput {
  email: string;
  password: string;
}

function SignIn() {
  const { setUser } = useUserStore();
  const [emailError, setEmailError] = useState<boolean>(false);
  const [passwordError, setPasswordError] = useState<boolean>(false);
  const [showPwdError, setShowPwdError, showPwdToggle] = useToggle(false);

  const { register, handleSubmit } = useForm<IFormInput>();
  const onSubmit: SubmitHandler<IFormInput> = (data: {
    email: string;
    password: string;
  }) => {
    const loginData = {
      email: data.email,
      password: data.password,
    };
    login(loginData);
  };

  const router = useRouter();
  useEffect(() => {
    const LS = localStorage.getItem("login");
    if (LS !== null) {
      router.push(`/mydashboard`);
    }
  }, []);

  async function login(data: { email: string; password: string }) {
    try {
      const res = await axios.post("auth/login", data);
      localStorage.setItem("login", res.data.accessToken);

      await setUserData();
      router.push("/mydashboard");
    } catch (error) {
      setPasswordError(true);
      if (data.email !== "" && data.password !== "") {
        showPwdToggle();
      }
      console.error("로그인 실패:", error);
    }
  }

  const setUserData = async () => {
    try {
      const respons = await axios.get("users/me");
      setUser(respons.data);
    } catch (error) {
      console.error("사용자 정보 가져오기 실패:", error);
    }
  };

  return (
    <>
      {showPwdError && (
        <ModalCheckIt
          text="비밀번호가 일치하지 않습니다."
          submitButton="확인"
          wrong={showPwdToggle}
        />
      )}
      <S.Signinback>
        <S.Signin>
          <S.LogoWrap>
            <S.Logo>
              <Link href={"/"}>
                <Image src={"/images/logoLogin.svg"} alt="로고" fill />
              </Link>
            </S.Logo>
            <p>오늘도 만나서 반가워요!</p>
          </S.LogoWrap>

          <S.LoginForm onSubmit={handleSubmit(onSubmit)}>
            <Input
              hookform={register("email", { pattern: /\S+@\S+\.\S+/ })}
              title="이메일"
              placeholder="이메일을 입력해 주세요"
              data="이메일"
              wrong={emailError}
              name="email"
            />
            <Input
              hookform={register("password")}
              title="비밀번호"
              placeholder="비밀번호를 입력해 주세요"
              data="pwd"
              wrong={passwordError}
              name="password"
            />

            <S.Submit type="submit" value="로그인" />
          </S.LoginForm>
          <S.Signup>
            회원이 아니신가요?
            <span>
              <Link href={"/signup"}>회원가입하기</Link>
            </span>
          </S.Signup>
        </S.Signin>
      </S.Signinback>
    </>
  );
}
export default SignIn;
