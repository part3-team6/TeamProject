import { styled } from "styled-components";

export const container = styled.div`
  background-color: rgba(0, 0, 0, 0.2);
  width: 102.2rem;
  height: 60rem;
  flex-shrink: 0;
`;

export const title = styled.p`
  color: var(--black-333236);
  /* font-family: Pretendard; */
  font-size: 2.4rem;
  font-weight: 700;
  padding: 3.2rem 0 2rem 2.8rem;
`;
export const inputContainer = styled.div`
  position: relative;
  margin: 0 2.8rem 2.4rem 2.8rem;
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
`;

export const menu = styled.p`
  color: var(--gray-9FA6B2);
  /* font-family: Pretendard; */
  font-size: 1.6rem;
  font-weight: 400;
`;

export const menuDiv = styled.div`
  padding: 2.4rem 28.4rem 0 2.8rem;
  display: flex;
  justify-content: space-between;
`;

export const buttonGap = styled.div`
  display: flex;
  gap: 1rem;
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
`;

export const section = styled.section`
  /* justify-content: space-between;
  display: flex; */
  display: grid;
  grid-template-columns: 2rem 21rem 26rem 1fr;
  align-items: center;
  border-bottom: 1px solid var(--black-333236);
  height: 6.9rem;
  /* padding-bottom: 2.6rem; */
`;

export const colors = styled.div`
  background-color: ${(props) => props?.backgroundColor || ""};
  width: 0.8rem;
  height: 0.8rem;
  border-radius: 99px;
  @media (max-width: 767px) {
    margin-right: 0rem;
  }
`;

export const name = styled.p`
  color: var(--black-333236);
  /* font-family: Pretendard; */
  font-size: 1.6rem;
  font-weight: 400;
`;

export const inviter = styled.p`
  color: var(--black-333236);
  /* font-family: Pretendard; */
  font-size: 1.6rem;
  font-weight: 400;
`;
