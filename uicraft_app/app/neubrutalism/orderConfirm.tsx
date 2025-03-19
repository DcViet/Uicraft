import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';
import { router } from 'expo-router';

// Define interfaces
interface Product {
  id: string;
  name: string;
  price: string;
  discount?: number;
}

interface ShippingInfo {
  name: string;
  address: string;
  phone: string;
  email: string;
}

const OrderConfirmationScreen = () => {
  // Sample data (giả lập từ CheckoutScreen)
  const order = {
    products: [
      { id: '1', name: 'Handcrafted Mug', price: '$15.99', discount: 20 },
      { id: '2', name: 'Wooden Table', price: '$99.99', discount: 30 },
      { id: '4', name: 'Leather Wallet', price: '$35.99', discount: 25 },
    ],
    shippingInfo: {
      name: 'John Doe',
      address: '123 Main St, City, Country',
      phone: '123-456-7890',
      email: 'john.doe@example.com',
    },
    orderId: 'ORD-123456',
    date: 'March 19, 2025',
  };

  // Tính tổng tiền
  const calculateTotal = () => {
    return order.products
      .reduce((total, item) => {
        const price = parseFloat(item.price.replace('$', ''));
        const discount = item.discount ? price * (item.discount / 100) : 0;
        return total + (price - discount);
      }, 0)
      .toFixed(2);
  };

  // Xử lý quay lại trang chính
  const handleContinueShopping = () => {
    router.push('/neubrutalism/productCard'); // Giả sử đây là đường dẫn trang sản phẩm
  };

  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.scrollContent}>
      {/* Header */}
      <Text style={[styles.header, styles.neubrutalism]}>Order Confirmed</Text>

      {/* Confirmation Message */}
      <View style={[styles.section, styles.neubrutalism]}>
        <Text style={styles.confirmationText}>Thank you for your order!</Text>
        <Text style={styles.orderId}>Order ID: {order.orderId}</Text>
        <Text style={styles.orderDate}>Date: {order.date}</Text>
      </View>

      {/* Order Summary */}
      <View style={[styles.section, styles.neubrutalism]}>
        <Text style={styles.sectionTitle}>Order Summary</Text>
        {order.products.map((item) => (
          <View key={item.id} style={styles.orderItem}>
            <Text style={styles.orderItemName}>{item.name}</Text>
            <Text style={styles.orderItemPrice}>
              {item.discount
                ? `$${(parseFloat(item.price.replace('$', '')) * (1 - item.discount / 100)).toFixed(2)}`
                : item.price}
            </Text>
          </View>
        ))}
        <Text style={styles.totalText}>Total: ${calculateTotal()}</Text>
      </View>

      {/* Shipping Information */}
      <View style={[styles.section, styles.neubrutalism]}>
        <Text style={styles.sectionTitle}>Shipping Information</Text>
        <Text style={styles.infoText}>Name: {order.shippingInfo.name}</Text>
        <Text style={styles.infoText}>Address: {order.shippingInfo.address}</Text>
        <Text style={styles.infoText}>Phone: {order.shippingInfo.phone}</Text>
        <Text style={styles.infoText}>Email: {order.shippingInfo.email}</Text>
      </View>

      {/* Continue Shopping Button */}
      <TouchableOpacity
        style={[styles.continueButton, styles.neubrutalism]}
        onPress={handleContinueShopping}
      >
        <Text style={styles.continueButtonText}>Continue Shopping</Text>
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
  confirmationText: {
    fontSize: 20,
    fontWeight: '700',
    color: '#FF2D00',
    textAlign: 'center',
    marginBottom: 12,
  },
  orderId: {
    fontSize: 16,
    fontWeight: '600',
    color: '#000000',
    textAlign: 'center',
  },
  orderDate: {
    fontSize: 16,
    fontWeight: '600',
    color: '#000000',
    textAlign: 'center',
    marginTop: 4,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: '700',
    color: '#000000',
    marginBottom: 12,
  },
  orderItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 8,
  },
  orderItemName: {
    fontSize: 16,
    fontWeight: '600',
    color: '#000000',
  },
  orderItemPrice: {
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
  infoText: {
    fontSize: 16,
    fontWeight: '600',
    color: '#333333',
    marginBottom: 8,
  },
  continueButton: {
    backgroundColor: '#000000',
    paddingVertical: 16,
    width: '100%',
    alignItems: 'center',
  },
  continueButtonText: {
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

export default OrderConfirmationScreen;