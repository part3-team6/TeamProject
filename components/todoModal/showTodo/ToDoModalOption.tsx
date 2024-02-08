import { ReactElement, useState } from "react";
import Button from "./Button";
import * as S from "./styled";
import EditModal from "../editTodoModal/editModal";
import { useTodoModalStore } from "@/store/todoModal";
import axiosInstance from "@/lib/axios";
import { CardProps } from "@/pages/boards/[id]/props";

const toDoModalOption = () => {
  const [rendered, setRendered] = useState<ReactElement | null>(null);
  const { isEditCardOpen, setIsEditCardOpen, editedCardId } =
    useTodoModalStore();

  const onModifyCard = () => {
    if (rendered) {
      setRendered(null);
    } else {
      setRendered(
        <EditModal
          closeEditCardModal={closeEditCardModal}
          editCard={editCard}
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
    } catch (error) {
      console.log("editCard API 호출 오류", error);
    }

    // setCards((prevCard) => {
    //   return prevCard.map((card) => {
    //     if (card.id === newCard.id) {
    //       return newCard;
    //     }
    //     return card;
    //   });
    // });
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
        />
      )}
    </S.ModalOption>
  );
};

export default toDoModalOption;
