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
import {PersistGate} from 'redux-persist/integration/react';
import {
  SafeAreaProvider,
  initialWindowMetrics,
} from 'react-native-safe-area-context';
import { TamaguiProvider, createTamagui } from '@tamagui/core'
import { config } from '@tamagui/config/v3'

import AppContainer from '@src/index';
import {store, persistor} from '@redux/store';
import AppTheme from '@styles/theme';
import '@src/locales/i18n';

function App(): JSX.Element {
  const backgroundStyle = {
    backgroundColor: AppTheme.colors.primary,
  };

  const tamaguiConfig = createTamagui(config)


  return (
    <TamaguiProvider config={tamaguiConfig}>
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <SafeAreaProvider initialMetrics={initialWindowMetrics}>
          <StatusBar
            barStyle="light-content"
            backgroundColor={backgroundStyle.backgroundColor}
          />
          <AppContainer />
        </SafeAreaProvider>
      </PersistGate>
    </Provider>
    </TamaguiProvider>
  );
}

export default App;
