import React from 'react';
import {View, TextInput as Input, TextInputProps, Text} from 'react-native';
import {styles} from './styles';

interface RefObject<T> {
  readonly current: T | null;
}

interface TextInputParamList extends TextInputProps {
  style?: object;
  isInvalid?: boolean;
  errorMessage?: string;
  onRef?: RefObject<any>;
}

function TextInput({
  placeholder,
  onChangeText,
  value,
  style,
  keyboardType,
  maxLength,
  isInvalid,
  errorMessage,
  autoCorrect,
  secureTextEntry,
  onSubmitEditing,
  onRef,
  returnKeyType,
  blurOnSubmit,
  onBlur,
}: TextInputParamList) {
  return (
    <View style={[styles.container, style]}>
      <Input
        style={styles.textInput}
        placeholder={placeholder}
        value={value}
        keyboardType={keyboardType}
        autoCorrect={autoCorrect}
        secureTextEntry={secureTextEntry}
        ref={onRef}
        returnKeyType={returnKeyType}
        maxLength={maxLength}
        onChangeText={onChangeText}
        onSubmitEditing={onSubmitEditing}
        blurOnSubmit={blurOnSubmit}
        placeholderTextColor="#000000"
        onBlur={onBlur}
      />
      {isInvalid && (
        <Text style={styles.error}>
          {!errorMessage ? `${placeholder} is required` : errorMessage}
        </Text>
      )}
    </View>
  );
}

export default TextInput;
