import React, { forwardRef } from "react";
import { useRouter } from "next/router";
import useUserStore from "@/store/user";
import * as S from "./styled";

const DropDown: React.ForwardRefRenderFunction<HTMLDivElement, {}> = (
  props,
  ref,
) => {
  const router = useRouter();
  const { user } = useUserStore();

  const logout = () => {
    localStorage.removeItem("login");
    localStorage.removeItem("user-store");
    router.push("/");
  };

  return (
    <S.drop ref={ref}>
      <S.myWrap>
        <div>{user.nickname}</div>
        <div>{user.email}</div>
      </S.myWrap>
      <S.btn>
        <S.btns onClick={() => router.push("/mypage")}>계정관리</S.btns>
        <S.btns onClick={logout}>로그아웃</S.btns>
      </S.btn>
    </S.drop>
  );
};

export default forwardRef<HTMLDivElement, {}>(DropDown);
