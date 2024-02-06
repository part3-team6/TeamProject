import Image from "next/image";
import * as S from "./styled";
import { ChangeEvent, useEffect, useState, KeyboardEvent } from "react";
import useEditStore from "@/store/edit.js";

interface MyObject {
  data: {
    id: number;
    title: string;
    color: string;
    createdAt: string; // 날짜 형식에 대한 세부 사항에 따라 적절한 타입으로 변경할 수 있습니다.
    updatedAt: string; // 날짜 형식에 대한 세부 사항에 따라 적절한 타입으로 변경할 수 있습니다.
    createdByMe: boolean;
    userId: number;
  };
}

function EditName({
  data,
  handleEditDashboard,
}: {
  data: MyObject;
  handleEditDashboard: () => Promise<void>;
}) {
  const [windowWidth, setWindowWidth] = useState<number>(1700);
  const [isMobile, setIsMobile] = useState<boolean>(false);
  const [checked, setChecked] = useState<number>(1);
  const [inputValue, setInputValue] = useState("");
  const [isEmpty, setIsEmpty] = useState(false);
  const { setInputState, setColorState } = useEditStore();

  const handleColor = (e: number) => {
    setChecked(e);
  };

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  const handleEnterKeyPress = async (e: KeyboardEvent<HTMLInputElement>) => {
    if (!isEmpty && e.key === "Enter") {
      e.preventDefault();
      await handleEditDashboard();
      setInputValue("");
    }
  };

  useEffect(() => {
    if (data) {
      switch (data.color) {
        case "#7AC555":
          setChecked(1);
          break;
        case "#760DDE":
          setChecked(2);
          break;
        case "#FFA500":
          setChecked(3);
          break;
        case "#76A6EA":
          setChecked(4);
          break;
        case "#E876EA":
          setChecked(5);
          break;
        default:
          setChecked(2);
          break;
      }
      setInputValue(data?.title);
      console.log(12);
    }
  }, [data]);

  useEffect(() => {
    switch (checked) {
      case 1:
        setColorState("#7AC555");
        break;
      case 2:
        setColorState("#760DDE");
        break;
      case 3:
        setColorState("#FFA500");
        break;
      case 4:
        setColorState("#76A6EA");
        break;
      case 5:
        setColorState("#E876EA");
        break;
      default:
        break;
    }
  }, [checked]);

  useEffect(() => {
    setIsMobile(window.innerWidth <= 767);

    window.addEventListener("resize", () => {
      setIsMobile(window.innerWidth <= 767);
    });

    return () => {
      window.removeEventListener("resize", () => {
        setIsMobile(window.innerWidth <= 767);
      });
    };
  }, [windowWidth]);

  useEffect(() => {
    setIsEmpty(/^\s*$/.test(inputValue));
    setInputState(inputValue);
    console.log("isemt", isEmpty);
  }, [inputValue]);

  // console.log(data);
  // console.log("checked", checked);

  return (
    <S.EditNameContainer>
      <S.TitleNColor>
        <S.Title>{data?.title}</S.Title>
        <S.Colors>
          {Array.from(
            { length: 5 },
            (_, index) =>
              isMobile || (
                <S.Color
                  color={index + 1}
                  onClick={() => handleColor(index + 1)}
                  key={index + "-colors"}
                ></S.Color>
              ),
          )}
          {isMobile || (
            <S.CheckImgContainer checked={checked}>
              <Image alt="checked" src="/images/checked.svg" fill />
            </S.CheckImgContainer>
          )}
        </S.Colors>
      </S.TitleNColor>
      <S.Form>
        <S.Label>대시보드 이름</S.Label>
        <S.Input
          value={inputValue}
          onChange={handleInputChange}
          onKeyDown={handleEnterKeyPress}
        />
        <S.ButtonContainer>
          <S.SubmitButton
            type="button"
            onClick={handleEditDashboard}
            disabled={isEmpty}
            isEmpty={isEmpty}
          >
            변경
          </S.SubmitButton>
        </S.ButtonContainer>
      </S.Form>
    </S.EditNameContainer>
  );
}

export default EditName;
