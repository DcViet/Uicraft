import { Image, StyleSheet, Platform, Button, View, Text, TouchableOpacity } from 'react-native';
import React from 'react';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { router } from 'expo-router';

export default function StyleScreen() {


  const navigateToInfo = () => {
    router.push('/neubrutalism/inFo');
  };

  const navigateToOnboarding = () => {
    router.push('/onboarding');
  };



  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: '#333', dark: '#000000' }} // Bold red and stark black
      headerImage={
        <Image
          source={require('@/assets/images/partial-react-logo.png')}
          style={styles.reactLogo}
        />
      }>

      <Text style={[styles.header, styles.neubrutalism]}>UICraft - style</Text>
      <Text style={styles.subheader}>Design beautifully, effortlessly.</Text>

      {/* Card 1: Upload SVG */}
      <TouchableOpacity style={[styles.card, styles.neubrutalism]} onPress={navigateToInfo}>
        <Image
          source={require('@/assets/images/icon.png')}
          style={styles.cardImage}
        />
        <View style={styles.cardContent}>
          <Text style={styles.cardTitle}>Style 1</Text>
          <Text style={styles.cardDescription}>
            Bring your designs to life with custom SVG files.
          </Text>
        </View>
      </TouchableOpacity>

      {/* Card 2: Explore Templates */}
      <TouchableOpacity style={[styles.card, styles.neubrutalism]} onPress={navigateToOnboarding}>
        <Image
          source={require('@/assets/images/icon.png')}
          style={styles.cardImage}
        />
        <View style={styles.cardContent}>
          <Text style={styles.cardTitle}>Style 2</Text>
          <Text style={styles.cardDescription}>
            Apply your SVGs to stunning, pre-built layouts.
          </Text>
        </View>
      </TouchableOpacity>

    </ParallaxScrollView>
  );
}

const styles = StyleSheet.create({
  // Base styles without Neubrutalism effects
  reactLogo: {
    height: 178,
    width: 290,
    bottom: 0,
    left: 0,
    position: 'absolute',
  },
  header: {
    fontSize: 36,
    fontWeight: '900',
    color: '#000000',
    textTransform: 'uppercase',
    letterSpacing: 2,
    paddingHorizontal: 20,
    paddingVertical: 10,
    alignSelf: 'flex-start',
  },
  subheader: {
    fontSize: 20,
    fontWeight: '700',
    color: '#333333',
    paddingHorizontal: 20,
    marginBottom: 20,
  },
  card: {
    flexDirection: 'row',
    backgroundColor: '#FFFFFF',
    marginHorizontal: 20,
    marginVertical: 10,
    padding: 15,
  },
  cardImage: {
    width: 60,
    height: 60,
    marginRight: 15,
  },
  cardContent: {
    flex: 1,
  },
  cardTitle: {
    fontSize: 24,
    fontWeight: '800',
    color: '#000000',
    textTransform: 'uppercase',
    marginBottom: 5,
  },
  cardDescription: {
    fontSize: 16,
    fontWeight: '600',
    color: '#333333',
  },
  learnMore: {
    marginHorizontal: 20,
    marginVertical: 20,
    backgroundColor: '#FF2D00',
    paddingVertical: 10,
    paddingHorizontal: 20,
    alignSelf: 'center',
  },
  learnMoreText: {
    fontSize: 18,
    fontWeight: '700',
    color: '#FFFFFF',
    textTransform: 'uppercase',
  },

  // Neubrutalism effects separated into a single class
  neubrutalism: {
    backgroundColor: '#FFDD00', // Applied to header and learnMore in original with different colors
    borderWidth: 4,
    borderColor: '#000000',
    shadowColor: '#000000',
    shadowOffset: { width: 8, height: 8 },
    shadowOpacity: 1,
    shadowRadius: 0,
    elevation: 10,
  },
});