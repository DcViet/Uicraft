import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image, ScrollView, KeyboardAvoidingView, Platform } from 'react-native';
import { useRouter } from 'expo-router';

const SignUpScreen = () => {
  const router = useRouter();
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleSignUp = () => {
    console.log('Sign Up attempted with:', { fullName, email, password, confirmPassword });
  };

  const handleLoginRedirect = () => {
    console.log('Redirect to Login pressed');
    router.push('/neubrutalism/login');
  };

  return (
    <KeyboardAvoidingView 
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'} 
      style={styles.container}
    >
      <ScrollView 
        contentContainerStyle={styles.scrollView} 
        keyboardShouldPersistTaps="handled"
      >
        <Text style={[styles.header, styles.neubrutalism]}>Sign Up</Text>

        <Image
          source={{ uri: 'https://img.icons8.com/ios-filled/100/000000/add-user-male.png' }}
          style={[styles.logo, styles.neubrutalism]}
        />

        <TextInput
          style={[styles.input, styles.neubrutalism]}
          placeholder="Full Name"
          value={fullName}
          onChangeText={setFullName}
          autoCapitalize="words"
          placeholderTextColor="#CCCCCC"
        />

        <TextInput
          style={[styles.input, styles.neubrutalism]}
          placeholder="Email"
          value={email}
          onChangeText={setEmail}
          keyboardType="email-address"
          autoCapitalize="none"
          placeholderTextColor="#CCCCCC"
        />

        <TextInput
          style={[styles.input, styles.neubrutalism]}
          placeholder="Password"
          value={password}
          onChangeText={setPassword}
          secureTextEntry
          placeholderTextColor="#CCCCCC"
        />

        <TextInput
          style={[styles.input, styles.neubrutalism]}
          placeholder="Confirm Password"
          value={confirmPassword}
          onChangeText={setConfirmPassword}
          secureTextEntry
          placeholderTextColor="#CCCCCC"
        />

        <TouchableOpacity style={[styles.signUpButton, styles.neubrutalism]} onPress={handleSignUp}>
          <Text style={styles.signUpButtonText}>Sign Up</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={handleLoginRedirect}>
          <Text style={styles.loginText}>Already have an account? Login</Text>
        </TouchableOpacity>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  // Base styles without Neubrutalism effects
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  scrollView: {
    padding: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  header: {
    fontSize: 48,
    fontWeight: '900',
    color: '#000000',
    textTransform: 'uppercase',
    letterSpacing: 2,
    marginBottom: 20,
    alignSelf: 'flex-start',
  },
  logo: {
    width: 100,
    height: 100,
    alignSelf: 'center',
    marginBottom: 30,
  },
  input: {
    height: 60,
    width: '100%',
    backgroundColor: '#FFFFFF',
    marginBottom: 20,
    paddingHorizontal: 15,
    fontSize: 18,
    fontWeight: '700',
    color: '#000000',
  },
  signUpButton: {
    backgroundColor: '#FF2D00',
    paddingVertical: 15,
    alignItems: 'center',
    marginBottom: 20,
    width: '100%',
  },
  signUpButtonText: {
    fontSize: 24,
    fontWeight: '900',
    color: '#FFFFFF',
    textTransform: 'uppercase',
    letterSpacing: 2,
  },
  loginText: {
    fontSize: 16,
    fontWeight: '700',
    color: '#000000',
    textAlign: 'center',
    textDecorationLine: 'underline',
  },

  // Neubrutalism effects separated into a single class
  neubrutalism: {
    backgroundColor: '#FFDD00', // Applied only to header in original
    borderWidth: 6,
    borderColor: '#000000',
    padding: 15, // Applied only to header in original
    shadowColor: '#000000',
    shadowOffset: { width: 10, height: 10 },
    shadowOpacity: 1,
    shadowRadius: 0,
    elevation: 10,
  },
});

export default SignUpScreen;