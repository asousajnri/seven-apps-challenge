import React from "react";
import { User, UserPlus } from "react-feather";

import { IUser } from "../../helpers/interfaces";

import GlobalContext from "../../contexts/GlobalContext";

import { 
  StyledUsersList, 
  StyledUsersListItem, 
  StyledUsersListLoadMore 
} from "./user-list-styles";;

const UsersList = () => {
  const states = React.useContext(GlobalContext);
  const [userListing, setUserListing] = React.useState<IUser[] | undefined>([]);
  const [userListingNumberLoadUser, setUserListingNumberLoadUser] = React.useState(15);

  React.useEffect(() => {
    const userFiltered: IUser[] | undefined = states?.users.filter((user, userIndex) => {
      if(userIndex < userListingNumberLoadUser) return user;
    });

    setUserListing(userFiltered);
  }, [states, userListingNumberLoadUser]);

  return (
    <StyledUsersList>
      {userListing?.map((user, userIndex) => 
        (
          <StyledUsersListItem key={userIndex}>
              <div className="user-avatar">
                <User color="#248cd3" size="80"/>
              </div>
              <div className="user-infos">
                <h2>{user.name}</h2>
                <h3>{user.age} anos</h3>
              </div>
          </StyledUsersListItem>))
      }

      <StyledUsersListLoadMore onClick={() => setUserListingNumberLoadUser((prev) => prev + 15)}>
        <UserPlus size="30"/>
        <h2>Carregar mais usuários</h2>
      </StyledUsersListLoadMore>
    </StyledUsersList>
  );
};

export default UsersList;