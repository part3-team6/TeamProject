import styled from "styled-components";

export const sidemenu = styled.div`
  width: 30rem;
  height: 100%;
  display: flex;
  flex-direction: column;
  padding: 2rem 2.4rem;
  border-right: 0.1rem solid var(--gray-D9D9D9);
  position: absolute;
  top: 0;
  @media all and (max-width: 1199px) {
    width: 16rem;
    padding: 2rem 1rem 0 2.4rem;
  }
  @media all and (max-width: 767px) {
    width: 6.7rem;
    padding: 2rem 1rem 0;
    align-items: center;
  }
`;

export const sideLogo = styled.div`
  width: 11rem;
  height: 3.3rem;
  position: relative;
  margin-bottom: 6rem;
  display: flex;
  align-items: flex-end;
  cursor: pointer;
  @media all and (max-width: 767px) {
    width: 2.4rem;
    margin-bottom: 4.5rem;
  }
`;
export const subTitle = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: var(--gray-787486);
  font-size: 1.2rem;
  font-weight: bold;
  margin-bottom: 1.5rem;
  @media all and (max-width: 767px) {
    & span {
      display: none;
    }
  }
`;
export const more = styled.div`
  width: 2rem;
  height: 2rem;
  position: relative;
  cursor: pointer;
`;
export const sideLists = styled.div`
  width: 100%;
  overflow-y: scroll;
  overflow-x: hidden;

  &::-webkit-scrollbar {
    width: 0.3rem;
  }

  &::-webkit-scrollbar-thumb {
    background: var(--violet-5534DA);
    border-radius: 6px;
  }
`;
export const sideList = styled.div<{ selectId: number; itemID: number }>`
  /* width: 100%; */
  height: 4.5rem;
  color: var(--gray-787486);
  font-size: 1.8rem;
  font-weight: 500;
  background-color: ${(props) =>
    props.selectId == props.itemID ? "#e9e5ff" : ""};
  cursor: pointer;
  border-radius: 10px;
  & a {
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
  }
  @media all and (max-width: 1199px) {
    font-size: 1.6rem;
  }
  @media all and (max-width: 767px) {
    & span {
      display: none;
    }
    justify-content: center;
    & a {
      justify-content: center;
    }
  }
`;
export const colors = styled.div`
  width: 0.8rem;
  height: 0.8rem;
  border-radius: 99px;
  margin-right: 1rem;
  @media all and (max-width: 767px) {
    margin-right: 0rem;
  }
`;
export const crown = styled.div`
  width: 1.8rem;
  height: 1.4rem;
  position: relative;
  margin-left: 1rem;
  @media all and (max-width: 767px) {
    display: none;
  }
`;

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
