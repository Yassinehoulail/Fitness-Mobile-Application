import React from 'react';
import { TextInput } from 'react-native';
import { colors } from '../utils/colors';
import { globalStyles } from '../styles/globalStyles';

export default function AppInput({ placeholder, ...props }) {
  return (
    <TextInput
      style={globalStyles.input}
      placeholder={placeholder}
      placeholderTextColor={colors.gray}
      {...props}
    />
  );
}
