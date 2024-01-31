import React, { useEffect, useState } from "react";
import * as S from "@/components/todoModal/styled";
import Image from "next/image";
import addBox from "@/public/images/add_FILL0_wght500_GRAD0_opsz24 1.svg";
import arrowDropDown from "@/public/images/arrowDropDown.svg";
import calenderToday from "@/public/images/calendarToday.svg";
import DropDownModal from "./dropDownModal";
import axios from "@/lib/axios";

interface ModalInterface {}

function CreateModal({}: ModalInterface) {
  const [managerDropDown, setManagerDropDown] = useState(false);

  const handleManagerDropDownClick = () => {
    setManagerDropDown(!managerDropDown);
  };

  function handlePressEnter(e: any) {
    if (e.key === "Enter") e.preventDefault();
  }

  async function fetchMembers() {
    try {
      const response = await axios.get("members");
      const members = response.data;

      console.log("회원 목록:", members);
    } catch (error) {
      console.error("회원 가져오기 오류:", error);
    }
  }

  useEffect(() => {
    fetchMembers();
  }, []);

  return (
    <>
      <S.layer>
        <S.container>
          <div>
            <S.mainTitle>할 일 생성</S.mainTitle>
            <S.inputTitle>담당자</S.inputTitle>
            <S.arrowDropContainer onClick={handleManagerDropDownClick}>
              <S.managerInput placeholder="이름을 입력해 주세요"></S.managerInput>
              {managerDropDown && <DropDownModal />}
              <S.arrowDropWrapper>
                <Image
                  src={arrowDropDown}
                  alt="Dropdown"
                  width={24}
                  height={24}
                />
              </S.arrowDropWrapper>
            </S.arrowDropContainer>
            <S.inputTitle>제목 *</S.inputTitle>
            <S.input placeholder="제목을 입력해 주세요" />
            <S.inputTitle>설명 *</S.inputTitle>
            <S.descriptionInput placeholder="설명을 입력해 주세요" />
            <S.inputTitle>마감일</S.inputTitle>
            <S.calenderContainer>
              <S.calenderWrapper>
                <Image
                  src={calenderToday}
                  alt="마감일 캘린더 아이콘"
                  width={15}
                  height={15}
                />
              </S.calenderWrapper>
              <S.input
                style={{ paddingLeft: "3rem" }}
                placeholder="날짜를 입력해 주세요"
              />
            </S.calenderContainer>

            <S.inputTitle>태그</S.inputTitle>
            <S.input placeholder="입력 후 Enter" />
            <S.inputTitle>이미지</S.inputTitle>
            <S.ImageContainer>
              <Image
                style={{ cursor: "pointer" }}
                src={addBox}
                alt="이미지 가져오기 버튼"
                width={76}
                height={76}
              ></Image>
            </S.ImageContainer>
            <S.buttonContainer>
              <S.cancelButton>취소</S.cancelButton>
              <S.button>생성</S.button>
            </S.buttonContainer>
          </div>
        </S.container>
      </S.layer>
    </>
  );
}

export default CreateModal;
