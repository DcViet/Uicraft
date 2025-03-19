import { router } from 'expo-router';
import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  Image,
  TouchableOpacity,
  StyleSheet,
  FlatList,
  ScrollView,
} from 'react-native';

// Define interfaces
interface Product {
  id: string;
  name: string;
  price: string;
  imageUrl: string;
  discount?: number; // Thêm thuộc tính discount (tùy chọn)
}

interface Category {
  id: string;
  name: string;
}

const ProductCardListScreen = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [cart, setCart] = useState<Product[]>([]); // State để quản lý giỏ hàng

  // Sample data
  const categories: Category[] = [
    { id: '1', name: 'All' },
    { id: '2', name: 'Furniture' },
    { id: '3', name: 'Decor' },
    { id: '4', name: 'Accessories' },
    { id: '5', name: 'Clothing' },
  ];

  const products: Product[] = [
    { id: '1', name: 'Handcrafted Mug', price: '$15.99', imageUrl: 'https://via.placeholder.com/150', discount: 20 },
    { id: '2', name: 'Wooden Table', price: '$99.99', imageUrl: 'https://via.placeholder.com/150', discount: 30 },
    { id: '3', name: 'Ceramic Vase', price: '$25.99', imageUrl: 'https://via.placeholder.com/150' },
    { id: '4', name: 'Leather Wallet', price: '$35.99', imageUrl: 'https://via.placeholder.com/150', discount: 25 },
    { id: '5', name: 'Vintage Chair', price: '$149.99', imageUrl: 'https://via.placeholder.com/150' },
    { id: '6', name: 'Silk Scarf', price: '$19.99', imageUrl: 'https://via.placeholder.com/150', discount: 20 },
  ];

  const [page, setPage] = useState(1);
const itemsPerPage = 4;
const totalPages = Math.ceil(products.length / itemsPerPage);
const paginatedProducts = products.slice((page - 1) * itemsPerPage, page * itemsPerPage);

  // Hàm thêm sản phẩm vào giỏ hàng
  const addToCart = (product: Product) => {
    setCart([...cart, product]);
    console.log(`${product.name} added to cart! Total items: ${cart.length + 1}`);
  };

  // Render Category Item
  const renderCategory = ({ item }: { item: Category }) => (
    <TouchableOpacity style={[styles.categoryItem, styles.neubrutalism]}>
      <Text style={styles.categoryText}>{item.name}</Text>
    </TouchableOpacity>
  );

  // Render Product Card
  const renderProductCard = ({ item }: { item: Product }) => (
    <TouchableOpacity
      style={[styles.card, styles.neubrutalism]}
      onPress={() => router.push('/neubrutalism/productDetail')}
    >
      <View style={styles.imageContainer}>
        <Image source={{ uri: item.imageUrl }} style={[styles.productImage, styles.neubrutalismImage]} />
        {item.discount && (
          <View style={[styles.discountBadge]}>
            <Text style={styles.discountText}>{`-${item.discount}%`}</Text>
          </View>
        )}
      </View>
      <Text style={styles.productName}>{item.name}</Text>
      <Text style={styles.productPrice}>{item.price}</Text>
      <TouchableOpacity style={[styles.addButton]} onPress={() => addToCart(item)}>
        <Text style={styles.addButtonText}>Add</Text>
      </TouchableOpacity>
    </TouchableOpacity>
  );

  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.scrollContent}>
      {/* Header with Cart Icon */}
      <View style={styles.headerContainer}>
        <Text style={[styles.header]}>My Products</Text>
        <TouchableOpacity style={[styles.cartIconContainer, styles.neubrutalism]}
          onPress={() => { router.push('/neubrutalism/cartStore'); }}>
          <Image
            source={{ uri: 'https://img.icons8.com/ios-filled/50/000000/shopping-cart.png' }}
            style={styles.cartIcon}
          />
          {cart.length > 0 && (
            <View style={styles.cartBadge}>
              <Text style={styles.cartBadgeText}>{cart.length}</Text>
            </View>
          )}
        </TouchableOpacity>
      </View>

      {/* Search Bar */}
      <TextInput
        style={[styles.searchBar, styles.neubrutalism]}
        placeholder="Search products..."
        value={searchQuery}
        onChangeText={setSearchQuery}
        placeholderTextColor="#999999"
      />

      {/* Category List (Horizontal Scroll) */}
      <View style={styles.categoryContainer}>
        <FlatList
          data={categories}
          renderItem={renderCategory}
          keyExtractor={(item) => item.id}
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.categoryList}
        />
      </View>

      {/* Product List (Vertical Scroll) */}
      <FlatList
        data={paginatedProducts}
        renderItem={renderProductCard}
        keyExtractor={(item) => item.id}
        numColumns={2}
        columnWrapperStyle={styles.row}
        scrollEnabled={false}
        contentContainerStyle={styles.productListContent}
      />

<View style={styles.paginationContainer}>
  <TouchableOpacity
    style={[styles.pageButton, styles.neubrutalism]}
    onPress={() => setPage(Math.max(1, page - 1))}
    disabled={page === 1}
  >
    <Text style={styles.pageButtonText}>Prev</Text>
  </TouchableOpacity>
  <Text style={styles.pageText}>{page} / {totalPages}</Text>
  <TouchableOpacity
    style={[styles.pageButton, styles.neubrutalism]}
    onPress={() => setPage(Math.min(totalPages, page + 1))}
    disabled={page === totalPages}
  >
    <Text style={styles.pageButtonText}>Next</Text>
  </TouchableOpacity>
</View>

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
  cartIconContainer: {
    padding: 8,
    backgroundColor: '#FFDD00',
  },
  cartIcon: {
    width: 32,
    height: 32,
  },
  cartBadge: {
    position: 'absolute',
    top: -4,
    right: -4,
    backgroundColor: '#FF2D00',
    borderRadius: 10,
    width: 20,
    height: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  cartBadgeText: {
    color: '#FFFFFF',
    fontSize: 12,
    fontWeight: '700',
  },
  searchBar: {
    height: 50,
    backgroundColor: '#FFFFFF',
    paddingHorizontal: 16,
    fontSize: 16,
    fontWeight: '600',
    color: '#000000',
    marginBottom: 24,
    width: '100%',
  },
  categoryContainer: {
    marginBottom: 24,
  },
  categoryList: {
    paddingHorizontal: 4,
  },
  categoryItem: {
    backgroundColor: '#FFDD00',
    paddingVertical: 8,
    paddingHorizontal: 16,
    marginRight: 12,
    borderRadius: 8,
  },
  categoryText: {
    fontSize: 14,
    fontWeight: '700',
    color: '#000000',
    textTransform: 'uppercase',
  },
  productListContent: {
    paddingHorizontal: 4,
  },
  row: {
    justifyContent: 'space-between',
    marginBottom: 16,
  },
  card: {
    width: '48%',
    backgroundColor: '#FFFFFF',
    padding: 12,
    alignItems: 'center',
  },
  imageContainer: {
    position: 'relative',
    width: '100%',
  },
  productImage: {
    width: '100%',
    height: 120,
    marginBottom: 8,
  },
  discountBadge: {
    position: 'absolute',
    top: 8,
    left: 8,
    backgroundColor: '#FF2D00',
    paddingVertical: 4,
    paddingHorizontal: 8,
  },
  discountText: {
    color: '#FFFFFF',
    fontSize: 12,
    fontWeight: '700',
  },
  productName: {
    fontSize: 16,
    fontWeight: '700',
    color: '#000000',
    textAlign: 'center',
  },
  productPrice: {
    fontSize: 14,
    fontWeight: '600',
    color: '#FF2D00',
    marginTop: 4,
    marginBottom: 8,
  },
  addButton: {
    backgroundColor: '#000000',
    paddingVertical: 8,
    paddingHorizontal: 16,
    width: '100%',
    alignItems: 'center',
  },
  addButtonText: {
    fontSize: 14,
    fontWeight: '700',
    color: '#FFFFFF',
    textTransform: 'uppercase',
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

  paginationContainer: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginTop: 20 },
pageButton: { backgroundColor: '#FFFFFF', padding: 10, width: '30%', alignItems: 'center' },
pageButtonText: { fontSize: 14, fontWeight: '700', color: '#000000', textTransform: 'uppercase' },
pageText: { fontSize: 16, fontWeight: '700', color: '#333333' },
});

export default ProductCardListScreen;