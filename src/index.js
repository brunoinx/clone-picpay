import React from 'react';
import { StatusBar } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';

import Routes from './routes';

export default function App() {
  return (
    <>
      <StatusBar barStyle="light-content" backgroundColor="#000"/>
      <NavigationContainer>
        <Routes />
      </NavigationContainer>
    </>
  );
}
