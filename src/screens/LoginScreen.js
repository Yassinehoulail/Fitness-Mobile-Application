import React, { useContext, useState } from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import AppButton from '../components/AppButton';
import AppInput from '../components/AppInput';
import { AuthContext } from '../context/AuthContext';
import { colors } from '../utils/colors';
import { globalStyles } from '../styles/globalStyles';

export default function LoginScreen({ navigation }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { login, loading } = useContext(AuthContext);

  return (
    <View style={[globalStyles.container, styles.center]}>
      <Text style={globalStyles.title}>Welcome Back!</Text>
      <AppInput placeholder="Email" value={email} onChangeText={setEmail} autoCapitalize="none" keyboardType="email-address" />
      <AppInput placeholder="Password" value={password} onChangeText={setPassword} secureTextEntry />
      <AppButton title={loading ? 'Logging in...' : 'Login'} onPress={() => login(email, password)} />
      <TouchableOpacity onPress={() => navigation.navigate('Register')}>
        <Text style={styles.link}>Don't have an account? Register</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = { center: { justifyContent: 'center' }, link: { textAlign: 'center', color: colors.primary, marginTop: 15 } };
