import Image from "next/image";
import * as S from "./styled";
import { useEffect, useState } from "react";
import NoDash from "./noDash";
import axios from "@/lib/axios";

interface dashboardType {
  id: number;
  title: string;
}

interface itemType {
  createdAt: string;
  dashboard: dashboardType;
  id: number;
  inviteAccepted: null;
  invitee: object;
  inviter: object;
  teamId: string;
  updatedAt: string;
}

function InviteDash({ inviteList }: any) {
  const [ismobile, setIsMobile] = useState<boolean>(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [inviteAccepted, setInviteAccepted] = useState<boolean>(Boolean);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
  };

  const handleSearch = () => {
    const results = inviteList?.invitations?.filter((item: itemType) => {
      const inviterDashboard = item.dashboard?.title.toLowerCase();

      return (
        inviterDashboard && inviterDashboard.includes(searchTerm.toLowerCase())
      );
    });
    setSearchResults(results);
  };

  const handleinviteToggle = async (action: string, invitationId: number) => {
    try {
      let response;
      if (action === "accept") {
        response = await axios.put(`invitations/${invitationId}`, {
          inviteAccepted: true,
        });
      } else if (action === "reject") {
        response = await axios.put(`invitations/${invitationId}`, {
          inviteAccepted: false,
        });
      }
    } catch (error) {
      console.error("초대 수락 거절 오류", error);
    } finally {
      window.location.reload();
    }
  };

  useEffect(() => {
    setIsMobile(window.innerWidth <= 767);
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 767);
    };
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    handleSearch();
  }, [searchTerm, setInviteAccepted]);

  return inviteList?.invitations?.length !== 0 ? (
    <S.container>
      <S.title>초대받은 대쉬보드</S.title>
      <S.inputContainer>
        <S.input
          type="text"
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
        <>
          {searchTerm && searchResults?.length > 0 ? (
            searchResults.map((data: any) => (
              <S.section key={data.id}>
                <S.menuDiv>
                  <S.menu>이름</S.menu>
                  <S.text>{data.dashboard.title}</S.text>
                </S.menuDiv>
                <S.menuDiv>
                  <S.menu>초대자</S.menu>
                  <S.text>{data.inviter.nickname}</S.text>
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
          ) : !searchTerm ? (
            inviteList?.invitations.map((data: any, index?: number) => (
              <S.section key={index}>
                <S.menuDiv>
                  <S.menu>이름</S.menu>
                  <S.text>{data.dashboard.title}</S.text>
                </S.menuDiv>
                <S.menuDiv>
                  <S.menu>초대자</S.menu>
                  <S.text>{data.inviter.nickname}</S.text>
                </S.menuDiv>
                <S.menu display={"none"}>수락 여부</S.menu>

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
            <NoDash />
          )}
        </>
      ) : (
        <>
          <S.menuDiv>
            <S.menu>이름</S.menu>
            <S.menu>초대자</S.menu>
            <S.menu display={"none"}>수락 여부</S.menu>
          </S.menuDiv>
          {searchTerm && searchResults?.length > 0 ? (
            searchResults.map((data: any, index: number) => (
              <S.section key={index}>
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
            ))
          ) : !searchTerm ? (
            inviteList?.invitations.map((data: any, index: number) => (
              <S.section key={index}>
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
            ))
          ) : (
            <NoDash />
          )}
        </>
      )}
    </S.container>
  ) : (
    <S.container>
      <S.title>초대받은 대쉬보드</S.title>
      <S.inputContainer>
        <S.input
          type="text"
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
      <NoDash />
    </S.container>
  );
}

export default InviteDash;
