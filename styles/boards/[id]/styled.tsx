import styled from "styled-components";

export const DashboardWrap = styled.div`
  position: relative;
  width: 100%;
  height: 100vh;
  overflow: hidden;
`;

export const DashboardContainer = styled.div`
  width: calc(100% - 30rem);
  margin-left: 30rem;
  overflow: scroll;

  /* 스크롤바의 Track(전체 길이) 스타일 */
  ::-webkit-scrollbar {
    width: 12px; /* 스크롤바의 너비 */
  }

  /* 스크롤바의 Thumb(드래그할 부분) 스타일 */
  ::-webkit-scrollbar-thumb {
    background-color: #888; /* 스크롤바 색상 */
    border-radius: 6px; /* 스크롤바 모양을 둥글게 만듭니다. */
  }

  /* 스크롤바의 Track에 Hover 효과 */
  ::-webkit-scrollbar-thumb:hover {
    background-color: #555;
  }

  /* 스크롤바의 Track에 Hover 효과 */
  ::-webkit-scrollbar-track {
    background-color: #eee; /* 스크롤바 트랙 배경 색상 */
    border-radius: 6px; /* 트랙의 모양을 둥글게 만듭니다. */
  }

  /* 스크롤바의 Track에 Shadow 효과 */
  ::-webkit-scrollbar-track {
    box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
  }
`;

export const DashboardMain = styled.div`
  height: calc(100vh - 7rem);
  display: flex;
`;

export const Column = styled.div``;

export const ColumnButton = styled.button`
  border: 1px solid var(--gray-D9D9D9);
  border-radius: 0.5rem;
  width: 340px;
  height: 70px;
  background-color: var(--white-FFFFFF);
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
  padding: 0 72px;
  font-size: 16px;
  font-weight: 600;
  color: var(--balck-333236);
  white-space: nowrap;
  position: absolute;
  left: 330px;
  bottom: 30px;

  & div {
    width: 20px;
    height: 20px;
    position: relative;
  }
`;

export const EditColumnModal = styled.div`
  width: 100vw;
  height: 100vh;
  position: absolute;
  top: 0;
  z-index: 2;
`;

export const CreateColumnModal = styled.div`
  width: 100vw;
  height: 100vh;
  position: absolute;
  top: 0;
  z-index: 2;
`;
