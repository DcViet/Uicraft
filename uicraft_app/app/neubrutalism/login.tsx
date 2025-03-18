import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image } from 'react-native';
import { router } from 'expo-router';

const LoginScreen = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    router.push('/neubrutalism/verification')
    // console.log('Login attempted with:', { email, password });
  };

  const handleForgotPassword = () => {
    // Logic to handle forgot password
    console.log('Forgot Password pressed');
  };

  const handleSignUp = () => {
    router.push('/neubrutalism/signUp');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Login</Text>

      {/* Logo or Icon (Optional) */}
      <Image
        source={{ uri: 'https://img.icons8.com/ios-filled/100/000000/user.png' }} // Placeholder logo
        style={styles.logo}
      />

      {/* Email Input */}
      <TextInput
        style={styles.input}
        placeholder="Email or Username"
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
        autoCapitalize="none"
        placeholderTextColor="#CCCCCC"
      />

      {/* Password Input */}
      <TextInput
        style={styles.input}
        placeholder="Password"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
        placeholderTextColor="#CCCCCC"
      />

      {/* Forgot Password Link */}
      <TouchableOpacity onPress={handleForgotPassword}>
        <Text style={styles.forgotPassword}>Forgot Password?</Text>
      </TouchableOpacity>

      {/* Login Button */}
      <TouchableOpacity style={styles.loginButton} onPress={handleLogin}>
        <Text style={styles.loginButtonText}>Login</Text>
      </TouchableOpacity>

      {/* Sign Up Link */}
      <TouchableOpacity onPress={handleSignUp}>
        <Text style={styles.signUpText}>Don’t have an account? Sign Up</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#FFFFFF', // Raw white background
    justifyContent: 'center',
  },
  header: {
    fontSize: 48,
    fontWeight: '900', // Ultra-bold
    color: '#000000',
    textTransform: 'uppercase',
    letterSpacing: 2,
    marginBottom: 20,
    backgroundColor: '#FFDD00', // Bright yellow
    padding: 15,
    borderWidth: 6,
    borderColor: '#000000',
    alignSelf: 'flex-start',
  },
  logo: {
    width: 100,
    height: 100,
    alignSelf: 'center',
    marginBottom: 30,
    borderWidth: 6,
    borderColor: '#000000',
    shadowColor: '#000000',
    shadowOffset: { width: 10, height: 10 },
    shadowOpacity: 1,
    shadowRadius: 0,
  },
  input: {
    height: 60,
    borderWidth: 6,
    borderColor: '#000000',
    backgroundColor: '#FFFFFF',
    marginBottom: 20,
    paddingHorizontal: 15,
    fontSize: 18,
    fontWeight: '700',
    color: '#000000',
    shadowColor: '#000000',
    shadowOffset: { width: 8, height: 8 },
    shadowOpacity: 1,
    shadowRadius: 0,
    elevation: 10,
  },
  forgotPassword: {
    fontSize: 16,
    fontWeight: '700',
    color: '#FF2D00', // Bold red
    textAlign: 'right',
    marginBottom: 20,
  },
  loginButton: {
    backgroundColor: '#FF2D00', // Bold red
    borderWidth: 6,
    borderColor: '#000000',
    paddingVertical: 15,
    alignItems: 'center',
    shadowColor: '#000000',
    shadowOffset: { width: 10, height: 10 },
    shadowOpacity: 1,
    shadowRadius: 0,
    elevation: 10,
    marginBottom: 20,
  },
  loginButtonText: {
    fontSize: 24,
    fontWeight: '900',
    color: '#FFFFFF',
    textTransform: 'uppercase',
    letterSpacing: 2,
  },
  signUpText: {
    fontSize: 16,
    fontWeight: '700',
    color: '#000000',
    textAlign: 'center',
    textDecorationLine: 'underline',
  },
});

export default LoginScreen;