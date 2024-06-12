import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import AppTheme from '@src/styles/theme';
import VisitedScreen from '@src/screens/visited';
import HomeScreen from '@src/screens/home';
import ProfileScreen from '@src/screens/profile';
import images from '@src/constants/images';
import {Image} from 'react-native';

const Tab = createBottomTabNavigator();

const getTabBarIcon =
  (routeName: string) =>
  ({color, size}: {color: string; size: number}) => {
    let imageSource: any;

    if (routeName === 'Wishlist') {
      imageSource = images.wishListIcon;
    } else if (routeName === 'Visited') {
      imageSource = images.visitedIcon;
    } else if (routeName === 'Profile') {
      imageSource = images.profileIcon;
    }

    return (
      <Image
        source={imageSource}
        style={{width: size, height: size, tintColor: color}}
      />
    );
  };

function BottomTabNavigator() {
  const backgroundStyle = {
    backgroundColor: AppTheme.colors.primary,
  };
  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
        tabBarIcon: getTabBarIcon(route.name),
        tabBarActiveTintColor: AppTheme.colors.primary,
        headerShown: false,
        tabBarStyle: {
          height: 120,
        },
        tabBarLabelStyle: {
          fontSize: 14,
          marginBottom: 10,
        },
        tabBarIconStyle: {
          marginTop: 10,
        },
        headerShadowVisible: true,
        headerStyle: backgroundStyle,
        headerTintColor: AppTheme.colors.white,
      })}>
      <Tab.Screen
        name="Wishlist"
        component={HomeScreen}
        options={{
          title: 'Wishlist',
          headerShown: true,
          headerTitle: 'Wishlist',
        }}
      />
      <Tab.Screen
        name="Visited"
        component={VisitedScreen}
        options={{
          title: 'Visited',
          headerShown: true,
          headerTitle: 'Visited',
        }}
      />
      <Tab.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          title: 'Profile',
          headerShown: true,
          headerTitle: 'Profile',
        }}
      />
    </Tab.Navigator>
  );
}

export default BottomTabNavigator;
