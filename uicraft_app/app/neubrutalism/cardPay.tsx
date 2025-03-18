import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';

const CardPayScreen = () => {
  const handleAddCard = () => {
    // Logic to add a new card
    console.log('Add a new card pressed');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>My Cards</Text>

      {/* Card 1: Black Visa Card */}
      <View style={styles.card}>
        <Text style={styles.cardName}>Harry Williams</Text>
        <Text style={styles.cardNumber}>4567 8907 3567 3542</Text>
        <View style={styles.validityContainer}>
          <Text style={styles.validityText}>Valid from 09/23</Text>
          <Text style={styles.validityText}>Valid til 09/25</Text>
        </View>
        <Image
          source={{ uri: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/5e/Visa_Inc._logo.svg/200px-Visa_Inc._logo.svg.png' }} // Visa logo
          style={styles.cardLogo}
        />
      </View>

      {/* Card 2: Green Card with Icon */}
      <View style={[styles.card, styles.greenCard]}>
        <Text style={styles.cardName}>Harry Williams</Text>
        <Text style={styles.cardNumber}>4567 8907 3567 3542</Text>
        <View style={styles.validityContainer}>
          <Text style={styles.validityText}>Valid from 09/23</Text>
          <Text style={styles.validityText}>Valid til 09/25</Text>
        </View>
        <Image
          source={{ uri: 'https://img.icons8.com/ios-filled/50/000000/credit-card.png' }} // Placeholder icon
          style={styles.cardIcon}
        />
      </View>

      {/* Add Card Button */}
      <TouchableOpacity style={styles.addCardButton} onPress={handleAddCard}>
        <Text style={styles.addCardText}>Add a new card</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#FFFFFF', // Raw white background
  },
  header: {
    fontSize: 36,
    fontWeight: '900', // Ultra-bold
    color: '#000000',
    textTransform: 'uppercase',
    letterSpacing: 2,
    marginBottom: 20,
    backgroundColor: '#FFDD00', // Bright yellow
    padding: 10,
    borderWidth: 4,
    borderColor: '#000000',
    alignSelf: 'flex-start',
  },
  card: {
    backgroundColor: '#000000', // Stark black
    padding: 20,
    marginBottom: 20,
    borderWidth: 6, // Thick, unrefined borders
    borderColor: '#FFFFFF',
    shadowColor: '#000000',
    shadowOffset: { width: 10, height: 10 },
    shadowOpacity: 1,
    shadowRadius: 0,
    elevation: 10,
  },
  greenCard: {
    backgroundColor: '#00FF00', // Bright green for contrast
  },
  cardName: {
    fontSize: 20,
    fontWeight: '800',
    color: '#FFFFFF',
    textTransform: 'uppercase',
    marginBottom: 10,
  },
  cardNumber: {
    fontSize: 18,
    fontWeight: '700',
    color: '#FFFFFF',
    letterSpacing: 2,
    marginBottom: 10,
  },
  validityContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
  validityText: {
    fontSize: 14,
    fontWeight: '600',
    color: '#FFFFFF',
  },
  cardLogo: {
    width: 60,
    height: 30,
    position: 'absolute',
    bottom: 10,
    right: 10,
  },
  cardIcon: {
    width: 40,
    height: 40,
    position: 'absolute',
    bottom: 10,
    right: 10,
  },
  addCardButton: {
    backgroundColor: '#FF2D00', // Bold red
    borderWidth: 6,
    borderColor: '#000000',
    padding: 20,
    alignItems: 'center',
    shadowColor: '#000000',
    shadowOffset: { width: 8, height: 8 },
    shadowOpacity: 1,
    shadowRadius: 0,
    elevation: 10,
    borderStyle: 'dashed', // Dashed border for raw feel
  },
  addCardText: {
    fontSize: 20,
    fontWeight: '800',
    color: '#FFFFFF',
    textTransform: 'uppercase',
  },
});

export default CardPayScreen;