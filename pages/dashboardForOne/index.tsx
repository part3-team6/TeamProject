import Card from "@/components/card";
import Header from "@/components/dashHeader";
import Sidemenu from "@/components/sidemenu";
import mockHeader from "@/components/dashHeader/mock";
import mockSidemenu from "@/components/sidemenu/mock";
import * as S from "./styled";
import CreateModal from "@/components/todoModal/createTodoModal/createModal";
import { useState } from "react";

interface DashboardForOneProps {
  id: number;
  title: string;
  color: string;
  updatedAt: string;
  createdByMe: boolean;
  userId: number;
}

export default function DashboardForOne({ id, title }: DashboardForOneProps) {
  const [cards, setCards] = useState([]);
  const [isModalOpen, setisModalOpen] = useState(false);

  const closeCreateModal = () => {
    setisModalOpen(false);
  };

  const openCreateModal = (newCard: any) => {
    setisModalOpen(true);
  };

  const addCard = (newCard: any) => {
    setCards((prevCards) => [...prevCards, newCard]);
  };

  return (
    <S.DashboardWrap>
      <Header mock={mockHeader[0]} title="대시보드 Test" />
      <Sidemenu mock={mockSidemenu} />
      <S.DashboardContainer>
        <S.DashboardMain>
          <ul>
            <li>
              <Card
                cards={cards}
                openCreateModal={openCreateModal}
                addCard={addCard}
              />
            </li>
          </ul>
        </S.DashboardMain>
      </S.DashboardContainer>
      {isModalOpen && (
        <CreateModal closeCreateModal={closeCreateModal} addCard={addCard} />
      )}
    </S.DashboardWrap>
  );
}
