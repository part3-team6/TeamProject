import { styled } from "styled-components";

// height값 나중에 모달 화면띄울때 보고 맞추기
export const background = styled.div`
  width: 100%;
  z-index: 999;
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  background: rgba(0, 0, 0, 0.7);
  height: 100%;
`;

export const container: any = styled.div<{ width: string; height: string }>`
  padding: 3.2rem 2.8rem 2.8rem 2.8rem;
  width: ${(props) => props?.width || ""};
  height: ${(props) => props?.height || ""};
  flex-shrink: 0;
  border-radius: 0.8rem;
  background: var(--white-FFFFFF);
  flex-direction: column;
  display: flex;
  justify-content: center;

  @media (max-width: 767px) {
    padding: 2.8rem 2rem 2.8rem 2rem;
    width: initial;
    height: initial;
  }
`;

export const buttonFlex = styled.div`
  margin-top: 2.8rem;
  justify-content: flex-end;
  display: flex;
  gap: 1.2rem;
`;

export const button = styled.button`
  display: flex;
  padding: 1.4rem 4.6rem;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  flex-shrink: 0;
  border-radius: 8px;
  background: var(--violet-5534DA);
  color: var(--white-FFFFFF);
  text-align: center;
  /* font-family: Pretendard; */
  font-size: 1.5rem;
  font-weight: 500;

  @media (max-width: 767px) {
    padding: 1.2rem 5.6rem;
    font-size: 1.4rem;
  }
`;

export const cancelButton = styled.button`
  display: flex;
  padding: 1.4rem 4.6rem;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  flex-shrink: 0;
  border-radius: 0.8rem;
  border: 1px solid var(--gray-D9D9D9);
  color: var(--gray-787486);
  text-align: center;
  /* font-family: Pretendard; */
  font-size: 1.6rem;
  font-weight: 500;

  @media (max-width: 767px) {
    padding: 1.2rem 5.6rem;
    font-size: 1.4rem;
  }
`;

export const title = styled.p`
  /* font-family: Pretendard; */
  font-size: 2.4rem;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  margin-bottom: 3.2rem;

  @media (max-width: 767px) {
    font-size: 2rem;
  }
`;

export const name = styled.p`
  /* font-family: Pretendard; */
  font-size: 1.8rem;
  font-style: normal;
  font-weight: 500;
  line-height: normal;

  @media (max-width: 767px) {
    font-size: 1.6rem;
  }
`;

export const input = styled.input`
  width: 48.4rem;
  height: 4.8rem;
  flex-shrink: 0;
  border-radius: 6px;
  border: 1px solid var(--gray-D9D9D9);
  background: var(--white-FFFFFF);
  margin: 1rem auto;
  font-size: 1.6rem;
  padding: 1.4rem;

  @media (max-width: 767px) {
    width: 28.7rem;
    height: 4.2rem;
    font-size: 1.2rem;
  }
`;

export const errText = styled.p`
  color: var(--red-D6173A);
  /* font-family: Pretendard; */
  font-size: 1.4rem;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
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
  background-color: var(
    ${(props) => props?.backgroundColor || "--green-7AC555"}
  );
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

//  newDashboardColor 부분 끝

export const description = styled.p`
  margin-top: 7rem;
  color: var(--black-333236);
  text-align: center;
  /* font-family: Pretendard; */
  font-size: 1.8rem;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  cursor: pointer;
`;

export const test = styled.img`
  width: 2.4rem;
  height: 2.4rem;
`;
