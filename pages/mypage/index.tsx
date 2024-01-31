import useUserStore from "@/store/user";
import * as S from "./styled";
import axios from "@/lib/axios";
import { useEffect, useState } from "react";
import Sidemenu from "@/components/sidemenu";
import mock from "@/components/sidemenu/mock";
import mocks from "@/components/dashHeader/mock";
import Header from "@/components/dashHeader";
import Image from "next/image";
import Input from "@/components/input";
import { useRouter } from "next/router";
import ModalCheckIt from "@/components/modal/modalCheckIt";
import useToggle from "@/hooks/useToggle";

interface Member {
  id: number;
  userId: number;
  email: string;
  nickname: string;
  profileImageUrl: string;
  createdAt: string;
  updatedAt: string;
  isOwner: boolean;
}

function MyPage() {
  const { user, setUser } = useUserStore();
  const [currentUser, setCurrentUser] = useState<Member | null>(null);
  const [previewUrl, setPreviewUrl] = useState("/images/more.svg");
  const [pwdWrong, setPwdWrong] = useState(false);
  const [modalText, setModalText] = useState("");
  const [showPwdError, setShowPwdError, showPwdToggle] = useToggle(false);
  const [profileValue, setProfileValue] = useState({
    nickname: user.nickname,
    profileImageUrl: null,
  });
  const router = useRouter();
  console.log(pwdWrong);
  const [pwdValue, setPwdValue] = useState({
    password: "",
    newPassword: "",
  });
  console.log(pwdValue);
  // -- 이미지 / 닉네임 변경 시작
  const fetchProfileImage = async () => {
    try {
      const response = await axios.get("users/me");
      // if (response.data.profileImageUrl !== null) {
      //   setPreviewUrl(response.data.profileImageUrl);
      // }
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchProfileImage();
  }, []);

  useEffect(() => {
    setCurrentUser(user);
  }, [user]);

  const uploadImage = async (file: string | Blob) => {
    const formData = new FormData();
    formData.append("image", file);

    try {
      const response = await axios.post(`/users/me/image`, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      fetchProfileImage();
      return response.data;
    } catch (err) {
      console.error(err);
      return null;
    }
  };

  const handleChangeProfile = async (e: { preventDefault: () => void }) => {
    e.preventDefault();
    try {
      const res = await axios.put(`users/me`, profileValue);
      setUser(res.data);
      console.log(res.data);
      if (!res.data.profileImageUrl) {
        setPreviewUrl("/images/more.svg");
      } else {
        setPreviewUrl(res.data.profileImageUrl);
      }
    } catch (err) {
      console.log(err);
    }
  };

  const validateNick = (nickname: string) => {
    if (nickname.length <= 10) {
      setProfileValue((prev) => ({
        ...prev,
        nickname: nickname,
      }));
    }
  };

  const handleFileChange = async (event: { target: { files: any[] } }) => {
    const file = event.target.files[0];
    if (file && file.type.startsWith("image/")) {
      const imageUrl = await uploadImage(file);
      if (imageUrl) {
        setProfileValue((prev) => ({
          ...prev,
          profileImageUrl: imageUrl.profileImageUrl,
        }));

        setPreviewUrl(imageUrl.profileImageUrl);
        router.push("/mypage");
      }
    }
  };

  const handleFocusOut = (e: React.FocusEvent<HTMLInputElement>) => {
    if (e.target.id === "닉네임") {
      validateNick(e.target.value);
    }
  };
  // -- 이미지 / 닉네임 변경 끝

  // 비밀번호 변경 시작
  const pwdChange = async (e: MouseEvent) => {
    e.preventDefault();
    if (!pwdWrong && pwdValue.password !== "" && pwdValue.newPassword !== "") {
      try {
        const res = await axios.put("/auth/password", pwdValue);
        console.log(res);
        setModalText("비밀번호가 변경 되었습니다");
        showPwdToggle();
        router.push("/mypage");
      } catch (err) {
        console.log(err);
        setModalText(err.response.data.message);
        showPwdToggle();
      }
    }
    // setModalText("값이 전부 비어있습니다.");
    // showPwdToggle();
  };

  const getPwd = (e: MouseEvent) => {
    if (pwdValue.password === "") {
      setPwdWrong(true);
    }
    setPwdValue((prev) => ({
      ...prev,
      password: e.target.value,
    }));
  };

  const getNewPwd = (e: MouseEvent) => {
    setPwdValue((prev) => ({
      ...prev,
      newPassword: e.target.value,
    }));
  };

  const checkPwd = (e: MouseEvent) => {
    if (pwdValue.newPassword !== e.target.value) {
      setPwdWrong(true);
    } else {
      setPwdWrong(false);
    }
  };

  // 비밀번호 변경 끝

  return (
    <>
      {showPwdError && (
        <ModalCheckIt
          text={modalText}
          submitButton="확인"
          wrong={showPwdToggle}
        />
      )}
      <Header mock={mocks[0]} title="계정관리"></Header>
      <Sidemenu mock={mock}></Sidemenu>
      <S.mypage>
        <S.back>{"<"} 뒤로가기</S.back>

        <S.box onSubmit={handleChangeProfile}>
          <S.boxTitle>프로필</S.boxTitle>
          <S.inputBox>
            <S.boxImg>
              <Image
                key={previewUrl}
                src={previewUrl}
                alt="이미지 추가"
                fill
                placeholder="blur"
                blurDataURL={"/images/more.svg"}
              />
              <S.changeImg>
                <S.changeImginner htmlFor="file"></S.changeImginner>
                <input
                  type="file"
                  name="file"
                  id="file"
                  onChange={handleFileChange}
                />
              </S.changeImg>
            </S.boxImg>
            <S.inputs>
              {currentUser && (
                <>
                  <Input
                    title="이메일"
                    placeholder={currentUser.email}
                    data="이메일"
                    disabled="disabled"
                  />
                  <Input
                    title="닉네임"
                    placeholder={currentUser.nickname}
                    data="닉네임"
                    handleBlur={handleFocusOut}
                  />
                </>
              )}
            </S.inputs>
          </S.inputBox>
          <S.submit
            type="submit"
            // onClick={handleChangeProfile}
            value={"저장"}
            pwdWrong={false}
          />
        </S.box>

        <S.box onSubmit={pwdChange}>
          <S.boxTitle>비밀번호 변경</S.boxTitle>
          <S.inputBox>
            <S.inputs>
              <Input
                title="현재 비밀번호"
                placeholder="현재 비밀번호 입력"
                data="pwd"
                handleBlur={getPwd}
              />
              <Input
                title="새 비밀번호"
                placeholder="새 비밀번호 입력"
                data="pwd"
                handleBlur={getNewPwd}
                handleChange={checkPwd}
              />
              <Input
                title="새 비밀번호 확인"
                placeholder="새 비밀번호 입력"
                data="pwd"
                handleChange={checkPwd}
                wrong={pwdWrong}
              />
            </S.inputs>
          </S.inputBox>
          <S.submit
            type="submit"
            value="변경"
            pwdWrong={pwdWrong}
            // disabled={pwdWrong}
          />
        </S.box>
      </S.mypage>
    </>
  );
}

export default MyPage;
