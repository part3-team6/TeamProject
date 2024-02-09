import Image from "next/image";
import * as S from "./styled";
import Tag from "../tag";
import ToDoModal from "@/components/todoModal/showTodo";
import { CardProps, ColumnProps } from "@/public/prop/props";
import { useTodoModalStore } from "@/store/todoModal";

export default function CardItem({
  column,
  cards,
  openEditColumnModal,
  openCreateCardModal,
}: {
  column: ColumnProps;
  cards: CardProps[];
  openEditColumnModal: (columnId: number) => void;
  openCreateCardModal: (columnId: number) => void;
}) {
  const { isShowCardOpen, setIsShowCardOpen, editedCardId, setEditedCardId } =
    useTodoModalStore();

  const openShowCardModal = (cardId: number) => {
    setEditedCardId(cardId);
    setIsShowCardOpen(true);
  };

  const selectedCard = cards.find((card) => card.id === editedCardId);
  console.log(selectedCard);
  return (
    <S.cards>
      <S.cardsTitle>
        <S.title>
          <S.titlePoint></S.titlePoint>
          {column?.title}
          <S.cardLength>{cards.length}</S.cardLength>
        </S.title>
        <S.cardsImg onClick={() => openEditColumnModal(column.id)}>
          <Image src={"/images/settings.svg"} alt="settings" fill />
        </S.cardsImg>
      </S.cardsTitle>

      <S.card onClick={() => openCreateCardModal(column.id)}>
        <S.cardMore>
          <S.cardMoreImg>
            <Image src={"/images/chip+.svg"} alt="추가하기" fill />
          </S.cardMoreImg>
        </S.cardMore>
      </S.card>

      {cards.map((item) => (
        <S.card key={item.id} onClick={() => openShowCardModal(item.id)}>
          {item.imageUrl && (
            <S.cardImg>
              <Image src={item.imageUrl} alt="카드 이미지" fill />
            </S.cardImg>
          )}

          <S.text>
            <S.cardTitle>{item.title}</S.cardTitle>
            <div>{item.description}</div>
            <S.tagDate>
              <S.tagWrap>{item.tags && <Tag tags={item.tags} />}</S.tagWrap>
              <S.dateWrap>
                <S.date>
                  <S.dateImg>
                    <Image src={"/images/calendarToday.svg"} alt="날짜" fill />
                  </S.dateImg>
                  <span>{item.dueDate}</span>
                </S.date>

                <S.colors>{item.assignee?.porfileImageUrl}</S.colors>
              </S.dateWrap>
            </S.tagDate>
          </S.text>
        </S.card>
      ))}

      {isShowCardOpen && selectedCard && (
        <ToDoModal
          columnName={column.title}
          user={{
            name: selectedCard.assignee?.nickname || "Unknown",
            image: selectedCard.assignee?.profileImageUrl || "",
          }}
          title={selectedCard.title}
          content={selectedCard.description}
          deadline={selectedCard.dueDate}
          tags={selectedCard.tags}
          img={selectedCard.imageUrl}
        />
      )}
    </S.cards>
  );
}
