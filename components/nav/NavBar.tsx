import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import * as S from "./style";

function NavBar({ black }: { black: boolean }) {
  const [windowWidth, setWindowWidth] = useState<number>(1920);
  const [isMobile, setIsMobile] = useState<boolean>(false);

  const handleSetWindowWidth = () => {
    setWindowWidth(window.innerWidth);
  };

  useEffect(() => {
    window.addEventListener("resize", handleSetWindowWidth);

    if (windowWidth <= 767) {
      setIsMobile(true);
    } else {
      setIsMobile(false);
    }

    return () => {
      window.removeEventListener("resize", handleSetWindowWidth);
    };
  }, [windowWidth]);

  return (
    <S.Nav black={black}>
      <S.LogoContainer>
        {isMobile ? (
          <Image
            fill
            priority
            alt="로고이미지"
            src={
              black
                ? "/images/logoNavBlackMobile.svg"
                : "/images/logoNavMobile.svg"
            }
          />
        ) : (
          <Image
            fill
            priority
            alt="로고이미지"
            src={black ? "/images/logoNavBlackPc.svg" : "/images/logoNavPc.svg"}
          />
        )}
      </S.LogoContainer>
      <S.LoginoutContainer>
        <Link href={"/signin"}>
          <S.Loginout black={black}>로그인</S.Loginout>
        </Link>
        <Link href={"/signup"}>
          <S.Loginout black={black}>회원가입</S.Loginout>
        </Link>
      </S.LoginoutContainer>
    </S.Nav>
  );
}

export default NavBar;
