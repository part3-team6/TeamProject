import Header from "@/components/dashHeader";
import Sidemenu from "@/components/sidemenu";
import mockHeader from "@/components/dashHeader/mock";
import mockSidemenu from "@/components/sidemenu/mock";
import * as S from "./styled";
import CreateModal from "@/components/todoModal/createTodoModal/createModal";
import { useEffect, useState } from "react";
import EditModal from "@/components/todoModal/editTodoModal/editModal";
import CardItem from "@/components/card";
import axiosInstance from "@/lib/axios";
import { useRouter } from "next/router";
import Modal from "@/components/modal/modal";
import Image from "next/image";

export interface ColumnsProps {
  result: string;
  data: ColumnProps[];
}

export interface ColumnProps {
  id: number;
  title: string;
  teamId: string;
  createdAt: string;
  updatedAt: string;
}

export interface CardsProps {
  cursorId?: number;
  totalCount?: number;
  cards: CardProps[];
}

export interface CardProps {
  id: number;
  title: string;
  description: string;
  tags: string[];
  dueDate: string;
  assignee: {
    porfileImageUrl: string;
    nickname: string;
    id: number;
  };
  imageUrl: string;
  teamId: string;
  columnId: number;
  createdAt: string;
  updatedAt: string;
}

export default function boardsById() {
  const [columns, setColumns] = useState<ColumnsProps>();
  const [cards, setCards] = useState<CardProps[]>([]);
  const [isCreateCardOpen, setIsCreateCardOpen] = useState(false);
  const [isEditCardOpen, setIsEditCardOpen] = useState(false);
  const [isEditColumnOpen, setIsEditColumnOpen] = useState(false);
  const [isCreateColumnOpen, setIsCreateColumnOpen] = useState(false);

  const [inputValue, setInputValue] = useState<string>("");
  const [editedColumnId, setEditedColumnId] = useState<number>(0);

  const router = useRouter();
  const { id } = router.query;

  // Column Create 모달
  const openCreateColumnModal = () => {
    setIsCreateColumnOpen(true);
  };

  const closeCreateColumnModal = () => {
    setIsCreateColumnOpen(false);
  };

  // Column Edit 모달
  const openEditColumnModal = (columnId: number) => {
    setIsEditColumnOpen(true);
    setEditedColumnId(columnId);
  };

  const closeEditColumnModal = () => {
    setIsEditColumnOpen(false);
  };

  // Column의 Input 값 변화
  const handleInputChange = (newValue: string) => {
    setInputValue(newValue);
  };

  // Card Create 모달
  const openCreateModal = () => {
    setIsCreateCardOpen(true);
  };

  const closeCreateModal = () => {
    setIsCreateCardOpen(false);
  };

  // Card Edit 모달
  const openEditModal = () => {
    setIsEditCardOpen(true);
  };

  const closeEditModal = () => {
    setIsEditCardOpen(false);
  };

  const addCard = (newCard: CardProps) => {
    setCards((prevCard) => {
      return [...prevCard, newCard];
    });
  };

  const editCard = (newCard: CardProps) => {
    setCards((prevCard) => {
      return prevCard.map((card) => {
        if (card.id === newCard.id) {
          return newCard;
        }
        return card;
      });
    });
  };

  const getColumns = async () => {
    try {
      const response = await axiosInstance.get(`columns?dashboardId=${id}`);
      setColumns(response.data);
      console.log("getColumns", response.data);
    } catch (error) {
      console.log("getColumns API 호출 오류", error);
    }
  };

  const addColumn = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      const response = await axiosInstance.post("columns", {
        title: inputValue,
        dashboardId: Number(id), // 대시보드 ID
      });

      if (response.status === 201) {
        setColumns((prevColumn: ColumnsProps | undefined) => {
          if (!prevColumn) {
            return {
              result: "",
              data: [response.data],
            };
          }
          return {
            result: prevColumn.result,
            data: [...prevColumn.data, response.data],
          };
        });
        setIsCreateColumnOpen(false);
      }
      console.log("addColumn", response.data);
    } catch (error) {
      console.log("addColumn API 호출 오류", error);
    }
  };

  const editColumn = async () => {
    try {
      const response = await axiosInstance.put(`columns/${editedColumnId}`, {
        title: inputValue,
      });

      if (response.status === 200) {
        setColumns((prevColumns: ColumnsProps | undefined) => {
          if (!prevColumns) {
            return prevColumns; // 만약 이전 컬럼이 없다면 그대로 반환
          }

          const updatedColumns = prevColumns.data.map((col) => {
            if (col.id === editedColumnId) {
              return { ...col, title: inputValue }; // 수정된 컬럼만 제목 업데이트
            }
            return col;
          });

          return {
            result: prevColumns.result,
            data: updatedColumns,
          };
        });

        setIsEditColumnOpen(false);
      }
    } catch (error) {
      console.log("editColumn API 호출 오류", error);
    }
  };

  const getCardsForColumn = async (columnId: number) => {
    try {
      const response = await axiosInstance.get(`cards?columnId=${columnId}`);
      console.log("response1", response.data);
      return response.data;
    } catch (error) {
      console.log("getCardsForColumn API 호출 오류", error);
      return [];
    }
  };

  const getCardsForAllColumns = async () => {
    const cardsForColumns = await Promise.all(
      columns?.data?.map(async (column) => {
        const cardsForColumn = await getCardsForColumn(Number(column.id));
        console.log("cardsForColumn", cardsForColumn);
        return cardsForColumn;
      }) || [],
    );
    setCards(cardsForColumns);
  };

  // const getCards = async () => {
  //   try {
  //     const response = await axiosInstance.get(
  //       `/cards?dashboardId=${id}&size=100`,
  //     );
  //     setCards(response.data);
  //     console.log("API 데이터:", response.data);
  //   } catch (error) {
  //     console.log("API 호출 오류", error);
  //   }
  // };

  useEffect(() => {
    if (columns?.data && columns.data.length > 0) {
      getCardsForAllColumns();
    }
  }, [columns]);

  useEffect(() => {
    if (id) {
      getColumns();
    }
    console.log("useEffect 호출 - id:", id);
  }, [id, isCreateColumnOpen]);

  return (
    <S.DashboardWrap>
      <Header mock={mockHeader[0]} title="대시보드 Test" />
      <Sidemenu mock={mockSidemenu} />
      <S.DashboardContainer>
        <S.DashboardMain>
          {columns?.data?.map((column, index) => (
            <S.Column key={index}>
              <CardItem
                column={column}
                cards={cards.filter((card) => card.columnId === column.id)} // columnId를 비교하여 현재 column에 속한 카드만 보여줌
                openCreateModal={openCreateModal}
                openEditModal={openEditColumnModal}
              />
            </S.Column>
          ))}
          <S.ColumnButton onClick={openCreateColumnModal}>
            새로운 컬럼 추가하기
            <div>
              <Image src={"/images/chip+.svg"} alt="plus" fill />
            </div>
          </S.ColumnButton>
        </S.DashboardMain>
      </S.DashboardContainer>
      {isCreateCardOpen && ( // card 생성 버튼 눌렀을때
        <CreateModal closeCreateModal={closeCreateModal} addCard={addCard} />
      )}
      {isEditCardOpen && ( // card 상세에서 수정하기 눌렀을때
        <EditModal closeEditModal={closeEditModal} editCard={editCard} />
      )}
      {isEditColumnOpen && ( // column 설정 눌렀을때
        <S.EditColumnModal>
          <Modal
            title="컬럼 관리"
            name="이름"
            submitButton="변경"
            children="삭제하기"
            Placeholder=""
            cancelButton="취소"
            cancel={closeEditColumnModal}
            value={handleInputChange}
            submit={editColumn}
          />
        </S.EditColumnModal>
      )}
      {isCreateColumnOpen && ( // column 생성 버튼 눌렀을 때
        <S.CreateColumnModal>
          <Modal
            title="새 컬럼 생성"
            name="이름"
            submitButton="생성"
            children={null}
            Placeholder="새로운 프로젝트"
            cancelButton="취소"
            cancel={closeCreateColumnModal}
            value={handleInputChange}
            submit={addColumn}
          />
        </S.CreateColumnModal>
      )}
    </S.DashboardWrap>
  );
}
