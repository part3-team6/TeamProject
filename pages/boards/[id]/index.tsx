import Header from "@/components/dashHeader";
import Sidemenu from "@/components/sidemenu";
import * as S from "../../../styles/boards/[id]/styled";
import CreateModal from "@/components/todoModal/createTodoModal/createModal";
import { Key, useEffect, useState } from "react";
import CardItem from "@/components/card";
import axiosInstance from "@/lib/axios";
import { useRouter } from "next/router";
import Modal from "@/components/modal/modal";
import Image from "next/image";
import {
  ColumnsProps,
  CardProps,
  NewCard,
  ColumnProps,
} from "../../../public/prop/props";
import { useTodoModalStore } from "@/store/todoModal";
import useColumnsStore from "../../../store/boards";

export default function boardsById() {
  const [cards, setCards] = useState<CardProps[]>([]);
  const { columns, setColumns, setPageId } = useColumnsStore();
  const {
    // cards,
    // setCards,
    isCreateCardOpen,
    setIsCreateCardOpen,
    isCreateColumnOpen,
    setIsCreateColumnOpen,
    isEditColumnOpen,
    setIsEditColumnOpen,
  } = useTodoModalStore();

  const [inputValue, setInputValue] = useState<string>("");
  const [editedColumnId, setEditedColumnId] = useState<number>(0);
  const [ColumnIdOfCard, setColumnIdOfCard] = useState<number>(0);

  const [memberListData, setMemberListData] = useState<any>();
  const [dashboardData, setDashboardData] = useState<any>();

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
  const openCreateCardModal = (columnId: number) => {
    setIsCreateCardOpen(true);
    setColumnIdOfCard(columnId);
  };

  const closeCreateCardModal = () => {
    setIsCreateCardOpen(false);
  };

  const getDashboardData = async (link: string) => {
    try {
      const response = await axiosInstance.get(link);
      return response;
    } catch (e: any) {
      if (e.response.status === 404) {
        router.push("/404");
      }
      throw Error(`getDashboardData 에러 ${e}`);
    }
  };

  const addCard = async (newCard: NewCard) => {
    try {
      const response = await axiosInstance.post(`cards`, newCard);

      if (response.status === 201) {
        setCards((prevCards: CardProps[]) => {
          if (!prevCards) {
            return [response.data];
          }
          return [...prevCards, response.data];
        });
      } else if (response.status === 400) {
      }
      setIsCreateCardOpen(false);
    } catch (error) {
      console.log("addCard API 호출 오류", error);
    }
  };

  const getColumns = async () => {
    try {
      const response = await axiosInstance.get(`columns?dashboardId=${id}`);
      setColumns(response.data);
    } catch (error) {
      console.log("getColumns API 호출 오류", error);
    }
  };

  const addColumn = async () => {
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

  const deleteColumn = async () => {
    const deleteGo = confirm("정말 삭제 하시겠습니까?");
    if (deleteGo) {
      try {
        const response = await axiosInstance.delete(
          `columns/${editedColumnId}`,
        );

        if (response.status === 204) {
          setColumns((prevColumns: ColumnsProps | undefined) => {
            if (!prevColumns) {
              return;
            }

            const updatedColumns = prevColumns.data.filter(
              (col) => col.id !== editedColumnId,
            );

            return {
              result: prevColumns.result,
              data: updatedColumns,
            };
          });

          setIsEditColumnOpen(false);
        }
      } catch (error) {
        console.log("deleteColumn API 호출 오류", error);
      } finally {
        getColumns();
      }
    }
  };

  const getCardsForColumn = async (columnId?: number) => {
    try {
      const response = await axiosInstance.get(`cards?columnId=${columnId}`);

      return response.data;
    } catch (error) {
      console.log("getCardsForColumn API 호출 오류", error);
      return [];
    }
  };

  const getCardsForAllColumns = async () => {
    const cardsForColumns = await Promise.all(
      columns?.data?.map(async (column: { id: number }) => {
        const cardsForColumn = await getCardsForColumn(Number(column?.id));
        return cardsForColumn;
      }) || [],
    );

    const allCards = cardsForColumns.reduce((result, columnData) => {
      return result.concat(columnData.cards);
    }, []);
    setCards(allCards);
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const dashboardResponse = await getDashboardData(
          `dashboards/${Number(id)}`,
        );
        setDashboardData(dashboardResponse?.data);
      } catch (error) {
        console.log("dashboardResponse =>", error);
      }
    };
    fetchData();

    if (id) {
      getColumns();
    }
    setPageId(id);
  }, [id, isCreateColumnOpen]);

  useEffect(() => {
    if (columns?.data && columns.data.length > 0) {
      getCardsForAllColumns();
    }
  }, [columns]);

  useEffect(() => {
    const fetchMemberList = async () => {
      try {
        const memberListResponse = await getDashboardData(
          `members?dashboardId=${Number(id)}`,
        );
        setMemberListData(memberListResponse.data);
      } catch (error) {
        console.log("memberListResponse =>", error);
      }
    };
    fetchMemberList();
  }, [id]);

  return (
    <S.DashboardWrap>
      <Header member={memberListData} title={dashboardData?.title} />
      <Sidemenu id={id} />
      <S.DashboardContainer>
        <S.DashboardMain>
          {columns?.data?.map((column: ColumnProps, index: number) => (
            <S.Column key={index}>
              <CardItem
                column={column}
                cards={cards.filter(
                  (cards: CardProps) => cards.columnId === column.id,
                )} // columnId를 비교하여 현재 column에 속한 카드만 보여줌
                openEditColumnModal={openEditColumnModal}
                openCreateCardModal={() => openCreateCardModal(column.id)}
                columnId={column.id}
              />
            </S.Column>
          ))}
          <S.ColumnButton onClick={openCreateColumnModal}>
            새로운 컬럼 추가하기 &nbsp;
            <div>
              <Image
                src={"/images/chip+.svg"}
                alt="plus"
                width={20}
                height={20}
              />
            </div>
          </S.ColumnButton>
        </S.DashboardMain>
      </S.DashboardContainer>
      {isCreateCardOpen && ( // card 생성 버튼 눌렀을때
        <CreateModal
          closeCreateCardModal={closeCreateCardModal}
          addCard={addCard}
          columnId={ColumnIdOfCard}
        />
      )}
      {isEditColumnOpen && ( // column 설정 눌렀을때
        <S.EditColumnModal>
          <Modal
            title="컬럼 관리"
            name="이름"
            submitButton="변경"
            children={
              <S.DeleteColumnButton onClick={deleteColumn}>
                삭제하기
              </S.DeleteColumnButton>
            }
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
