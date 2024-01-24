import styled from "styled-components";

export const sidemenu = styled.div`
  width: 30rem;
  height: 100vh;
  display: flex;
  flex-direction: column;
  padding: 2rem 2.4rem;
  border-right: 0.1rem solid var(--gray-D9D9D9);
  background-color: pink;
`;

export const sideLogo = styled.div`
  width: 11rem;
  height: 3.3rem;
  position: relative;
  margin-bottom: 6rem;
  display: flex;
  align-items: flex-end;
  & span {
  }
`;
export const sideLogoImg = styled.div`
  width: 2.8rem;
  height: 3.3rem;
  position: relative;
  margin-bottom: 6rem;
`;
export const subTitle = styled.div`
  display: flex;
  justify-content: space-between;
  color: var(--gray-787486);
  font-size: 1.2rem;
  font-weight: bold;
  margin-bottom: 1.5rem;
`;
export const more = styled.div`
  width: 2rem;
  height: 2rem;
  position: relative;
  cursor: pointer;
`;
export const sideList = styled.div`
  width: 27.6rem;
  height: 4.5rem;
  color: var(--gray-787486);
  font-size: 1.8rem;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
`;
