import { ReactElement, useState } from "react";
import Button from "./Button";
import * as S from "./styled";
import EditModal from "../editTodoModal/editModal";
import { useTodoModalStore } from "@/store/todoModal";
import axiosInstance from "@/lib/axios";
import { CardProps } from "@/public/prop/props";

const toDoModalOption = () => {
  const [rendered, setRendered] = useState<ReactElement | null>(null);
  const { setCards, isEditCardOpen, setIsEditCardOpen, editedCardId } =
    useTodoModalStore();

  const onModifyCard = () => {
    if (rendered) {
      setRendered(null);
    } else {
      setRendered(
        <EditModal
          closeEditCardModal={closeEditCardModal}
          editCard={editCard}
          columnId={0} // 임시로 초기값 0으로 해놓음. 나중에 삭제.
        />,
      );
    }
  };

  const editCard = async (newCard: CardProps) => {
    try {
      const response = await axiosInstance.post(
        `cards/${editedCardId}`,
        newCard,
      );

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

  const onDeleteCard = () => {
    console.log(`delete button clicked`);
  };

  return (
    <S.ModalOption>
      <div>
        <Button children="수정하기" onClick={onModifyCard} />
        <Button children="삭제하기" onClick={onDeleteCard} />
      </div>
      {isEditCardOpen && ( // card 상세에서 수정하기 눌렀을때
        <EditModal
          closeEditCardModal={closeEditCardModal}
          editCard={editCard}
          columnId={0} // 임시로 초기값 0으로 해놓음. 나중에 삭제.
        />
      )}
    </S.ModalOption>
  );
};

export default toDoModalOption;
