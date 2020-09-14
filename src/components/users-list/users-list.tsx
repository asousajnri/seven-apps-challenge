import React from 'react';
import { User, Users, UserPlus } from 'react-feather';

import { useViewContext } from '../../contexts/view';

import {
  StyledUsersList,
  StyledUsersListItem,
  StyledUsersListLoadMore,
  StyledUsersListLegend,
} from './user-list-styles';

const UsersList = () => {
  const {
    users,
    usersPerView,
    setUsersPerView,
  } = useViewContext();

  return (
    <>
      <StyledUsersListLegend>
        <h3>
          <Users className="icon-users" />
          Usuários (Total):
        </h3>
        <span>
          {users.length}
        </span>
      </StyledUsersListLegend>
      <StyledUsersList>
        {users.map((user, userIndex): any  => {
          if (userIndex < usersPerView) {
            return (
              <StyledUsersListItem key={userIndex}>
                <div className="user-avatar">
                  <User color="#248cd3" size="80" />
                </div>
                <div className="user-infos">
                  <h2>{user.name}</h2>
                  <h3>
                    {user.age}
                    {' '}
                    ano(s)
                  </h3>
                </div>
              </StyledUsersListItem>
            );
          }
        })}

        {users.length > 0 && (
          <StyledUsersListLoadMore
            onClick={() => setUsersPerView((prev) => prev + 15)}
          >
            <UserPlus size="30" />
            <h2>Carregar mais usuários</h2>
          </StyledUsersListLoadMore>
        )}
      </StyledUsersList>
    </>
  );
};

export default UsersList;
