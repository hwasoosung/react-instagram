import React from 'react';
import ForRoute from '../utils/ForRoute';
import { Provider } from 'react-redux';
import store from '../store';

function App() {
  return(
    <Provider store={store}>
      <ForRoute />
    </Provider>
  );
};

export default App;
