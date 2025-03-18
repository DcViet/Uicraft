import React from 'react';
import { Image, StyleSheet } from 'react-native';
import Onboarding from 'react-native-onboarding-swiper';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { router } from 'expo-router';

const OnboardingScreen = () => {
  const handleDone = async () => {
    await AsyncStorage.setItem('hasSeenOnboarding', 'true');
    router.replace('/(tabs)');
  };

  const handleSkip = async () => {
    await AsyncStorage.setItem('hasSeenOnboarding', 'true');
    router.replace('/(tabs)');
  };

  return (
    <Onboarding
      {...({
        pages: [
          {
            backgroundColor: '#FF2D00',
            image: (
              <Image
                source={require('@/assets/images/react-logo.png')}
                style={styles.image}
              />
            ),
            title: 'Welcome to UICraft',
            subtitle: 'Easily upload your SVG files and bring your designs to life.',
            titleStyles: styles.title,
            subTitleStyles: styles.subtitle,
          },
          {
            backgroundColor: '#FFDD00',
            image: (
              <Image
                source={require('@/assets/images/react-logo.png')}
                style={styles.image}
              />
            ),
            title: 'Apply to Interfaces',
            subtitle: 'Seamlessly integrate your SVGs into existing UI templates.',
            titleStyles: styles.title,
            subTitleStyles: styles.subtitle,
          },
          {
            backgroundColor: '#000000',
            image: (
              <Image
                source={require('@/assets/images/react-logo.png')}
                style={styles.image}
              />
            ),
            title: 'Unleash Creativity',
            subtitle: 'Customize and craft stunning interfaces with ease.',
            titleStyles: styles.title,
            subTitleStyles: styles.subtitle,
          },
        ],
        onSkip: handleSkip,
        onDone: handleDone,
        containerStyles: styles.container,
        nextLabel: 'NEXT',
        skipLabel: 'SKIP',
        doneLabel: 'START',
        nextButtonStyles: styles.button,
        skipButtonStyles: styles.button,
        doneButtonStyles: styles.button,
        dotStyle: styles.dot,
        activeDotStyle: styles.activeDot,
      } as any)} // Cast the entire props object to any
    />
  );
};

// Styles remain the same as above
const styles = StyleSheet.create({
  container: {
    padding: 20,
    borderWidth: 4,
    borderColor: '#000000',
    backgroundColor: 'transparent',
  },
  image: {
    width: 220,
    height: 220,
    resizeMode: 'contain',
    borderWidth: 4,
    borderColor: '#000000',
    shadowColor: '#000000',
    shadowOffset: { width: 8, height: 8 },
    shadowOpacity: 1,
    shadowRadius: 0,
  },
  title: {
    fontSize: 36,
    fontWeight: '900',
    color: '#FFFFFF',
    textTransform: 'uppercase',
    letterSpacing: 2,
    textAlign: 'center',
    backgroundColor: '#000000',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderWidth: 4,
    borderColor: '#FFFFFF',
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 18,
    fontWeight: '700',
    color: '#FFFFFF',
    textAlign: 'center',
    paddingHorizontal: 15,
  },
  button: {
    backgroundColor: '#FF2D00',
    borderWidth: 4,
    borderColor: '#000000',
    paddingVertical: 10,
    paddingHorizontal: 20,
    shadowColor: '#000000',
    shadowOffset: { width: 4, height: 4 },
    shadowOpacity: 1,
    shadowRadius: 0,
  },
  dot: {
    width: 12,
    height: 12,
    borderRadius: 0,
    backgroundColor: '#FFFFFF',
    borderWidth: 2,
    borderColor: '#000000',
    marginHorizontal: 6,
  },
  activeDot: {
    width: 12,
    height: 12,
    borderRadius: 0,
    backgroundColor: '#FFDD00',
    borderWidth: 2,
    borderColor: '#000000',
  },
});

export default OnboardingScreen;