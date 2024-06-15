import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import HomeNavigator from './HomeNavigator';

function RootNavigator(): JSX.Element {
  return (
    <NavigationContainer>
      <HomeNavigator />
    </NavigationContainer>
  );
}

export default RootNavigator;
