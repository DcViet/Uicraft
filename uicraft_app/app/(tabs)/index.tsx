import { Image, StyleSheet, Platform, Button, View, Text, TouchableOpacity } from 'react-native';
import React from 'react';
import { HelloWave } from '@/components/HelloWave';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { router } from 'expo-router';
import CustomButton from '@/components/buttonN';
import FilterButton from '@/components/filterN';
import TeatroButton from '@/components/teatroButtonN';
import CustomCard from '@/components/cardN';
import { SearchBar } from 'react-native-screens';
import CustomBadge from '@/components/badgeN';

export default function HomeScreen() {
  const [searchText, setSearchText] = React.useState('');

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

      <Text style={[styles.header, styles.neubrutalism]}>UICraft</Text>
      <Text style={styles.subheader}>Design beautifully, effortlessly.</Text>

      {/* Card 1: Upload SVG */}
      <TouchableOpacity style={[styles.card, styles.neubrutalism]} onPress={navigateToUpload}>
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
      <TouchableOpacity style={[styles.card, styles.neubrutalism]} onPress={navigateToTemplates}>
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

  {/* Card 3: Neubrutalism style */}
  <TouchableOpacity style={[styles.card, styles.neubrutalism]} onPress={navigateToTemplates}>
        <Image
          source={require('@/assets/images/icon.png')}
          style={styles.cardImage}
        />
        <View style={styles.cardContent}>
          <Text style={styles.cardTitle}>Explore Neubrutalism</Text>
          <Text style={styles.cardDescription}>
            
          </Text>
        </View>
      </TouchableOpacity>

      {/* Learn More Link */}
      <TouchableOpacity style={[styles.learnMore, styles.neubrutalism]} onPress={navigateToOnboarding}>
        <Text style={styles.learnMoreText}>Learn More About UICraft</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={[styles.card, styles.neubrutalism]}
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

      <CustomButton
        title="Ingresar"
        onPress={() => console.log('Black button pressed')}
        backgroundColor="#000000"
        textColor="#FFFFFF"
      />

      <CustomButton
        title="Ingresar"
        onPress={() => console.log('Green button pressed')}
        backgroundColor="#00FF00"
        textColor="#000000"
      />

      <CustomButton
        title="Ingresar"
        onPress={() => console.log('White button pressed')}
        backgroundColor="#FFFFFF"
        textColor="#000000"
      />

      <CustomButton
        title="Ingresar"
        onPress={() => console.log('Green button with border pressed')}
        backgroundColor="#FFFFFF"
        borderColor="#00FF00"
        textColor="#000000"
      />

      <CustomButton
        title="Ingresar"
        onPress={() => console.log('Disabled button pressed')}
        backgroundColor="#000000"
        textColor="#FFFFFF"
        disabled={true}
      />

      {/* Black Button with Right Arrow */}
      <FilterButton
        title="Filtro"
        onPress={() => console.log('Black filter button pressed')}
        backgroundColor="#000000"
        textColor="#FFFFFF"
        iconName="chevron-forward"
        iconColor="#FFFFFF"
      />

      {/* Pink Button with Checkmark */}
      <FilterButton
        title="Filtro"
        onPress={() => console.log('Pink filter button pressed')}
        backgroundColor="#FFC1CC" // Light pink
        borderColor="#FFC1CC"
        textColor="#000000"
        iconName="checkmark"
        iconColor="#000000"
      />

      {/* Disabled Black Button */}
      <FilterButton
        title="Filtro"
        onPress={() => console.log('Disabled filter button pressed')}
        backgroundColor="#000000"
        textColor="#FFFFFF"
        iconName="chevron-forward"
        iconColor="#FFFFFF"
        disabled={true}
      />

      {/* White Button with Black Border */}
      <TeatroButton
        title="Teatro"
        onPress={() => console.log('White button pressed')}
        backgroundColor="#FFFFFF"
        borderColor="#000000"
        textColor="#000000"
      />

      {/* Black Button with Pink Border */}
      <TeatroButton
        title="Teatro"
        onPress={() => console.log('Black button with pink border pressed')}
        backgroundColor="#000000"
        borderColor="#FF69B4" // Hot pink
        textColor="#FFFFFF"
      />

      {/* Disabled Button */}
      <TeatroButton
        title="Teatro"
        onPress={() => console.log('Disabled button pressed')}
        backgroundColor="#FFFFFF"
        borderColor="#000000"
        textColor="#000000"
        disabled={true}
      />

      {/* White Card */}
      <CustomCard
        name="LUCY PATANE"
        title="Lorem"
        description="Lorem ipsum"
        imageUrl="https://via.placeholder.com/200"
        onPress={() => console.log('White card pressed')}
        backgroundColor="#FFFFFF"
        borderColor="#000000"
      />

      {/* Dark Card */}
      <CustomCard
        name="LUCY PATANE"
        title="Lorem"
        description="Lorem ipsum"
        imageUrl="https://via.placeholder.com/200"
        onPress={() => console.log('Dark card pressed')}
        backgroundColor="#333333" // Dark background
        borderColor="#000000"
      // textColor='#FFF' 
      />

      {/* Disabled Card */}
      <CustomCard
        name="LUCY PATANE"
        title="Lorem"
        description="Lorem ipsum"
        imageUrl="https://via.placeholder.com/200"
        onPress={() => console.log('Disabled card pressed')}
        backgroundColor="#FFFFFF"
        borderColor="#000000"
        disabled={true}
      />

      {/* Text Badge with Flame Design */}
      <CustomBadge
        // text="Flame"
        backgroundColor="#000000"
        textColor="#FFFFFF"
        onPress={() => console.log('Text badge pressed')}
      />

      {/* Image Badge with Pencil Icon */}
      <CustomBadge
        imageUrl="https://via.placeholder.com/120" 
        iconName="pencil"
        iconColor="#000000"
        onPress={() => console.log('Image badge pressed')}
      />

      {/* Disabled Text Badge */}
      <CustomBadge
        // text="Flame"
        backgroundColor="#000000"
        textColor="#FFFFFF"
        onPress={() => console.log('Disabled badge pressed')}
        disabled={true}
      />

    </ParallaxScrollView>
  );
}

// const styles = StyleSheet.create({
//   reactLogo: {
//     height: 178,
//     width: 290,
//     bottom: 0,
//     left: 0,
//     position: 'absolute',
//   },
//   header: {
//     fontSize: 48,
//     fontWeight: '900', // Ultra-bold typography
//     color: '#000000', // Stark black for contrast
//     textTransform: 'uppercase',
//     letterSpacing: 2,
//     paddingHorizontal: 20,
//     paddingVertical: 10,
//     backgroundColor: '#FFDD00', // Bright, unapologetic yellow
//     alignSelf: 'flex-start',
//     borderWidth: 4, // Thick borders
//     borderColor: '#000000',
//   },
//   subheader: {
//     fontSize: 20,
//     fontWeight: '700',
//     color: '#333333', // Slightly muted but still dark
//     paddingHorizontal: 20,
//     marginBottom: 20,
//   },
//   card: {
//     flexDirection: 'row',
//     backgroundColor: '#FFFFFF', // Raw white
//     borderWidth: 4, // Thick, unrefined borders
//     borderColor: '#000000',
//     marginHorizontal: 20,
//     marginVertical: 10,
//     padding: 15,
//     shadowColor: '#000000', // Harsh shadow for depth
//     shadowOffset: { width: 8, height: 8 },
//     shadowOpacity: 1,
//     shadowRadius: 0,
//     elevation: 10,
//   },
//   cardImage: {
//     width: 60,
//     height: 60,
//     marginRight: 15,
//   },
//   cardContent: {
//     flex: 1,
//   },
//   cardTitle: {
//     fontSize: 24,
//     fontWeight: '800',
//     color: '#000000',
//     textTransform: 'uppercase',
//     marginBottom: 5,
//   },
//   cardDescription: {
//     fontSize: 16,
//     fontWeight: '600',
//     color: '#333333',
//   },
//   learnMore: {
//     marginHorizontal: 20,
//     marginVertical: 20,
//     backgroundColor: '#FF2D00', // Bold red button
//     borderWidth: 4,
//     borderColor: '#000000',
//     paddingVertical: 10,
//     paddingHorizontal: 20,
//     alignSelf: 'center',
//   },
//   learnMoreText: {
//     fontSize: 18,
//     fontWeight: '700',
//     color: '#FFFFFF',
//     textTransform: 'uppercase',
//   },
// });

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
    fontSize: 48,
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