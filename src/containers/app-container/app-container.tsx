import React from 'react';

import useFetch from '../../hooks/useFetch';
import { IUser } from '../../helpers/interfaces';
import { ReactComponent as Loading } from '../../assets/images/three-dots.svg';
import { useViewContext } from '../../contexts/view';

import { Header, UsersList } from '../../components';

import { StyledAppContainer } from './app-container-styles';

const AppContainer = () => {
  const { isFetchinging, data } = useFetch<IUser>('users');
  const { setUsers, setData } = useViewContext();

  React.useEffect(() => {
    setUsers(data);
    setData(data);
  }, [data, setData, setUsers]);

  return (
    <StyledAppContainer>
      {isFetchinging ? <Loading width="40" /> : (
        <>
          <Header />
          <UsersList />
        </>
      )}
    </StyledAppContainer>
  );
};

export default AppContainer;
