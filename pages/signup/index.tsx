import * as S from "./styled";
import Input from "@/components/input";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import axios from "@/lib/axios";
import { useRouter } from "next/router";
import ModalCheckIt from "@/components/modal/modalCheckIt";

interface valuesType {
  이메일: string;
  닉네임: string;
  pwd비밀번호: string;
  pwd비밀번호확인: string;
}

function Signup() {
  const router = useRouter();
  const [showSuccessModal, setShowSuccessModal] = useState<boolean>(false); // 회원가입 성공 모달
  const [showErrorModal, setShowErrorModal] = useState<boolean>(false); // 회원가입 실패 모달
  const [isChecked, setIsChecked] = useState<boolean>(false); // 이용약관 체크
  const [emailError, setemailError] = useState<boolean>(false); // 각종 에러 문구
  const [pwdError, setpwdError] = useState<boolean>(false);
  const [pwdCheckError, setpwdCheckError] = useState<boolean>(false);
  const [nicknameError, setNicknameError] = useState<boolean>(false);
  const [values, setValues] = useState<valuesType>({
    이메일: "",
    닉네임: "",
    pwd비밀번호: "",
    pwd비밀번호확인: "",
  }); // input value값

  // 이용약관 체크 확인
  const handleCheckBoxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setIsChecked(e.target.checked);
  };

  const {
    이메일: email,
    닉네임: nickname,
    pwd비밀번호: password,
    pwd비밀번호확인: passwordCheck,
  } = values;

  // 각 input value값 추출
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { id, value } = e.target;
    setValues((prevValues) => ({
      ...prevValues,
      [id]: value,
    }));
  };

  // 회원가입 실행
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      if (isChecked && !emailError && !pwdCheckError && !nicknameError) {
        const response = await axios.post("users", {
          email,
          nickname,
          password,
        });
        if (response.status === 201) {
          setShowSuccessModal(true);
          router.push("/signin");
        }
      }
    } catch (error: any) {
      if (error.response && error.response.status === 409) {
        setShowErrorModal(true);
      } else {
        console.error("회원가입 요청 오류:", error);
      }
    }
  };

  const handleModalToggle = () => {
    // setShowSuccessModal(false);
    setShowErrorModal(false);
  };

  // 유효성검사 true 나오게끔
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

  const validatePasswordCheck = (passwordCheck: string, password: string) => {
    const isvalidatePasswordCheck = password === passwordCheck;
    setpwdCheckError(!isvalidatePasswordCheck);

    setValues((prev) => ({
      ...prev,
      pwd비밀번호확인: passwordCheck,
    }));
  };

  const validateNickname = (nickname: string) => {
    const isvalidateNuckname = nickname.length <= 10 && nickname.length !== 0;
    setNicknameError(!isvalidateNuckname);

    setValues((prev) => ({
      ...prev,
      닉네임: nickname,
    }));
  };

  // foucs out
  const handleBlur = (e: React.FocusEvent<HTMLInputElement>) => {
    switch (e.target.id) {
      case "이메일":
        validateEmail(e.target.value);
        break;
      case "닉네임":
        validateNickname(e.target.value);
        break;
      case "pwd비밀번호":
        validatePassword(e.target.value);
        break;
      case "pwd비밀번호확인":
        validatePasswordCheck(e.target.value, password);
        break;
      default:
        break;
    }
  };

  // foucs in
  const handleFocusEmail = () => {
    //스위치 돌리기.
    setemailError(false);
  };
  const handleFocusNickname = () => {
    setNicknameError(false);
  };
  const handleFocusPassword = () => {
    setpwdError(false);
  };
  const handleFocusPasswordCheck = () => {
    setpwdCheckError(false);
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
    passwordCheck == password &&
    password.length >= 8 &&
    /\S+@\S+\.\S+/.test(email) &&
    nickname.length <= 10;

  return (
    <>
      {showSuccessModal && (
        <ModalCheckIt
          text="가입이 완료되었습니다!"
          submitButton="확인"
          wrong={handleModalToggle}
        />
      )}
      {showErrorModal && (
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

        <S.form onSubmit={handleSubmit}>
          <Input
            data="이메일"
            title="이메일"
            placeholder="이메일을 입력해 주세요"
            handleBlur={handleBlur}
            wrong={emailError}
            handleChange={handleChange}
            value={values.이메일}
            test={handleFocusEmail}
          />
          <Input
            data="닉네임"
            title="닉네임"
            placeholder="닉네임을 입력해 주세요"
            handleChange={handleChange}
            value={values.닉네임}
            wrong={nicknameError}
            handleBlur={handleBlur}
            test={handleFocusNickname}
          />
          <Input
            title="비밀번호"
            placeholder="8자 이상 입력해 주세요"
            data="pwd"
            handleChange={handleChange}
            value={values.pwd비밀번호}
            wrong={pwdError}
            handleBlur={handleBlur}
            test={handleFocusPassword}
          />
          <Input
            title="비밀번호확인"
            placeholder="비밀번호를 한번 더 입력해 주세요"
            data="pwd"
            handleChange={handleChange}
            value={values.pwd비밀번호확인}
            wrong={pwdCheckError}
            handleBlur={handleBlur}
            test={handleFocusPasswordCheck}
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
