import styled from "styled-components";

export const drop = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 6rem;
  right: 1rem;
  font-size: 1.6rem;
  border: 1px solid var(--gray-9FA6B2);
  border-radius: 8px;
  background-color: #fff;
  overflow: hidden;
  z-index: 55;
  @media all and (max-width: 767px) {
    font-size: 1.3rem;
  }
`;

export const btn = styled.div`
  border-top: 1px solid var(--gray-9FA6B2);
  display: flex;
  & div:first-child {
    border-right: 1px solid var(--gray-9FA6B2);
  }
`;
export const btns = styled.div`
  padding: 1.5rem 3rem;
  flex: 1;

  cursor: pointer;
  &:hover {
    background-color: whitesmoke;
  }
`;

export const myWrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  & div {
    padding: 1rem;
  }
`;
