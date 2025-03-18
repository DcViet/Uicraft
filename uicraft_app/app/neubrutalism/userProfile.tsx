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
    // Logic to navigate to edit profile screen
    console.log('Edit Profile pressed');
  };

  const handleChangePassword = () => {
    // Logic to navigate to change password screen
    console.log('Change Password pressed');
  };

  const handlePaymentMethods = () => {
    // Logic to navigate to payment methods screen
    console.log('Payment Methods pressed');
  };

  const handleLogout = () => {
    // Logic to handle logout
    console.log('Logout pressed');
  };

  return (
    <ScrollView style={styles.scrollContainer} contentContainerStyle={styles.contentContainer}>
      <View style={styles.container}>
        <Text style={styles.header}>User Profile</Text>

        {/* User Profile Image */}
        <Image source={{ uri: user.profileImage }} style={styles.profileImage} />

        {/* User Name */}
        <Text style={styles.userName}>{user.name}</Text>

        {/* User Email */}
        <Text style={styles.userEmail}>{user.email}</Text>

        {/* Settings Menu */}
        <View style={styles.menuContainer}>
          <TouchableOpacity style={styles.menuItem} onPress={handleEditProfile}>
            <Text style={styles.menuText}>Edit Profile</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.menuItem} onPress={handleChangePassword}>
            <Text style={styles.menuText}>Change Password</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.menuItem} onPress={handlePaymentMethods}>
            <Text style={styles.menuText}>Payment Methods</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.menuItem} onPress={handleLogout}>
            <Text style={styles.menuText}>Logout</Text>
          </TouchableOpacity>
        </View>
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
  profileImage: {
    width: 150,
    height: 150,
    alignSelf: 'center',
    marginBottom: 20,
    borderWidth: 6,
    borderColor: '#000000',
    shadowColor: '#000000',
    shadowOffset: { width: 10, height: 10 },
    shadowOpacity: 1,
    shadowRadius: 0,
    elevation: 10,
  },
  userName: {
    fontSize: 28,
    fontWeight: '800',
    color: '#000000',
    textAlign: 'center',
    marginBottom: 10,
    backgroundColor: '#FFDD00',
    padding: 10,
    borderWidth: 4,
    borderColor: '#000000',
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
    backgroundColor: '#000000', // Stark black
    padding: 15,
    borderWidth: 6,
    borderColor: '#FFFFFF',
    marginBottom: 10,
    shadowColor: '#000000',
    shadowOffset: { width: 10, height: 10 },
    shadowOpacity: 1,
    shadowRadius: 0,
    elevation: 10,
  },
  menuText: {
    fontSize: 20,
    fontWeight: '800',
    color: '#FFFFFF',
    textTransform: 'uppercase',
    letterSpacing: 1,
  },
});

export default UserProfileScreen;