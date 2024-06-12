import {StyleSheet, TextStyle, ViewStyle} from 'react-native';
import AppTheme from '@src/styles/theme';

type Style = {
  container: ViewStyle;
  error: TextStyle;
};

export const styles = StyleSheet.create<Style>({
  container: {},
  error: {
    color: AppTheme.colors.red,
    marginTop: 5,
  },
});
