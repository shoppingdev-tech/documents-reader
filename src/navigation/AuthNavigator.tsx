import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import LoginScreen from '@screens/login';

type RootStackParamList = {
  Login: undefined;
  Home: undefined;
  Create: undefined;
};
const RootStack = createStackNavigator<RootStackParamList>();

function AuthNavigator(): JSX.Element {
  return (
    <RootStack.Navigator
      screenOptions={{
        headerBackTitleVisible: false,
        headerShown: false,
        headerMode: 'screen',
      }}>
      <RootStack.Screen name="Login" component={LoginScreen} />
    </RootStack.Navigator>
  );
}

export default AuthNavigator;
