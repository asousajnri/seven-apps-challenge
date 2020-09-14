import styled from 'styled-components';

export const StyledButton = styled.button`
  width: 100%;
  height: 4.5rem;
  background: var(--secondary-color);
  color: var(--dark);
  text-transform: uppercase;
  font-weight: bold;
  border-radius: 0.5rem;
  border: none;
  cursor: pointer;
  transition: 0.3s;
  opacity: 0.8;

  @media (min-width: 600px) {
    max-width: 20rem;
    margin-left: 2rem;
  }

  &:hover {
    opacity: 1;
  }
`;
