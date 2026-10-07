import React, { useContext, useState } from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import AppButton from '../components/AppButton';
import AppInput from '../components/AppInput';
import { AuthContext } from '../context/AuthContext';
import { colors } from '../utils/colors';
import { globalStyles } from '../styles/globalStyles';

export default function RegisterScreen({ navigation }) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { register, loading } = useContext(AuthContext);

  return (
    <View style={[globalStyles.container, styles.center]}>
      <Text style={globalStyles.title}>Create Account</Text>
      <AppInput placeholder="Full Name" value={name} onChangeText={setName} />
      <AppInput placeholder="Email" value={email} onChangeText={setEmail} autoCapitalize="none" keyboardType="email-address" />
      <AppInput placeholder="Password" value={password} onChangeText={setPassword} secureTextEntry />
      <AppButton title={loading ? 'Creating Account...' : 'Register'} onPress={() => register(email, password, name)} />
      <TouchableOpacity onPress={() => navigation.goBack()}>
        <Text style={styles.link}>Already have an account? Login</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = { center: { justifyContent: 'center' }, link: { textAlign: 'center', color: colors.primary, marginTop: 15 } };
