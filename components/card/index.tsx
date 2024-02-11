import Image from "next/image";
import * as S from "./styled";
import Tag from "../tag";
import ToDoModal from "@/components/todoModal/showTodo";
import { CardProps, ColumnProps } from "@/public/prop/props";
import { useTodoModalStore } from "@/store/todoModal";

export default function CardItem({
  columnId,
  column,
  cards,
  openEditColumnModal,
  openCreateCardModal,
}: {
  column: ColumnProps;
  cards: CardProps[];
  openEditColumnModal: (columnId: number) => void;
  openCreateCardModal: (columnId: number) => void;
  columnId: any;
}) {
  const { isShowCardOpen, setIsShowCardOpen, editedCardId, setEditedCardId } =
    useTodoModalStore();

  const openShowCardModal = (cardId: number) => {
    setEditedCardId(cardId);
    setIsShowCardOpen(true);
  };
  console.log("ddd", cards);

  const selectedCard = cards.find((card) => card.id === editedCardId);
  console.log("이게 카드클릭시나오는 id값입니다", selectedCard);
  console.log("cards", cards);
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
        <S.CardWrapper>
          <S.card key={item.id} onClick={() => openShowCardModal(item.id)}>
            {item.imageUrl && (
              <S.cardImg>
                <Image src={item.imageUrl} alt="카드 이미지" fill />
              </S.cardImg>
            )}

            <S.text>
              <S.cardTitle>{item.title}</S.cardTitle>

              <S.tagDate>
                <S.tagWrap>{item.tags && <Tag tags={item.tags} />}</S.tagWrap>
                <S.dateWrap>
                  <S.date>
                    <S.dateImg>
                      <Image
                        src={"/images/calendarToday.svg"}
                        alt="날짜"
                        fill
                      />
                    </S.dateImg>
                    <span>{item.dueDate}</span>
                  </S.date>

                  {item.assignee?.profileImageUrl ? (
                    <S.colors>
                      <Image
                        src={item.assignee?.profileImageUrl}
                        alt="이미지url"
                        fill
                      />
                    </S.colors>
                  ) : (
                    <S.colors>
                      {item.assignee?.nickname.slice(0, 1).toUpperCase()}
                    </S.colors>
                  )}
                </S.dateWrap>
              </S.tagDate>
            </S.text>
          </S.card>
        </S.CardWrapper>
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
          cardid={selectedCard.id}
          columnId={columnId}
          selectedCard={selectedCard}
        />
      )}
    </S.cards>
  );
}
