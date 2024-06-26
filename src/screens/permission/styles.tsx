import {StyleSheet, TextStyle, ViewStyle} from 'react-native';
import AppTheme from '@src/styles/theme';

type Style = {
  container: ViewStyle;
  box: ViewStyle;
  wrapper: ViewStyle;
  // headerText: TextStyle;
  // list: ViewStyle;
  // listItem: ViewStyle;
  // itemName: TextStyle;
  // bottomNav: ViewStyle;
  // navButton: ViewStyle;
  // floatingButton: ViewStyle;
};

export const styles = StyleSheet.create<Style>({
  container: {
    flex: 1,
    // padding: 24,
  },
  box: {
    flex: 1,
  },
  wrapper: {
    flex: 1,
    margin: 24,
    height: '100%',
    justifyContent: 'space-between'
  }
});
