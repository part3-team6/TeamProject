import { styled } from "styled-components";

export const form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 3rem;
  padding: 0 1rem;
`;

export const signupback = styled.div`
  display: flex;
  flex-direction: column;
`;
export const container = styled.div`
  width: 100%;
  max-width: 52rem;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
`;

export const logo = styled.div`
  position: relative;
  margin: 1rem auto;
  width: 20rem;
  height: 27.9rem;

  @media (max-width: 767px) {
    margin: 30rem auto 0.8rem;
  }
`;

export const text = styled.p`
  color: var(--black-333236);
  text-align: center;
  /* font-family: Pretendard; */
  font-size: 2rem;
  font-weight: 500;
  padding-bottom: 3.8rem;
`;

export const checkBox = styled.div`
  align-items: center;
  display: flex;
  gap: 0.8rem;
`;

export const checkInput = styled.input`
  width: 2rem;
  height: 2rem;
  border-radius: 0.4rem;
  border: 1px solid var(--gray-D9D9D9);
`;

export const noneButton = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 5rem;
  border-radius: 0.8rem;
  background: var(--gray-9FA6B2);
  color: var(--white, #fff);
  /* font-family: Pretendard; */
  font-size: 1.8rem;
  font-weight: 500;

  @media (max-width: 767px) {
    height: 5rem;
    gap: 1rem;
  }
`;

export const button = styled.button`
  width: 100%;
  height: 5rem;
  border: none;
  border-radius: 0.8rem;
  background: var(--violet-5534DA);
  color: var(--white, #fff);
  text-align: center;
  /* font-family: Pretendard; */
  font-size: 1.8rem;
  font-weight: 500;

  @media (max-width: 767px) {
    height: 5rem;
    gap: 1rem;
  }
`;

export const logintext = styled.div`
  display: flex;
  color: var(--black-333236);
  font-size: 1.6rem;
  gap: 1rem;
`;

export const linkLogin = styled.p`
  color: var(--violet-5534DA);
  text-decoration-line: underline;
`;

export const label = styled.label`
  color: var(--black-333236);
  font-size: 1.6rem;
  font-weight: 400;
`;
