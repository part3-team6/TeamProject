import { date } from "./../card/styled";
import { background } from "./../modal/styled";
import { inputContainer } from "./../inviteDash/styled";
import styled from "styled-components";

export const input = styled.input`
  width: 45rem;
  height: 4.8rem;
  border-radius: 6px;
  border: 1px solid var(--gray-D9D9D9);
  background: var(--white-FFFFFF);
  padding-left: 1.6rem;

  @media (max-width: 767px) {
    width: 28.7rem;
    height: 4.2rem;
    flex-shrink: 0;
  }
`;

export const layer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(76, 76, 76, 0.7);
  width: 100vw;
  height: 100vh;
  overflow: scroll;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 2;
`;

export const container = styled.div`
  display: flex;
  background: var(--white-FFFFFF);
  width: 50.6rem;
  height: 90.7rem;
  flex-shrink: 0;
  padding: 3.2rem 38.3rem 2.8rem 2.8rem;

  @media (max-width: 767px) {
    width: 32.7rem;
    height: 83.6rem;
    padding: 2.8rem 22.8rem 2rem 2rem;
  }
`;

export const mainTitle = styled.p`
  color: var(--black-333236);
  font-size: 2.4rem;
  font-weight: 700;
  padding-top: 3.2rem;

  @media (max-width: 767px) {
    font-size: 2rem;
  }
`;

export const inputTitle = styled.p`
  color: var(--black-333236);
  font-size: 1.8rem;
  font-weight: 500;
  padding: 2.4rem 0 1rem 0;
`;

export const managerInput = styled.input`
  width: 21.7rem;
  height: 4.8rem;
  border-radius: 6px;
  border: 1px solid var(--gray-D9D9D9);
  background: var(--white-FFFFFF);
  padding: 0 3rem 0 1.6rem;
  cursor: pointer;
  padding-left: 3.5rem;

  @media (max-width: 767px) {
    width: 28.7rem;
    height: 4.2rem;
    flex-shrink: 0;
  }
`;

export const selectImgSrap = styled.div`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  left: 1rem;
  border-radius: 99px;
  overflow: hidden;
  width: 2rem;
  height: 2rem;
  & img {
    object-fit: cover;
  }
`;
export const selectedNick = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #eee;
  text-align: center;
  font-size: 1.4rem;
`;
export const arrowDropContainer = styled.div`
  position: relative;
`;

export const arrowDropWrapper = styled.div`
  position: absolute;
  top: 20%;
  right: 24rem;
  cursor: pointer;

  @media (max-width: 767px) {
    right: 1rem;
  }
`;

export const calenderContainer = styled.div`
  position: relative;
  & input {
    padding-left: 3rem;
  }
  & input[type="date"]::-webkit-calendar-picker-indicator {
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    background: transparent;
    color: transparent;
    cursor: pointer;
  }
  input[type="date"]::before {
    content: attr(placeholder);
    width: 100%;
    height: 100%;
  }

  input[type="date"]:valid::before {
    display: none;
  }
`;

export const calenderWrapper = styled.div`
  position: absolute;
  cursor: pointer;
  padding-top: 3.5%;
  left: 1rem;
`;

export const flexContainer = styled.div`
  display: flex;
  flex-direction: row;
  gap: 1.6rem;

  @media (max-width: 767px) {
    flex-direction: column;
  }
`;

export const flexContainers = styled.div`
  display: flex;
  flex-direction: column;

  @media (max-width: 767px) {
    flex-direction: column;
  }
`;

export const statusInput = styled.input`
  width: 21.7rem;
  height: 4.8rem;
  border-radius: 6px;
  border: 1px solid var(--gray-D9D9D9);
  background: var(--white-FFFFFF);
  padding: 0.8rem 0 0.8rem 0.8rem;
  cursor: pointer;

  @media (max-width: 767px) {
    width: 28.7rem;
    height: 4.2rem;
    flex-shrink: 0;
  }
`;

export const descriptionInput = styled.textarea`
  width: 45rem;
  height: 9.6rem;
  border-radius: 6px;
  border: 1px solid var(--gray-D9D9D9);
  background: var(--white-FFFFFF);
  padding: 1.5rem 1.6rem 6.2rem 1.6rem;
  resize: none;

  @media (max-width: 767px) {
    width: 100%;
    height: 8.4rem;
    flex-shrink: 0;
    padding: 1.5rem 3rem 6.2rem 1.6rem;
  }
`;

export const buttonContainer = styled.div`
  display: flex;

  justify-content: right;
  gap: 1.2rem;
  margin-top: 2.8rem;

  @media (max-width: 767px) {
    justify-content: space-between;
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
  font-size: 1.6rem;
  font-weight: 500;

  :hover {
    opacity: 0.1;
  }
  @media (max-width: 767px) {
    padding: 1.2rem 5.6rem;
    font-size: 1.4rem;
  }
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
  font-size: 1.5rem;
  font-weight: 500;
  @media (max-width: 767px) {
    padding: 1.2rem 5.6rem;
    font-size: 1.4rem;
  }
`;

export const ImageContainer = styled.div`
  display: flex;
  width: 7.6rem;
  height: 7.6rem;
  padding: 2.4rem;
  justify-content: center;
  align-items: center;
  flex-shrink: 0;
  border-radius: 6px;
  background: #f5f5f5;
  :hover {
    opacity: 0.5;
  }
  @media (max-width: 767px) {
    width: 5.8rem;
    height: 5.8rem;
    padding: 1.8rem;
  }
`;

export const StatusInputContainer = styled.div`
  position: relative;
  display: flex;
`;

export const ArrowIcon = styled.div`
  position: absolute;
  top: 50%;
  right: 10px;
  transform: translateY(-50%);
`;

export const dropDownContainer = styled.div`
  position: relative;
`;

export const dropDownWrapper = styled.div`
  position: absolute;

  width: 21.7rem;
  height: 11.8rem;

  border-radius: 6px;
  border: 1px solid var(--gray-D9D9D9);
  background: var(--white-FFFFFF);
  box-shadow: 0px 4px 20px 0px rgba(0, 0, 0, 0.08);
  z-index: 1;

  @media (max-width: 767px) {
    width: 28.7rem;
    height: 11.8rem;
  }
  overflow: scroll;
`;

export const circle = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 2.6rem;
  height: 2.6rem;
  border-radius: 99%;
  background-color: beige;
  font-size: 1.5rem;
  margin: 0.5rem;
  border: 1px solid #d9d9d9;
  margin-left: 3rem;
  cursor: pointer;
  overflow: hidden;

  stroke-width: 2rem;
  stroke: var(--white-white);
  flex-shrink: 0;

  position: relative;
`;

export const nickName = styled.p`
  color: var(--black-black_333236);
  font-size: 1.3rem;
  font-weight: 400;
  cursor: pointer;
`;

export const memberWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 6px;
  cursor: pointer;
  border-bottom: 1px solid rgba(200, 200, 200, 0.3);
  &:hover {
    background-color: #e6e6fa;
  }
`;

export const DatePick = styled.input`
  top: -3rem;
  width: 42.5rem;
  height: 4.8rem;
  cursor: pointer;

  @media (max-width: 767px) {
    width: 28rem;
    height: 4rem;
  }
`;

export const TagContainer = styled.div`
  display: flex;
  position: relative;
  height: 4.8rem;
  flex-wrap: wrap;
  gap: 0.8rem;
  align-items: center;
  background: var(--white-FFFFFF);
  border: 1px solid var(--gray-D9D9D9);
  border-radius: 6px;
  padding-left: 1.6rem;
`;

export const TagWrapper = styled.div`
  display: inline-flex;
  align-items: center;
  background: var(--light-gray);
  border-radius: 4px;
  padding: 0.2rem 0.6rem;
  font-size: 0.8rem;
`;

export const Tag = styled.span`
  display: inline-flex;
  align-items: center;
  margin: 0.4rem;
  background: var(--light-gray);
  border-radius: 4px;
  padding: 0.2rem 0.6rem;
  font-size: 0.8rem;
`;

export const TagInput = styled.input`
  flex: 1;
  border: none;
  outline: none;
`;

export const statusFrame = styled.div`
  display: flex;
  position: relative;
  justify-content: center;
  align-items: center;
  width: fit-content;
  height: 3rem;
  padding: 0.1rem 0.8rem;
  border-radius: 1.1rem;
  align-items: center;
  gap: 0.6rem;
  border-radius: 1.1rem;
  background: var(--violet-8-percent);
  left: 3.6rem;
  top: 0.8rem;
  margin-bottom: 0.8rem;
  cursor: pointer;
  :hover {
  }
`;

export const statusWrapper = styled.div``;

export const statusEllipse = styled.div`
  width: 0.6rem;
  height: 0.6rem;
  border-radius: 100%;
  background-color: var(--violet-5534DA);
`;
