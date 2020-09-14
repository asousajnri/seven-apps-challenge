import React from 'react';

import { WithChildren } from '../../helpers/types';
import { IUser } from '../../helpers/interfaces';

import Context from './view-context';

type ViewProvider = WithChildren<{}>;

const ViewProvider = ({ children }: ViewProvider) => {
  const [data, setData] = React.useState<IUser[]>([]);
  const [users, setUsers] = React.useState<IUser[]>([]);
  const [usersPerView, setUsersPerView] = React.useState(15);
  const [isFiredSearch, setIsFiredSearch] = React.useState(false);

  const value = {
    data,
    setData,
    users,
    setUsers,
    usersPerView,
    setUsersPerView,
    isFiredSearch,
    setIsFiredSearch,
  };

  return <Context.Provider value={value}>{children}</Context.Provider>;
};

export default ViewProvider;
