import Image from "next/image";
import * as S from "./styled";
import { useEffect, useState } from "react";
import Link from "next/link";

interface Dashboard {
  id: number;
  title: string;
  color: string;
  createdAt: string; // 혹은 Date 형식으로 바꿀 수도 있어, 라이브러리에 맞게
  updatedAt: string; // 마찬가지로 Date 형식 고려해봐
  createdByMe: boolean;
  userId: number;
}

interface SidemenuProps {
  mock: {
    cursorId: number;
    totalCount: number;
    dashboards: Dashboard[];
  };
}

function Sidemenu({ mock }: SidemenuProps) {
  const [isTablet, setIsTablet] = useState(false);
  useEffect(() => {
    const handleResize = () => {
      setIsTablet(window.innerWidth <= 767);
    };

    // 이벤트 리스너 등록
    window.addEventListener("resize", handleResize);

    // 초기 사이즈 체크
    handleResize();

    // 컴포넌트 언마운트시 이벤트 리스너 제거
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <S.sidemenu>
      <Link href={`/`}>
        <S.sideLogo>
          {isTablet ? (
            <Image src={"/images/logoNavMobile.svg"} alt="logo" fill />
          ) : (
            <Image src={"/images/logoNavPC.svg"} alt="logo" fill />
          )}
        </S.sideLogo>
      </Link>

      <S.subTitle>
        <span>Dash Boards</span>

        <S.more>
          <Image src={"/images/chip+white.svg"} alt="more" fill />
        </S.more>
      </S.subTitle>

      {mock?.dashboards?.map((item, index) => (
        <S.sideList key={index}>
          <Link href={`boards/${item.id}`}>
            <S.colors style={{ backgroundColor: item.color }}></S.colors>
            <span>{item.title}</span>
            {item.createdByMe && (
              <S.crown>
                <Image src={"/images/crown.svg"} alt="crown" fill />
              </S.crown>
            )}
          </Link>
        </S.sideList>
      ))}
    </S.sidemenu>
  );
}

export default Sidemenu;
