import styled from "styled-components";

export const signinback = styled.div`
  width: 100%;
  height: 100vh;
  background: var(--gray-FAFAFA);
`;
export const signin = styled.div`
  width: 100%;
  max-width: 52rem;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
`;
export const logoWrap = styled.div`
  margin-bottom: 3.8rem;
  text-align: center;
  & p {
    color: var(--black-333236);
    font-size: 2rem;
    font-weight: 500;
    margin-top: 1rem;
  }
`;
export const logo = styled.div`
  width: 20rem;
  height: 27.9rem;
  position: relative;
  left: 50%;
  transform: translateX(-50%);
  @media all and (max-width: 767px) {
    width: 11.9rem;
    height: 16.5rem;
  }
`;
export const loginForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 3rem;
  @media all and (max-width: 767px) {
    padding: 0 1.2rem;
  }
`;
export const submit = styled.input`
  display: flex;
  width: 100%;
  max-width: 52rem;
  height: 5rem;
  justify-content: center;
  align-items: center;
  border-radius: 8px;
  background: var(--gray-9FA6B2);
  color: var(--white-FFFFFF);
  font-size: 1.8rem;
  font-weight: 500;
  border: none;
  cursor: pointer;
`;

export const signup = styled.div`
  color: var(--black-333236);
  text-align: center;
  font-size: 1.6rem;
  margin-top: 2.4rem;
  & span {
    color: var(--violet-5534DA);
    text-decoration-line: underline;
    margin-left: 0.5rem;
  }
`;
