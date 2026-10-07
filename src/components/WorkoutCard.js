import React from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { colors } from '../utils/colors';
import { globalStyles } from '../styles/globalStyles';

export default function WorkoutCard({ workout, onPress }) {
  return (
    <TouchableOpacity style={globalStyles.card} onPress={onPress}>
      <Image source={{ uri: workout.image }} style={styles.image} />
      <View style={styles.info}>
        <Text style={styles.title}>{workout.title}</Text>
        <Text style={styles.details}>{workout.duration} | {workout.difficulty}</Text>
        <Text style={styles.calories}>{workout.calories} kcal</Text>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  image: { width: '100%', height: 150, borderRadius: 10, marginBottom: 10 },
  info: { padding: 5 },
  title: { fontSize: 18, fontWeight: 'bold', color: colors.text, marginBottom: 5 },
  details: { fontSize: 14, color: colors.textLight, marginBottom: 5 },
  calories: { fontSize: 14, color: colors.primary, fontWeight: '600' },
});
