import Image from "next/image";
import * as S from "./styled";
import Tag from "../tag";
import { map } from "lodash";

interface CardProps {
  cards: any[];
  openCreateModal: (newCard: any) => void;
  addCard: (newCard: any) => void;
}

function Card({ cards, openCreateModal, addCard }: CardProps) {
  return (
    <S.cards>
      <S.cardsTitle>
        <S.title>
          <S.titlePoint></S.titlePoint>
          On Progress
          <S.cardLength>{cards.length}</S.cardLength>
        </S.title>
        <S.cardsImg>
          <Image src={"/images/settings.svg"} alt="settings" fill />
        </S.cardsImg>
      </S.cardsTitle>
      <S.card onClick={openCreateModal}>
        <S.cardMore>
          <S.cardMoreImg>
            <Image src={"/images/chip+.svg"} alt="추가하기" fill />
          </S.cardMoreImg>
        </S.cardMore>
      </S.card>
      {cards.map((item, index) => (
        <S.card key={index}>
          {item.imageUrl && (
            <S.cardImg>
              <Image src={item.imageUrl} alt="카드이미지" fill />
            </S.cardImg>
          )}

          <S.text>
            <S.cardTitle>{item.title}</S.cardTitle>

            <S.tagDate>
              <S.tagWrap>{item.tags && <Tag tags={item.tags} />}</S.tagWrap>
              <S.dateWrap>
                <S.date>
                  <S.dateImg>
                    <Image src={"/images/calendarToday.svg"} alt="날짜" fill />
                  </S.dateImg>
                  <span>{item.dueDate}</span>
                </S.date>

                <S.colors>B</S.colors>
              </S.dateWrap>
            </S.tagDate>
          </S.text>
        </S.card>
      ))}
    </S.cards>
  );
}

export default Card;
