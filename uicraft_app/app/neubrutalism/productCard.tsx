import { router } from 'expo-router';
import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet, FlatList } from 'react-native';

// Define the Product interface
interface Product {
  id: string;
  name: string;
  price: string;
  imageUrl: string;
}

const ProductCardListScreen = () => {

  // Sample product data (replace with your actual data)
  const products: Product[] = [
    { id: '1', name: 'Handcrafted Mug', price: '$15.99', imageUrl: 'https://via.placeholder.com/100' },
    { id: '2', name: 'Wooden Table', price: '$99.99', imageUrl: 'https://via.placeholder.com/100' },
    { id: '3', name: 'Ceramic Vase', price: '$25.99', imageUrl: 'https://via.placeholder.com/100' },
    { id: '4', name: 'Leather Wallet', price: '$35.99', imageUrl: 'https://via.placeholder.com/100' },
  ];

  const renderProductCard = ({ item }: { item: Product }) => (
    <TouchableOpacity style={styles.card} onPress={() => { router.push('/neubrutalism/productDetail'); }}>

      <Image source={{ uri: item.imageUrl }} style={styles.productImage} />
      <Text style={styles.productName}>{item.name}</Text>
      <Text style={styles.productPrice}>{item.price}</Text>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.header}>My Products</Text>

      <FlatList
        data={products}
        renderItem={renderProductCard}
        keyExtractor={(item) => item.id}
        numColumns={2} // Two cards per row
        columnWrapperStyle={styles.row} // Style for each row
        contentContainerStyle={styles.listContent}
      />
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
  listContent: {
    paddingBottom: 20,
  },
  row: {
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  card: {
    width: '48%', // Approximately half the width with spacing
    backgroundColor: '#000000', // Stark black
    padding: 15,
    borderWidth: 6, // Thick, unrefined borders
    borderColor: '#FFFFFF',
    shadowColor: '#000000',
    shadowOffset: { width: 10, height: 10 },
    shadowOpacity: 1,
    shadowRadius: 0,
    elevation: 10,
    marginBottom: 10,
  },
  productImage: {
    width: '100%',
    height: 100,
    marginBottom: 10,
    borderWidth: 4,
    borderColor: '#FFFFFF',
  },
  productName: {
    fontSize: 20,
    fontWeight: '800',
    color: '#FFFFFF',
    textTransform: 'uppercase',
    marginBottom: 5,
  },
  productPrice: {
    fontSize: 18,
    fontWeight: '700',
    color: '#FFFFFF',
    letterSpacing: 1,
  },
});

export default ProductCardListScreen;