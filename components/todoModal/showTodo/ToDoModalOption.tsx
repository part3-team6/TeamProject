import { ReactElement, useState } from "react";
import Button from "./Button";
import * as S from "./styled";
import EditModal from "../editTodoModal/editModal";
import { useTodoModalStore } from "@/store/todoModal";
import axiosInstance from "@/lib/axios";
import { CardProps } from "@/public/prop/props";
import axios from "@/lib/axios";
import useColumnsStore from "../../../store/columns";

// id 프롭은 cardId입니다.
const toDoModalOption = ({
  closeShowCardModal,
  id,
  columnId,
  openEditCardModal,
}: any) => {
  const [rendered, setRendered] = useState<ReactElement | null>(null);
  const { setCards, isEditCardOpen, setIsEditCardOpen, editedCardId } =
    useTodoModalStore();
  const { setColumns, pageId } = useColumnsStore();

  const onModifyCard = () => {
    if (rendered) {
      setRendered(null);
    } else {
      setRendered(
        <EditModal
          closeEditCardModal={closeEditCardModal}
          editCard={editCard}
          columnId={columnId}
        />,
      );
    }
  };

  // 이 형식으로 보내야함
  // {
  //   "columnId": 0,
  //   "assigneeUserId": 0,
  //   "title": "string",
  //   "description": "string",
  //   "dueDate": "string",
  //   "tags": [
  //     "string"
  //   ],
  //   "imageUrl": "string"
  // }

  // 이거 할일 수정카드 모달입니다.
  const editCard = async (newCard: CardProps) => {
    try {
      const response = await axiosInstance.post(`cards/${id}`, newCard);
      console.log("editCard라는함수", response);

      if (response.status === 200) {
        setCards((prevCard: CardProps[]) => {
          return prevCard.map((card) => {
            if (card.id === newCard.id) {
              return newCard;
            }
            return card;
          });
        });
        setIsEditCardOpen(false);
      }
    } catch (error) {
      console.log("editCard API 호출 오류", error);
    }
  };

  const closeEditCardModal = () => {
    setIsEditCardOpen(false);
  };

  // 카드 삭제 기능인데 랜더링을 어떻게 시켜야할지 모르겠음.
  const onDeleteCard = async (id: any) => {
    console.log("버튼누름!", id);
    const response = await axios.delete(`cards/${id}`);
    closeShowCardModal();
    const getResponse = await axiosInstance.get(
      `columns?dashboardId=${pageId}`,
    );
    setColumns(getResponse.data);
  };

  return (
    <S.ModalOption>
      <div>
        <Button children="수정하기" onClick={() => openEditCardModal()} />
        <Button children="삭제하기" onClick={() => onDeleteCard(id)} />
      </div>
      {isEditCardOpen && ( // card 상세에서 수정하기 눌렀을때
        <EditModal
          closeEditCardModal={closeEditCardModal}
          editCard={editCard}
          columnId={columnId} // 임시로 초기값 0으로 해놓음. 나중에 삭제.
        />
      )}
    </S.ModalOption>
  );
};

export default toDoModalOption;
