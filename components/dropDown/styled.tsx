import styled from "styled-components";

export const drop = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 6rem;
  right: 1rem;
  font-size: 2rem;
  border: 1px solid black;
  border-radius: 8px;
  background-color: #fff;
  overflow: hidden;
  @media all and (max-width: 767px) {
    font-size: 1.3rem;
  }
`;

export const btns = styled.div`
  padding: 2rem 5rem;
  flex: 1;

  cursor: pointer;
  &:hover {
    background-color: whitesmoke;
  }
  @media all and (max-width: 767px) {
    padding: 1.5rem 3rem;
  }
`;
