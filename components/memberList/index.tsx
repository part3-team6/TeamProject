import { useEffect, useState } from "react";
import * as S from "./styled";
import Image from "next/image";
import Member from "./Member";
import Email from "./Email";
import { mocData, mocData2 } from "./moc";
import useEditStore from "@/store/edit";

interface Member {
  id: number;
  userId: number;
  email: string;
  nickname: string;
  profileImageUrl: string;
  createdAt: string;
  updatedAt: string;
  isOwner: boolean;
}

interface MapData {
  members: Member[];
  totalCount: number;
}

interface MapData2 {
  totalCount: number;
  invitations: {
    id: number;
    inviter: {
      nickname: string;
      email: string;
      id: number;
    };
    teamId: string;
    dashboard: {
      title: string;
      id: number;
    };
    invitee: {
      nickname: string;
      email: string;
      id: number;
    };
    inviteAccepted: boolean;
    createdAt: string;
    updatedAt: string;
  }[];
}

function List({
  props,
  memberListData,
  emailListData,
  handleKickUser,
  handleCancelEmail,
}: {
  props: string;
  memberListData?: MapData;
  emailListData?: MapData2;
  handleKickUser: (targetId: number) => Promise<void>;
  handleCancelEmail: (targetId: number) => Promise<void>;
}) {
  //프롭스로 member나 invite를 내려줘 한번에 변경 가능
  const [listType, setListType] = useState<string>(props);
  const [windowWidth, setWindowWidth] = useState<number>(1700);
  const [isMobile, setIsMobile] = useState<boolean>(false);
  const [totalPage, setTotalPage] = useState<number>(1);
  const [curruntPage, setCurruntPage] = useState<number>(1);
  const [invitedEmail, setInvitedEmail] = useState<any>([]);
  const [mapData, setMapData] = useState<MapData>({
    members: [],
    totalCount: 0,
  });
  const [mapData2, setMapData2] = useState<MapData2>({
    invitations: [],
    totalCount: 0,
  });
  const { inviteModalState, setInviteModalState } = useEditStore();

  const handleSetInviteModalStateTrue = () => {
    setInviteModalState(true);
  };

  const handleNextPage = () => {
    if (curruntPage < totalPage) {
      setCurruntPage(curruntPage + 1);
    }
  };

  const handlePrevPage = () => {
    if (curruntPage > 1) {
      setCurruntPage(curruntPage - 1);
    }
  };

  useEffect(() => {
    const type = props;

    let calculatedTotalPage = 1;

    const emailList = emailListData?.invitations.filter(
      (i) => i.inviteAccepted === null,
    );

    if (type === "member") {
      if (memberListData?.totalCount !== 0) {
        calculatedTotalPage = Math.ceil(memberListData?.totalCount / 4);
      }
    } else {
      if (emailList?.length !== 0) {
        calculatedTotalPage = Math.ceil(emailList?.length / 5);
      }
    }

    setListType(type);
    setTotalPage(calculatedTotalPage);
  }, [memberListData, emailListData]);

  useEffect(() => {
    const emailList = emailListData?.invitations.filter(
      (i) => i.inviteAccepted === null,
    );

    setInvitedEmail(emailList);

    if (listType === "member") {
      let data: any = { members: "" };
      data.members = memberListData?.members.slice(
        (curruntPage - 1) * 4,
        (curruntPage - 1) * 4 + 4,
      );
      console.log("members", data.members);
      setMapData(data);
    } else if (listType === "invite") {
      let data2: any = { invitations: "" };
      data2.invitations = emailList?.slice(
        (curruntPage - 1) * 5,
        (curruntPage - 1) * 5 + 5,
      );
      setMapData2(data2);
    }
  }, [curruntPage, memberListData, emailListData]);

  useEffect(() => {
    setIsMobile(window.innerWidth <= 767);

    window.addEventListener("resize", () => {
      setIsMobile(window.innerWidth <= 767);
    });

    return () => {
      window.removeEventListener("resize", () => {
        setIsMobile(window.innerWidth <= 767);
      });
    };
  }, [windowWidth]);

  return (
    <S.ListContainer type={listType}>
      <S.Title>
        <S.TitleName>
          {listType === "member"
            ? "구성원"
            : listType === "invite"
            ? "초대 내역"
            : ""}
        </S.TitleName>
        <S.Pagenation>
          <S.PageCount>
            {totalPage ? totalPage : ""} 페이지 중 {curruntPage}
          </S.PageCount>
          <S.PagenationButtonContainer>
            <S.PagenationButtonLeft>
              <S.PagenationButtonImgContainer onClick={handlePrevPage}>
                <Image fill alt="왼쪽" src="/images/arrowPagenationLeft.svg" />
              </S.PagenationButtonImgContainer>
            </S.PagenationButtonLeft>
            <S.PagenationButtonRight>
              <S.PagenationButtonImgContainer onClick={handleNextPage}>
                <Image
                  fill
                  alt="오른쪽"
                  src="/images/arrowPagenationRight.svg"
                />
              </S.PagenationButtonImgContainer>
            </S.PagenationButtonRight>
          </S.PagenationButtonContainer>
          {isMobile ? (
            ""
          ) : listType === "invite" ? (
            <S.InviteButton onClick={handleSetInviteModalStateTrue}>
              <S.InviteButtonContainer>
                <Image alt="초대버튼의 +이미지" src="/images/addBox.svg" fill />
              </S.InviteButtonContainer>
              <S.InviteText>초대하기</S.InviteText>
            </S.InviteButton>
          ) : (
            ""
          )}
        </S.Pagenation>
      </S.Title>
      <S.SortContainer type={listType}>
        <S.Sort>
          {listType === "member"
            ? "이름"
            : listType === "invite"
            ? "이메일"
            : ""}
        </S.Sort>
        {isMobile ? (
          listType === "invite" ? (
            <S.InviteButton onClick={handleSetInviteModalStateTrue}>
              <S.InviteButtonContainer>
                <Image alt="초대버튼의 +이미지" src="/images/addBox.svg" fill />
              </S.InviteButtonContainer>
              <S.InviteText>초대하기</S.InviteText>
            </S.InviteButton>
          ) : (
            ""
          )
        ) : (
          ""
        )}
      </S.SortContainer>
      {listType === "member" ? (
        <S.MemberList>
          {mapData?.members?.map((item, index) => (
            <Member
              key={`${index}-member`}
              profileImageUrl={item.profileImageUrl}
              nickname={item.nickname}
              isOwner={item.isOwner}
              id={item.id}
              userId={item.userId}
              handleKickUser={handleKickUser}
            />
          ))}
        </S.MemberList>
      ) : listType === "invite" ? (
        emailListData?.totalCount === 0 ? (
          ""
        ) : (
          <S.MemberList>
            {mapData2?.invitations?.map((item, index) => (
              <Email
                key={`${index}-email`}
                email={item.invitee.email}
                id={item.id}
                handleCancelEmail={handleCancelEmail}
              />
            ))}
          </S.MemberList>
        )
      ) : (
        ""
      )}
      {emailListData?.totalCount === 0 && listType === "invite" ? (
        <S.NoEmailImgContainer>
          <Image
            alt="초대없음 이미지"
            src="/images/noInvitedEmail.svg"
            width={100}
            height={100}
          />
          <S.NoEmailText>초대 내역이 없습니다.</S.NoEmailText>
        </S.NoEmailImgContainer>
      ) : (
        ""
      )}
    </S.ListContainer>
  );
}

export default List;
