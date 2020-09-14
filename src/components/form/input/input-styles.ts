import styled from "styled-components";

export const StyledInput = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  width: 100%;

  label {
    font-size: 1.4rem;
    margin-bottom: 1rem;
    color: var(--light);
    line-height: 1;
  }
`;

export const InputWrapper = styled.div`
  display: flex;
  border: 2px solid var(--secondary-color);
  align-items: center;
  border-radius: 0.5rem;
  height: 4.5rem;
  background: var(--dark);
  padding: 0 1rem;
  margin-bottom: 2rem;
  width: 100%;

  @media (min-width: 600px) {
    margin-bottom: 0;
  }

  input {
    background: transparent;
    border: none;
    font-size: 1.4rem;
    font-weight: 400;
    color: var(--light);
    width: 100%;
    padding: 0 1rem;
  }

  button {
    background: transparent;
    border: none;
    padding: 0;
    display: flex;
    cursor: pinter;
  }
`;