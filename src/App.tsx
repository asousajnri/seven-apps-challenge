import React from 'react';

import { ViewProvider } from './contexts/view';
import { AppContainer } from './containers';

function App() {
  return (
    <ViewProvider>
      <AppContainer />
    </ViewProvider>
  );
}

export default App;
