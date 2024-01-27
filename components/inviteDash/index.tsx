import Image from "next/image";
import * as S from "./styled";
import { useEffect, useState } from "react";
import mock from "./mock";
import NoDash from "./noDash";
import debounce from "lodash/debounce";

interface mockDataType {
  name: string;
  inviter: string;
  color: string;
}

function InviteDash() {
  const [values, setValues] = useState("");
  const [ismobile, setIsmobile] = useState(false);
  const [isWidth, setIsWidth] = useState(NaN);
  console.log(isWidth);

  useEffect(() => {
    const mobileResize = debounce(() => {
      setIsWidth(window.innerWidth);
      setIsmobile(window.innerWidth <= 767);
    }, 100);

    window.addEventListener("resize", mobileResize);
    mobileResize();

    return () => window.removeEventListener("resize", mobileResize);
  }, [isWidth]);

  return mock.length !== 0 ? (
    <>
      <S.container>
        <S.title>초대받은 대쉬보드</S.title>
        <S.inputContainer>
          <S.input
            placeholder="검색"
            onChange={(e) => setValues(e.target.value)}
          />
          <S.searchIcon>
            <Image
              src={"images/search.svg"}
              alt="검색 돋보기"
              width={24}
              height={24}
            />
          </S.searchIcon>
        </S.inputContainer>
        {ismobile ? (
          mock?.map((data?: mockDataType, index?: number) => (
            <S.section key={index}>
              <S.menuDiv>
                <S.menu>
                  이름
                  <S.text>{data?.name}</S.text>
                </S.menu>
                <S.menu>
                  초대자
                  <S.text>{data?.inviter}</S.text>
                </S.menu>
                <S.menu display={"none"}>수락 여부</S.menu>
              </S.menuDiv>
              <S.colors backgroundColor={data?.color} display={"none"} />

              <S.buttonGap>
                <S.yesButton>수락</S.yesButton>
                <S.noButton>거절</S.noButton>
              </S.buttonGap>
            </S.section>
          ))
        ) : (
          <>
            <S.menuDiv>
              <S.menu>이름</S.menu>
              <S.menu>초대자</S.menu>
              <S.menu display={"none"}>수락 여부</S.menu>
            </S.menuDiv>
            {mock?.map((data: mockDataType, index: number) => (
              <S.section key={index}>
                <S.colors backgroundColor={data.color} display={"none"} />
                <S.text>{data.name}</S.text>
                <S.text>{data.inviter}</S.text>
                <S.buttonGap>
                  <S.yesButton>수락</S.yesButton>
                  <S.noButton>거절</S.noButton>
                </S.buttonGap>
              </S.section>
            ))}
          </>
        )}
      </S.container>
    </>
  ) : (
    <NoDash />
  );
}

export default InviteDash;
