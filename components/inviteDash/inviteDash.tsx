import Image from "next/image";
import * as S from "./styled";
import SEARCH_IMG from "./contents";
import { useState } from "react";
import mock from "./mock";

// 목 데이터 map으로 빨래질 한 타입
interface mockDataType {
  name: string;
  inviter: string;
  color: string;
}

function InviteDash() {
  const [values, setValues] = useState("");

  console.log(values);
  return (
    <>
      <S.container>
        <S.title>초대받은 대쉬보드</S.title>
        <S.inputContainer>
          <S.input
            placeholder="검색"
            onChange={(e) => setValues(e.target.value)}
          />
          <S.searchIcon>
            <Image src={SEARCH_IMG} alt="검색 돋보기" width={24} height={24} />
          </S.searchIcon>
        </S.inputContainer>
        <S.menuDiv>
          <S.menu>이름</S.menu>
          <S.menu>초대자</S.menu>
          <S.menu>수락 여부</S.menu>
        </S.menuDiv>
        {mock.map((data: mockDataType, index: number) => (
          <S.section key={index}>
            <S.colors backgroundColor={data.color} />
            <S.text>{data.name}</S.text>
            <S.text>{data.inviter}</S.text>
            <S.buttonGap>
              <S.yesButton>수락</S.yesButton>
              <S.noButton>거절</S.noButton>
            </S.buttonGap>
          </S.section>
        ))}
      </S.container>
    </>
  );
}

export default InviteDash;
