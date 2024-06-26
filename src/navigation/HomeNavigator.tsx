import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import AppTheme from '@styles/theme';
import HomeScreen from '@src/screens/home';
import FileView from '@src/screens/fileView';
import Permission from '@src/screens/permission';

type RootStackParamList = {
  Home: undefined;
  FileView: undefined;
  Permission: undefined;
};
const RootStack = createStackNavigator<RootStackParamList>();

function HomeNavigator(): JSX.Element {
  const backgroundStyle = {
    backgroundColor: AppTheme.colors.primary,
  };
  return (
    <RootStack.Navigator
      screenOptions={{
        headerShown: false
      }}>
      <RootStack.Screen
        name="Home"
        component={Permission}
        options={{headerShown: false}}
      />
        <RootStack.Screen
        name="FileView"
        component={FileView}
        options={{headerShown: false}}
      />
      <RootStack.Screen
        name="Permission"
        component={Permission}
        options={{headerShown: false}}
      />
    </RootStack.Navigator>
  );
}

export default HomeNavigator;
