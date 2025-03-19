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
  const [user, setUser] = useState<User>({
    name: 'Harry Williams',
    email: 'harry.williams@example.com',
    notificationsEnabled: true,
    fingerprintEnabled: false,
  });

  const handleSave = () => {
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
        <Text style={[styles.header, styles.neubrutalism]}>Edit Profile</Text>

        <TextInput
          style={[styles.input, styles.neubrutalism]}
          value={user.name}
          onChangeText={(text) => setUser({ ...user, name: text })}
          placeholder="Full Name"
          autoCapitalize="words"
          placeholderTextColor="#CCCCCC"
        />

        <TextInput
          style={[styles.input, styles.neubrutalism]}
          value={user.email}
          onChangeText={(text) => setUser({ ...user, email: text })}
          placeholder="Email"
          keyboardType="email-address"
          autoCapitalize="none"
          placeholderTextColor="#CCCCCC"
        />

        <View style={[styles.toggleContainer, styles.neubrutalism]}>
          <Text style={styles.toggleLabel}>Enable Notifications</Text>
          <Switch
            trackColor={{ false: '#767577', true: '#FF2D00' }}
            thumbColor={user.notificationsEnabled ? '#FFFFFF' : '#f4f3f4'}
            ios_backgroundColor="#3e3e3e"
            onValueChange={toggleNotifications}
            value={user.notificationsEnabled}
          />
        </View>

        <View style={[styles.toggleContainer, styles.neubrutalism]}>
          <Text style={styles.toggleLabel}>Enable Fingerprint</Text>
          <Switch
            trackColor={{ false: '#767577', true: '#FF2D00' }}
            thumbColor={user.fingerprintEnabled ? '#FFFFFF' : '#f4f3f4'}
            ios_backgroundColor="#3e3e3e"
            onValueChange={toggleFingerprint}
            value={user.fingerprintEnabled}
          />
        </View>

        <TouchableOpacity style={[styles.saveButton, styles.neubrutalism]} onPress={handleSave}>
          <Text style={styles.saveButtonText}>Save Changes</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  // Base styles without Neubrutalism effects
  scrollContainer: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  contentContainer: {
    padding: 20,
  },
  container: {
    justifyContent: 'flex-start',
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
  input: {
    height: 60,
    backgroundColor: '#FFFFFF',
    marginBottom: 20,
    paddingHorizontal: 15,
    fontSize: 18,
    fontWeight: '700',
    color: '#000000',
  },
  toggleContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
    padding: 10,
    backgroundColor: '#000000',
  },
  toggleLabel: {
    fontSize: 20,
    fontWeight: '800',
    color: '#FFFFFF',
    textTransform: 'uppercase',
    letterSpacing: 1,
  },
  saveButton: {
    backgroundColor: '#FF2D00',
    paddingVertical: 15,
    alignItems: 'center',
  },

  saveButtonText: {
    fontSize: 24,
    fontWeight: '900',
    color: '#FFFFFF',
    textTransform: 'uppercase',
    letterSpacing: 2,
  },

  // Neubrutalism effects separated into a single class
  neubrutalism: {
    backgroundColor: '#FFDD00', // Applied only to header in original
    borderWidth: 6,
    borderColor: '#000000', // Varies in original (#FFFFFF for toggleContainer)
    padding: 15, // Varies in original (10 for toggleContainer)
    shadowColor: '#000000',
    shadowOffset: { width: 10, height: 10 },
    shadowOpacity: 1,
    shadowRadius: 0,
    elevation: 10,
  },
});

export default EditProfileScreen;