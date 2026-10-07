import React, { useContext } from 'react';
import { Text, View } from 'react-native';
import AppButton from '../components/AppButton';
import { AuthContext } from '../context/AuthContext';
import { colors } from '../utils/colors';
import { globalStyles } from '../styles/globalStyles';

export default function ProfileScreen() {
  const { user, logout } = useContext(AuthContext);
  return (
    <View style={globalStyles.container}>
      <View style={styles.profile}>
        <View style={styles.avatar}><Text style={styles.initial}>{user?.name?.charAt(0).toUpperCase() || 'U'}</Text></View>
        <Text style={globalStyles.title}>{user?.name || 'User Name'}</Text>
        <Text style={globalStyles.text}>{user?.email || 'user@example.com'}</Text>
      </View>
      <AppButton title="Edit Profile" onPress={() => {}} style={{ backgroundColor: colors.secondary }} />
      <AppButton title="Settings" onPress={() => {}} style={{ backgroundColor: colors.warning }} />
      <AppButton title="Logout" onPress={logout} style={{ backgroundColor: colors.gray, marginTop: 20 }} />
    </View>
  );
}

const styles = { profile: { alignItems: 'center', marginVertical: 30 }, avatar: { width: 100, height: 100, borderRadius: 50, backgroundColor: colors.lightGray, justifyContent: 'center', alignItems: 'center', marginBottom: 15 }, initial: { fontSize: 40, color: colors.gray } };
