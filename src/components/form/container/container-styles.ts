import styled from 'styled-components';

export const StyledContainer = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;

  @media (min-width: 600px) {
    flex-direction: row;
  }
`;
