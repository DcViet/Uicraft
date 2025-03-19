import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image, ImageBackground } from 'react-native';
import { router } from 'expo-router';

const LoginScreen = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    router.push('/neubrutalism/verification');
  };

  const handleForgotPassword = () => {
    console.log('Forgot Password pressed');
  };

  const handleSignUp = () => {
    router.push('/neubrutalism/signUp');
  };

  const handleGoogleLogin = () => {
    console.log('Google Login pressed');
  };

  const handleGithubLogin = () => {
    console.log('GitHub Login pressed');
  };

  return (
    <View style={styles.container}>
      {/* <Text style={[styles.header]}>Login</Text> */}

      {/* <Image
        source={{ uri: 'https://img.icons8.com/ios-filled/100/000000/user.png' }}
        style={[styles.logo, styles.neubrutalism]}
      /> */}
      <ImageBackground
        // source={require('@/assets/images/react-logo.png')}  
        style={styles.backgroundImage}
        resizeMode="cover"
      >
        <Image
          source={require('@/assets/images/react-logo.png')}  
          style={[styles.logo, styles.neubrutalism]}
        />
      </ImageBackground>

      <View style={styles.inputContainer}>
        <Text style={styles.label}>Email or Username</Text>
        <TextInput
          style={[styles.input, styles.neubrutalism]}
          placeholder="Email or Username"
          value={email}
          onChangeText={setEmail}
          keyboardType="email-address"
          autoCapitalize="none"
          placeholderTextColor="#999999"
        />

        <Text style={styles.label}>Password</Text>
        <TextInput
          style={[styles.input, styles.neubrutalism]}
          placeholder="Password"
          value={password}
          onChangeText={setPassword}
          secureTextEntry
          placeholderTextColor="#999999"
        />
      </View>

      <TouchableOpacity onPress={handleForgotPassword}>
        <Text style={styles.forgotPassword}>Forgot Password?</Text>
      </TouchableOpacity>

      <TouchableOpacity style={[styles.loginButton, styles.neubrutalism]} onPress={handleLogin}>
        <Text style={styles.loginButtonText}>Login</Text>
      </TouchableOpacity>

      <View style={styles.socialButtonsContainer}>
        <TouchableOpacity style={[styles.socialButton, styles.neubrutalism]} onPress={handleGoogleLogin}>
          <Text style={styles.socialButtonText}>Google</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.socialButton, styles.neubrutalism]} onPress={handleGithubLogin}>
          <Text style={styles.socialButtonText}>GitHub</Text>
        </TouchableOpacity>
      </View>

      <TouchableOpacity onPress={handleSignUp}>
        <Text style={styles.signUpText}>Don’t have an account? Sign Up</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  // Base styles
  container: {
    flex: 1,
    padding: 24,
    backgroundColor: '#F5F5F5',
    justifyContent: 'center',
    alignItems: 'center',
  },
  header: {
    fontSize: 48,
    fontWeight: '900',
    color: '#000000',
    textTransform: 'uppercase',
    letterSpacing: 2,
    marginBottom: 32,
  },
  backgroundImage: {
    width: 160,
    height: 160,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 40,
  },
  logo: {
    width: 120,
    height: 120,
    marginBottom: 40,
  },
  inputContainer: {
    width: '100%',
    marginBottom: 20,
  },
  label: {
    fontSize: 16,
    fontWeight: '700',
    color: '#333333',
    marginBottom: 8,
  },
  input: {
    height: 56,
    backgroundColor: '#FFFFFF',
    marginBottom: 16,
    paddingHorizontal: 16,
    fontSize: 16,
    fontWeight: '600',
    color: '#000000',
    width: '100%',
  },
  forgotPassword: {
    fontSize: 14,
    fontWeight: '700',
    color: '#FF2D00',
    alignSelf: 'flex-end',
    marginBottom: 24,
  },
  loginButton: {
    backgroundColor: '#FF2D00',
    paddingVertical: 16,
    width: '100%',
    alignItems: 'center',
    marginBottom: 24,
  },
  loginButtonText: {
    fontSize: 20,
    fontWeight: '900',
    color: '#FFFFFF',
    textTransform: 'uppercase',
    letterSpacing: 1.5,
  },
  socialButtonsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    marginBottom: 24,
  },
  socialButton: {
    backgroundColor: '#FFDD00',
    paddingVertical: 12,
    width: '48%',
    alignItems: 'center',
  },
  socialButtonText: {
    fontSize: 16,
    fontWeight: '800',
    color: '#FFFFFF',
    textTransform: 'uppercase',
  },
  signUpText: {
    fontSize: 16,
    fontWeight: '700',
    color: '#333333',
    textDecorationLine: 'underline',
  },

  // Neubrutalism effects
  neubrutalism: {
    borderWidth: 4,
    borderColor: '#000000',
    shadowColor: '#000000',
    shadowOffset: { width: 8, height: 8 },
    shadowOpacity: 1,
    shadowRadius: 0,
    elevation: 8,
    borderRadius: 10,
  },
});

export default LoginScreen;