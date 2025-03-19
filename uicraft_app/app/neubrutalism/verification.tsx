import { router } from 'expo-router';
import React, { useState, RefObject } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';

const VerificationScreen = () => {
  const [code, setCode] = useState<string[]>(['', '', '', '', '']);

  const handleVerify = () => {
    const verificationCode = code.join('');
    console.log('Verification code submitted:', verificationCode);
    router.push('/neubrutalism/productCard');
  };

  const handleResendCode = () => {
    console.log('Resend Code pressed');
  };

  const handleCodeChange = (text: string, index: number) => {
    const newCode = [...code];
    newCode[index] = text;
    setCode(newCode);

    if (text && index < 4) {
      (refs[index + 1] as RefObject<TextInput>).current?.focus();
    }
  };

  const refs: RefObject<TextInput>[] = Array(5)
    .fill(null)
    .map(() => React.createRef<TextInput>());

  return (
    <View style={styles.container}>
      <Text style={[styles.header, styles.neubrutalism]}>Verification</Text>

      <Text style={styles.description}>
        Enter the 5-digit code sent to your email or phone number.
      </Text>

      <View style={styles.codeContainer}>
        {code.map((digit, index) => (
          <TextInput
            key={index}
            ref={refs[index]}
            style={[styles.codeInput, styles.neubrutalism]}
            value={digit}
            onChangeText={(text) => handleCodeChange(text, index)}
            keyboardType="numeric"
            maxLength={1}
            placeholder="-"
            placeholderTextColor="#CCCCCC"
            textAlign="center"
          />
        ))}
      </View>

      <TouchableOpacity style={[styles.verifyButton, styles.neubrutalism]} onPress={handleVerify}>
        <Text style={styles.verifyButtonText}>Verify</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={handleResendCode}>
        <Text style={styles.resendText}>Resend Code</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  // Base styles without Neubrutalism effects
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#FFFFFF',
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
  description: {
    fontSize: 18,
    fontWeight: '700',
    color: '#000000',
    textAlign: 'center',
    marginBottom: 30,
  },
  codeContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 30,
  },
  codeInput: {
    width: 50,
    height: 60,
    backgroundColor: '#FFFFFF',
    fontSize: 24,
    fontWeight: '900',
    color: '#000000',
    textAlign: 'center',
  },
  verifyButton: {
    backgroundColor: '#FF2D00',
    paddingVertical: 15,
    alignItems: 'center',
    marginBottom: 20,
  },
  verifyButtonText: {
    fontSize: 24,
    fontWeight: '900',
    color: '#FFFFFF',
    textTransform: 'uppercase',
    letterSpacing: 2,
  },
  resendText: {
    fontSize: 16,
    fontWeight: '700',
    color: '#FF2D00',
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
    borderRadius: 10,
  },
});

export default VerificationScreen;