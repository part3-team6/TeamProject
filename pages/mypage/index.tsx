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
import { useForm, SubmitHandler } from "react-hook-form";

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

interface IFormInput {
  nickname: string;
  profileImageUrl: string;
}
interface PwdChange {
  password: number;
  newPassword: number;
  newPasswordCheck: number;
}

function MyPage() {
  const { user, setUser } = useUserStore();
  const [currentUser, setCurrentUser] = useState<Member | null>(null);
  const [previewUrl, setPreviewUrl] = useState("/images/more.svg");
  const [pwdWrong, setPwdWrong] = useState(false);
  const [modalText, setModalText] = useState("");
  const [showPwdError, setShowPwdError, showPwdToggle] = useToggle(false);

  const { register: register1, handleSubmit: handleSubmit1 } =
    useForm<IFormInput>();
  const onSubmit1: SubmitHandler<IFormInput> = (data) => {
    const postData = {
      nickname: data.nickname,
      profileImageUrl: profileValue.profileImageUrl,
    };
    handleChangeProfile(postData);
  };

  const {
    register: register2,
    handleSubmit: handleSubmit2,
    watch: watch2,
  } = useForm<PwdChange>();
  const onSubmit2: SubmitHandler<PwdChange> = (data) => {
    const pwdValue = {
      password: data.password,
      newPassword: data.newPassword,
    };

    if (data.newPasswordCheck !== data.newPassword) {
      setPwdWrong(true);
    } else {
      setPwdWrong(false);
      pwdChange(pwdValue);
    }
  };

  const [profileValue, setProfileValue] = useState({
    nickname: user.nickname,
    profileImageUrl: null,
  });

  const router = useRouter();

  // -- 이미지 / 닉네임 변경 시작
  const fetchProfileImage = async () => {
    try {
      const response = await axios.get("users/me");
      if (response.data.profileImageUrl !== null) {
        setPreviewUrl(response.data.profileImageUrl);
      }
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
      if (response.status === 201) {
        fetchProfileImage();
      }
      console.log(response.status);
      return response.data;
    } catch (err) {
      console.error(err);
      return null;
    }
  };

  const handleChangeProfile = async (data: {
    nickname: string;
    profileImageUrl: null;
  }) => {
    try {
      const res = await axios.put(`users/me`, data);
      setUser(res.data);
      if (!res.data.profileImageUrl) {
        setPreviewUrl("/images/more.svg");
      } else {
        setPreviewUrl(res.data.profileImageUrl);
      }
    } catch (err) {
      console.log(err);
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

  // -- 이미지 / 닉네임 변경 끝

  // 비밀번호 변경 시작
  const pwdChange = async (data: { password: any; newPassword: any }) => {
    if (!pwdWrong && data.password !== "" && data.newPassword !== "") {
      try {
        const res = await axios.put("/auth/password", data);
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

  // 비밀번호 변경 끝

  console.log(watch2("password"));
  const aaa = (e) => {
    console.log(123);
  };

  return (
    <S.wrap>
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

        <S.box onSubmit={handleSubmit1(onSubmit1)}>
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
                  {...register1("profileImageUrl")}
                  type="file"
                  name="profileImageUrl"
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
                    hookform={register1("nickname")}
                    title="닉네임"
                    placeholder={currentUser.nickname}
                    defaultValue={currentUser.nickname}
                    data="닉네임"
                    name="nickname"
                  />
                </>
              )}
            </S.inputs>
          </S.inputBox>
          <S.submit type="submit" value={"저장"} />
        </S.box>

        <S.box onSubmit={handleSubmit2(onSubmit2)}>
          <S.boxTitle>비밀번호 변경</S.boxTitle>
          <S.inputBox>
            <S.inputs>
              <Input
                hookform={register2("password")}
                title="현재 비밀번호"
                placeholder="현재 비밀번호 입력"
                data="pwd"
                name="password"
              />
              <Input
                hookform={register2("newPassword")}
                title="새 비밀번호"
                placeholder="새 비밀번호 입력"
                data="pwd"
                name="newPassword"
              />
              <Input
                hookform={register2("newPasswordCheck")}
                title="새 비밀번호 확인"
                placeholder="새 비밀번호 입력"
                data="pwd"
                wrong={pwdWrong}
                name="newPasswordCheck"
                handleBlur={aaa}
              />
            </S.inputs>
          </S.inputBox>
          <S.submit type="submit" value="변경" />
        </S.box>
      </S.mypage>
    </S.wrap>
  );
}

export default MyPage;
