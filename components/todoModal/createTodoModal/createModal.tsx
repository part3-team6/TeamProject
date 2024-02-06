import React, { useEffect, useState } from "react";
import * as S from "@/components/todoModal/styled";
import Image from "next/image";
import addBox from "@/public/images/add_FILL0_wght500_GRAD0_opsz24 1.svg";
import arrowDropDown from "@/public/images/arrowDropDown.svg";
import calenderToday from "@/public/images/calendarToday.svg";
import DropDownModal from "../dropDownModal";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import axios from "@/lib/axios";
import { useRouter } from "next/router";

interface CreateModalProps {
  closeCreateModal: () => void;
  addCard: (newCard: any) => void;
}

function CreateModal({ closeCreateModal, addCard }: CreateModalProps) {
  const router = useRouter();
  const { id } = router.query;
  console.log(id);

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [managerDropDown, setManagerDropDown] = useState(false);
  const [selectedManager, setSelectedManager] = useState("");
  const [selectedMemberIndex, setSelectedMemberIndex] = useState(0);
  const [memberList, setMemberList] = useState([]);
  const [deadline, setDeadline] = useState<Date | null>(null);
  const [tags, setTags] = useState<string[]>([]);
  const [inputValue, setInputValue] = useState(""); // 태그 인풋밸류
  const [image, setImage] = useState("");
  const [imagePreview, setImagePreview] = useState<string>("");

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
  const handleImageChange = (e: any) => {
    const file = e.target.files[0];
    if (file && file.type.substr(0, 5) === "image") {
      setImage(file);
      // 이미지 미리보기
      const reader = new FileReader();
      reader.onloadend = () => {
        setImagePreview(reader.result.toString());
      };
      reader.readAsDataURL(file);
    } else {
      setImage(null);
      setImagePreview("");
    }
  };

  // 담당자 클릭시 드롭다운 함수
  const handleManagerDropDownClick = () => {
    setManagerDropDown(!managerDropDown);
  };

  function handleCreateCard(e: any) {
    if (e.key === "Enter") e.preventDefault();

    const newCard = {};
    addCard(newCard);
    closeCreateModal();
  }

  // 대시보드 멤버 목록 조회
  async function fetchMembers() {
    try {
      const response = await axios.get(
        "members?page=1&size=20&dashboardId=2682",
      );
      console.log(response);
      const memberList = response.data.members.map((member: any) => ({
        nickname: member.nickname,
        id: member.id,
        email: member.email,
        profileImageUrl: member.profileImageUrl,
        createdAt: member.createdAt,
      }));
      console.log(memberList);
      setMemberList(memberList);
    } catch (error) {
      console.error("회원 가져오기 오류:", error);
    }
  }

  useEffect(() => {
    fetchMembers();
  }, []);

  const handleTitleChange = (e) => {
    setTitle(e.target.value);
  };

  const handleDescriptionChange = (e) => {
    setDescription(e.target.value);
  };

  // 폼 제출로 POST 요청 보내기
  const handleSubmit = async (e: React.FormEvent) => {
    //   e.preventDefault();
    //   // FormData 객체 생성
    //   const formData = new FormData();
    //   // 기본 필드 추가
    //   formData.append("title", title);
    //   formData.append("description", description);
    //   formData.append("tags", JSON.stringify(tags)); // 태그 배열을 문자열로 변환
    //   formData.append("deadline", deadline ? deadline.toISOString() : ""); // 마감일을 ISO 문자열로 변환
    //   // 선택된 멤버의 닉네임 추가
    //   if (memberList[selectedMemberIndex]) {
    //     formData.append("manager", memberList[selectedMemberIndex].nickname);
    //   }
    //   // 이미지 파일이 있다면 추가
    //   if (image) {
    //     formData.append("image", image);
    //   }
    //   try {
    //     const response = await axios.post(`/dashboard/${id}`, formData, {
    //       headers: {
    //         "Content-Type": "multipart/form-data",
    //       },
    //     });
    //     console.log(response.data);
    //     // 성공 처리 로직
    //   } catch (error) {
    //     console.error("할 일 생성 오류:", error);
    //   }
  };

  return (
    <>
      <S.layer>
        <S.container>
          <form onSubmit={handleSubmit}>
            <S.mainTitle>할 일 생성</S.mainTitle>
            <S.inputTitle>담당자</S.inputTitle>
            <S.arrowDropContainer onClick={handleManagerDropDownClick}>
              <S.managerInput
                placeholder="이름을 입력해 주세요"
                value={selectedManager}
                onChange={(e) => setSelectedManager(e.target.value)}
              ></S.managerInput>
              {managerDropDown && (
                <DropDownModal
                  members={memberList || []}
                  selectedMemberIndex={selectedMemberIndex}
                  onSelectMember={(member) => {
                    setSelectedManager(member.nickname); // 멤버의 닉네임을 상태에 저장
                    setManagerDropDown(false); // 드롭다운 닫기
                  }}
                />
              )}
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
            <S.input
              value={title}
              placeholder="제목을 입력해 주세요"
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
              placeholderText={"날짜를 입력해 주세요"}
              selected={deadline}
              onChange={(date: Date | null) => {
                setDeadline(date);
                console.log(date);
              }}
              customInput={<S.input style={{ paddingLeft: "3rem" }} />}
            />
            <S.inputTitle>태그</S.inputTitle>
            <S.TagContainer>
              {tags.map((tag, index) => (
                <S.Tag key={index}>
                  {tag}
                  <button type="button" onClick={() => removeTag(index)}>
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
            <S.ImageContainer
              onClick={() => document.getElementById("imageInput").click()}
            >
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
                id="imageInput"
                type="file"
                style={{ display: "none" }}
                onChange={handleImageChange}
              />
            </S.ImageContainer>
            <S.buttonContainer>
              <S.cancelButton>취소</S.cancelButton>
              <S.button type="submit">생성</S.button>
            </S.buttonContainer>
          </form>
        </S.container>
      </S.layer>
    </>
  );
}

export default CreateModal;
