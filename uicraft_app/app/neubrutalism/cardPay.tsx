import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';

const CardPayScreen = () => {
  const handleAddCard = () => {
    console.log('Add a new card pressed');
  };

  return (
    <View style={styles.container}>
      <Text style={[styles.header, styles.neubrutalism]}>My Cards</Text>

      <View style={[styles.card, styles.neubrutalism]}>
        <Text style={styles.cardName}>Harry Williams</Text>
        <Text style={styles.cardNumber}>4567 8907 3567 3542</Text>
        <View style={styles.validityContainer}>
          <Text style={styles.validityText}>Valid from 09/23</Text>
          <Text style={styles.validityText}>Valid til 09/25</Text>
        </View>
        <Image
          source={{ uri: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/5e/Visa_Inc._logo.svg/200px-Visa_Inc._logo.svg.png' }}
          style={styles.cardLogo}
        />
      </View>

      <View style={[styles.card, styles.greenCard, styles.neubrutalism]}>
        <Text style={styles.cardName}>Harry Williams</Text>
        <Text style={styles.cardNumber}>4567 8907 3567 3542</Text>
        <View style={styles.validityContainer}>
          <Text style={styles.validityText}>Valid from 09/23</Text>
          <Text style={styles.validityText}>Valid til 09/25</Text>
        </View>
        <Image
          source={{ uri: 'https://img.icons8.com/ios-filled/50/000000/credit-card.png' }}
          style={styles.cardIcon}
        />
      </View>

      <TouchableOpacity style={[styles.addCardButton, styles.neubrutalism]} onPress={handleAddCard}>
        <Text style={styles.addCardText}>Add a new card</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  // Base styles without Neubrutalism effects
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#FFFFFF',
  },
  header: {
    fontSize: 36,
    fontWeight: '900',
    color: '#000000',
    textTransform: 'uppercase',
    letterSpacing: 2,
    marginBottom: 20,
    alignSelf: 'flex-start',
  },
  card: {
    backgroundColor: '#000000',
    padding: 20,
    marginBottom: 20,
  },
  greenCard: {
    backgroundColor: '#00FF00',
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
    backgroundColor: '#FF2D00',
    padding: 20,
    alignItems: 'center',
  },
  addCardText: {
    fontSize: 20,
    fontWeight: '800',
    color: '#FFFFFF',
    textTransform: 'uppercase',
  },

  // Neubrutalism effects separated into a single class
  neubrutalism: {
    backgroundColor: '#FFDD00', // Applied only to header in original
    borderWidth: 6, // Varies in original (4 for header)
    borderColor: '#FFFFFF', // Varies in original (#000000 for header and addCardButton)
    shadowColor: '#000000',
    shadowOffset: { width: 10, height: 10 },
    shadowOpacity: 1,
    shadowRadius: 0,
    elevation: 10,
    borderStyle: 'dashed', // Applied only to addCardButton in original
  },
});

export default CardPayScreen;