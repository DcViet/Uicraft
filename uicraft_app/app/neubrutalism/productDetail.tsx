import { router } from 'expo-router';
import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';

// Define the Product interface
interface Product {
  id: string;
  name: string;
  price: string;
  imageUrl: string;
  description?: string; // Optional description
}

// Sample product data (replace with dynamic data from navigation or API)
const product: Product = {
  id: '1',
  name: 'Handcrafted Mug',
  price: '$15.99',
  imageUrl: 'https://via.placeholder.com/300',
  description: 'A beautifully crafted ceramic mug, perfect for your morning coffee. Handmade with love. This is a longer description to test scrolling behavior, ensuring the content exceeds the screen height for demonstration purposes. The mug features a unique glaze and ergonomic handle for a comfortable grip.',
};

const ProductDetailScreen = () => {
  const handleAddToCart = () => {
    // Logic to add product to cart
    console.log(`Added ${product.name} to cart`);
    router.push('/neubrutalism/cardPay')
  };

  return (
    <ScrollView style={styles.scrollContainer} contentContainerStyle={styles.contentContainer}>
      <View style={styles.container}>
        <Text style={styles.header}>Product Details</Text>

        {/* Product Image */}
        <Image source={{ uri: product.imageUrl }} style={styles.productImage} />

        {/* Product Name */}
        <Text style={styles.productName}>{product.name}</Text>

        {/* Product Price */}
        <Text style={styles.productPrice}>{product.price}</Text>

        {/* Product Description */}
        <Text style={styles.productDescription}>{product.description}</Text>

        {/* Add to Cart Button */}
        <TouchableOpacity style={styles.addToCartButton} onPress={handleAddToCart}>
          <Text style={styles.addToCartText}>Add to Cart</Text>
        </TouchableOpacity>
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
  productImage: {
    width: '100%',
    height: 300,
    marginBottom: 20,
    borderWidth: 6,
    borderColor: '#000000',
    shadowColor: '#000000',
    shadowOffset: { width: 10, height: 10 },
    shadowOpacity: 1,
    shadowRadius: 0,
    elevation: 10,
  },
  productName: {
    fontSize: 28,
    fontWeight: '800',
    color: '#000000',
    textTransform: 'uppercase',
    marginBottom: 10,
    backgroundColor: '#FFDD00',
    padding: 10,
    borderWidth: 4,
    borderColor: '#000000',
  },
  productPrice: {
    fontSize: 24,
    fontWeight: '700',
    color: '#000000',
    marginBottom: 20,
    letterSpacing: 1,
  },
  productDescription: {
    fontSize: 18,
    fontWeight: '700',
    color: '#333333',
    marginBottom: 30,
    lineHeight: 24,
  },
  addToCartButton: {
    backgroundColor: '#FF2D00', // Bold red
    borderWidth: 6,
    borderColor: '#000000',
    paddingVertical: 15,
    alignItems: 'center',
    shadowColor: '#000000',
    shadowOffset: { width: 10, height: 10 },
    shadowOpacity: 1,
    shadowRadius: 0,
    elevation: 10,
  },
  addToCartText: {
    fontSize: 24,
    fontWeight: '900',
    color: '#FFFFFF',
    textTransform: 'uppercase',
    letterSpacing: 2,
  },
});

export default ProductDetailScreen;