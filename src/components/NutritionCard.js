import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';
import { colors } from '../utils/colors';
import { globalStyles } from '../styles/globalStyles';

export default function NutritionCard({ item }) {
  return (
    <View style={[globalStyles.card, styles.card]}>
      <Image source={{ uri: item.image }} style={styles.image} />
      <View style={styles.info}>
        <Text style={styles.title}>{item.title}</Text>
        <Text style={styles.calories}>{item.calories} kcal</Text>
        <View style={styles.macros}>
          <Text style={styles.macro}>P: {item.macros.protein}</Text>
          <Text style={styles.macro}>C: {item.macros.carbs}</Text>
          <Text style={styles.macro}>F: {item.macros.fat}</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: { flexDirection: 'row', alignItems: 'center' },
  image: { width: 80, height: 80, borderRadius: 10, marginRight: 15 },
  info: { flex: 1 },
  title: { fontSize: 16, fontWeight: 'bold', color: colors.text, marginBottom: 5 },
  calories: { fontSize: 14, color: colors.primary, fontWeight: '600', marginBottom: 5 },
  macros: { flexDirection: 'row', justifyContent: 'space-between' },
  macro: { fontSize: 12, color: colors.textLight },
});
