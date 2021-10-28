/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import { Provider } from 'react-redux'
import { store } from './src/app/store'
import Main from './src/Main';

const App = () => {

  return (
    <Provider store={store}>
      <Main />
    </Provider>
  )
}

export default App;
