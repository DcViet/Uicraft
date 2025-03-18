import { router } from 'expo-router';
import React, { useState, RefObject } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';

const VerificationScreen = () => {
  const [code, setCode] = useState<string[]>(['', '', '', '', '']); // Explicitly type code as string array

  const handleVerify = () => {
    // Logic to handle verification
    const verificationCode = code.join('');
    console.log('Verification code submitted:', verificationCode);
    router.push ('/neubrutalism/productCard')
  };

  const handleResendCode = () => {
    // Logic to resend the verification code
    console.log('Resend Code pressed');
  };

  const handleCodeChange = (text: string, index: number) => {
    // Update the code array when a digit is entered
    const newCode = [...code];
    newCode[index] = text;
    setCode(newCode);

    // Auto-focus the next input (if not the last one)
    if (text && index < 4) {
      (refs[index + 1] as RefObject<TextInput>).current?.focus(); // Safe focus call
    }
  };

  // Type refs as an array of RefObject<TextInput>
  const refs: RefObject<TextInput>[] = Array(5)
    .fill(null)
    .map(() => React.createRef<TextInput>());

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Verification</Text>

      {/* Description */}
      <Text style={styles.description}>
        Enter the 5-digit code sent to your email or phone number.
      </Text>

      {/* Verification Code Inputs */}
      <View style={styles.codeContainer}>
        {code.map((digit, index) => (
          <TextInput
            key={index}
            ref={refs[index]} // Assign ref to TextInput
            style={styles.codeInput}
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

      {/* Verify Button */}
      <TouchableOpacity style={styles.verifyButton} onPress={handleVerify}>
        <Text style={styles.verifyButtonText}>Verify</Text>
      </TouchableOpacity>

      {/* Resend Code Link */}
      <TouchableOpacity onPress={handleResendCode}>
        <Text style={styles.resendText}>Resend Code</Text>
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
    borderWidth: 6,
    borderColor: '#000000',
    backgroundColor: '#FFFFFF',
    fontSize: 24,
    fontWeight: '900',
    color: '#000000',
    textAlign: 'center',
    shadowColor: '#000000',
    shadowOffset: { width: 8, height: 8 },
    shadowOpacity: 1,
    shadowRadius: 0,
    elevation: 10,
  },
  verifyButton: {
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
    color: '#FF2D00', // Bold red
    textAlign: 'center',
    textDecorationLine: 'underline',
  },
});

export default VerificationScreen;