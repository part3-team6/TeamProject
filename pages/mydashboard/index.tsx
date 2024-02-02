import Header from "@/components/dashHeader";
import Mock from "./mock";
import Sidemenu from "@/components/sidemenu";
import mock from "@/components/sidemenu/mock";
import * as S from "./styled";
import Image from "next/image";
import { useEffect, useState } from "react";
import Modal from "@/components/modal/modal";
import ColorData from "@/components/modal/newDashboardColor";
import InviteDash from "@/components/inviteDash";
import axios from "@/lib/axios";
import { useRouter } from "next/router";
import useUserStore from "@/store/user";

// https://sp-taskify-api.vercel.app/1-7/invitations?size=5
// 이게 초대목록 보여주는거임
// 내가받은초대목록조회
//

// 초대 수락 거절 버튼은
// 초대 응답에 바디에 실어서 true면 수락 false 면 거절

// 대쉬보드 클릭시 드가는게 대시보드 조회
interface newDashboard {
  cursorId?: number;
  totalCount?: number;
  dashboards?: {
    id?: number;
    title?: string;
    color?: string;
    createdAt?: Date;
    updatedAt?: Date;
    createdByMe?: boolean;
    userId?: number;
  }[];
}

function Mydashboard() {
  const router = useRouter();
  const { user } = useUserStore(); // 유저 정보 주스탄드
  const [createDashboardModal, setCreateDashboardModal] = useState(false); // 모달창 토글
  const [choiceColor, setChoiceColor] = useState(""); // 모달창 컬러 선택 스테이트
  const [values, setValues] = useState<string>(""); // 모달 인풋창 스테이트
  const [newDashboard, setNewDashboard] = useState<newDashboard | any>(Object); // 대쉬보드 목록
  const [invited, setInvited] = useState<any>(null); // 초대 토글..? 이건 뭐드라..?
  const [currentPage, setCurrentPage] = useState<number>(1); // 페이지네이션
  const [accepReject, setAccepReject] = useState(Boolean); // 초대 수락 거절 토글
  const [currentUser, setCurrentUser] = useState<any>(null); // 유저 정보

  // 아 이거 유저 정보 가져오는거.
  useEffect(() => {
    setCurrentUser(user);
  }, [user]);

  // console.log(dashboards);
  // const { dashboards } = newDashboard;

  // 대쉬보드 총 페이지
  const sizePages = 5;
  const totalPages = Math.ceil(newDashboard.totalCount / sizePages);

  // 페이지네이션 증가
  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
      myDashboard(currentPage + 1, sizePages);
    }
  };

  // 페이지네이션 감소
  const handlePreviousPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
      myDashboard(currentPage - 1, sizePages);
    }
  };

  // 컬러 값 가져오는거
  const handleColor = (e: any) => {
    const colors = e.currentTarget.getAttribute("data-color");
    setChoiceColor(colors);
  };

  //모달 토글
  const handleModalCancel = () => {
    setCreateDashboardModal(false);
  };

  const handleNewDashboardClick = () => {
    setCreateDashboardModal(true);
  };

  // 초대 수락 거절 토글
  // const handleinviteToggle = () => {
  //   if () {
  //     setAccepReject(true)
  //   } else if () {
  //     setAccepReject(false)
  //   }
  // };

  // 새로운 대쉬보드 생성
  const createDashboard = async () => {
    try {
      const res = await axios.post("dashboards", {
        title: values,
        color: choiceColor,
      });
      if (res.status === 201) {
        myDashboard(currentPage, sizePages);
      }
      // router.push("/boardid");
    } catch (error: any) {
      console.error("대쉬보드 생성 오류.", error);
    }
    setCreateDashboardModal(false);
  };

  // 생성 혹은 초대 받은 대쉬보드 목록
  const myDashboard = async (page: any, sizePages: any) => {
    try {
      const res = await axios.get(
        `dashboards?navigationMethod=pagination&cursorId=1&page=${page}&size=${sizePages}`,
      );
      console.log(res.data);
      setNewDashboard(res.data);
    } catch (error: any) {
      console.error("대쉬보드 불러오기 오류", error);
    }
  };

  // 초대받은 목록 데이터
  const inviteList = async () => {
    try {
      const res = await axios.get(`invitations?size=5`);
      setInvited(res);
    } catch (error) {
      console.error("초대목록 에러", error);
    }
  };

  // "invitations": [
  //   {
  //     "id": 0,

  // 초대 수락 거절
  const inviteAcceptReject = async (invitationId: number) => {
    try {
      const res = await axios.put(`invitations/${invitationId}`, accepReject);
    } catch (error: any) {
      console.error("초대 수락 거절 오류", error);
    }
  };

  // 초대하기 id 값 따오기
  // const test = () => {
  //   if (invited !== null) {
  //     const [{ id }] = invited;
  //   }
  // };

  // 대쉬보드 클릭시 해당 대쉬보드 이동
  const handleThisDashboard = (id: string) => {
    // const [{ id }] = newDashboard.dashboards;
    if (newDashboard?.dashboards?.length) {
      // router.push(`mydashboard/${id}`);
      router.push(`mydashboard/${id}`);
    }
  };

  // 대쉬보드 생길때마다 혹은 페이지네이션 실행시 실행됨.
  useEffect(() => {
    myDashboard(currentPage, sizePages);
    // inviteAcceptReject(invitationId)
  }, [setNewDashboard, setCurrentPage]);

  return (
    <>
      {createDashboardModal && (
        <Modal
          title="새로운 대시보드"
          submitButton="생성"
          cancelButton="취소"
          name="대시보드 이름"
          Placeholder="뉴프로젝트"
          cancel={handleModalCancel}
          value={setValues}
          submit={createDashboard}
        >
          <S.EllipseUl>
            {ColorData.map((color) => (
              <S.colorEllipseInner
                choiceColor={choiceColor}
                backgroundColor={color.backgroundColor}
              >
                <S.colorEllipse
                  key={color.id}
                  data-color={color.backgroundColor}
                  backgroundColor={color.backgroundColor}
                  onClick={handleColor}
                />
                {color && (
                  <Image
                    src={"/images/colorCheck.svg"}
                    alt="컬러색상체크"
                    fill
                  />
                )}
              </S.colorEllipseInner>
            ))}
          </S.EllipseUl>
        </Modal>
      )}
      <Header title="내 대시보드" mock={Mock} />

      <Sidemenu mock={newDashboard} />
      <S.background>
        <S.mainContainer>
          <S.dashboardGrid>
            <S.Dashboard onClick={handleNewDashboardClick}>
              <S.DashboardText>새로운 대시보드</S.DashboardText>
              <S.newDashBoardButton>
                <Image src={"/images/chip+.svg"} alt="+버튼" fill />
              </S.newDashBoardButton>
            </S.Dashboard>
            {newDashboard?.dashboards?.map((data: any) => (
              <S.Dashboard
                onClick={() => handleThisDashboard(data.id)}
                key={data.id}
              >
                <S.dashboardColor
                  backgroundColor={data.color}
                ></S.dashboardColor>
                <S.DashboardText>{data.title}</S.DashboardText>
                {data.createdByMe && (
                  <S.crown>
                    <Image src={"/images/crown.svg"} alt="왕관" fill />
                  </S.crown>
                )}
              </S.Dashboard>
            ))}
            <S.pageNationFlex>
              <S.NpagesN>
                {totalPages}페이지중{currentPage}
              </S.NpagesN>
              <S.pageNation onClick={handlePreviousPage}>
                <Image
                  src={"images/arrowPagenationLeft.svg"}
                  alt="이전페이지"
                  fill
                />
              </S.pageNation>
              <S.pageNation onClick={handleNextPage}>
                <Image
                  src={"images/arrowPagenationRight.svg"}
                  alt="다음페이지"
                  fill
                />
              </S.pageNation>
            </S.pageNationFlex>
          </S.dashboardGrid>

          <InviteDash />
        </S.mainContainer>
      </S.background>
    </>
  );
}

export default Mydashboard;
