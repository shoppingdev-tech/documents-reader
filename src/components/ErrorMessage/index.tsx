import React from 'react';
import {View, Text} from 'react-native';
import {styles} from './styles';

interface ErrorParamList {
  error: string;
  style?: object;
}

function ErrorMessage({error, style}: ErrorParamList) {
  return (
    <View style={[styles.container, style]}>
      <Text style={styles.error}>
        {!error ? 'Something went wrong!' : error}
      </Text>
    </View>
  );
}

export default ErrorMessage;
