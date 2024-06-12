import {StyleSheet, TextStyle, ViewStyle} from 'react-native';
import AppTheme from '@src/styles/theme';

type Style = {
  container: ViewStyle;
  labelText: TextStyle;
  disabled: ViewStyle;
  activityIndicator: ViewStyle;
};

export const styles = StyleSheet.create<Style>({
  container: {
    backgroundColor: AppTheme.colors.primary,
    width: '100%',
    height: 48,
    borderRadius: 4,
    justifyContent: 'center',
  },
  labelText: {
    fontSize: 16,
    color: AppTheme.colors.white,
    textAlign: 'center',
  },
  disabled: {
    backgroundColor: AppTheme.colors.disabled,
  },
  activityIndicator: {
    justifyContent: 'center',
    alignItems: 'center',
  },
});
