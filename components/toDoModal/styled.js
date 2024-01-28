import styled from "styled-components";
import "../../styles/global-style.ts";

export const StyledButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  color: var(--purple-760DDE);
  background-color: var(--white-FFFFFF);
`;

export const ModalBG = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  top: 0;
  background-color: #f9f9f9;
`;

export const ModalContainer = styled.div`
  width: 730px;
  max-height: 763px;
  position: relative;
  border: 1px solid var(--gray-D9D9D9);
  border-radius: 10px;
  background-color: var(--white-FFFFFF);
`;

export const ModalHeader = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 32px 24px 28px;

  & h1 {
    font-size: 24px;
    line-height: 0;
    font-weight: 700;
  }

  & > div {
    position: relative;
  }

  & > div > button {
    background: none;
    border: none;
  }

  & > div > button:first-child {
    margin-right: 24px;
  }
`;

export const ModalOption = styled.div`
  width: 93px;
  height: 82px;
  border: 1px solid var(--gray-D9D9D9);
  border-radius: 6px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: var(--white-FFFFFF);
  position: absolute;
  left: -70px;
  bottom: -82px;
  z-index: 2;

  & button {
    width: 81px;
    height: 32px;
    font-size: 14px;
    font-weight: 400;
    color: var(--black-333236);
    border: none;
    border-radius: 4px;
    padding: 10px 12px;
    margin: 6px;
    transition: 0.3s;

    &:hover {
      font-weight: 500;
      color: var(--violet-5534DA);
      background-color: var(--violet-8-percent);
    }
  }
`;

export const ToDoModalUser = styled.div`
  width: 200px;
  height: 155px;
  display: flex;
  justify-content: space-between;
  padding: 20px;
  flex-direction: column;
  background-color: var(--white-FFFFFF);
  border: 1px solid var(--gray-D9D9D9);
  border-radius: 8px;
  position: absolute;
  top: 85px;
  right: 28px;

  & > div {
    height: 45px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }

  & h3 {
    font-size: 12px;
  }

  & p {
    font-size: 14px;
  }

  & div div {
    display: flex;
    align-items: center;
    gap: 8px;
  }

  @media (max-width: 768px) {
  }
`;

export const ModalContent = styled.div`
  width: 100%;
  max-height: 663px;
  padding: 0 28px;
`;

export const ModalTag = styled.div`
  width: 450px;
  display: flex;
  justify-content: flex-start;
  align-items: center;

  & div {
    height: 22px;
    display: flex;
    align-items: center;
    color: var(--violet-5534DA);
    background-color: var(--violet-8-percent);
    padding: 0 10px;
    border-radius: 10px;
  }

  & div h1 {
    width: 5px;
    height: 5px;
    border-radius: 50%;
    background-color: var(--violet-5534DA);
    margin-right: 5px;
  }

  & div h2 {
    font-size: 12px;
    white-space: nowrap;
  }

  & ul {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    flex-wrap: wrap;
    gap: 10px;
  }

  & p {
    font-size: 14px;
    height: 22px;
    padding: 0 20px;
    color: var(--gray-D9D9D9);
  }

  & ul li {
    height: 22px;
    line-height: 22px;
    font-size: 12px;
    border-radius: 4px;
    padding: 0 10px;
    background-color: #f9eee3;
    color: #d58d49;
  }

  & ul li:last-child {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  & button {
    background: none;
    border: none;
    color: var(--black-333236);
  }
`;

export const ModalWords = styled.p`
  width: 450px;
  font-size: 14px;
  font-weight: 400;
  line-height: 24px;
  padding: 16px 0;
`;

export const ModalCommentInput = styled.div`
  width: 450px;
  margin-top: 24px;

  & h3 {
    font-size: 16px;
    font-weight: 500;
    color: var(--black-333236);
    margin-left: 4px;
    margin-bottom: 10px;
  }

  & div {
    position: relative;
  }

  & textarea {
    width: 450px;
    height: 110px;
    padding: 16px;
    border: 1px solid var(--gray-D9D9D9);
    border-radius: 6px;
    font-size: 14px;
    resize: none;

    &:focus {
      outline: 1px solid var(--violet-5534DA);
    }

    &::placeholder {
      line-height: 1.5;
    }
  }

  & > div > button {
    position: absolute;
    bottom: 12px;
    right: 12px;
    border: 1px solid var(--gray-D9D9D9);
    border-radius: 5px;
    font-size: 12px;
    font-weight: 500;
    width: 90px;
    height: 32px;
    padding: 9px 31px;
  }

  & ul {
    width: 450px;
    max-height: 120px;
    margin-top: 20px;
    margin-bottom: 20px;
    overflow-x: hidden;
    overflow-y: auto;
  }
`;

export const ModalComment = styled.li`
  width: 450px;
  height: 80px;
  margin-bottom: 20px;
  display: flex;
  align-items: flex-start;
`;

export const ModalCommentImg = styled.div`
  margin-top: 4px;
  margin-right: 10px;
`;

export const ModalCommentContainer = styled.div`
  & div {
    display: flex;
    align-items: center;
    font-size: 12px;
    font-weight: 400;
    margin-top: 8px;
    margin-bottom: 6px;

    & h1 {
      margin: 0;
      margin-right: 6px;
      font-size: 14px;
    }

    & p {
      color: var(--gray-9FA6B2);
    }
  }

  & span {
    font-size: 14px;
    font-weight: 400;
    margin-bottom: 12px;
    display: block;
  }

  & ul {
    display: flex;
    gap: 12px;

    & li {
      color: var(--gray-9FA6B2);
      text-decoration: underline;
    }
  }
`;
