// import Head from "next/head";
import NavBar from "@/components/nav/NavBar";
import * as S from "./styled";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect } from "react";
import { motion } from "framer-motion";

export default function Home() {
  const router = useRouter();
  useEffect(() => {
    const LS = localStorage.getItem("login");
    if (LS !== null) {
      router.push(`/boards`);
    }
  }, []);
  return (
    <S.landingBack>
      <NavBar black={true} />
      <S.landinginner>
        <S.mainWrap>
          <S.mainImg>
            <Image src={"/images/landing.png"} alt="메인이미지" fill />
          </S.mainImg>
          <S.mainText>
            <p>
              새로운 일정 관리 <span>Taskify</span>
            </p>
          </S.mainText>
          <S.login>
            <Link href={"/signin"}>로그인하기</Link>
          </S.login>
        </S.mainWrap>

        <S.pointWrap>
          <S.pointText>
            <p>point1</p>
            <S.point>
              일의 우선순위를
              <br />
              관리하세요
            </S.point>
          </S.pointText>

          <S.pointImg>
            <Image src={"/images/point1.png"} alt="point1" fill />
          </S.pointImg>
        </S.pointWrap>

        <S.pointWrap>
          <S.pointImg>
            <Image src={"/images/point2.png"} alt="point1" fill />
          </S.pointImg>

          <S.pointText>
            <p>point2</p>
            <S.point>
              해야 할 일을
              <br />
              등록하세요
            </S.point>
          </S.pointText>
        </S.pointWrap>

        <S.how>
          <S.howTitle>생산성을 높이는 다양한 설정 ⚡</S.howTitle>

          <S.howCards>
            <S.howCard>
              <S.howImg>
                <S.howImgWrap>
                  <Image src={"/images/how3.png"} alt="how" fill />
                </S.howImgWrap>
              </S.howImg>

              <S.howText>
                <p>대시보드 설정</p>

                <p>대시보드 사진과 이름을 변경할 수 있어요.</p>
              </S.howText>
            </S.howCard>

            <S.howCard>
              <S.howImg>
                <S.howImgWrap>
                  <Image src={"/images/how1.png"} alt="how" fill />
                </S.howImgWrap>
              </S.howImg>

              <S.howText>
                <p>초대</p>

                <p>새로운 팀원을 초대할 수 있어요.</p>
              </S.howText>
            </S.howCard>

            <S.howCard>
              <S.howImg>
                <S.howImgWrap>
                  <Image src={"/images/how2.png"} alt="how" fill />
                </S.howImgWrap>
              </S.howImg>

              <S.howText>
                <p>구성원</p>

                <p>구성원을 초대하고 내보낼 수 있어요.</p>
              </S.howText>
            </S.howCard>
          </S.howCards>
        </S.how>

        <S.footer>
          <p>@codeit - 2023</p>
          <S.faq>
            <p>Privacy Policy</p>
            <p>FAQ</p>
          </S.faq>
          <S.sns>
            <Link href={"/"}>
              <S.snsImg>
                <Image src={"/images/email.svg"} alt="sns img" fill />
              </S.snsImg>
            </Link>
            <Link href={"/"}>
              <S.snsImg>
                <Image src={"/images/facebook.svg"} alt="sns img" fill />
              </S.snsImg>
            </Link>
            <Link href={"/"}>
              <S.snsImg>
                <Image src={"/images/instagram.svg"} alt="sns img" fill />
              </S.snsImg>
            </Link>
          </S.sns>
        </S.footer>
      </S.landinginner>
    </S.landingBack>
  );
}
