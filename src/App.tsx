import React from 'react';

import useFetch from './hooks/useFetch';
import { ReactComponent as Loading } from "./assets/images/three-dots.svg";
import { IUser, IGlobalState } from "./helpers/interfaces";

import GlobalContext from "./contexts/GlobalContext";

import { Container } from "./containers";
import { 
  Header, 
  UsersList 
} from "./components";


function App() {
  const [globalState, setGlobalState] = React.useState<IGlobalState | null>(null);
  const { isFetchinging, data } = useFetch<IUser>('users');
  React.useEffect(() => {
    if(!isFetchinging) {  
      setGlobalState({
        users: data,
        isFinded: false,
        isSearch: false
      });
    }
  }, [data, isFetchinging]);

  return (
    <Container>
      {isFetchinging ? <Loading width="40" /> : 
        <GlobalContext.Provider value={globalState}>
          <Header />
          <UsersList />
        </GlobalContext.Provider>
      }
    </Container>
  );
}

export default App;
