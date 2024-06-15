/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import 'react-native-gesture-handler';
import React from 'react';
import {StatusBar} from 'react-native';
import {Provider} from 'react-redux';
import {
  SafeAreaProvider,
  initialWindowMetrics,
} from 'react-native-safe-area-context';
import { TamaguiProvider, createTamagui } from '@tamagui/core'

import AppContainer from '@src/index';
import AppTheme from '@styles/theme';
import '@src/locales/i18n';
import config from './tamagui.config';

function App(): JSX.Element {
  const backgroundStyle = {
    backgroundColor: AppTheme.colors.primary,
  };

  const tamaguiConfig = createTamagui(config)


  return (
    <TamaguiProvider config={tamaguiConfig}>
        <SafeAreaProvider initialMetrics={initialWindowMetrics}>
          <AppContainer />
        </SafeAreaProvider>
    </TamaguiProvider>
  );
}

export default App;
