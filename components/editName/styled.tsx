import styled, { keyframes } from "styled-components";

export const EditNameContainer = styled.div`
  width: 62rem;
  height: 25.6rem;
  background-color: var(--white-FFFFFF);
  padding: 2.6rem 2.8rem 0 2.8rem;
  display: flex;
  flex-direction: column;
  gap: 3.4rem;
  border-radius: 8px;

  @media (max-width: 767px) {
    width: 28.4rem;
    height: 21.1rem;
    padding: 2.5rem 2rem 0 2rem;
  }
`;

export const TitleNColor = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Title = styled.p`
  color: var(--black-333236);
  font-size: 2rem;
  font-weight: 700;
`;

export const Colors = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  position: relative;
  gap: 1rem;
`;

const fadeIn = keyframes`
  from {
    transform: scale(1);
  }
  to {
    transform: scale(1.1);
  }
`;

export const Color = styled.div<{ color: number }>`
  width: 3rem;
  height: 3rem;
  border-radius: 50%;
  z-index: 1;
  background-color: ${(props) => {
    switch (props.color) {
      case 1:
        return "#7AC555";
      case 2:
        return "#760DDE";
      case 3:
        return "#FFA500";
      case 4:
        return "#76A6EA";
      case 5:
        return "#E876EA";
      default:
        return "initial";
    }
  }};

  transition: transform 0.1s ease-in-out;
  &:hover {
    animation: ${fadeIn} 0.1s ease-in-out;
    transform: scale(1.1);
  }
`;

export const CheckImgContainer = styled.div<{ checked: number }>`
  width: 2.4rem;
  height: 2.4rem;

  position: absolute;
  z-index: 2;

  top: 0.3rem;
  left: ${(props) => {
    switch (props.checked) {
      case 1:
        return "0.3rem";
      case 2:
        return "4.3rem";
      case 3:
        return "8.3rem";
      case 4:
        return "12.3rem";
      case 5:
        return "16.3rem";
      default:
        return "initial";
    }
  }};
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
`;

export const Label = styled.label`
  color: #333236;
  font-size: 1.8rem;
  font-weight: 500;
`;

export const Input = styled.input`
  width: 100%;
  height: 4.8rem;
  padding: 0 1.5rem 0 1.5rem;
  margin: 0.8rem 0 3rem 0;
  border-radius: 6px;
  border: 1px #d9d9d9 solid;

  color: var(--black-333236);
  font-size: 1.6rem;
  font-weight: 400;

  @media (max-width: 767px) {
    margin: 0.8rem 0 1rem 0;
  }

  &:focus {
    outline-color: var(--violet-5534DA);
  }
`;
export const ButtonContainer = styled.div`
  &:last-child {
    text-align: right;
  }
`;
export const SubmitButton = styled.button<{ isEmpty: boolean }>`
  width: 8.4rem;
  height: 3.2rem;
  background-color: ${(props) =>
    props.isEmpty ? "var(--violet-8-percent)" : "var(--violet-5534DA)"};
  text-align: center;
  border-radius: 4px;
  border: 0px;
  color: var(--white-FFFFFF);
  font-size: 1.4rem;
  font-weight: 500;

  &:active {
    background-color: ${(props) => (props.isEmpty ? "none" : "#36208f")};
  }

  @media (max-width: 1199px) and (min-width: 768px) {
    font-size: 1.4rem;
  }

  @media (max-width: 767px) {
    font-size: 1.2rem;
  }
`;
