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

export interface ColumnsProps {
  result: string;
  data: {
    id: number;
    title: string;
    teamId: string;
    createdAt: string;
    updatedAt: string;
  }[];
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
  const [columns, setColumns] = useState<ColumnsProps[]>([]);
  const [cards, setCards] = useState<CardsProps[]>([]);
  const [card, setCard] = useState<CardProps[]>([]);
  const [isCreateModalOpen, setisCreateModalOpen] = useState(false);
  const [isEditModalOpen, setisEditModalOpen] = useState(false);

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

  const addCard = (newCard: CardsProps) => {
    setCards((prevCards) => [...prevCards, newCard]);
  };

  const editCard = (newCard: CardProps) => {
    setCard((prevCard) => {
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
      const response = await axiosInstance.get("/columns");
      setColumns(response.data);
      console.log("API 데이터:", response.data);
    } catch (error) {
      console.log("API 호출 오류", error);
    }
  };

  const getCards = async () => {
    try {
      const response = await axiosInstance.get("/cards");
      setCards(response.data);
      console.log("API 데이터:", response.data);
    } catch (error) {
      console.log("API 호출 오류", error);
    }
  };

  useEffect(() => {
    getColumns();
    getCards();
  }, []);

  return (
    <S.DashboardWrap>
      <Header mock={mockHeader[0]} title="대시보드 Test" />
      <Sidemenu mock={mockSidemenu} />
      <S.DashboardContainer>
        <S.DashboardMain>
          {columns.map((column, index) => (
            <S.Column key={index}>
              <CardItem
                column={column}
                cards={cards[index]}
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
