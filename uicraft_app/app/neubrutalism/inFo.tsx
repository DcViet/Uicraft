import { Image, StyleSheet, View, ScrollView, Text, TouchableOpacity } from 'react-native';
import React from 'react';
import { router } from 'expo-router';

export default function InfoStyleScreen() {
  const navigateToDesign = () => {
    router.push('/neubrutalism/login');
  };

  const navigateToExample = () => {
    router.push('/neubrutalism/login');
  };

  return (
    <ScrollView style={styles.container}>
      <Text style={[styles.header]}>
        UICraft - Neubrutalism Styles
      </Text>
      <Text style={styles.subheader}>
        Discover bold and modern UI design patterns
      </Text>

      <TouchableOpacity 
        style={[styles.card, styles.neubrutalism]} 
        onPress={navigateToDesign}
        activeOpacity={0.8}
      >
        <Image
          source={require('@/assets/images/icon.png')}
          style={styles.cardImage}
        />
        <View style={styles.cardContent}>
          <Text style={styles.cardTitle}>View Design System</Text>
          <Text style={styles.cardDescription}>
            Explore our comprehensive design guidelines
          </Text>
        </View>
      </TouchableOpacity>

      <TouchableOpacity 
        style={[styles.card, styles.neubrutalism]} 
        onPress={navigateToExample}
        activeOpacity={0.8}
      >
        <Image
          source={require('@/assets/images/icon.png')}
          style={styles.cardImage}
        />
        <View style={styles.cardContent}>
          <Text style={styles.cardTitle}>Explore Neubrutalism</Text>
          <Text style={styles.cardDescription}>
            Apply Neubrutalism styles to your app
          </Text>
        </View>
      </TouchableOpacity>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F5F5',
  },
  header: {
    fontSize: 36,
    fontWeight: '900',
    color: '#000000',
    textTransform: 'uppercase',
    letterSpacing: 1.5,
    paddingHorizontal: 20,
    paddingTop: 20,
    paddingBottom: 10,
  },
  subheader: {
    fontSize: 18,
    fontWeight: '600',
    color: '#444444',
    paddingHorizontal: 20,
    marginBottom: 20,
  },
  card: {
    flexDirection: 'row',
    backgroundColor: '#FFFFFF',
    marginHorizontal: 20,
    marginVertical: 10,
    padding: 15,
    borderRadius: 8,
  },
  cardImage: {
    width: 60,
    height: 60,
    marginRight: 15,
    resizeMode: 'contain',
  },
  cardContent: {
    flex: 1,
    justifyContent: 'center',
  },
  cardTitle: {
    fontSize: 22,
    fontWeight: '800',
    color: '#000000',
    textTransform: 'uppercase',
    marginBottom: 4,
  },
  cardDescription: {
    fontSize: 16,
    fontWeight: '500',
    color: '#444444',
  },
  neubrutalism: {
    backgroundColor: '#FFDD00',
    borderWidth: 4,
    borderColor: '#000000',
    shadowColor: '#000000',
    shadowOffset: { width: 6, height: 6 },
    shadowOpacity: 1,
    shadowRadius: 0,
    elevation: 8,
  },
});