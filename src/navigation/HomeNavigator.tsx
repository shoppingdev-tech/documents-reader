import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import AppTheme from '@styles/theme';
import BottomTabNavigator from './BottomTabNavigator';
import CreateForm from '@src/screens/create';
import ListScreen from '@src/screens/create/list';

type RootStackParamList = {
  Home: undefined;
  Create: undefined;
  Category: undefined;
};
const RootStack = createStackNavigator<RootStackParamList>();

function HomeNavigator(): JSX.Element {
  const backgroundStyle = {
    backgroundColor: AppTheme.colors.primary,
  };
  return (
    <RootStack.Navigator
      screenOptions={{
        headerBackTitleVisible: false,
        headerMode: 'screen',
        headerStyle: backgroundStyle,
        headerTitleStyle: {
          color: AppTheme.colors.white,
        },
        headerTintColor: AppTheme.colors.white,
      }}>
      <RootStack.Screen
        name="Home"
        component={BottomTabNavigator}
        options={{headerShown: false}}
      />
      <RootStack.Screen name="Create" component={CreateForm} />
      <RootStack.Screen name="Category" component={ListScreen} />
    </RootStack.Navigator>
  );
}

export default HomeNavigator;
