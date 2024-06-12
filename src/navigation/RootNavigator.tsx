import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {useAppSelector} from '@redux/hook';
import AuthNavigator from './AuthNavigator';
import HomeNavigator from './HomeNavigator';
import {selectIsLoggedIn} from '@redux/auth/slice';

function RootNavigator(): JSX.Element {
  const loggedIn = useAppSelector(selectIsLoggedIn);
  return (
    <NavigationContainer>
      {loggedIn ? <HomeNavigator /> : <AuthNavigator />}
    </NavigationContainer>
  );
}

export default RootNavigator;
