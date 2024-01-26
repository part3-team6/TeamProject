import styled from "styled-components";

export const card = styled.div`
  width: 31.4rem;

  & a {
    width: 100%;
    height: 100%;
    border-radius: 6px;
    border: 1px solid var(--gray-D9D9D9);
    padding: 2rem;
    display: flex;
    align-items: flex-start;
    flex-direction: column;
    gap: 1.2rem;
  }
  @media all and (max-width: 1199px) {
    width: 54.4rem;
    & a {
      flex-direction: row;
    }
  }
`;
export const cardImg = styled.div`
  width: 27.4rem;
  height: 16rem;
  border-radius: 6px;
  overflow: hidden;
  position: relative;
  @media all and (max-width: 1199px) {
    width: 10rem;
    height: 5.3rem;
  }
`;
export const cardTitle = styled.div`
  font-size: 1.6rem;
  color: var(--black-333236);
  margin-bottom: 1.2rem;
`;
export const inner = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 1.2rem;
  & > div {
    width: 100%;
  }
  @media all and (max-width: 1199px) {
    flex-direction: row;
    align-items: flex-end;
    position: relative;
  }
`;
export const label = styled.div`
  padding: 0.4rem 0.6rem;
  background-color: ${(props) => {
    switch (props.length) {
      case 1:
        return "#F9EEE3"; // 1인 경우 색상
      case 2:
        return "#E7F7DB"; // 2인 경우 색상
      case 3:
        return "#F7DBF0"; // 3인 경우 색상
      case 4:
        return "#DBE6F7"; // 4인 경우 색상
      default:
        return "black"; // 기본 색상
    }
  }};
  border-radius: 4px;
  font-size: 1.2rem;
  flex-shrink: 0;
  flex-basis: auto;
  & span {
    color: ${(props) => {
      switch (props.length) {
        case 1:
          return "#d58d49"; // 1인 경우 색상
        case 2:
          return "#86D549"; // 2인 경우 색상
        case 3:
          return "#D549B6"; // 3인 경우 색상
        case 4:
          return "#4981D5"; // 4인 경우 색상
        default:
          return "black"; // 기본 색상
      }
    }};
  }
`;
export const labelWrap = styled.div`
  display: flex;
  gap: 0.6rem;
  flex-wrap: wrap;
  flex-shrink: 1;
`;
export const dateWrap = styled.div`
  display: flex;
  gap: 0.6rem;
  flex-shrink: 0;
  flex-grow: 1;
  justify-content: space-between;
  align-items: center;
`;
export const colors = styled.div`
  width: 2.4rem;
  height: 2.4rem;
  border-radius: 99px;
  margin-right: 1rem;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #fff;

  background-color: green;
`;
export const date = styled.div`
  display: flex;
  align-items: flex-end;
  gap: 0.6rem;
  color: var(--gray-787486);
  font-size: 1.2rem;
  font-weight: 500;
  @media all and (max-width: 1199px) {
    align-items: center;
  }
`;
export const dateImg = styled.div`
  width: 1.8rem;
  height: 1.8rem;
  position: relative;
`;
export const tagDate = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.8rem;
  @media all and (max-width: 1199px) {
    flex-direction: row;
    align-items: center; // 자식들이 세로 중앙에 오도록 조정
  }
`;
export const text = styled.div`
  width: 100%;
`;
export const cards = styled.div`
  width: 35.4rem;
  padding: 2rem;
  border-right: 1px solid var(--gray-EEEEEE);
  display: flex;
  flex-direction: column;
  gap: 1.6rem;
  @media all and (max-width: 1199px) {
    width: 58.4rem;
  }
`;
export const cardsTitle = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
`;
export const cardsImg = styled.div`
  width: 2.4rem;
  height: 2.4rem;
  cursor: pointer;
  position: relative;
`;
export const title = styled.div`
  display: flex;
  align-items: center;
  gap: 1.2rem;
  font-size: 1.8rem;
  font-weight: 700;
`;
export const titlePoint = styled.div`
  width: 0.8rem;
  height: 0.8rem;
  background-color: purple;
  border-radius: 99px;
`;
export const cardLength = styled.div`
  display: flex;
  padding: 3px 6px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 4px;
  background-color: var(--gray-EEEEEE);
  font-size: 1.2rem;
`;
export const cardMore = styled.div`
  width: 100%;
  height: 4rem;
  border-radius: 6px;
  border: 1px solid var(--gray-D9D9D9);
  background: var(--white-FFFFFF);
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`;
export const cardMoreImg = styled.div`
  width: 2.2rem;
  height: 2.2rem;
  padding: 0.9rem 0;
  position: relative;
`;
