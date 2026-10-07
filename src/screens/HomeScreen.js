import React, { useContext } from 'react';
import { ScrollView, Text, View } from 'react-native';
import AppButton from '../components/AppButton';
import { AuthContext } from '../context/AuthContext';
import { globalStyles } from '../styles/globalStyles';

export default function HomeScreen({ navigation }) {
  const { user, logout } = useContext(AuthContext);

  return (
    <ScrollView style={globalStyles.container}>
      <Text style={globalStyles.title}>Hello, {user?.name || 'User'}!</Text>
      <Text style={globalStyles.subtitle}>Ready for your workout?</Text>
      <View style={styles.actions}>
        <AppButton title="Start Workout" onPress={() => navigation.navigate('Workouts')} />
        <AppButton title="Nutrition Plan" onPress={() => navigation.navigate('Nutrition')} style={{ backgroundColor: '#2ED573' }} />
      </View>
      <Text style={globalStyles.subtitle}>Quick Stats</Text>
      <Text style={globalStyles.text}>Workouts completed: 5</Text>
      <Text style={globalStyles.text}>Calories burned: 1200</Text>
      <AppButton title="Logout" onPress={logout} style={styles.logout} />
    </ScrollView>
  );
}

const styles = { actions: { marginVertical: 20 }, logout: { marginTop: 40, backgroundColor: '#747D8C' } };
