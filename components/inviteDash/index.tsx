import Image from "next/image";
import * as S from "./styled";
import { useEffect, useState } from "react";
import { Mock } from "./mock";
import NoDash from "./noDash";

// interface mockDataType {
//   name: string;
//   inviter: string;
//   color: string;
//   handleinviteToggle: any;
// }

// 마무리하고 useEffect손 대보기 불필요한 렌더링 방지.
// 다 만들고 로직 바꿔보던가 CSS 를 그리드 함 해보기.

function InviteDash({ handleinviteToggle, mock }: any) {
  const [values, setValues] = useState("");
  const [ismobile, setIsMobile] = useState(false);
  // console.log(ismobile);

  useEffect(() => {
    setIsMobile(window.innerWidth <= 767);
    window.addEventListener("resize", () => {
      // 창의 너비가 변경될 때마다 isMobile 값을 업데이트
      setIsMobile(window.innerWidth <= 767);
    });

    return () => {
      window.removeEventListener("resize", () => {
        // 컴포넌트가 언마운트될 때 이벤트 리스너 제거
        setIsMobile(window.innerWidth <= 767);
      });
    };
  }, [setIsMobile]);

  return mock?.invitations?.length !== 0 ? (
    // return Mock?.invitations === undefined ? (
    <>
      <S.container>
        <S.title>초대받은 대쉬보드</S.title>
        <S.inputContainer>
          <S.input
            placeholder="검색"
            onChange={(e) => setValues(e.target.value)}
          />
          <S.searchIcon>
            <Image
              src={"images/search.svg"}
              alt="검색 돋보기"
              width={24}
              height={24}
            />
          </S.searchIcon>
        </S.inputContainer>
        {ismobile ? (
          mock?.invitations.map((data: any, index?: number) => (
            <S.section key={index}>
              <S.menuDiv>
                <S.menu>
                  이름
                  <S.text>{data?.inviter.nickname}</S.text>
                </S.menu>
                <S.menu>
                  초대자
                  <S.text>{data?.dashboard.title}</S.text>
                </S.menu>
                <S.menu display={"none"}>수락 여부</S.menu>
              </S.menuDiv>

              <S.buttonGap>
                <S.yesButton
                  data-action="accept"
                  onClick={() => handleinviteToggle("accept")}
                >
                  수락
                </S.yesButton>
                <S.noButton
                  data-action="reject"
                  onClick={() => handleinviteToggle("reject")}
                >
                  거절
                </S.noButton>
              </S.buttonGap>
            </S.section>
          ))
        ) : (
          <>
            <S.menuDiv>
              <S.menu>이름</S.menu>
              <S.menu>초대자</S.menu>
              <S.menu display={"none"}>수락 여부</S.menu>
            </S.menuDiv>
            {mock?.invitations.map((data: any, index: number) => (
              <S.section key={index}>
                <S.text>{data.dashboard.title}</S.text>
                <S.text>{data.inviter.nickname}</S.text>
                <S.buttonGap>
                  <S.yesButton
                    data-action="accept"
                    onClick={() => handleinviteToggle("accept")}
                  >
                    수락
                  </S.yesButton>
                  <S.noButton
                    data-action="reject"
                    onClick={() => handleinviteToggle("reject")}
                  >
                    거절
                  </S.noButton>
                </S.buttonGap>
              </S.section>
            ))}
          </>
        )}
      </S.container>
    </>
  ) : (
    <NoDash />
  );
}

export default InviteDash;
