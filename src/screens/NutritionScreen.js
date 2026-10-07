import React from 'react';
import { FlatList, Text, View } from 'react-native';
import NutritionCard from '../components/NutritionCard';
import nutritionData from '../data/nutrition.json';
import { globalStyles } from '../styles/globalStyles';

export default function NutritionScreen() {
  return (
    <View style={globalStyles.container}>
      <Text style={globalStyles.title}>Nutrition Plans</Text>
      <FlatList data={nutritionData} keyExtractor={(item) => item.id} renderItem={({ item }) => <NutritionCard item={item} />} showsVerticalScrollIndicator={false} />
    </View>
  );
}
