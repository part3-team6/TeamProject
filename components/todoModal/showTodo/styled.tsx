import styled from "styled-components";

export const StyledButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  color: var(--purple-760DDE);
  background-color: var(--white-FFFFFF);
  transition: 0.3s;
`;

export const ModalBG = styled.div`
  z-index: 999;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  top: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.7);
  padding: 1rem;
`;

export const ModalContainer = styled.div`
  width: 73rem;
  height: 100%;
  max-width: 730px;
  max-height: 763px;
  position: relative;
  border: 1px solid var(--gray-D9D9D9);
  border-radius: 10px;
  background-color: var(--white-FFFFFF);

  @media all and (max-width: 1199px) {
    width: 68rem;
  }
  @media all and (max-width: 767px) {
    width: 36.7rem;
    overflow-y: auto;
    overflow-x: hidden;
    &::-webkit-scrollbar {
      width: 0.3rem;
    }

    &::-webkit-scrollbar-thumb {
      background: var(--violet-5534DA);
      border-radius: 6px;
    }
  }
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
    width: 28px;
    height: 28px;
    position: relative;
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

    &:hover {
      font-weight: 500;
      color: var(--violet-5534DA);
      background-color: var(--violet-8-percent);
    }
  }
`;

export const ToDoImg = styled.div`
  width: 2rem;
  height: 2rem;
  position: relative;
  & > div {
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
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

  @media all and (max-width: 767px) {
    width: 100%;
    height: auto;
    flex-direction: row;
    position: static;
  }

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

  & > div > div {
    display: flex;
    align-items: center;
    gap: 8px;
    position: relative;
    border-radius: 99px;
    overflow: hidden;
  }

  @media (max-width: 768px) {
  }
`;

export const ModalContent = styled.div`
  width: 100%;
  max-height: 663px;
  padding: 0 28px;
  position: relative;
  @media all and (max-width: 767px) {
    margin-top: 2rem;
  }
`;

export const ModalTag = styled.div`
  width: 450px;
  display: flex;
  justify-content: flex-start;
  align-items: center;

  & > div {
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
    @media all and (max-width: 767px) {
      padding: 0 1rem;
    }
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
  word-wrap: break-word;
  @media all and (max-width: 1199px) {
    width: 41rem;
  }
  @media all and (max-width: 767px) {
    width: 28.7rem;
  }
`;

export const ModalContentImage = styled.div`
  width: 450px;
  height: 200px;
  position: relative;
  border-radius: 1rem;
  overflow: hidden;
  & img {
    object-fit: cover;
  }
  @media all and (max-width: 1199px) {
    width: 41rem;
    height: 24.5rem;
  }
  @media all and (max-width: 767px) {
    width: 28.7rem;
    height: 16.7rem;
  }
`;

export const ModalCommentInput = styled.div`
  width: 450px;
  margin-top: 24px;

  @media all and (max-width: 1199px) {
    width: 41rem;
  }
  @media all and (max-width: 767px) {
    width: 28.7rem;
  }

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
    width: 100%;
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
    border: 1px solid var(--violet-5534DA);
    border-radius: 5px;
    font-size: 12px;
    font-weight: 500;
    width: 90px;
    height: 32px;
    padding: 9px 31px;

    &:hover {
      background-color: var(--violet-5534DA);
      color: var(--white-FFFFFF);
    }
  }

  & > ul {
    width: 100%;
    max-height: 120px;
    margin-top: 20px;
    margin-bottom: 20px;
    overflow-x: hidden;
    overflow-y: auto;
    @media all and (max-width: 1199px) {
      max-height: 105px;
    }
    @media all and (max-width: 767px) {
      max-height: 105px;
    }
  }
`;

export const ModalComment = styled.li`
  width: 400px;
  margin-bottom: 20px;
  display: flex;
  align-items: flex-start;
`;

export const ModalCommentImg = styled.div`
  margin-top: 4px;
  margin-right: 10px;
  position: relative;

  & > div {
    width: 34px;
    height: 34px;
    text-align: center;
    line-height: 34px;
    font-size: 1.6rem;
  }
`;

export const ModalCommentContainer = styled.div`
  width: 350px;
  height: 100%;

  & div:first-child {
    display: flex;
    align-items: center;
    font-size: 12px;
    font-weight: 400;
    margin-top: 8px;
    margin-bottom: 10px;

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
      cursor: pointer;
    }
  }
`;

export const ModalEditComment = styled.div`
  & textarea {
    width: 350px;
    height: 60px;
    padding: 6px;
    margin-top: 5px;
    resize: none;
    font-size: 12px;
  }

  & div {
    display: flex;
    gap: 10px;
    margin-top: 5px;
  }

  & div button {
    padding: 3px 6px;
    border: 1px solid var(--black-333236);
    border-radius: 5px;
    color: var(--black-333236);

    &:hover {
      background-color: var(--black-333236);
      color: var(--white-FFFFFF);
    }
  }
`;
