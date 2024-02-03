import styled from "styled-components";

export const headerWrap = styled.div`
  /* width: calc(100vw - 30rem); */
  height: 7rem;
  border-bottom: 1px solid var(--gray-D9D9D9);
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 3rem 0 3rem;
  margin-left: 30rem;
  font-size: 1.6rem;
  @media all and (max-width: 1199px) {
    /* width: calc(100vw - 16rem); */
    margin-left: 16rem;
    justify-content: flex-end;
  }
  @media all and (max-width: 767px) {
    /* width: calc(100vw - 0.7rem); */
    margin-left: 7rem;
  }
`;

export const dashBoard = styled.p`
  color: var(--black-333236);
  font-size: 2rem;
  font-weight: bold;
  @media all and (max-width: 1199px) {
    display: none;
  }
`;
export const headerData = styled.div`
  display: flex;
  align-items: center;
  gap: 1.6rem;
  @media all and (max-width: 1199px) {
    gap: 1.2rem;
  }
  @media all and (max-width: 767px) {
    gap: 0.6rem;
  }
`;
export const line = styled.div`
  min-width: 0.1rem;
  height: 4rem;
  background-color: var(--gray-D9D9D9);
`;
export const btn = styled.button`
  display: flex;
  gap: 0.8rem;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  padding: 1.2rem 1.6rem;
  position: relative;
  border-radius: 8px;
  border: 1px solid var(--gray-D9D9D9);
  background: var(--white-FFFFFF);

  @media all and (max-width: 11299px) {
    font-size: 1.4rem;
  }
  @media all and (max-width: 767px) {
    & img {
      display: none;
    }
  }
`;

export const member = styled.div`
  display: flex;
  margin-left: 2rem;
  & div {
    margin-left: -1rem;
  }
`;
export const headerCircle = styled.div`
  width: 3.8rem;
  height: 3.8rem;
  border-radius: 10rem;
  background-color: skyblue;
  color: var(--white-FFFFFF);
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid #fff;
  position: relative;
  z-index: 1;
  overflow: hidden;
  @media all and (max-width: 767px) {
    width: 3.4rem;
    height: 3.4rem;
  }
`;
export const myName = styled.div`
  display: flex;
  align-items: center;
  gap: 0.9rem;
  @media all and (max-width: 767px) {
    & span {
      display: none;
    }
  }
`;
