import {StyleSheet, TextStyle, ViewStyle} from 'react-native';
import AppTheme from '@src/styles/theme';

type Style = {
  container: ViewStyle;
  textInput: TextStyle;
  error: TextStyle;
};

export const styles = StyleSheet.create<Style>({
  container: {},
  textInput: {
    height: 48,
    borderWidth: 1,
    padding: 10,
    color: AppTheme.colors.black,
    borderRadius: 4,
  },
  error: {
    color: AppTheme.colors.red,
    marginTop: 5,
  },
});
