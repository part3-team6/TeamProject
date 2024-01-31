import styled from "styled-components";

// newDashboardColor (children) 부분
interface colorEllipseInnerProps {
  backgroundColor: string;
  choiceColor: string;
}

export const colorEllipseInner = styled.div<colorEllipseInnerProps>`
  position: relative;
  & img {
    display: ${(props) =>
      props.choiceColor === props.backgroundColor ? "block" : "none"};
  }
`;

export const EllipseUl = styled.ul`
  position: relative;
  display: flex;
  gap: 1rem;
  margin-top: 2.8rem;
  transition: transform 1s ease-in-out;
  :hover {
    transform: scale(1.2);
  }
`;

export const colorEllipse = styled.li<{ backgroundColor: string }>`
  width: 2.4rem;
  height: 2.4rem;
  background-color: ${(props) => props?.backgroundColor || "#7AC555"};
  border-radius: 50%;
  cursor: pointer;
`;

export const deleteText = styled.p`
  color: var(--gray-9FA6B2);
  /* font-family: Pretendard; */
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  text-decoration-line: underline;
`;

/// 끝

export const background = styled.div`
  height: 100%;
  margin-left: 30rem;
  display: flex;
  /* background: var(--gray-FAFAFA); */
  background: skyblue;
`;

export const dashboardGrid = styled.div`
  display: grid;
  grid-template-columns: 24.7rem 24.7rem 24.7rem;
  gap: 1.3rem;
  margin-bottom: 4.4rem;
  :hover {
    background: rgba(0, 0, 0, 0.1);
  }
`;

export const Dashboard = styled.button`
  height: 7rem;
  width: 24.7rem;
  display: flex;
  gap: 1.2rem;
  justify-content: center;
  align-items: center;
  border-radius: 0.8rem;
  border: 1px solid var(--gray-D9D9D9);
  background: var(--white-FFFFFF);
`;

export const DashboardText = styled.p`
  color: var(--black-333236);
  text-align: center;
  font-size: 1.6rem;
  font-weight: 600;
  pointer-events: none;
`;

export const newDashBoardButton = styled.div`
  position: relative;
  display: flex;
  width: 2.2rem;
  height: 2.2rem;
  border: none;
`;

export const mainContainer = styled.main`
  display: flex;
  flex-direction: column;
  padding: 4rem 0 0 4rem;
`;

//dashboard styles

export const dashboardColor = styled.div<{ backgroundColor: string }>`
  width: 0.8rem;
  height: 0.8rem;
  background-color: ${(props) => props?.backgroundColor};
  border-radius: 50%;
  cursor: pointer;
  pointer-events: none;
`;

export const crown = styled.div`
  position: relative;
  width: 2rem;
  height: 1.6rem;
  pointer-events: none;
`;
export const pageNationFlex = styled.div`
  align-items: center;
  display: flex;
  /* gap: 1.2rem; */
  grid-column: -2;
  justify-self: end;
  /* pointer-events: none; */
`;

export const pageNation = styled.button`
  position: relative;
  border-radius: 4px 0px 0px 4px;
  border: 1px solid var(--gray-D9D9D9);
  background: var(--white-FFFFFF);
  width: 4rem;
  height: 4rem;
  cursor: pointer;

  :hover {
    background: rgba(0, 0, 0, 0.1);
  }
`;

export const NpagesN = styled.p`
  color: var(--black-333236);
  font-size: 1.4rem;
  font-weight: 400;
  margin-right: 1.6rem;
`;
