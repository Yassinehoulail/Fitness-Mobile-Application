import React from 'react';
import { Text, TouchableOpacity } from 'react-native';
import { globalStyles } from '../styles/globalStyles';

export default function AppButton({ title, onPress, style }) {
  return (
    <TouchableOpacity style={[globalStyles.button, style]} onPress={onPress}>
      <Text style={globalStyles.buttonText}>{title}</Text>
    </TouchableOpacity>
  );
}
