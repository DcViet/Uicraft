import { Image, StyleSheet, Platform, Button, View, Text, TouchableOpacity } from 'react-native';

import { HelloWave } from '@/components/HelloWave';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { router } from 'expo-router';

export default function HomeScreen() {
  const viewOnboarding = () => {
    router.push('/onboarding');
  };

  const navigateToUpload = () => {
    router.push('/');
  };

  const navigateToTemplates = () => {
    router.push('/');
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

      <Text style={styles.header}>UICraft</Text>
      <Text style={styles.subheader}>Design beautifully, effortlessly.</Text>

      {/* Card 1: Upload SVG */}
      <TouchableOpacity style={styles.card} onPress={navigateToUpload}>
        <Image
          source={require('@/assets/images/icon.png')}
          style={styles.cardImage}
        />
        <View style={styles.cardContent}>
          <Text style={styles.cardTitle}>Upload SVG</Text>
          <Text style={styles.cardDescription}>
            Bring your designs to life with custom SVG files.
          </Text>
        </View>
      </TouchableOpacity>

      {/* Card 2: Explore Templates */}
      <TouchableOpacity style={styles.card} onPress={navigateToTemplates}>
        <Image
          source={require('@/assets/images/icon.png')}
          style={styles.cardImage}
        />
        <View style={styles.cardContent}>
          <Text style={styles.cardTitle}>Explore Templates</Text>
          <Text style={styles.cardDescription}>
            Apply your SVGs to stunning, pre-built layouts.
          </Text>
        </View>
      </TouchableOpacity>

      {/* Learn More Link */}
      <TouchableOpacity style={styles.learnMore} onPress={navigateToOnboarding}>
        <Text style={styles.learnMoreText}>Learn More About UICraft</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.card}
        onPress={() => { router.push('/neubrutalism/cardPay'); }}
      >
        <Text>Card</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.card}
        onPress={() => { router.push('/neubrutalism/login'); }}
      >
        <Text>Login</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.card}
        onPress={() => { router.push('/neubrutalism/signUp'); }}
      >
        <Text>SignUp</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.card}
        onPress={() => { router.push('/neubrutalism/verification'); }}
      >
        <Text>Verification</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.card}
        onPress={() => { router.push('/neubrutalism/productCard'); }}
      >
        <Text>Product card</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.card}
        onPress={() => { router.push('/neubrutalism/productDetail'); }}
      >
        <Text>Product detail</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.card}
        onPress={() => { router.push('/neubrutalism/userProfile'); }}
      >
        <Text>User profile</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.card}
        onPress={() => { router.push('/neubrutalism/editProfile'); }}
      >
        <Text>Editprofile</Text>
      </TouchableOpacity>

    </ParallaxScrollView>
  );
}

const styles = StyleSheet.create({
  reactLogo: {
    height: 178,
    width: 290,
    bottom: 0,
    left: 0,
    position: 'absolute',
  },
  header: {
    fontSize: 48,
    fontWeight: '900', // Ultra-bold typography
    color: '#000000', // Stark black for contrast
    textTransform: 'uppercase',
    letterSpacing: 2,
    paddingHorizontal: 20,
    paddingVertical: 10,
    backgroundColor: '#FFDD00', // Bright, unapologetic yellow
    alignSelf: 'flex-start',
    borderWidth: 4, // Thick borders
    borderColor: '#000000',
  },
  subheader: {
    fontSize: 20,
    fontWeight: '700',
    color: '#333333', // Slightly muted but still dark
    paddingHorizontal: 20,
    marginBottom: 20,
  },
  card: {
    flexDirection: 'row',
    backgroundColor: '#FFFFFF', // Raw white
    borderWidth: 4, // Thick, unrefined borders
    borderColor: '#000000',
    marginHorizontal: 20,
    marginVertical: 10,
    padding: 15,
    shadowColor: '#000000', // Harsh shadow for depth
    shadowOffset: { width: 8, height: 8 },
    shadowOpacity: 1,
    shadowRadius: 0,
    elevation: 10,
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
    backgroundColor: '#FF2D00', // Bold red button
    borderWidth: 4,
    borderColor: '#000000',
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
});
