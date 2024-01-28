import styled from "styled-components";

export const layer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(76, 76, 76, 0.7);
  height: 100rem;
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

  @media (max-width: 767px) {
    width: 28.7rem;
    height: 4.2rem;
    flex-shrink: 0;
  }
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
  right: 10px; // 원하는 간격으로 조절하세요
  transform: translateY(-50%);
`;
