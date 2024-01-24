import Image from "next/image";
import * as S from "./styled";
import { useEffect, useState } from "react";
import Link from "next/link";

interface SidemenuProps {
  mock: [
    {
      title: string;
      mine: boolean;
      color: string;
    },
  ];
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
      <Link href={"/link"}>
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

      {mock.map((item, index) => (
        <S.sideList key={index}>
          <Link href={"/link"}>
            <S.colors style={{ backgroundColor: item.color }}></S.colors>
            <span>{item.title}</span>
            {item.mine && (
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
