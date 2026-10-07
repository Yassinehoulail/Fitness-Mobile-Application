import React from 'react';
import { Image, ScrollView, Text, View } from 'react-native';
import workoutsData from '../data/workouts.json';
import { colors } from '../utils/colors';
import { globalStyles } from '../styles/globalStyles';

export default function WorkoutDetailScreen({ route }) {
  const workout = workoutsData.find((item) => item.id === route.params.workoutId);
  if (!workout) return <View style={globalStyles.container}><Text>Workout not found.</Text></View>;

  return (
    <ScrollView style={globalStyles.container}>
      <Image source={{ uri: workout.image }} style={styles.image} />
      <Text style={globalStyles.title}>{workout.title}</Text>
      <Text style={globalStyles.subtitle}>{workout.duration} | {workout.difficulty}</Text>
      <Text style={[globalStyles.subtitle, { color: colors.primary }]}>{workout.calories} kcal</Text>
      <Text style={[globalStyles.subtitle, { marginTop: 20 }]}>Exercises</Text>
      {workout.exercises.map((exercise) => (
        <View key={exercise.name} style={styles.exercise}>
          <Text style={styles.exerciseName}>{exercise.name}</Text>
          <Text>{exercise.sets} sets x {exercise.reps || exercise.duration}</Text>
        </View>
      ))}
    </ScrollView>
  );
}

const styles = { image: { width: '100%', height: 200, borderRadius: 10, marginBottom: 20 }, exercise: { marginBottom: 10, padding: 10, backgroundColor: colors.white, borderRadius: 10 }, exerciseName: { fontWeight: 'bold' } };
