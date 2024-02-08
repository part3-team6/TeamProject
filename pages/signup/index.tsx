import * as S from "./styled";
import Input from "@/components/input";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import axios from "@/lib/axios";
import { useRouter } from "next/router";
import ModalCheckIt from "@/components/modal/modalCheckIt";
import { useForm, SubmitHandler } from "react-hook-form";
import useModalToggle from "@/hooks/useModal";

interface Inputs {
  email: string;
  nickname: string;
  password: string;
  passwordCheck: string;
}

function Signup() {
  const router = useRouter();
  const [showSuccessModal, setShowSuccessModal] = useState<boolean>(false); // 회원가입 성공 모달
  const [isModalOpen, openModal, closeModal, toggleModal] =
    useModalToggle(false); // 회원가입 실패 모달
  const [isChecked, setIsChecked] = useState<boolean>(false); // 이용약관 체크
  const [emailError, setemailError] = useState<boolean>(false); // 각종 에러 문구
  const [pwdError, setpwdError] = useState<boolean>(false);
  const [pwdCheckError, setpwdCheckError] = useState<boolean>(false);
  const [nicknameError, setNicknameError] = useState<boolean>(false);
  const { register, handleSubmit, watch } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = (data) => {
    const signupData = {
      email: data.email,
      nickname: data.nickname,
      password: data.password,
    };
    handleSubmits(signupData);
  };
  const email = watch("email");
  const nickname = watch("nickname");
  const password = watch("password");
  const passwordCheck = watch("passwordCheck");

  // 이용약관 체크 확인
  const handleCheckBoxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setIsChecked(e.target.checked);
  };

  // 회원가입 실행
  const handleSubmits = async (data: {
    email: string;
    nickname: string;
    password: string;
  }) => {
    try {
      if (isChecked && !emailError && !pwdCheckError && !nicknameError) {
        const response = await axios.post("users", data);
        if (response.status === 201) {
          setShowSuccessModal(true);
          router.push("/signin");
        }
      }
    } catch (error: any) {
      if (error.response && error.response.status === 409) {
        openModal();
      } else {
        console.error("회원가입 요청 오류:", error);
      }
    }
  };

  const handleModalToggle = () => {
    toggleModal();
  };

  // 유효성검사 true 나오게끔
  const validateEmail = (email: string) => {
    const isvalidateEmail = /\S+@\S+\.\S+/.test(email);
    setemailError(!isvalidateEmail);
  };

  const validatePassword = (password: string) => {
    const isvalidatePassword = password?.length >= 8;
    setpwdError(!isvalidatePassword);
  };

  const validatePasswordCheck = (passwordCheck: string, password: string) => {
    const isvalidatePasswordCheck = password === passwordCheck;
    setpwdCheckError(!isvalidatePasswordCheck);
  };

  const validateNickname = (nickname: string) => {
    const isvalidateNuckname = nickname?.length <= 10 && nickname?.length !== 0;
    setNicknameError(!isvalidateNuckname);
  };

  useEffect(() => {
    if (email !== "") {
      validateEmail(email);
    } else if (email === "") {
      setemailError(false);
    }
  }, [email]);

  useEffect(() => {
    if (nickname !== "") {
      validateNickname(nickname);
    } else if (nickname === "") {
      setNicknameError(false);
    }
  }, [nickname]);

  useEffect(() => {
    if (password !== "") {
      validatePassword(password);
    } else if (password === "") {
      setpwdError(false);
    }
  }, [password]);

  useEffect(() => {
    if (passwordCheck !== "") {
      validatePasswordCheck(passwordCheck, password);
    } else if (passwordCheck === "") {
      setpwdCheckError(false);
    }
  }, [passwordCheck, password]);

  // foucs out
  const handleBlur = (field: string) => {
    return () => {
      switch (field) {
        case "email":
          validateEmail(email);
          break;
        case "nickname":
          validateNickname(nickname);
          break;
        case "password":
          validatePassword(password);
          break;
        case "passwordCheck":
          validatePasswordCheck(passwordCheck, password);
          break;
        default:
          break;
      }
    };
  };

  // foucs in
  const handleFocus = (field: string) => {
    return () => {
      switch (field) {
        case "email":
          setemailError(false);
          break;
        case "nickname":
          setNicknameError(false);
          break;
        case "password":
          setpwdError(false);
          break;
        case "passwordCheck":
          setpwdCheckError(false);
          break;
        default:
          break;
      }
    };
  };

  // 에러메세지가 없고 모든값이 빈값이 아닐때 버튼 활성화
  const lastCheck =
    isChecked &&
    !emailError &&
    !nicknameError &&
    !pwdError &&
    !pwdCheckError &&
    email !== "" &&
    password !== "" &&
    nickname !== "" &&
    passwordCheck == password;

  return (
    <>
      {showSuccessModal && (
        <ModalCheckIt
          text="가입이 완료되었습니다!"
          submitButton="확인"
          wrong={handleModalToggle}
        />
      )}
      {isModalOpen && (
        <ModalCheckIt
          text="이미 사용 중인 이메일입니다."
          submitButton="확인"
          wrong={handleModalToggle}
        />
      )}
      <S.container>
        <S.logo>
          <Link href={"/"}>
            <Image src="images/logoLogin.svg" alt="로고" fill />
          </Link>
        </S.logo>
        <S.text>첫 방문을 환영합니다!</S.text>

        <S.form onSubmit={handleSubmit(onSubmit)}>
          <Input
            hookform={register("email", { pattern: /\S+@\S+\.\S+/ })}
            data="이메일"
            title="이메일"
            placeholder="이메일을 입력해 주세요"
            wrong={emailError}
            name="email"
            handleFocus={handleFocus("email")}
            handleBlur={handleBlur("email")}
          />
          <Input
            hookform={register("nickname")}
            data="닉네임"
            title="닉네임"
            placeholder="닉네임을 입력해 주세요"
            wrong={nicknameError}
            name="nickname"
            handleFocus={handleFocus("nickname")}
            handleBlur={handleBlur("nickname")}
          />
          <Input
            hookform={register("password")}
            title="비밀번호"
            placeholder="8자 이상 입력해 주세요"
            data="pwd"
            wrong={pwdError}
            name="password"
            handleFocus={handleFocus("password")}
            handleBlur={handleBlur("password")}
          />
          <Input
            hookform={register("passwordCheck")}
            title="비밀번호확인"
            placeholder="비밀번호를 한번 더 입력해 주세요"
            data="pwd"
            wrong={pwdCheckError}
            name="passwordCheck"
            handleFocus={handleFocus("passwordCheck")}
            handleBlur={handleBlur("passwordCheck")}
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
          {lastCheck ? (
            <S.button type="submit">가입하기</S.button>
          ) : (
            <S.noneButton>가입하기</S.noneButton>
          )}
          <S.logintext>
            이미 가입하셨나요?
            <S.linkLogin>
              <Link href={"/signin"}>로그인하기</Link>
            </S.linkLogin>
          </S.logintext>
        </S.form>
      </S.container>
    </>
  );
}

export default Signup;
