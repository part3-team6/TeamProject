import Image from "next/image";
import * as S from "./styled";
import Tag from "../tag";
import ToDoModal from "@/components/todoModal/showTodo";
import { CardProps, ColumnProps } from "@/pages/boards/[id]/props";
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
  const { isShowCardOpen, setIsShowCardOpen, setEditedCardId } =
    useTodoModalStore();

  // card 상세보기 모달
  const openShowCardModal = (cardId: number) => {
    setIsShowCardOpen(true);
    setEditedCardId(cardId);
  };

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

      {cards &&
        cards.map((item, index) => (
          <S.card key={index} onClick={() => openShowCardModal(item.id)}>
            {item.imageUrl && (
              <S.cardImg>
                <Image src={item.imageUrl} alt="카드이미지" fill />
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
                      <Image
                        src={"/images/calendarToday.svg"}
                        alt="날짜"
                        fill
                      />
                    </S.dateImg>
                    <span>{item.dueDate}</span>
                  </S.date>

                  <S.colors>{item.assignee?.porfileImageUrl}</S.colors>
                </S.dateWrap>
              </S.tagDate>
            </S.text>
          </S.card>
        ))}

      {isShowCardOpen && (
        <ToDoModal
          columnName="To Do"
          user={{
            name: "김범승",
            image: "/images/chip+.svg",
          }}
          title="새로운 일정 관리 Taskify"
          content="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley."
          deadline="2022.12.30 19:00"
          tags={[
            "프로젝트",
            "일반",
            "백엔드",
            "네모네모상자",
            "도움",
            "프로젝트2",
            "스페셜",
            "김동규",
            "김범승",
            "문필겸",
            "김윤수",
            "조욱희",
          ]}
          img="/images/codeit.svg"
        />
      )}
    </S.cards>
  );
}
