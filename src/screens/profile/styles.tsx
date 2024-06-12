import {StyleSheet, TextStyle, ViewStyle} from 'react-native';
import AppTheme from '@styles/theme';

type Style = {
  container: ViewStyle;
  username: TextStyle;
  logoutButton: ViewStyle;
  logoutButtonText: TextStyle;
  profileName: TextStyle;
};
export const styles = StyleSheet.create<Style>({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
    padding: 16,
  },
  username: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 24,
    alignSelf: 'center',
  },
  logoutButton: {
    backgroundColor: AppTheme.colors.primary,
    padding: 12,
    borderRadius: 8,
  },
  logoutButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  profileName: {
    fontSize: 60,
    fontWeight: 'bold',
    color: AppTheme.colors.primary,
    alignSelf: 'center',
  },
});
