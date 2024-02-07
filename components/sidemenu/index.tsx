import Image from "next/image";
import * as S from "./styled";
import { useEffect, useState } from "react";
import Link from "next/link";
import Modal from "../modal/modal";
import axios from "@/lib/axios";
import ColorData from "@/components/modal/newDashboardColor";

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
  sideBarDashboard?: () => void;
  myDashboard?: any;
}

function Sidemenu({ mock, sideBarDashboard, myDashboard }: SidemenuProps) {
  const [isTablet, setIsTablet] = useState(false);
  const [tablet, setTablet] = useState(false); // 이게 진짜 태블릿
  const [values, setValues] = useState<string>(""); // 모달 인풋창 스테이트
  const [createDashboardModal, setCreateDashboardModal] = useState(false); // 모달창 토글
  const [choiceColor, setChoiceColor] = useState(""); // 모달창 컬러 선택 스테이트
  const [sideList, setSideList] = useState<{
    cursorId: number;
    totalCount: number;
    dashboards: Dashboard[];
  } | null>();
  useEffect(() => {
    setSideList(mock);
  }, [mock]);

  const handleModalCancel = () => {
    setCreateDashboardModal(false);
  };

  const handleNewDashboardClick = () => {
    setCreateDashboardModal(true);
  };

  const createDashboard = async () => {
    try {
      const res = await axios.post("dashboards", {
        title: values,
        color: choiceColor,
      });
      if (res.status === 201) {
        sideBarDashboard();
        myDashboard();
      }
      // router.push("/boardid");
    } catch (error: any) {
      console.error("대쉬보드 생성 오류.", error);
    }
    setCreateDashboardModal(false);
  };

  // 컬러 값 가져오는거
  const handleColor = (e: any) => {
    const colors = e.currentTarget.getAttribute("data-color");
    setChoiceColor(colors);
  };

  useEffect(() => {
    const handleTabletResize = () => {
      setTablet(window.innerWidth <= 1199);
    };

    const handleResize = () => {
      setIsTablet(window.innerWidth <= 767);
    };

    // 이벤트 리스너 등록
    window.addEventListener("resize", handleTabletResize);
    window.addEventListener("resize", handleResize);

    // 초기 사이즈 체크
    handleTabletResize();
    handleResize();

    // 컴포넌트 언마운트시 이벤트 리스너 제거
    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("resize", handleTabletResize);
    };
  }, []);

  const truncateText = (text: string, maxLength: number) => {
    if (text.length > maxLength) {
      return text.slice(0, maxLength) + "...";
    } else {
      return text;
    }
  };

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

          <S.more onClick={handleNewDashboardClick}>
            <Image src={"/images/chip+white.svg"} alt="more" fill />
          </S.more>
        </S.subTitle>

        {sideList?.dashboards?.map((item, index) => (
          <S.sideList key={index}>
            <Link href={`boards/${item.id}`}>
              <S.colors style={{ backgroundColor: item.color }}></S.colors>
              {!tablet ? (
                <span>{item.title}</span>
              ) : (
                <span>{truncateText(item.title, 4)}</span>
              )}
              {item.createdByMe && (
                <S.crown>
                  <Image src={"/images/crown.svg"} alt="crown" fill />
                </S.crown>
              )}
            </Link>
          </S.sideList>
        ))}
      </S.sidemenu>
    </>
  );
}

export default Sidemenu;
