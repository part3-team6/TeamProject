import Image from "next/image";
import * as S from "./styled";
import { useState } from "react";

function Header() {
  const [member, setMember] = useState(true);
  return (
    <S.headerWrap>
      <S.dashBoard>내 대시보드</S.dashBoard>
      <S.headerData>
        <S.btn>
          <Image
            src="/images/settings.svg"
            alt="settings"
            width={20}
            height={20}
          />
          <span>관리</span>
        </S.btn>
        <S.btn>
          <Image
            src="/images/chip+white.svg"
            alt="settings"
            width={20}
            height={20}
          />
          <span>초대하기</span>
        </S.btn>
        {member ? (
          <S.member>
            <S.headerCircle>1</S.headerCircle>
            <S.headerCircle>1</S.headerCircle>
            <S.headerCircle>1</S.headerCircle>
          </S.member>
        ) : null}
        <S.line></S.line>
        <S.myName>
          <S.headerCircle>내</S.headerCircle>
          <span>내 이름</span>
        </S.myName>
      </S.headerData>
    </S.headerWrap>
  );
}

export default Header;
