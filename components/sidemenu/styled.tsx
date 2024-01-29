import styled from "styled-components";

export const sidemenu = styled.div`
  width: 30rem;
  height: 100vh;
  display: flex;
  flex-direction: column;
  padding: 2rem 2.4rem;
  border-right: 0.1rem solid var(--gray-D9D9D9);
  @media all and (max-width: 1199px) {
    width: 16rem;
  }
  @media all and (max-width: 767px) {
    width: 6.7rem;
  }
`;

export const sideLogo = styled.div`
  width: 11rem;
  height: 3.3rem;
  position: relative;
  margin-bottom: 6rem;
  display: flex;
  align-items: flex-end;
  cursor: pointer;
  @media all and (max-width: 767px) {
    width: 2.4rem;
    margin-bottom: 4.5rem;
  }
`;
export const subTitle = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: var(--gray-787486);
  font-size: 1.2rem;
  font-weight: bold;
  margin-bottom: 1.5rem;
  @media all and (max-width: 767px) {
    & span {
      display: none;
    }
  }
`;
export const more = styled.div`
  width: 2rem;
  height: 2rem;
  position: relative;
  cursor: pointer;
`;
export const sideList = styled.div`
  /* width: 100%; */
  height: 4.5rem;
  color: var(--gray-787486);
  font-size: 1.8rem;
  font-weight: 500;
  cursor: pointer;
  & a {
    display: flex;
    align-items: center;
  }
  @media all and (max-width: 1199px) {
    font-size: 1.6rem;
  }
  @media all and (max-width: 767px) {
    & span {
      display: none;
    }
    justify-content: center;
  }
`;
export const colors = styled.div`
  width: 0.8rem;
  height: 0.8rem;
  border-radius: 99px;
  margin-right: 1rem;
  @media all and (max-width: 767px) {
    margin-right: 0rem;
  }
`;
export const crown = styled.div`
  width: 1.8rem;
  height: 1.4rem;
  position: relative;
  margin-left: 1rem;
  @media all and (max-width: 767px) {
    display: none;
  }
`;
