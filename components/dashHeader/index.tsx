import Image from "next/image";
import * as S from "./styled";
import { useEffect, useState } from "react";

interface HeaderProps {
  mock: [
    {
      color: string;
      name: string;
    },
  ];
  title: string;
}

function Header({ mock, title }: HeaderProps) {
  const [member, setMember] = useState(true);
  const [isTablet, setIsTablet] = useState(true);

  useEffect(() => {
    const handleResize = () => {
      setIsTablet(window.innerWidth <= 1124);
    };

    // 이벤트 리스너 등록
    window.addEventListener("resize", handleResize);

    // 초기 사이즈 체크
    handleResize();

    // 컴포넌트 언마운트시 이벤트 리스너 제거
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const sliceMock = isTablet ? mock.slice(0, 2) : mock.slice(0, 5);
  return (
    <S.headerWrap>
      <S.dashBoard>{title}</S.dashBoard>
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
        <S.member>
          {member &&
            sliceMock.slice(0, 4).map((item, index) => (
              <S.headerCircle
                key={index}
                style={{ backgroundColor: item.color }}
              >
                {item.name.slice(0, 1).toUpperCase()}
              </S.headerCircle>
            ))}
          {sliceMock ? (
            <S.headerCircle>+{mock.length - 2}</S.headerCircle>
          ) : (
            <S.headerCircle>+{mock.length - 4}</S.headerCircle>
          )}
        </S.member>

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
