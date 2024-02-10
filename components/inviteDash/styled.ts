import { styled } from "styled-components";

export const container = styled.div`
  border-radius: 0.8rem;
  width: 100%;
  flex-shrink: 0;
  background: var(--white-FFFFFF);

  @media (max-width: 1199px) {
    width: 50.4rem;
  }

  @media (max-width: 767px) {
    width: 26rem;
  }
`;

export const title = styled.p`
  color: var(--black-333236);
  font-size: 2.4rem;
  font-weight: 700;
  padding: 3.2rem 0 2rem 2.8rem;

  @media (max-width: 767px) {
    font-size: 2rem;
    padding: 2.4rem 0 1.6rem 2rem;
  }
`;

// 초대받는 대쉬보드 없을때 스타일
// noDash.tsx
export const noDashflex = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const unsub = styled.div`
  position: relative;
  width: 10rem;
  height: 10rem;
  margin-top: 4.6rem;

  @media (max-width: 767px) {
    margin-top: 10.5rem;
  }
`;

export const noDash = styled.p`
  color: var(--gray-9FA6B2);
  text-align: center;
  font-size: 1.8rem;
  font-weight: 400;
  padding: 2.4rem 0 12.8rem 0;

  @media (max-width: 767px) {
    padding: 1.6rem 0 15.4rem 0;
  }
`;
// 끝

export const inputContainer = styled.div`
  position: relative;
  margin: 0 2.8rem 2.4rem;

  @media (max-width: 767px) {
    margin: 0 1.6rem 0.8rem;
  }
`;

export const input = styled.input`
  width: 100%;
  height: 4rem;
  flex-shrink: 0;
  border-radius: 0.6rem;
  border: 1px solid var(--gray-D9D9D9);
  background: var(--white-FFFFFF);
  padding: 1rem 0 1rem 4.8rem;
  color: var(--gray-9FA6B2);
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

export const menu = styled.p<{ display?: string }>`
  display: block;
  color: var(--gray-9FA6B2);
  font-size: 1.6rem;
  font-weight: 400;
  @media (max-width: 767px) {
    font-size: 1.4rem;
    display: ${(props) => props?.display || "grid"};
    grid-template-columns: 5rem 1fr;
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
    padding: 1rem 0 1.2rem 1rem;
    gap: 1rem;
  }
`;

export const buttonGap = styled.div`
  display: flex;
  gap: 1rem;

  @media (max-width: 767px) {
    padding: 0 1.6rem;
  }
`;

export const yesButton = styled.button`
  width: 8.4rem;
  height: 3.2rem;
  border-radius: 0.4rem;
  background: var(--violet-5534DA);
  color: var(--white-white_FFFFFF, #fff);
  text-align: center;
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
  border-radius: 0.4rem;
  border: 1px solid var(--gray-D9D9D9);
  background: var(--white-FFFFFF);
  color: var(--violet-violet_5534DA, #5534da);
  text-align: center;
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
  grid-template-columns: 15rem 22rem 1fr;
  align-items: center;
  border-bottom: 1px solid var(--black-333236);
  height: 7rem;
  padding-left: 6.4rem;

  &:last-child {
    border-bottom: 0;
  }

  @media (max-width: 1199px) {
    padding-left: 2.8rem;
    grid-template-columns: 14rem 15.5rem 1fr;
  }

  @media (max-width: 767px) {
    height: 12rem;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding: 0 0 1.6rem 0;
  }
`;

export const colors = styled.div<{
  display?: string;
  backgroundColor?: string;
}>`
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
  font-size: 1.6rem;
  font-weight: 400;
  overflow: hidden;
  white-space: nowrap;

  @media (max-width: 767px) {
    font-size: 1.4rem;
  }
`;
