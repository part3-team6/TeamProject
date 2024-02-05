import styled from "styled-components";

export const wrap = styled.div`
  position: relative;
`;
export const mypage = styled.div`
  width: calc(100% - 30rem);
  /* height: calc(100vh - 7rem); */
  min-height: calc(100vh - 7rem);
  display: flex;
  flex-direction: column;
  margin-left: 30rem;
  padding: 2rem;
  background-color: #fafafa;
  gap: 1.2rem;
  @media all and (max-width: 1199px) {
    width: calc(100% - 16rem);
    margin-left: 16rem;
  }
  @media all and (max-width: 767px) {
    width: calc(100% - 7rem);
    margin-left: 7rem;
  }
`;
export const back = styled.div`
  color: var(--black-333236);
  font-size: 1.6rem;
  font-weight: 500;
  margin-bottom: 1rem;
  cursor: pointer;
`;
export const box = styled.form`
  width: 100%;
  max-width: 62rem;
  padding: 3.2rem 2.8rem;
  border-radius: 8px;
  background: var(--white-FFFFFF);
`;
export const boxTitle = styled.div`
  color: var(--black-333236);
  font-size: 2.4rem;
  font-weight: 700;
  margin-bottom: 3.2rem;
  @media all and (max-width: 767px) {
    font-size: 2rem;
  }
`;
export const boxImg = styled.div`
  width: 18.2rem;
  height: 18.2rem;
  position: relative;
  border-radius: 6px;
  overflow: hidden;
  display: table;
  @media all and (max-width: 767px) {
    width: 10rem;
    height: 10rem;
  }
`;
export const changeImg = styled.div`
  width: 18.2rem;
  height: 18.2rem;
  position: relative;
  &:hover label {
    display: block;
  }
  input[type="file"] {
    position: absolute;
    width: 0;
    height: 0;
    padding: 0;
    overflow: hidden;
    border: 0;
  }
  @media all and (max-width: 767px) {
    width: 10rem;
    height: 10rem;
  }
`;
export const changeImginner = styled.label`
  width: 18.2rem;
  height: 18.2rem;
  position: relative;
  background-color: rgba(0, 0, 0, 0.3);
  border: none;
  display: none;
  cursor: pointer;
  @media all and (max-width: 767px) {
    width: 10rem;
    height: 10rem;
  }
`;
export const imgEdit = styled.div`
  width: 2rem;
  height: 2rem;
  position: relative;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
`;
export const submit = styled.input`
  width: 8.4rem;
  height: 3.2rem;
  border-radius: 4px;
  background: var(--violet-5534DA);
  margin: 3.2rem 0 0 auto;
  color: var(--white-FFFFFF);
  text-align: center;
  font-size: 1.4rem;
  line-height: 3.2rem;
  font-weight: 500;
  cursor: pointer;
  display: block;
  border: none;
`;

export const inputBox = styled.div`
  display: flex;
  gap: 1.6rem;
  @media all and (max-width: 767px) {
    flex-direction: column;
  }
`;
export const inputs = styled.div`
  display: flex;
  flex-flow: wrap;
  gap: 1.6rem;
`;
