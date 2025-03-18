import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, ScrollView, Switch } from 'react-native';

// Define the User interface
interface User {
  name: string;
  email: string;
  notificationsEnabled: boolean;
  fingerprintEnabled: boolean;
}

const EditProfileScreen = () => {
  // Initial user data (replace with dynamic data from authentication or context)
  const [user, setUser] = useState<User>({
    name: 'Harry Williams',
    email: 'harry.williams@example.com',
    notificationsEnabled: true,
    fingerprintEnabled: false,
  });

  const handleSave = () => {
    // Logic to save changes
    console.log('Profile updated:', user);
  };

  const toggleNotifications = () => {
    setUser({ ...user, notificationsEnabled: !user.notificationsEnabled });
  };

  const toggleFingerprint = () => {
    setUser({ ...user, fingerprintEnabled: !user.fingerprintEnabled });
  };

  return (
    <ScrollView style={styles.scrollContainer} contentContainerStyle={styles.contentContainer}>
      <View style={styles.container}>
        <Text style={styles.header}>Edit Profile</Text>

        {/* Name Input */}
        <TextInput
          style={styles.input}
          value={user.name}
          onChangeText={(text) => setUser({ ...user, name: text })}
          placeholder="Full Name"
          autoCapitalize="words"
          placeholderTextColor="#CCCCCC"
        />

        {/* Email Input */}
        <TextInput
          style={styles.input}
          value={user.email}
          onChangeText={(text) => setUser({ ...user, email: text })}
          placeholder="Email"
          keyboardType="email-address"
          autoCapitalize="none"
          placeholderTextColor="#CCCCCC"
        />

        {/* Notifications Toggle */}
        <View style={styles.toggleContainer}>
          <Text style={styles.toggleLabel}>Enable Notifications</Text>
          <Switch
            trackColor={{ false: '#767577', true: '#FF2D00' }}
            thumbColor={user.notificationsEnabled ? '#FFFFFF' : '#f4f3f4'}
            ios_backgroundColor="#3e3e3e"
            onValueChange={toggleNotifications}
            value={user.notificationsEnabled}
          />
        </View>

        {/* Fingerprint Toggle */}
        <View style={styles.toggleContainer}>
          <Text style={styles.toggleLabel}>Enable Fingerprint</Text>
          <Switch
            trackColor={{ false: '#767577', true: '#FF2D00' }}
            thumbColor={user.fingerprintEnabled ? '#FFFFFF' : '#f4f3f4'}
            ios_backgroundColor="#3e3e3e"
            onValueChange={toggleFingerprint}
            value={user.fingerprintEnabled}
          />
        </View>

        {/* Save Button */}
        <TouchableOpacity style={styles.saveButton} onPress={handleSave}>
          <Text style={styles.saveButtonText}>Save Changes</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  scrollContainer: {
    flex: 1,
    backgroundColor: '#FFFFFF', // Raw white background
  },
  contentContainer: {
    padding: 20,
  },
  container: {
    justifyContent: 'flex-start',
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
  toggleContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
    padding: 10,
    backgroundColor: '#000000',
    borderWidth: 6,
    borderColor: '#FFFFFF',
    shadowColor: '#000000',
    shadowOffset: { width: 10, height: 10 },
    shadowOpacity: 1,
    shadowRadius: 0,
    elevation: 10,
  },
  toggleLabel: {
    fontSize: 20,
    fontWeight: '800',
    color: '#FFFFFF',
    textTransform: 'uppercase',
    letterSpacing: 1,
  },
  saveButton: {
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
  },
  saveButtonText: {
    fontSize: 24,
    fontWeight: '900',
    color: '#FFFFFF',
    textTransform: 'uppercase',
    letterSpacing: 2,
  },
});

export default EditProfileScreen;