import React from 'react';
import { FlatList, View } from 'react-native';
import WorkoutCard from '../components/WorkoutCard';
import workoutsData from '../data/workouts.json';
import { globalStyles } from '../styles/globalStyles';

export default function WorkoutListScreen({ navigation }) {
  return (
    <View style={globalStyles.container}>
      <FlatList
        data={workoutsData}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <WorkoutCard workout={item} onPress={() => navigation.navigate('WorkoutDetail', { workoutId: item.id })} />}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
}
