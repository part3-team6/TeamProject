import Image from "next/image";
import * as S from "./styled";
import { MouseEvent, useEffect, useState } from "react";
import Link from "next/link";
import Modal from "../modal/modal";
import axios from "@/lib/axios";
import ColorData from "@/components/modal/newDashboardColor";
import useSideStore from "@/store/side";
import useModalToggle from "@/hooks/useModal";

interface Dashboard {
  id: number;
  title: string;
  color: string;
  createdAt: string;
  updatedAt: string;
  createdByMe: boolean;
  userId: number;
}

interface SidemenuProps {
  myDashboard?: () => void;
  id?: string | string[];
}

function Sidemenu({ myDashboard, id }: SidemenuProps) {
  const { side, setSide } = useSideStore();
  const [isMobile, setIsMobile] = useState<boolean>(false);
  const [tablet, setTablet] = useState<boolean>(false);
  const [values, setValues] = useState<string>(""); // 모달 인풋창 스테이트
  const [isModalOpen, openModal, closeModal] = useModalToggle(false); // 모달창 토글
  const [choiceColor, setChoiceColor] = useState<string | null>(""); // 모달창 컬러 선택 스테이트
  const [sideList, setSideList] = useState<{
    cursorId: number;
    totalCount: number;
    dashboards: Dashboard[];
  } | null>();

  useEffect(() => {
    setSideList(side);
  }, [side]);

  const handleModalCancel = () => {
    closeModal();
  };

  const handleNewDashboardClick = () => {
    openModal();
  };

  const handleModalEsc = (event: KeyboardEvent) => {
    if (event?.key === "Escape") {
      closeModal();
    }
  };

  // 사이드바 대쉬보드
  const sideBarDashboards = async () => {
    try {
      const res = await axios.get(
        `dashboards?navigationMethod=pagination&cursorId=1&page=1&size=100`,
      );
      setSide(res.data);
    } catch (error) {
      console.error("사이드바 대쉬보드 불러오기 오류", error);
    }
  };

  useEffect(() => {
    setSide(null);
    sideBarDashboards();
  }, []);

  const createDashboard = async () => {
    try {
      const res = await axios.post("dashboards", {
        title: values,
        color: choiceColor,
      });
      if (res.status === 201) {
        sideBarDashboards();
        if (myDashboard) {
          myDashboard();
        }
      }
    } catch (error: any) {
      console.error("대쉬보드 생성 오류.", error);
    }
    closeModal();
  };

  // 컬러 값 가져오는거
  const handleColor = (e: MouseEvent) => {
    const colors = e.currentTarget.getAttribute("data-color");
    setChoiceColor(colors);
  };

  useEffect(() => {
    const handleTabletResize = () => {
      setTablet(window.innerWidth <= 1199);
    };

    const handleResize = () => {
      setIsMobile(window.innerWidth <= 767);
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

  useEffect(() => {
    // ColorData 배열에서 랜덤한 인덱스 선택
    const randomIndex = Math.floor(Math.random() * ColorData.length);
    // 선택된 인덱스의 색상을 가져와서 상태로 설정
    const randomColor = ColorData[randomIndex].backgroundColor;
    setChoiceColor(randomColor);
  }, [isModalOpen]);
  return (
    <>
      {isModalOpen && (
        <Modal
          title="새로운 대시보드"
          submitButton="생성"
          cancelButton="취소"
          name="대시보드 이름"
          Placeholder="뉴프로젝트"
          cancel={handleModalCancel}
          value={setValues}
          submit={createDashboard}
          handleModalEsc={handleModalEsc}
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
        <Link href={`/mydashboard `}>
          <S.sideLogo>
            {isMobile ? (
              <Image src={"/images/logoNavMobile.svg"} alt="logo" fill />
            ) : (
              <Image src={"/images/logoNavPc.svg"} alt="logo" fill />
            )}
          </S.sideLogo>
        </Link>

        <S.subTitle>
          <span>Dash Boards</span>

          <S.more onClick={handleNewDashboardClick}>
            <Image src={"/images/chip+white.svg"} alt="more" fill />
          </S.more>
        </S.subTitle>

        <S.sideLists>
          {sideList?.dashboards?.map((item, index) => (
            <S.sideList key={index} selectId={Number(id)} itemID={item.id}>
              <Link href={`/boards/${item.id}`}>
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
        </S.sideLists>
      </S.sidemenu>
    </>
  );
}

export default Sidemenu;
