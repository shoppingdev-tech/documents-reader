import {ImageStyle, StyleSheet, TextStyle, ViewStyle} from 'react-native';
import AppTheme from '@styles/theme';

type Style = {
  container: ViewStyle;
  safeAreaView: ViewStyle;
  title: TextStyle;
  googleButton: ViewStyle;
  googleLogo: ImageStyle;
  googleButtonText: TextStyle;
};
export const styles = StyleSheet.create<Style>({
  safeAreaView: {
    flex: 1,
    backgroundColor: AppTheme.colors.primary,
  },
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 20,
    backgroundColor: AppTheme.colors.white,
  },

  title: {
    fontSize: 24,
    marginBottom: 20,
    color: AppTheme.colors.textPrimary,
  },
  googleButton: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#4285F4',
    padding: 10,
    borderRadius: 5,
  },
  googleLogo: {
    width: 20,
    height: 20,
    marginRight: 10,
  },
  googleButtonText: {
    color: 'white',
    fontSize: 16,
  },
});
