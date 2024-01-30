import useUserStore from "@/store/user";
import * as S from "./styled";
import axios from "@/lib/axios";
import { useEffect } from "react";
import Sidemenu from "@/components/sidemenu";
import mock from "@/components/sidemenu/mock";
import mocks from "@/components/dashHeader/mock";
import Header from "@/components/dashHeader";

function MyPage() {
  const { user, setUser } = useUserStore();
  console.log(user);

  const test = async () => {
    try {
      const res = await axios.get(`dashboards`);
      console.log(res);
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {
    test();
  }, []);
  return (
    <>
      <Header mock={mocks[0].members}></Header>
      <Sidemenu mock={mock}></Sidemenu>
      <S.mypage>
        <S.back>{"<"} 뒤로가기</S.back>
      </S.mypage>
    </>
  );
}

export default MyPage;
