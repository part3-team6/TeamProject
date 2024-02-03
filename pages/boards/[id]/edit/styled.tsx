import exp from "constants";
import styled from "styled-components";

export const Background = styled.div`
  position: relative;
  background-color: #ffffff;
  /* var(--gray-FAFAFA) */
`;

export const DashboardContainer = styled.div`
  width: auto;
  height: 100%;
  margin-left: 30rem;

  background-color: var(--gray-FAFAFA);

  display: flex;
  flex-direction: row;

  @media (max-width: 1199px) and (min-width: 768px) {
    margin-left: 15.6rem;
  }
  @media (max-width: 767px) {
    margin-left: 5.5rem;
  }
`;
export const DashboardSettings = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.2rem;

  margin: 2rem 0 0 2rem;
  @media (max-width: 767px) {
    gap: 1.1rem;
    margin: 1.6rem 0 0 2rem;
  }
`;

export const BackPageButton = styled.div`
  color: var(--black-333236);
  font-size: 1.6rem;
  font-weight: 500;

  display: flex;
  align-items: center;
  gap: 0.6rem;
`;

export const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: left;
  gap: 2rem;
`;

export const DashboardDeleteButton = styled.button`
  width: 32rem;
  height: 6.2rem;

  color: var(--black-333236);
  font-size: 1.8rem;
  font-weight: 500;

  text-align: center;

  background: var(--gray-FAFAFA);
  border-radius: 8px;
  overflow: hidden;
  border: 1px #d9d9d9 solid;

  @media (max-width: 767px) {
    width: 28.4rem;
    height: 5.2rem;
    font-size: 1.6rem;
  }

  &:hover {
    background: var(--gray-EEEEEE);
  }
`;
