import styled from "styled-components";

export const StyledUsersList = styled.ul`
  width: 100%;
  display: grid;
  grid-template-columns: 1fr;
  row-gap: 2rem;
  list-style: none;

  @media (min-width: 600px) {
    grid-template-columns: repeat(2, 1fr);
    column-gap: 2rem;
  }

  @media (min-width: 900px) {
    grid-template-columns: repeat(4, 1fr);
  }
`;

export const StyledUsersListItem = styled.li`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 100%;
  padding: 2rem;
  background: var(--dark);
  border-radius: 0.5rem;

  h2, h3 {
    color: var(--secondary-color);
  }

  h2 {
    font-size: 1.8rem;
    margin-bottom: 1rem;
    font-weight: 500;
  }

  h3 {
    font-size: 1.4rem;
    font-weight: 400;
  }

  .user-avatar {

  }

  .user-infos {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    padding: 0 1rem;

    + div {
      width: 40%;
    }
  }
`;

export const StyledUsersListLoadMore = styled.li`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  background: var(--secondary-color);
  border-radius: 0.5rem;
  cursor: pointer;
  padding: 3rem;
  opacity: 0.6;
  transition: 0.3s;

  &:hover {
    opacity: 1;
  }

  h2 {
    margin-top: 0.5rem;
    text-align: center;
    font-size: 1.6rem;
    font-weight: 500;
    text-transform: uppercase;
  }
`;