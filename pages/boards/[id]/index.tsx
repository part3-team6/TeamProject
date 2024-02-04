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

export default function DashboardForOne() {
  const [columns, setColumns] = useState<ColumnsProps>();
  const [cards, setCards] = useState<CardProps[]>([]);
  const [isCreateModalOpen, setisCreateModalOpen] = useState(false);
  const [isEditModalOpen, setisEditModalOpen] = useState(false);

  const router = useRouter();
  const { id } = router.query;

  const openCreateModal = () => {
    setisCreateModalOpen(true);
  };

  const closeCreateModal = () => {
    setisCreateModalOpen(false);
  };

  const openEditModal = () => {
    setisEditModalOpen(true);
  };

  const closeEditModal = () => {
    setisEditModalOpen(false);
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
      console.log("getColumns API 데이터:", response.data);
    } catch (error) {
      console.log("getColumns API 호출 오류", error);
    }
  };

  const getCardsForColumn = async (columnId: number) => {
    try {
      const response = await axiosInstance.get(`cards?columnId=${columnId}`);
      console.log("getCardsForColumn API 데이터:", response.data);
      console.log(columnId);
      return response.data;
    } catch (error) {
      console.log("getCardsForColumn API 호출 오류", error);
      return [];
    }
  };

  const getCardsForAllColumns = async () => {
    const cardsForColumns = await Promise.all(
      columns?.data?.map(async (column) => {
        const cardsForColumn = await getCardsForColumn(column.id);
        return cardsForColumn;
      }) || [],
    );
    console.log("getCardsForAllColumns API 데이터:", cardsForColumns);
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
    getColumns();
  }, [id]);

  useEffect(() => {
    if (columns?.data && columns.data.length > 0) {
      getCardsForAllColumns();
    }
  }, [columns]);

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
                cards={cards}
                openCreateModal={openCreateModal}
                openEditModal={openEditModal}
              />
            </S.Column>
          ))}
        </S.DashboardMain>
      </S.DashboardContainer>
      {isCreateModalOpen && (
        <CreateModal closeCreateModal={closeCreateModal} addCard={addCard} />
      )}
      {isEditModalOpen && (
        <EditModal closeEditModal={closeEditModal} editCard={editCard} />
      )}
    </S.DashboardWrap>
  );
}
