import styled from "styled-components";

export const landingBack = styled.div`
  width: 100%;
  background-color: black;
`;

export const landinginner = styled.div`
  width: 100%;
  padding: 9.4rem 10.3rem 0;
  display: flex;
  flex-direction: column;
  color: var(--white-FFFFFF);
  @media all and (max-width: 767px) {
    padding: 9.4rem 1.6rem 0;
  }
`;

export const mainImg = styled.div`
  width: 72rem;
  height: 42.3rem;
  position: relative;
  left: 50%;
  transform: translateX(-50%);
  @media all and (max-width: 1199px) {
    width: 53.7rem;
    height: 31.4rem;
  }
  @media all and (max-width: 767px) {
    width: 28.7rem;
    height: 16.8rem;
  }
`;

export const mainWrap = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5rem;
`;

export const mainText = styled.div`
  text-align: center;
  font-size: 7.6rem;
  font-weight: 700;
  & span {
    color: var(--violet-5534DA);
    font-family: Montserrat;
    font-size: 9rem;
    font-weight: 700;
  }
  @media all and (max-width: 1199px) {
    font-size: 5.6rem;
    & span {
      font-size: 7rem;
    }
  }
  @media all and (max-width: 767px) {
    font-size: 4rem;
    & p {
      display: flex;
      flex-direction: column;
    }
    & span {
      font-size: 4.2rem;
    }
  }
`;

export const login = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 8px;
  background: var(--violet-5534DA);
  margin: 0 auto;
  font-size: 1.8rem;
  font-weight: 500;
  margin-bottom: 9rem;
  & a {
    width: 28rem;
    padding: 1.5rem 0px;
    text-align: center;
  }
  @media all and (max-width: 1199px) {
    font-size: 1.6rem;
  }
  @media all and (max-width: 767px) {
    font-size: 1.4rem;
    margin-bottom: 0;
  }
`;

export const pointWrap = styled.div`
  width: 100%;
  max-width: 120rem;
  height: 60rem;
  border-radius: 8px;
  background: var(--black-171717);
  margin: 9rem auto;
  display: flex;
  padding: 10.3rem 0 0;
  @media all and (max-width: 1199px) {
    flex-direction: column;
    max-width: 66.4rem;
    height: 97.2rem;
    align-items: center;
    &:nth-child(2) {
      flex-direction: column-reverse;
    }
  }
  @media all and (max-width: 767px) {
    max-width: 34.3rem;
    height: 68.6rem;
    font-size: 1.4rem;
    margin-bottom: 0;
    align-items: center;
    text-align: center;
  }
`;

export const pointText = styled.div`
  width: 100%;
  max-width: 59rem;
  height: 49rem;
  display: flex;
  flex-direction: column;
  gap: 10rem;
  padding-left: 6rem;
  & p:first-child {
    color: var(--gray-9FA6B2);
    font-size: 2.2rem;
    font-weight: 500;
  }
  @media all and (max-width: 767px) {
    font-size: 1.4rem;
    padding-left: 0;
  }
`;
export const point = styled.p`
  color: var(--white-FFFFFF);
  font-size: 4.8rem;
  font-weight: 700;
  @media all and (max-width: 767px) {
    font-size: 3.6rem;
  }
`;

export const pointImg = styled.div`
  width: 100%;
  max-width: 59rem;
  height: 49rem;
  position: relative;

  & img {
    object-fit: contain;
  }
  @media all and (max-width: 767px) {
    max-width: 29.6rem;
  }
`;

export const how = styled.div`
  max-width: 120rem;
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  @media all and (max-width: 1199px) {
    align-items: center;
  }
  @media all and (max-width: 767px) {
    margin-top: 9rem;
  }
`;

export const howTitle = styled.div`
  color: var(--white-FFFFFF);
  font-size: 2.8rem;
  font-weight: 700;
  margin-bottom: 3.6rem;
  @media all and (max-width: 767px) {
    font-size: 2.2rem;
  }
`;

export const howCards = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 3.3rem;
  @media all and (max-width: 1199px) {
    flex-direction: column;
    gap: 4.8rem;
  }
`;

export const howCard = styled.div`
  width: 100%;
  max-width: 38rem;
  /* height: 38rem; */
  display: flex;
  flex-direction: column;
  @media all and (max-width: 767px) {
    max-width: 34.3rem;
  }
`;

export const howImg = styled.div`
  width: 100%;
  max-width: 37.8rem;
  height: 26rem;
  border-radius: 8px 8px 0px 0px;
  background: var(--black-4B4B4B);
  position: relative;
`;
export const howImgWrap = styled.div`
  width: 30rem;
  height: 100%;
  position: relative;
  transform: translateX(-50%);
  left: 50%;

  & img {
    object-fit: contain;
  }
`;
export const howText = styled.div`
  width: 100%;
  max-width: 37.8rem;
  height: 124px;
  flex-shrink: 0;
  border-radius: 0px 0px 8px 8px;
  background: var(--black-171717);
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 1.8rem;
  padding: 3.3rem;

  & p:first-child {
    font-size: 1.8rem;
    font-weight: 700;
  }
  & p {
    font-size: 1.6rem;
    font-weight: 500;
  }
`;

export const footer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 4rem 0;
  margin-top: 16rem;
  color: var(--gray-9FA6B2);
  font-size: 1.6rem;
  @media all and (max-width: 767px) {
    flex-direction: column;
    gap: 1.2rem;
    margin-bottom: 16rem;
  }
`;
export const faq = styled.div`
  display: flex;
  gap: 3.2rem;
`;
export const sns = styled.div`
  display: flex;
  gap: 1.4rem;
`;
export const snsImg = styled.div`
  width: 2rem;
  height: 2rem;
  position: relative;
`;
