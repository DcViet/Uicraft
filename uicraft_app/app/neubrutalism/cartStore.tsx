import React, { useState } from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  StyleSheet,
  FlatList,
  ScrollView,
} from 'react-native';
import { router } from 'expo-router';

// Define Product interface
interface Product {
  id: string;
  name: string;
  price: string;
  imageUrl: string;
  discount?: number;
}

const CartScreen = () => {
  // Sample cart data (giả lập từ state trước đó)
  const [cart, setCart] = useState<Product[]>([
    { id: '1', name: 'Handcrafted Mug', price: '$15.99', imageUrl: 'https://via.placeholder.com/150', discount: 20 },
    { id: '2', name: 'Wooden Table', price: '$99.99', imageUrl: 'https://via.placeholder.com/150', discount: 30 },
    { id: '4', name: 'Leather Wallet', price: '$35.99', imageUrl: 'https://via.placeholder.com/150', discount: 25 },
  ]);

  // Hàm xóa sản phẩm khỏi giỏ hàng
  const removeFromCart = (productId: string) => {
    setCart(cart.filter((item) => item.id !== productId));
  };

  // Tính tổng tiền
  const calculateTotal = () => {
    return cart
      .reduce((total, item) => {
        const price = parseFloat(item.price.replace('$', ''));
        const discount = item.discount ? price * (item.discount / 100) : 0;
        return total + (price - discount);
      }, 0)
      .toFixed(2);
  };

  // Render Cart Item
  const renderCartItem = ({ item }: { item: Product }) => (
    <View style={[styles.cartItem, styles.neubrutalism]}>
      <Image source={{ uri: item.imageUrl }} style={[styles.cartImage, styles.neubrutalismImage]} />
      <View style={styles.cartDetails}>
        <Text style={styles.cartItemName}>{item.name}</Text>
        <Text style={styles.cartItemPrice}>
          {item.discount
            ? `$${(parseFloat(item.price.replace('$', '')) * (1 - item.discount / 100)).toFixed(2)}`
            : item.price}
          {item.discount && <Text style={styles.originalPrice}> {item.price}</Text>}
        </Text>
      </View>
      <TouchableOpacity
        style={[styles.removeButton, styles.neubrutalism]}
        onPress={() => removeFromCart(item.id)}
      >
        <Text style={styles.removeButtonText}>X</Text>
      </TouchableOpacity>
    </View>
  );

  // Xử lý thanh toán (giả lập)
  const handleCheckout = () => {
    console.log('Proceeding to checkout...');
     router.push('/neubrutalism/checkOut');
  };

  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.scrollContent}>
      {/* Header */}
      <View style={styles.headerContainer}>
        <Text style={[styles.header, styles.neubrutalism]}>Cart</Text>
        <Image
          source={{ uri: 'https://img.icons8.com/ios-filled/50/000000/shopping-cart.png' }}
          style={styles.cartIcon}
        />
      </View>

      {/* Cart List */}
      {cart.length === 0 ? (
        <Text style={styles.emptyText}>Your cart is empty</Text>
      ) : (
        <>
          <FlatList
            data={cart}
            renderItem={renderCartItem}
            keyExtractor={(item) => item.id}
            scrollEnabled={false}
            contentContainerStyle={styles.cartListContent}
          />

          {/* Total and Checkout */}
          <View style={styles.totalContainer}>
            <Text style={styles.totalText}>Total: ${calculateTotal()}</Text>
            <TouchableOpacity
              style={[styles.checkoutButton, styles.neubrutalism]}
              onPress={handleCheckout}
            >
              <Text style={styles.checkoutButtonText}>Checkout</Text>
            </TouchableOpacity>
          </View>
        </>
      )}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  // Base styles
  container: {
    flex: 1,
    backgroundColor: '#F5F5F5',
  },
  scrollContent: {
    padding: 16,
    paddingBottom: 32,
  },
  headerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 24,
  },
  header: {
    fontSize: 36,
    fontWeight: '900',
    color: '#000000',
    textTransform: 'uppercase',
    letterSpacing: 2,
  },
  cartIcon: {
    width: 40,
    height: 40,
  },
  cartListContent: {
    paddingHorizontal: 4,
  },
  cartItem: {
    flexDirection: 'row',
    backgroundColor: '#FFFFFF',
    padding: 12,
    marginBottom: 16,
    alignItems: 'center',
  },
  cartImage: {
    width: 80,
    height: 80,
    marginRight: 12,
  },
  cartDetails: {
    flex: 1,
  },
  cartItemName: {
    fontSize: 16,
    fontWeight: '700',
    color: '#000000',
  },
  cartItemPrice: {
    fontSize: 14,
    fontWeight: '600',
    color: '#FF2D00',
    marginTop: 4,
  },
  originalPrice: {
    fontSize: 12,
    color: '#999999',
    textDecorationLine: 'line-through',
  },
  removeButton: {
    backgroundColor: '#FF2D00',
    width: 32,
    height: 32,
    justifyContent: 'center',
    alignItems: 'center',
  },
  removeButtonText: {
    fontSize: 16,
    fontWeight: '700',
    color: '#FFFFFF',
  },
  emptyText: {
    fontSize: 18,
    fontWeight: '700',
    color: '#333333',
    textAlign: 'center',
    marginTop: 40,
  },
  totalContainer: {
    marginTop: 24,
    alignItems: 'center',
  },
  totalText: {
    fontSize: 20,
    fontWeight: '700',
    color: '#000000',
    marginBottom: 16,
  },
  checkoutButton: {
    backgroundColor: '#000000',
    paddingVertical: 16,
    paddingHorizontal: 32,
    width: '100%',
    alignItems: 'center',
  },
  checkoutButtonText: {
    fontSize: 20,
    fontWeight: '900',
    color: '#FFFFFF',
    textTransform: 'uppercase',
    letterSpacing: 1.5,
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
  neubrutalismImage: {
    borderWidth: 3,
    borderColor: '#000000',
  },
});

export default CartScreen;