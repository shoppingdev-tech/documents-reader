import React from 'react';
import {
  Text,
  TouchableOpacityProps,
  TouchableOpacity,
  ActivityIndicator,
} from 'react-native';
import {styles} from './styles';

interface ButtonParamList extends TouchableOpacityProps {
  buttonStyle?: object;
  labelTextStyle?: object;
  label: string;
  disabled?: boolean;
  isLoading?: boolean;
}

function Button({
  label,
  buttonStyle,
  labelTextStyle,
  disabled,
  onPress,
  isLoading,
}: ButtonParamList) {
  return (
    <TouchableOpacity
      disabled={disabled}
      style={[styles.container, buttonStyle, disabled && styles.disabled]}
      onPress={onPress}>
      {!isLoading && (
        <Text style={[styles.labelText, labelTextStyle]}>{label}</Text>
      )}
      {isLoading && (
        <ActivityIndicator
          size="small"
          color="white"
          style={styles.activityIndicator}
        />
      )}
    </TouchableOpacity>
  );
}

export default Button;
