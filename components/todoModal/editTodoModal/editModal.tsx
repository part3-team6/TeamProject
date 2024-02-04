import React, { useState } from "react";
import * as S from "@/components/todoModal/styled";
import Image from "next/image";
import addFill from "@/public/images/add_FILL0_wght500_GRAD0_opsz24 1.svg";
import arrowDropDown from "@/public/images/arrowDropDown.svg";
import calenderToday from "@/public/images/calendarToday.svg";
import DropDownModal from "@/components/todoModal/dropDownModal";

interface EditModalProps {
  closeEditModal: () => void;
  editCard: (newCard: any) => void;
}

function EditModal({ closeEditModal, editCard }: EditModalProps) {
  const [statusDropDown, setStatusDropDown] = useState(false);
  const [managerDropDown, setManagerDropDown] = useState(false);

  const handleStatusDropDownClick = () => {
    setStatusDropDown(!statusDropDown);
  };

  const handleManagerDropDownClick = () => {
    setManagerDropDown(!managerDropDown);
  };

  const handleEditCard = (e: any) => {
    if (e.key === "Enter") e.preventDefault();

    const newCard = {};
    editCard(newCard);
    closeEditModal();
  };

  return (
    <S.layer>
      <S.container>
        <div>
          <S.mainTitle>할 일 수정</S.mainTitle>
          <S.flexContainer>
            <S.flexContainers>
              <S.inputTitle>상태</S.inputTitle>
              <S.arrowDropContainer onClick={handleStatusDropDownClick}>
                <S.statusInput />
                <S.arrowDropWrapper style={{ right: "1rem" }}>
                  <Image
                    src={arrowDropDown}
                    alt="Dropdown"
                    width={24}
                    height={24}
                  ></Image>
                </S.arrowDropWrapper>
              </S.arrowDropContainer>
              {statusDropDown && <DropDownModal />}
            </S.flexContainers>

            <S.flexContainers>
              <S.inputTitle>담당자</S.inputTitle>

              <div style={{ position: "relative" }}>
                <S.managerInput placeholder="담당자 검색창" />
                <div
                  style={{
                    position: "absolute",
                    cursor: "pointer",
                    top: "20%",
                    right: "1rem",
                  }}
                  onClick={handleManagerDropDownClick}
                >
                  <Image
                    src={arrowDropDown}
                    alt="Dropdown"
                    width={24}
                    height={24}
                  />
                </div>
              </div>
              {managerDropDown && <DropDownModal />}
            </S.flexContainers>
          </S.flexContainer>

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
              ></Image>
            </S.calenderWrapper>
            <S.input placeholder="날짜를 입력해 주세요" type="date" />
          </S.calenderContainer>

          <S.inputTitle>태그</S.inputTitle>
          <S.input placeholder="입력 후 Enter" />
          <S.inputTitle>이미지</S.inputTitle>
          <S.ImageContainer>
            <Image
              style={{ cursor: "pointer" }}
              src={addFill}
              alt="이미지 가져오기 버튼"
              width={76}
              height={76}
            ></Image>
          </S.ImageContainer>
          <S.buttonContainer>
            <S.cancelButton onClick={closeEditModal}>취소</S.cancelButton>
            <S.button onClick={handleEditCard}>확인</S.button>
          </S.buttonContainer>
        </div>
      </S.container>
    </S.layer>
  );
}

export default EditModal;
