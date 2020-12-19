/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  Platform
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

import { Dashboard } from './src/containers'

const App = () => {
  return (
    <>
      <StatusBar barStyle="light-content" backgroundColor="black" />
      {Platform.OS == "ios" ?
        <SafeAreaView>
          <Dashboard text="Welcome" />
        </SafeAreaView>
        :
        <Dashboard text="Welcome"/>
      }
    </>
  );
};


export default App;
