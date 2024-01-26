import { styled } from "styled-components";

export const container = styled.div`
  border-radius: 0.8rem;
  background-color: rgba(0, 0, 0, 0.2);
  width: 102.2rem;
  height: 60rem;
  flex-shrink: 0;
  /* overflow: hidden; */

  @media (max-width: 1199px) {
    width: 50.4rem;
    height: 59.2rem;
  }

  @media (max-width: 767px) {
    width: 26rem;
    height: 83.6rem;
  }
`;

export const title = styled.p`
  color: var(--black-333236);
  /* font-family: Pretendard; */
  font-size: 2.4rem;
  font-weight: 700;
  padding: 3.2rem 0 2rem 2.8rem;

  @media (max-width: 767px) {
    font-size: 2rem;
    padding: 2.4rem 0 1.6rem 2rem;
  }
`;

export const inputContainer = styled.div`
  position: relative;
  margin: 0 2.8rem 2.4rem;

  @media (max-width: 767px) {
    margin: 0 1.6rem 0.8rem;
  }
`;

export const input = styled.input`
  width: 96.6rem;
  height: 4rem;
  flex-shrink: 0;
  border-radius: 0.6rem;
  border: 1px solid var(--gray-D9D9D9);
  background: var(--white-FFFFFF);
  padding: 1rem 0 1rem 4.8rem;
  color: var(--gray-9FA6B2);
  /* font-family: Pretendard; */
  font-size: 1.6rem;
  font-weight: 400;

  @media (max-width: 1199px) {
    width: 44.8rem;
  }

  @media (max-width: 767px) {
    width: 22.8rem;
    height: 3.6rem;
    padding: 1rem 0 1rem 4.4rem;
  }
`;

export const searchIcon = styled.button`
  width: 2.4rem;
  height: 2.4rem;
  position: absolute;
  top: 50%;
  left: 1rem;
  transform: translateY(-50%);
  background: none;
  border: none;

  @media (max-width: 767px) {
    width: 2.2rem;
    height: 2.2rem;
  }
`;

interface menuProps {
  display: string;
}
// 타입을 모르겠노 하
export const menu = styled.p`
  /* display: block; */
  color: var(--gray-9FA6B2);
  /* font-family: Pretendard; */
  font-size: 1.6rem;
  font-weight: 400;
  @media (max-width: 767px) {
    font-size: 1.4rem;
    display: ${(props: menuProps) => props?.display || "flex"};
  }
`;

export const menuDiv = styled.div`
  padding: 0 28.4rem 0 2.8rem;
  display: flex;
  justify-content: space-between;

  @media (max-width: 1199px) {
    padding: 0 12.2rem 0 2.8rem;
  }

  @media (max-width: 767px) {
    padding: 1.6rem 0 1.2rem 1.6rem;
    gap: 1rem;
    flex-direction: column;
  }
`;

export const buttonGap = styled.div`
  display: flex;
  gap: 1rem;

  @media (max-width: 767px) {
    padding: 0 1.6rem;
  }
`;

// button 패딩 이상 없으면 빼기
export const yesButton = styled.button`
  width: 8.4rem;
  height: 3.2rem;
  /* padding: 0.7rem 2.9rem; */
  border-radius: 0.4rem;
  background: var(--violet-5534DA);
  color: var(--white-white_FFFFFF, #fff);
  text-align: center;
  /* font-family: Pretendard; */
  font-size: 1.4rem;
  font-weight: 500;

  @media (max-width: 1199px) {
    width: 7.2rem;
    height: 3rem;
  }

  @media (max-width: 767px) {
    width: 10.9rem;
    padding: 0.7rem 3.7rem;
  }
`;

export const noButton = styled.button`
  width: 8.4rem;
  height: 3.2rem;
  /* padding: 0.7rem 2.9rem; */
  border-radius: 0.4rem;
  border: 1px solid var(--gray-D9D9D9);
  background: var(--white-FFFFFF);
  color: var(--violet-violet_5534DA, #5534da);
  text-align: center;
  /* font-family: Pretendard; */
  font-size: 1.4rem;
  font-weight: 500;

  @media (max-width: 1199px) {
    width: 7.2rem;
    height: 3rem;
  }

  @media (max-width: 767px) {
    width: 10.9rem;
    padding: 0.7rem 3.7rem;
  }
`;

export const section = styled.section`
  display: grid;
  grid-template-columns: 2rem 28.5rem 33.5rem 1fr;
  align-items: center;
  border-bottom: 1px solid var(--black-333236);
  height: 7rem;
  padding-left: 3.6rem;
  /* padding-bottom: 2.6rem; */

  &:last-child {
    border-bottom: 0;
  }

  @media (max-width: 1199px) {
    grid-template-columns: 1.4rem 12rem 15rem 1fr;
  }

  @media (max-width: 767px) {
    height: 11rem;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding: 0 0 1.6rem 0;
  }
`;

export const colors = styled.div`
  background-color: ${(props) => props?.backgroundColor || ""};
  width: 0.8rem;
  height: 0.8rem;
  border-radius: 99px;
  @media (max-width: 767px) {
    margin-right: 0rem;
    display: ${(props) => props?.display || ""};
  }
`;

export const text = styled.p`
  color: var(--black-333236);
  /* font-family: Pretendard; */
  font-size: 1.6rem;
  font-weight: 400;
  overflow: hidden;
  white-space: nowrap;
`;
