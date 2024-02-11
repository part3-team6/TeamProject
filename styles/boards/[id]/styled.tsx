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

  @media all and (max-width: 1199px) {
    width: calc(100% - 16rem);
    margin-left: 16rem;
  }
  @media all and (max-width: 767px) {
    width: calc(100% - 7rem);
    margin-left: 7rem;
  }
`;

export const DashboardMain = styled.div`
  height: calc(100vh - 7rem);
  display: flex;
  overflow: scroll;

  &::-webkit-scrollbar {
    width: 0.7rem;
    height: 0.7rem;
  }

  &::-webkit-scrollbar-thumb {
    background: var(--violet-5534DA);
    border-radius: 6px;
  }

  @media all and (max-width: 1199px) {
    flex-direction: column;
  }
`;

export const Column = styled.div``;

export const ColumnButton = styled.button`
  /* border: 1px solid var(--gray-D9D9D9);
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

  @media all and (max-width: 1199px) {
    left: 64.8rem;
  } */
  min-width: 35.4rem;
  height: 5rem;
  border-radius: 6px;
  border: 1px solid var(--gray-D9D9D9);
  background: var(--white-FFFFFF);
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  margin: 2rem;
  @media all and (max-width: 1199px) {
    min-width: auto;
    width: 100%;
    margin: 2rem 0 0;
    padding: 2rem;
  }
`;

export const EditColumnModal = styled.div`
  width: 100vw;
  height: 100vh;
  position: absolute;
  top: 0;
  z-index: 2;
`;

export const DeleteColumnButton = styled.button`
  background: none;
  width: 50px;
  font-size: 12px;
  color: var(--gray-787486);
  border: none;
  border-bottom: 1px solid var(--gray-787486);
`;

export const CreateColumnModal = styled.div`
  width: 100vw;
  height: 100vh;
  position: absolute;
  top: 0;
  z-index: 2;
`;
