import React from 'react';
import {StyleSheet, View} from 'react-native';
import RootNavigator from '@navigation/RootNavigator';
import {useSelector} from 'react-redux';
import Loader from './components/Loader';

function AppContainer(): JSX.Element {
  const isLoading = useSelector((state: any) => state.loading.isLoading);

  return (
    <View style={styles.container}>
      <RootNavigator />
      {isLoading && <Loader isLoading={isLoading} />}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default AppContainer;
