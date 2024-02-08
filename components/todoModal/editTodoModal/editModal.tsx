import React, { useState, useEffect, useRef } from "react";
import * as S from "@/components/todoModal/styled";
import Image from "next/image";
import addBox from "@/public/images/add_FILL0_wght500_GRAD0_opsz24 1.svg";
import arrowDropDown from "@/public/images/arrowDropDown.svg";
import calenderToday from "@/public/images/calendarToday.svg";
import DropDownModal from "@/components/todoModal/dropDownModal";
import StatusDropDownModal from "./status";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import axios from "@/lib/axios";
import { useRouter } from "next/router";
import Button from "@/components/modal/modalButton";

interface ColorMap {
  [key: string]: string; // 모든 문자열 키에 대해 string 타입의 값을 가짐
}

interface EditModalProps {
  closeEditCardModal: () => void;
  editCard: (newCard: any) => void;
  columnId: number;
}

function EditModal({ closeEditModal, editCard, columnId }: EditModalProps) {
  const router = useRouter();
  const { id } = router.query;

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [statusDropDown, setStatusDropDown] = useState(false);
  const [managerDropDown, setManagerDropDown] = useState(false);
  const [selectedManager, setSelectedManager] = useState<{
    nickname: string;
    id: number;
    imgUrl?: string;
  } | null>(null);
  const [selectedMemberIndex, setSelectedMemberIndex] = useState(0);
  const [memberList, setMemberList] = useState<any[]>([]);
  const [deadline, setDeadline] = useState<Date>();
  const [tags, setTags] = useState<string[]>([]);
  const [inputValue, setInputValue] = useState(""); // 태그 인풋밸류
  const [image, setImage] = useState<string | null>("");
  const [imagePreview, setImagePreview] = useState<any>("");

  const [statusTitles, setStatusTitles] = useState([]);
  const [selectedStatusTitle, setSelectedStatusTitle] = useState("");

  const imageInputRef = useRef<HTMLInputElement>(null); // 이미지 입력을 위한 ref 생성

  // 태그 추가 함수
  const addTag = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && inputValue) {
      if (!tags.includes(inputValue)) {
        setTags([...tags, inputValue]);
        setInputValue(""); // 입력 필드 초기화
      }
      e.preventDefault();
    }
  };
  // 태그 삭제 함수
  const removeTag = (index: number) => {
    setTags(tags.filter((_, i) => i !== index));
  };

  // 이미지를 선택했을 때 호출될 함수
  const handleImageChange = async (e: any) => {
    const file = e.target.files[0];
    if (file && file.type.substr(0, 5) === "image") {
      const imageUrl = await uploadImage(file);
      setImage(imageUrl);
      // 이미지 미리보기
      const reader = new FileReader();
      reader.onloadend = () => {
        setImagePreview(reader.result?.toString());
      };
      reader.readAsDataURL(file);
    } else {
      setImage("");
      setImagePreview("");
    }
  };

  const uploadImage = async (file: string | Blob) => {
    const formData = new FormData();
    formData.append("image", file);

    try {
      const response = await axios.post(
        `columns/${columnId}/card-image`,
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        },
      );
      if (response.status === 201) {
        // const response = await axios.get(`columns/${columnId}/`);
        // return response.data.imageUrl;
        return response.data.imageUrl;
      }
    } catch (err) {
      console.error(err);
      return null;
    }
  };

  // 이미지 입력 요소를 클릭하는 함수
  const triggerImageInputClick = () => {
    // ref를 통해 image input 요소에 접근하여 클릭 이벤트를 발생시킴
    if (imageInputRef.current) {
      imageInputRef.current.click();
    }
  };

  // 상태창 제목 조작 함수
  const handleSelectStatusTitle = (title: string) => {
    setSelectedStatusTitle(title);
    setStatusDropDown(false); // 드롭다운 닫기
  };

  // 상태창 드롭디운 함수
  const handleStatusDropDownClick = () => {
    setStatusDropDown(!statusDropDown);
  };

  // 담당자 클릭시 드롭다운 함수
  const handleManagerDropDownClick = () => {
    setManagerDropDown(!managerDropDown);
  };

  // 대시보드 멤버 목록 조회
  const fetchMembers = async () => {
    try {
      const response = await axios.get(
        `members?page=1&size=20&dashboardId=${id}`,
      );
      const memberList = response.data.members.map((member: any) => ({
        nickname: member.nickname,
        id: member.userId,
        email: member.email,
        profileImageUrl: member.profileImageUrl,
        createdAt: member.createdAt,
      }));
      console.log("memberList!!!!", memberList);
      setMemberList(memberList);
    } catch (error) {
      console.error("회원 가져오기 오류:", error);
    }
  };

  // 컬럼 목록 조회
  async function fetchColumn() {
    try {
      const response = await axios.get(`/columns?dashboardId=${id}`);
      console.log(response);
      setStatusTitles(response.data.data.map((column: any) => column.title));
    } catch (error) {
      console.error("컬럼 가져오기 오류", error);
    }
  }

  useEffect(() => {
    fetchMembers();
    fetchColumn();
  }, []);

  const handleTitleChange = (e: any) => {
    setTitle(e.target.value);
  };

  const handleDescriptionChange = (e: any) => {
    setDescription(e.target.value);
  };

  const hangeulColorMap: ColorMap = {
    ㄱ: "#f44336",
    ㄴ: "#e91e63",
    ㄷ: "#9c27b0",
  };

  const getHangeulColor = (tag: string): string => {
    const firstLetter = tag[0]; // 태그 첫 글자 가져옴
    return hangeulColorMap[firstLetter] || "#F1EFFD"; // 기본값 흰색
  };

  // 태그 색상 지정 함수
  const getTagStyle = (tag: string): React.CSSProperties => {
    const tagColor = getHangeulColor(tag);
    return {
      backgroundColor: tagColor,
    };
  };

  const handleEditCard = (e: any) => {
    if (e.key === "Enter") e.preventDefault();

    const newCard = {};
    editCard(newCard);
    closeEditCardModal();
  };

  return (
    <>
      <S.layer>
        <S.container style={{ height: "98rem" }}>
          <form>
            <S.mainTitle>할 일 수정</S.mainTitle>
            <S.flexContainer>
              <S.flexContainers>
                <S.inputTitle>상태</S.inputTitle>
                <S.arrowDropContainer onClick={handleStatusDropDownClick}>
                  <S.statusInput
                    value={selectedStatusTitle}
                    readOnly
                  ></S.statusInput>
                  {statusDropDown && (
                    <StatusDropDownModal
                      statusTitles={statusTitles}
                      onSelectStatusTitle={handleSelectStatusTitle}
                    />
                  )}
                  <S.arrowDropWrapper style={{ right: "1rem" }}>
                    <Image
                      src={arrowDropDown}
                      alt="Dropdown"
                      width={24}
                      height={24}
                    />
                  </S.arrowDropWrapper>
                </S.arrowDropContainer>
              </S.flexContainers>

              <S.flexContainers>
                <S.inputTitle>담당자</S.inputTitle>
                <div style={{ position: "relative" }}>
                  <S.managerInput
                    placeholder="스크롤로 찾고 프로필을 클릭해 주세요"
                    value={selectedManager ? selectedManager.nickname : ""}
                    readOnly
                  />
                  {selectedManager?.imgUrl ? (
                    <S.selectImgSrap>
                      <Image
                        src={selectedManager?.imgUrl}
                        alt="선택된이미지프로필"
                        fill
                      />
                    </S.selectImgSrap>
                  ) : (
                    <S.selectImgSrap>
                      <S.selectedNick>
                        {selectedManager?.nickname.slice(0, 1).toUpperCase()}
                      </S.selectedNick>
                    </S.selectImgSrap>
                  )}

                  {managerDropDown && (
                    <DropDownModal
                      members={memberList || []}
                      selectedMemberIndex={selectedMemberIndex}
                      onSelectMember={(member) => {
                        setSelectedManager({
                          nickname: member.nickname,
                          id: member.id,
                          imgUrl: member.profileImageUrl,
                        });
                        setManagerDropDown(false); // 드롭다운 닫기
                      }}
                    />
                  )}
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
              </S.flexContainers>
            </S.flexContainer>

            <S.inputTitle>제목 *</S.inputTitle>
            <S.input
              placeholder="제목을 입력해 주세요"
              value={title}
              onChange={handleTitleChange}
            />
            <S.inputTitle>설명 *</S.inputTitle>
            <S.descriptionInput
              value={description}
              placeholder="설명을 입력해 주세요"
              onChange={handleDescriptionChange}
            />
            <S.inputTitle>마감일</S.inputTitle>
            <S.calenderContainer>
              <S.calenderWrapper>
                <Image
                  style={{ position: "relative", zIndex: 1 }}
                  src={calenderToday}
                  alt="마감일 캘린더 아이콘"
                  width={15}
                  height={15}
                />
              </S.calenderWrapper>
            </S.calenderContainer>
            <DatePicker
              placeholderText={"날짜를 선택해 주세요"}
              selected={deadline}
              onChange={(date: Date) => setDeadline(date)}
              dateFormat="yyyy.MM.dd"
              customInput={<S.input style={{ paddingLeft: "3rem" }} />}
            />
            <S.inputTitle>태그</S.inputTitle>
            <S.TagContainer>
              {tags.map((tag, index) => (
                <S.Tag key={index} style={getTagStyle(tag)}>
                  {tag}
                  <button
                    style={{
                      marginLeft: "1rem",
                      width: "1rem",
                      height: "1.3rem",
                    }}
                    type="button"
                    onClick={() => removeTag(index)}
                  >
                    x
                  </button>
                </S.Tag>
              ))}
              <S.TagInput
                value={inputValue}
                onChange={(e) => {
                  setInputValue(e.target.value);
                }}
                onKeyDown={addTag}
                placeholder="태그 추가 후 Enter"
              />
            </S.TagContainer>
            <S.inputTitle>이미지</S.inputTitle>
            <S.ImageContainer onClick={triggerImageInputClick}>
              {imagePreview ? (
                <Image
                  src={imagePreview}
                  alt="미리보기"
                  width={76}
                  height={76}
                />
              ) : (
                <Image
                  style={{ cursor: "pointer" }}
                  src={addBox}
                  alt="이미지 추가"
                  width={76}
                  height={76}
                />
              )}
              <input
                ref={imageInputRef}
                id="imageInput"
                type="file"
                style={{ display: "none" }}
                onChange={handleImageChange}
              />
            </S.ImageContainer>
            <S.buttonContainer>
              <S.cancelButton onClick={closeEditCardModal}>취소</S.cancelButton>
              <Button submit={editCard}>생성</Button>
            </S.buttonContainer>
          </form>
        </S.container>
      </S.layer>
    </>
  );
}
export default EditModal;
