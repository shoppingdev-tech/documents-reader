import {StyleSheet, ViewStyle, TextStyle} from 'react-native';
import AppTheme from '@styles/theme';

type Style = {
  safeAreaView: ViewStyle;
  container: ViewStyle;
  textInput: ViewStyle;
  displayText: TextStyle;
  chipContainer: ViewStyle;
  chipInput: ViewStyle;
  addButton: ViewStyle;
  addButtonText: TextStyle;
  chip: ViewStyle;
  chipText: TextStyle;
  chipsWrapper: ViewStyle;
  selectedChip: ViewStyle;
  selectedChipText: TextStyle;
  chipWrapper: ViewStyle;
};

export const styles = StyleSheet.create<Style>({
  safeAreaView: {
    flex: 1,
    backgroundColor: AppTheme.colors.primary,
  },
  container: {
    flex: 1,
    // alignItems: 'center',
    padding: 20,
    backgroundColor: AppTheme.colors.white,
  },
  textInput: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 12,
    paddingHorizontal: 8,
  },
  displayText: {
    fontSize: 16,
    marginBottom: 16,
  },
  chipContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16,
  },
  chipInput: {
    flex: 1,
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    paddingHorizontal: 8,
  },
  addButton: {
    backgroundColor: AppTheme.colors.primary,
    height: 40,
    width: 40,
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 8,
  },
  addButtonText: {
    color: 'white',
    fontSize: 24,
  },
  chipsWrapper: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  chip: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#e0e0e0',
    borderRadius: 16,
    paddingHorizontal: 12,
    paddingVertical: 8,
    marginVertical: 4,
    marginRight: 8,
    maxWidth: '48%',
  },
  selectedChip: {
    backgroundColor: AppTheme.colors.primary,
  },
  chipText: {
    fontSize: 16,
    marginRight: 8,
    // flexShrink: 1,
  },
  selectedChipText: {
    color: 'white',
  },
  chipWrapper: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
});
