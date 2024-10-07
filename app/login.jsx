import { 
  View, 
  Text, 
  SafeAreaView, 
  StyleSheet, 
  Image, 
  TextInput, 
  TouchableOpacity, 
  Alert } from 'react-native';
import React, { useState } from 'react';
import { useRouter } from 'expo-router';
import Logo from '../assets/images/com-logo.jpg'; 

export default function Login() {
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const isButtonDisabled = !email || !password;

  const handleLogin = () => {
    if (isButtonDisabled) {
      Alert.alert('Validation Error', 'Please enter both email and password.');
    } else {
      console.log('Login successful');
      router.push('/(tabs)/home');
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.mainView}>
        <Image source={Logo} style={styles.logo} />
        <View style={styles.secoundMain}>
          <TextInput
            style={styles.input}
            placeholder="Enter your email"
            value={email}
            onChangeText={setEmail}
          />
          <TextInput
            style={styles.input}
            placeholder="Enter your password"
            value={password}
            onChangeText={setPassword}
            secureTextEntry 
          />
          <TouchableOpacity
            disabled={isButtonDisabled}
            style={[styles.button, isButtonDisabled && styles.buttonDisabled]}
            onPress={handleLogin}
          >
            <Text style={styles.buttonText}>Login</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
  },
  mainView: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100%',
  },
  logo: {
    height: 250,
    width: 200,
    borderRadius: 10,
    marginBottom: 20,
  },
  input: {
    height: 50,
    width: 350,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 4,
    paddingHorizontal: 10,
    marginBottom: 16,
    backgroundColor: '#fff',
  },
  secoundMain: {
    marginTop: 20,
  },
  button: {
    backgroundColor: '#007BFF',
    paddingVertical: 12,
    borderRadius: 4,
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 10,
    width: 350,
  },
  buttonDisabled: {
    backgroundColor: '#cccccc', // Gray color when disabled
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  link: {
    flex: 1,
    alignItems: 'center',
  },
});
