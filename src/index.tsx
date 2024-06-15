import React from 'react';
import {StyleSheet, View} from 'react-native';
import RootNavigator from '@navigation/RootNavigator';
import Loader from './components/Loader';

function AppContainer(): JSX.Element {

  return (
    <View style={styles.container}>
      <RootNavigator />
      <Loader />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default AppContainer;
