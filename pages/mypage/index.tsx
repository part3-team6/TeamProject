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
  const [previewUrl, setPreviewUrl] = useState(
    user.profileImageUrl || "/images/more.svg",
  );
  const [profileValue, setProfileValue] = useState({
    nickname: "",
    profileImageUrl: "",
  });
  const router = useRouter();

  const fetchProfileImage = async () => {
    try {
      const response = await axios.get("users/me");
      setPreviewUrl(response.data.profileImageUrl); // 상태 업데이트 추가
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
      router.push("/mypage");
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
        setPreviewUrl(imageUrl);
        setProfileValue((prev) => ({
          ...prev,
          profileImageUrl: imageUrl.profileImageUrl,
        }));
      }
    }
  };

  const handleFocusOut = (e: React.FocusEvent<HTMLInputElement>) => {
    if (e.target.id === "닉네임") {
      validateNick(e.target.value);
    }
  };
  return (
    <>
      <Header mock={mocks[0]} title="계정관리"></Header>
      <Sidemenu mock={mock}></Sidemenu>
      <S.mypage>
        <S.back>{"<"} 뒤로가기</S.back>

        <S.box onSubmit={handleChangeProfile}>
          <S.boxTitle>프로필</S.boxTitle>
          <S.inputBox>
            <S.boxImg>
              <Image
                src={previewUrl ? previewUrl : "/images/more.svg"}
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
          />
        </S.box>

        <S.box>
          <S.boxTitle>비밀번호 변경</S.boxTitle>
          <S.inputBox>
            <S.inputs>
              <Input
                title="현재 비밀번호"
                placeholder="현재 비밀번호 입력"
                data="현재 비밀번호"
              />
              <Input
                title="새 비밀번호"
                placeholder="새 비밀번호 입력"
                data="새 비밀번호"
              />
              <Input
                title="새 비밀번호 확인"
                placeholder="새 비밀번호 입력"
                data="새 비밀번호 확인"
              />
            </S.inputs>
          </S.inputBox>
          <S.submit type="submit" value={"변경"} />
        </S.box>
      </S.mypage>
    </>
  );
}

export default MyPage;
