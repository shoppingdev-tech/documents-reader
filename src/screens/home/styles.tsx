import {StyleSheet, TextStyle, ViewStyle} from 'react-native';
import AppTheme from '@src/styles/theme';

type Style = {
  container: ViewStyle;
  safeAreaView: ViewStyle;
  header: ViewStyle;
  headerText: TextStyle;
  list: ViewStyle;
  listItem: ViewStyle;
  itemName: TextStyle;
  bottomNav: ViewStyle;
  navButton: ViewStyle;
  floatingButton: ViewStyle;
};

export const styles = StyleSheet.create<Style>({
  container: {
    flex: 1,
    // alignItems: 'center',
    marginHorizontal: 10,
  },
  safeAreaView: {
    flex: 1,
    backgroundColor: AppTheme.colors.white,
  },
  header: {
    height: 60,
    backgroundColor: AppTheme.colors.red,
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
    width: '100%',
  },
  headerText: {
    fontSize: 20,
    color: AppTheme.colors.white,
  },
  list: {
    flexGrow: 1,
    paddingHorizontal: 20,
    paddingTop: 10,
  },
  listItem: {
    flexDirection: 'row',
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: AppTheme.colors.placeHolderTextColor,
  },
  itemName: {
    marginLeft: 10,
    fontSize: 16,
    color: AppTheme.colors.textPrimary,
  },
  bottomNav: {
    height: 60,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    borderTopWidth: 1,
    borderTopColor: AppTheme.colors.primary,
  },
  navButton: {
    alignItems: 'center',
  },
  floatingButton: {
    position: 'absolute',
    bottom: 30,
    right: 20,
    width: 50,
    height: 50,
    borderRadius: 28,
    backgroundColor: AppTheme.colors.primary,
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 5,
  },
});
