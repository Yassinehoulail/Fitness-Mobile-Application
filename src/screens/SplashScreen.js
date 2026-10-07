import React from 'react';
import { ActivityIndicator, Text, View } from 'react-native';
import { colors } from '../utils/colors';
import { globalStyles } from '../styles/globalStyles';

export default function SplashScreen() {
  return (
    <View style={[globalStyles.container, styles.center]}>
      <Text style={globalStyles.title}>Fitness App</Text>
      <ActivityIndicator size="large" color={colors.primary} />
    </View>
  );
}

const styles = { center: { justifyContent: 'center', alignItems: 'center' } };
