import { router } from 'expo-router';
import React, { useState } from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet, ScrollView, FlatList } from 'react-native';

// Define the Product interface
interface Product {
  id: string;
  name: string;
  price: string;
  imageUrl: string;
  description?: string;
  discount?: number;
}


const product: Product = {
  id: '1',
  name: 'Handcrafted Mug',
  price: '$15.99',
  imageUrl: 'https://via.placeholder.com/300',
  description:
    'A beautifully crafted ceramic mug, perfect for your morning coffee. Handmade with love. This is a longer description to test scrolling behavior, ensuring the content exceeds the screen height for demonstration purposes. The mug features a unique glaze and ergonomic handle for a comfortable grip.',
  discount: 20, // Thêm giảm giá
};

const relatedProducts: Product[] = [
  { id: '2', name: 'Wooden Table', price: '$99.99', imageUrl: 'https://via.placeholder.com/150', discount: 30 },
  { id: '3', name: 'Ceramic Vase', price: '$25.99', imageUrl: 'https://via.placeholder.com/150' },
  { id: '4', name: 'Leather Wallet', price: '$35.99', imageUrl: 'https://via.placeholder.com/150', discount: 25 },
];

const reviews = [
  { id: '1', user: 'Jane', rating: 4, comment: 'Great mug, love the design!' },
  { id: '2', user: 'Mike', rating: 5, comment: 'Perfect for coffee!' },
];

const ProductDetailScreen = () => {
  const [quantity, setQuantity] = useState(1); // State cho số lượng
  const [isFavorite, setIsFavorite] = useState(false); // State cho yêu thích

  const handleAddToCart = () => {
    console.log(`Added ${quantity} ${product.name}(s) to cart`);
    router.push('/neubrutalism/cardPay');
  };

  const handleBack = () => {
    router.back(); // Quay lại trang trước
  };

  const toggleFavorite = () => {
    setIsFavorite(!isFavorite);
    console.log(`${product.name} ${isFavorite ? 'removed from' : 'added to'} favorites`);
  };

  // Tính giá sau giảm giá
  const getDiscountedPrice = () => {
    const price = parseFloat(product.price.replace('$', ''));
    return product.discount ? (price * (1 - product.discount / 100)).toFixed(2) : price.toFixed(2);
  };

  const renderRelatedProduct = ({ item }: { item: Product }) => (
    <TouchableOpacity
      style={[styles.relatedCard, styles.neubrutalism]}
      onPress={() => router.push('/neubrutalism/productDetail')} // Có thể thêm logic để load sản phẩm cụ thể
    >
      <Image source={{ uri: item.imageUrl }} style={[styles.relatedImage, styles.neubrutalism]} />
      <Text style={styles.relatedName}>{item.name}</Text>
      <Text style={styles.relatedPrice}>
        {item.discount
          ? `$${(parseFloat(item.price.replace('$', '')) * (1 - item.discount / 100)).toFixed(2)}`
          : item.price}
      </Text>
    </TouchableOpacity>
  );

  return (
    <ScrollView style={styles.scrollContainer} contentContainerStyle={styles.contentContainer}>
      <View style={styles.container}>
        {/* Header with Back and Favorite Buttons */}
        <View style={styles.headerContainer}>
          <TouchableOpacity style={[styles.backButton, styles.neubrutalism]} onPress={handleBack}>
            <Text style={styles.backButtonText}>←</Text>
          </TouchableOpacity>
          <Text style={[styles.header]}>Product Details</Text>
          <TouchableOpacity
            style={[styles.favoriteButton, styles.neubrutalism]}
            onPress={toggleFavorite}
          >
            <Text style={styles.favoriteButtonText}>{isFavorite ? '❤️' : '♡'}</Text>
          </TouchableOpacity>
        </View>

        {/* Product Image */}
        <View style={styles.imageContainer}>
          <Image source={{ uri: product.imageUrl }} style={[styles.productImage, styles.neubrutalism]} />
          {product.discount && (
            <View style={[styles.discountBadge, styles.neubrutalism]}>
              <Text style={styles.discountText}>{`-${product.discount}%`}</Text>
            </View>
          )}
        </View>

        {/* Product Info */}
        <Text style={styles.productName}>{product.name}</Text>
        <View style={styles.priceContainer}>
          <Text style={styles.productPrice}>
            ${getDiscountedPrice()}
          </Text>
          {product.discount && (
            <Text style={styles.originalPrice}>{product.price}</Text>
          )}
        </View>
        <Text style={styles.productDescription}>{product.description}</Text>

        {/* Quantity Selector */}
        <View style={styles.quantityContainer}>
          <Text style={styles.quantityLabel}>Quantity:</Text>
          <TouchableOpacity
            style={[styles.quantityButton, styles.neubrutalism]}
            onPress={() => setQuantity(Math.max(1, quantity - 1))}
          >
            <Text style={styles.quantityButtonText}>-</Text>
          </TouchableOpacity>
          <Text style={styles.quantityText}>{quantity}</Text>
          <TouchableOpacity
            style={[styles.quantityButton, styles.neubrutalism]}
            onPress={() => setQuantity(quantity + 1)}
          >
            <Text style={styles.quantityButtonText}>+</Text>
          </TouchableOpacity>
        </View>

        {/* Add to Cart Button */}
        <TouchableOpacity style={[styles.addToCartButton, styles.neubrutalism]} onPress={handleAddToCart}>
          <Text style={styles.addToCartText}>Add to Cart</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.relatedContainer}>
        <Text style={[styles.relatedHeader, styles.neubrutalism]}>Related Products</Text>
        <FlatList
          data={relatedProducts}
          renderItem={renderRelatedProduct}
          keyExtractor={(item) => item.id}
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.relatedList}
        />
      </View>

      <View style={styles.reviewsContainer}>
  <Text style={[styles.reviewsHeader, styles.neubrutalism]}>Reviews</Text>
  {reviews.map((review) => (
    <View key={review.id} style={styles.reviewItem}>
      <Text style={styles.reviewUser}>{review.user} ({review.rating}/5)</Text>
      <Text style={styles.reviewComment}>{review.comment}</Text>
    </View>
  ))}
</View>

    </ScrollView>
  );
};

const styles = StyleSheet.create({
  // Base styles
  scrollContainer: {
    flex: 1,
    backgroundColor: '#F5F5F5',
  },
  contentContainer: {
    padding: 20,
  },
  container: {
    justifyContent: 'flex-start',
  },
  headerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
  },
  header: {
    fontSize: 24,
    fontWeight: '900',
    color: '#000000',
    textTransform: 'uppercase',
    letterSpacing: 2,
  },
  backButton: {
    backgroundColor: '#FFFFFF',
    padding: 8,
    width: 40,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
  },
  backButtonText: {
    fontSize: 20,
    fontWeight: '700',
    color: '#000000',
  },
  favoriteButton: {
    backgroundColor: '#FFFFFF',
    padding: 8,
    width: 40,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
  },
  favoriteButtonText: {
    fontSize: 20,
  },
  imageContainer: {
    position: 'relative',
    marginBottom: 20,
  },
  productImage: {
    width: '100%',
    height: 300,
    borderRadius: 10,
  },
  discountBadge: {
    position: 'absolute',
    top: 10,
    left: 10,
    backgroundColor: '#FF2D00',
    paddingVertical: 4,
    paddingHorizontal: 8,
  },
  discountText: {
    color: '#FFFFFF',
    fontSize: 14,
    fontWeight: '700',
  },
  productName: {
    fontSize: 28,
    fontWeight: '800',
    color: '#000000',
    marginBottom: 10,
  },
  priceContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  productPrice: {
    fontSize: 24,
    fontWeight: '700',
    color: '#FF2D00',
    letterSpacing: 1,
  },
  originalPrice: {
    fontSize: 18,
    fontWeight: '600',
    color: '#999999',
    textDecorationLine: 'line-through',
    marginLeft: 10,
  },
  productDescription: {
    fontSize: 16,
    fontWeight: '600',
    color: '#333333',
    marginBottom: 20,
    lineHeight: 24,
  },
  quantityContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  quantityLabel: {
    fontSize: 16,
    fontWeight: '700',
    color: '#000000',
    marginRight: 10,
  },
  quantityButton: {
    backgroundColor: '#FFFFFF',
    padding: 8,
    width: 40,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
  },
  quantityButtonText: {
    fontSize: 20,
    fontWeight: '700',
    color: '#000000',
  },
  quantityText: {
    fontSize: 18,
    fontWeight: '700',
    color: '#000000',
    marginHorizontal: 10,
  },
  addToCartButton: {
    backgroundColor: '#FF2D00',
    paddingVertical: 15,
    alignItems: 'center',
  },
  addToCartText: {
    fontSize: 20,
    fontWeight: '900',
    color: '#FFFFFF',
    textTransform: 'uppercase',
    letterSpacing: 2,
  },

  // Neubrutalism effects
  neubrutalism: {
    borderWidth: 4,
    borderColor: '#000000',
    shadowColor: '#000000',
    shadowOffset: { width: 6, height: 6 },
    shadowOpacity: 1,
    shadowRadius: 0,
    elevation: 6,
  },

  relatedContainer: {
    marginTop: 30,
  },
  relatedHeader: {
    fontSize: 24,
    fontWeight: '900',
    color: '#000000',
    textTransform: 'uppercase',
    letterSpacing: 1.5,
    marginBottom: 15,
  },
  relatedList: {
    paddingHorizontal: 5,
  },
  relatedCard: {
    width: 150,
    backgroundColor: '#FFFFFF',
    padding: 10,
    marginRight: 15,
    alignItems: 'center',
  },
  relatedImage: {
    width: 100,
    height: 100,
    marginBottom: 8,
  },
  relatedName: {
    fontSize: 14,
    fontWeight: '700',
    color: '#000000',
    textAlign: 'center',
  },
  relatedPrice: {
    fontSize: 12,
    fontWeight: '600',
    color: '#FF2D00',
    marginTop: 4,
  },
  reviewsContainer: { marginTop: 30 },
  reviewsHeader: { fontSize: 24, fontWeight: '900', color: '#000000', textTransform: 'uppercase', letterSpacing: 1.5, marginBottom: 15 },
  reviewItem: { marginBottom: 15 },
  reviewUser: { fontSize: 16, fontWeight: '700', color: '#000000' },
  reviewComment: { fontSize: 14, fontWeight: '600', color: '#333333' },

});

export default ProductDetailScreen;