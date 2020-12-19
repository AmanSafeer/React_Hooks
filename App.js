/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';

import { Dashboard } from './src/containers'
import Store from "./src/store"
import { Provider } from "react-redux"

const App = () => {
  return (
      <Provider store={Store}>
        <Dashboard text="Welcome to react hooks" />
      </Provider>
  );
};


export default App;
