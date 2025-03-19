import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';

// Define the User interface (optional, for typing if dynamic data is used)
interface User {
  name: string;
  email: string;
  profileImage?: string; // Optional profile image URL
}

// Sample user data (replace with dynamic data from authentication or API)
const user: User = {
  name: 'Harry Williams',
  email: 'harry.williams@example.com',
  profileImage: 'https://via.placeholder.com/150',
};

const UserProfileScreen = () => {
  const handleEditProfile = () => {
    console.log('Edit Profile pressed');
  };

  const handleChangePassword = () => {
    console.log('Change Password pressed');
  };

  const handlePaymentMethods = () => {
    console.log('Payment Methods pressed');
  };

  const handleLogout = () => {
    console.log('Logout pressed');
  };

  return (
    <ScrollView style={styles.scrollContainer} contentContainerStyle={styles.contentContainer}>
      <View style={styles.container}>
        <Text style={[styles.header, styles.neubrutalism]}>User Profile</Text>

        <Image source={{ uri: user.profileImage }} style={[styles.profileImage, styles.neubrutalism]} />

        <Text style={[styles.userName, styles.neubrutalism]}>{user.name}</Text>

        <Text style={styles.userEmail}>{user.email}</Text>

        <View style={styles.menuContainer}>
          <TouchableOpacity style={[styles.menuItem, styles.neubrutalism]} onPress={handleEditProfile}>
            <Text style={styles.menuText}>Edit Profile</Text>
          </TouchableOpacity>
          <TouchableOpacity style={[styles.menuItem, styles.neubrutalism]} onPress={handleChangePassword}>
            <Text style={styles.menuText}>Change Password</Text>
          </TouchableOpacity>
          <TouchableOpacity style={[styles.menuItem, styles.neubrutalism]} onPress={handlePaymentMethods}>
            <Text style={styles.menuText}>Payment Methods</Text>
          </TouchableOpacity>
          <TouchableOpacity style={[styles.menuItem, styles.neubrutalism]} onPress={handleLogout}>
            <Text style={styles.menuText}>Logout</Text>
          </TouchableOpacity>
        </View>
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
  profileImage: {
    width: 150,
    height: 150,
    alignSelf: 'center',
    marginBottom: 20,
  },
  userName: {
    fontSize: 28,
    fontWeight: '800',
    color: '#000000',
    textAlign: 'center',
    marginBottom: 10,
  },
  userEmail: {
    fontSize: 20,
    fontWeight: '700',
    color: '#333333',
    textAlign: 'center',
    marginBottom: 30,
  },
  menuContainer: {
    marginTop: 20,
  },
  menuItem: {
    backgroundColor: '#000000',
    padding: 15,
    marginBottom: 10,
  },
  menuText: {
    fontSize: 20,
    fontWeight: '800',
    color: '#FFFFFF',
    textTransform: 'uppercase',
    letterSpacing: 1,
  },

  // Neubrutalism effects separated into a single class
  neubrutalism: {
    backgroundColor: '#FFDD00', // Applied only to header and userName in original
    padding: 15, // Varies in original (15 for most, 10 for userName)
    borderWidth: 6, // Varies in original (6 for most, 4 for userName)
    borderColor: '#000000', // Varies in original (#FFFFFF for menuItem)
    shadowColor: '#000000',
    shadowOffset: { width: 10, height: 10 },
    shadowOpacity: 1,
    shadowRadius: 0,
    elevation: 10,
  },
});

export default UserProfileScreen;