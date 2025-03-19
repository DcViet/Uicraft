import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
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

const CheckoutScreen = () => {
  // Sample cart data (giả lập từ giỏ hàng)
  const [cart] = useState<Product[]>([
    { id: '1', name: 'Handcrafted Mug', price: '$15.99', imageUrl: 'https://via.placeholder.com/150', discount: 20 },
    { id: '2', name: 'Wooden Table', price: '$99.99', imageUrl: 'https://via.placeholder.com/150', discount: 30 },
    { id: '4', name: 'Leather Wallet', price: '$35.99', imageUrl: 'https://via.placeholder.com/150', discount: 25 },
  ]);

  // State cho thông tin giao hàng
  const [shippingInfo, setShippingInfo] = useState({
    name: '',
    address: '',
    phone: '',
    email: '',
  });

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

  // Render Cart Item (hiển thị ngắn gọn)
  const renderCartItem = ({ item }: { item: Product }) => (
    <View style={styles.cartItem}>
      <Text style={styles.cartItemName}>{item.name}</Text>
      <Text style={styles.cartItemPrice}>
        {item.discount
          ? `$${(parseFloat(item.price.replace('$', '')) * (1 - item.discount / 100)).toFixed(2)}`
          : item.price}
      </Text>
    </View>
  );

  // Xử lý hoàn tất đơn hàng
  const handleCompleteOrder = () => {
    if (!shippingInfo.name || !shippingInfo.address || !shippingInfo.phone || !shippingInfo.email) {
      alert('Please fill in all shipping information!');
      return;
    }
    console.log('Order completed!', { cart, shippingInfo, total: calculateTotal() });
    router.push('/neubrutalism/orderConfirm');
  };

  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.scrollContent}>
      {/* Header */}
      <Text style={[styles.header, styles.neubrutalism]}>Checkout</Text>

      {/* Order Summary */}
      <View style={[styles.section, styles.neubrutalism]}>
        <Text style={styles.sectionTitle}>Order Summary</Text>
        <FlatList
          data={cart}
          renderItem={renderCartItem}
          keyExtractor={(item) => item.id}
          scrollEnabled={false}
          contentContainerStyle={styles.cartListContent}
        />
        <Text style={styles.totalText}>Total: ${calculateTotal()}</Text>
      </View>

      {/* Shipping Information */}
      <View style={[styles.section, styles.neubrutalism]}>
        <Text style={styles.sectionTitle}>Shipping Information</Text>
        <Text style={styles.label}>Full Name</Text>
        <TextInput
          style={[styles.input, styles.neubrutalism]}
          placeholder="Enter your name"
          value={shippingInfo.name}
          onChangeText={(text) => setShippingInfo({ ...shippingInfo, name: text })}
          placeholderTextColor="#999999"
        />
        <Text style={styles.label}>Address</Text>
        <TextInput
          style={[styles.input, styles.neubrutalism]}
          placeholder="Enter your address"
          value={shippingInfo.address}
          onChangeText={(text) => setShippingInfo({ ...shippingInfo, address: text })}
          placeholderTextColor="#999999"
        />
        <Text style={styles.label}>Phone</Text>
        <TextInput
          style={[styles.input, styles.neubrutalism]}
          placeholder="Enter your phone number"
          value={shippingInfo.phone}
          onChangeText={(text) => setShippingInfo({ ...shippingInfo, phone: text })}
          keyboardType="phone-pad"
          placeholderTextColor="#999999"
        />
        <Text style={styles.label}>Email</Text>
        <TextInput
          style={[styles.input, styles.neubrutalism]}
          placeholder="Enter your email"
          value={shippingInfo.email}
          onChangeText={(text) => setShippingInfo({ ...shippingInfo, email: text })}
          keyboardType="email-address"
          placeholderTextColor="#999999"
        />
      </View>

      {/* Complete Order Button */}
      <TouchableOpacity
        style={[styles.completeButton, styles.neubrutalism]}
        onPress={handleCompleteOrder}
      >
        <Text style={styles.completeButtonText}>Complete Order</Text>
      </TouchableOpacity>
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
  header: {
    fontSize: 36,
    fontWeight: '900',
    color: '#000000',
    textTransform: 'uppercase',
    letterSpacing: 2,
    marginBottom: 24,
  },
  section: {
    backgroundColor: '#FFFFFF',
    padding: 16,
    marginBottom: 24,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: '700',
    color: '#000000',
    marginBottom: 12,
  },
  cartListContent: {
    paddingHorizontal: 4,
  },
  cartItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 8,
  },
  cartItemName: {
    fontSize: 16,
    fontWeight: '600',
    color: '#000000',
  },
  cartItemPrice: {
    fontSize: 16,
    fontWeight: '600',
    color: '#FF2D00',
  },
  totalText: {
    fontSize: 18,
    fontWeight: '700',
    color: '#000000',
    textAlign: 'right',
    marginTop: 12,
  },
  label: {
    fontSize: 16,
    fontWeight: '700',
    color: '#333333',
    marginBottom: 8,
  },
  input: {
    height: 50,
    backgroundColor: '#FFFFFF',
    paddingHorizontal: 16,
    fontSize: 16,
    fontWeight: '600',
    color: '#000000',
    marginBottom: 16,
    width: '100%',
  },
  completeButton: {
    backgroundColor: '#FF2D00',
    paddingVertical: 16,
    width: '100%',
    alignItems: 'center',
  },
  completeButtonText: {
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
});

export default CheckoutScreen;