import Image from "next/image";
import * as S from "./styled";
import { useEffect, useState } from "react";
import Link from "next/link";

interface CardProps {
  mock: [
    {
      assigneeUserId: number;
      dashboardId: number;
      columnId: number;
      title: string;
      description: string;
      dueDate: string;
      tags: [string];
      imageUrl: string;
    },
  ];
}

function Card({ mock }: CardProps) {
  return (
    <S.cards>
      <S.cardsTitle>
        <S.title>
          <S.titlePoint></S.titlePoint>
          On Progress
          <S.cardLength>{mock.length}</S.cardLength>
        </S.title>
        <S.cardsImg>
          <Image src={"/images/settings.svg"} alt="settings" fill />
        </S.cardsImg>
      </S.cardsTitle>
      <S.card>
        <S.cardMore>
          <S.cardMoreImg>
            <Image src={"/images/chip+.svg"} alt="추가하기" fill />
          </S.cardMoreImg>
        </S.cardMore>
      </S.card>
      {mock.map((item, index) => (
        <S.card key={index}>
          <Link href={"/"}>
            {item.imageUrl && (
              <S.cardImg>
                <Image src={item.imageUrl} alt="카드이미지" fill />
              </S.cardImg>
            )}

            <S.text>
              <S.cardTitle>{item.title}</S.cardTitle>

              <S.tagDate>
                <S.tagWrap>
                  {item.tags.map((tag, tagIndex) => (
                    <S.tag
                      key={tagIndex}
                      length={Math.ceil((tag.length % 4) + 1)}
                    >
                      <span>{tag}</span>
                    </S.tag>
                  ))}
                </S.tagWrap>
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

                  <S.colors>B</S.colors>
                </S.dateWrap>
              </S.tagDate>
            </S.text>
          </Link>
        </S.card>
      ))}
    </S.cards>
  );
}

export default Card;
