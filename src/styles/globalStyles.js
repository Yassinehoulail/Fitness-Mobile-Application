import { StyleSheet } from 'react-native';
import { colors } from '../utils/colors';

export const globalStyles = StyleSheet.create({
  container: { flex: 1, backgroundColor: colors.background, padding: 20 },
  title: { fontSize: 24, fontWeight: 'bold', color: colors.text, marginBottom: 20 },
  subtitle: { fontSize: 18, fontWeight: '600', color: colors.text, marginBottom: 10 },
  text: { fontSize: 16, color: colors.text },
  input: { backgroundColor: colors.white, padding: 15, borderRadius: 10, marginBottom: 15, borderWidth: 1, borderColor: colors.lightGray },
  button: { backgroundColor: colors.primary, padding: 15, borderRadius: 10, alignItems: 'center', marginBottom: 10 },
  buttonText: { color: colors.white, fontSize: 16, fontWeight: 'bold' },
  card: { backgroundColor: colors.white, borderRadius: 10, padding: 10, marginBottom: 15 },
});
