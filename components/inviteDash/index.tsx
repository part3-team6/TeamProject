import Image from "next/image";
import * as S from "./styled";
import { useEffect, useState } from "react";
import NoDash from "./noDash";
import axios from "@/lib/axios";

// interface mockDataType {
//   name: string;
//   inviter: string;
//   color: string;
//   handleinviteToggle: any;
// }

// 마무리하고 useEffect손 대보기 불필요한 렌더링 방지.
// 다 만들고 로직 바꿔보던가 CSS 를 그리드 함 해보기.

function InviteDash({ mock }: any) {
  const [ismobile, setIsMobile] = useState(false);

  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  const handleInputChange = (event: any) => {
    setSearchTerm(event.target.value);
  };

  const handleSearch = () => {
    const results = mock?.invitarions.filter((item: any) =>
      item.toLowerCase().includes(searchTerm.toLowerCase()),
    );
    setSearchResults(results);
  };
  // console.log(ismobile);

  const handleinviteToggle = async (action: string, invitationId: number) => {
    try {
      let response;
      if (action === "accept") {
        response = await axios.put(`invitations/${invitationId}`, {
          inviteAccepted: true,
          // setInviteAccepted(true);
        });
      } else if (action === "reject") {
        response = await axios.put(`invitations/${invitationId}`, {
          inviteAccepted: false,
        });
      }
    } catch (error) {
      console.error("초대 수락 거절 오류", error);
    }
  };

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

  // mock?.invitations.map((data: { id: any }) => {
  //   console.log(data.id);
  // });

  return mock?.invitations?.length !== 0 ? (
    // return Mock?.invitations === undefined ? (
    <>
      <S.container>
        <S.title>초대받은 대쉬보드</S.title>
        <S.inputContainer>
          <S.input
            placeholder="검색"
            onChange={handleInputChange}
            value={searchTerm}
          />
          <S.searchIcon onClick={handleSearch}>
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
            <S.section key={data.id}>
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
                  onClick={() => handleinviteToggle("accept", data.id)}
                >
                  수락
                </S.yesButton>
                <S.noButton
                  data-action="reject"
                  onClick={() => handleinviteToggle("reject", data.id)}
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
              <S.section key={data.id}>
                <S.text>{data.dashboard.title}</S.text>
                <S.text>{data.inviter.nickname}</S.text>
                <S.buttonGap>
                  <S.yesButton
                    data-action="accept"
                    onClick={() => handleinviteToggle("accept", data.id)}
                  >
                    수락
                  </S.yesButton>
                  <S.noButton
                    data-action="reject"
                    onClick={() => handleinviteToggle("reject", data.id)}
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
