import React, { useRef } from 'react';
import { View, Text, Image, TouchableOpacity, ScrollView, TextInput, StyleSheet, Dimensions, FlatList } from 'react-native';
import LottieView from 'lottie-react-native';
import animationData from '@/assets/lottie.json';
import { router } from 'expo-router';
import { ImageBackground } from 'react-native';
const { width } = Dimensions.get('window');

// Định nghĩa types
interface CategoryItem {
    id: string;
    name: string;
}

interface FoodItem {
    id: string;
    name: string;
    image: { uri: string };
    categoryId: string; // Thêm categoryId để liên kết với category
    span?: number;
}

// Cập nhật interface để hỗ trợ thuộc tính isViewMore
interface PopularNearItem {
    id: string;
    name: string;
    image: { uri: string };
    categoryId: string;
    span: number;
    isViewMore?: boolean; // Thuộc tính để nhận diện nút "Xem thêm"
}

const categories: CategoryItem[] = [
    { id: '1', name: 'Lịch sử vận chuyển' },
    { id: '2', name: 'Lịch sử trò chuyện' },
    { id: '3', name: 'Tổng đài/khiếu nại' },

];

const foods: FoodItem[] = [
    { id: '1', name: 'Tìm bưu cục', image: { uri: 'https://img.icons8.com/3d-fluency/94/meat.png' }, categoryId: '1', span: 1 },
    { id: '2', name: 'Tạo vận đơn', image: { uri: 'https://img.icons8.com/3d-fluency/94/meat.png' }, categoryId: '1', span: 1 },
    { id: '3', name: 'Tính phí vận chuyển', image: { uri: 'https://img.icons8.com/3d-fluency/94/meat.png' }, categoryId: '1', span: 1 },

    { id: '4', name: 'Tra cứu đơn', image: { uri: 'https://img.icons8.com/3d-fluency/94/meat.png' }, categoryId: '3', span: 2 },

];

const nears: PopularNearItem[] = [
    { id: '1', name: 'Tìm bưu cục', image: { uri: 'https://img.icons8.com/3d-fluency/94/point-objects.png' }, categoryId: '1', span: 1 },
    { id: '2', name: 'Tạo vận đơn', image: { uri: 'https://img.icons8.com/3d-fluency/94/receipt.png' }, categoryId: '1', span: 1 },
    { id: '3', name: 'Tính phí vận chuyển', image: { uri: 'https://img.icons8.com/3d-fluency/94/map-marker.png' }, categoryId: '1', span: 1 },
    { id: '4', name: 'Tra cứu đơn', image: { uri: 'https://img.icons8.com/3d-fluency/94/search.png' }, categoryId: '2', span: 1 },
    // Thêm item "Xem thêm"
    { id: 'view-more', name: 'Xem thêm', image: { uri: '' }, categoryId: '', span: 1, isViewMore: true },
];

const CourierScreen = () => {
    const animationRef = useRef<LottieView>(null);

    // Hàm render một food item
    const renderFoodItem = (item: FoodItem) => {
        const itemWidth = (width - 40) / 3;
        return (
            <View
                key={item.id}
                style={{ flex: 1 }}
            >
                <TouchableOpacity
                    style={{
                        width: itemWidth,
                        height: 60,
                        backgroundColor: '#fff',
                        borderRadius: 8,
                        marginBottom: 8,
                        elevation: 2,
                        shadowColor: '#000',
                        shadowOffset: { width: 0, height: 2 },
                        shadowOpacity: 0.1,
                        shadowRadius: 4,
                    }}
                >
                    <View style={{
                        flex: 1,
                        flexDirection: 'row',
                        alignItems: 'center',
                        justifyContent: 'center',
                        padding: 10,
                    }}>
                        <Text
                            style={{
                                fontSize: 14,
                                fontWeight: '500',
                                color: '#333',
                                textAlign: 'left',
                                flex: 1,
                            }}
                            numberOfLines={2}
                        >
                            {item.name}
                        </Text>
                        <Image
                            source={item.image}
                            style={{
                                width: 40,
                                height: 40,
                                marginBottom: 5,
                            }}
                            resizeMode="contain"
                        />
                    </View>
                </TouchableOpacity>
            </View>
        );
    };

    // Hàm render các hàng foods theo category
    const renderFoodRows = (categoryId: string) => {
        const filteredFoods = foods.filter(food => food.categoryId === categoryId);
        const rows: FoodItem[][] = [];
        let currentRow: FoodItem[] = [];

        filteredFoods.forEach((item) => {
            if (currentRow.length === 3) {
                rows.push(currentRow);
                currentRow = [item];
            } else {
                currentRow.push(item);
            }
        });

        if (currentRow.length > 0) {
            rows.push(currentRow);
        }

        return rows.map((row, index) => (
            <View key={index} style={styles.row}>
                {row.map(renderFoodItem)}
                {/* Thêm khoảng trống nếu hàng không đủ 3 item */}
                {row.length < 3 && (
                    <View style={{ flex: 3 - row.length }} />
                )}
            </View>
        ));
    };


    const renderNearItem = (item: PopularNearItem) => {
        const itemWidth = (width - 40) / 2; // Chia đôi chiều rộng cho 2 items mỗi hàng

        return (
            <TouchableOpacity
                style={{
                    width: itemWidth,
                    height: 180,
                    borderRadius: 12,
                    margin: 5,
                    elevation: 3,
                    shadowColor: '#000',
                    shadowOffset: { width: 0, height: 3 },
                    shadowOpacity: 0.15,
                    shadowRadius: 5,
                    overflow: 'hidden',
                }}
            >
                <ImageBackground
                    source={item.image}
                    style={{
                        width: '100%',
                        height: '100%',
                        justifyContent: 'space-between',
                    }}
                    resizeMode="cover"
                >
                    <View
                        style={{
                            flexDirection: 'row',
                            justifyContent: 'space-between',
                            alignItems: 'center',
                            padding: 10,
                        }}
                    >
                        <Text
                            style={{
                                fontSize: 14,
                                fontWeight: '600',
                                color: '#fff',
                                textAlign: 'left',
                                flex: 1,
                                marginRight: 8,
                            }}
                            numberOfLines={2}
                        >
                            {item.name}
                        </Text>
                        <View
                            style={{
                                flexDirection: 'row',
                                alignItems: 'center',
                                backgroundColor: 'rgba(255, 255, 255, 0.8)',
                                padding: 4,
                                borderRadius: 10,
                            }}
                        >
                            <Image
                                source={{ uri: "https://img.icons8.com/skeuomorphism/32/christmas-star.png" }}
                                style={{
                                    width: 16,
                                    height: 16,
                                }}
                            />
                            <Text
                                style={{
                                    fontSize: 12,
                                    color: '#333',
                                }}
                            >
                                4.9
                            </Text>
                        </View>
                    </View>
                    <View
                        style={{
                            flexDirection: 'row',
                            justifyContent: 'space-between',
                            alignItems: 'center',
                            padding: 10,
                            backgroundColor: 'rgba(0, 0, 0, 0.5)',
                        }}
                    >
                        <View>
                            <Text
                                style={{
                                    fontSize: 14,
                                    fontWeight: '800',
                                    color: '#fff',
                                }}
                            >
                                20.000 ₫
                            </Text>
                            <Text
                                style={{
                                    fontSize: 12,
                                    color: '#ccc',
                                }}
                            >
                                20 phút
                            </Text>
                        </View>
                        <TouchableOpacity
                            style={{
                                backgroundColor: 'rgba(255, 255, 255, 0.8)',
                                borderRadius: 20,
                                padding: 6,
                            }}
                        >
                            <Image
                                source={{ uri: "https://img.icons8.com/3d-fluency/94/shopping-basket.png" }}
                                style={{
                                    width: 20,
                                    height: 20,
                                }}
                            />
                        </TouchableOpacity>
                    </View>
                </ImageBackground>
            </TouchableOpacity>


        );
    };

    const renderNearRows = () => {
        return (
            <View
                style={{
                    paddingHorizontal: 5,
                }}
            >
                {/* Hàng 1: 2 items đầu tiên */}
                <View
                    style={{
                        flexDirection: 'row',
                        justifyContent: 'space-between',
                    }}
                >
                    {nears.slice(0, 2).map((item) => (
                        <View key={item.id}>
                            {renderNearItem(item)}
                        </View>
                    ))}
                </View>

                {/* Hàng 2: 2 items tiếp theo */}
                <View
                    style={{
                        flexDirection: 'row',
                        justifyContent: 'space-between',
                    }}
                >
                    {nears.slice(2, 4).map((item) => (
                        <View key={item.id}>
                            {renderNearItem(item)}
                        </View>
                    ))}
                </View>
            </View>
        );
    };


    const handlePress = () => {
        animationRef.current?.play();
    };

    return (
        <ScrollView
            style={styles.container}
            showsVerticalScrollIndicator={false}
        >
            <View style={styles.headerSection}>
                <TouchableOpacity style={styles.menuButton}>
                    <Image
                        source={{ uri: 'https://img.icons8.com/3d-fluency/94/menu.png' }}
                        style={styles.icon}
                    />
                </TouchableOpacity>
                <View style={styles.searchBar}>
                    <TextInput
                        style={styles.searchInput}
                        placeholder="Search location"
                        placeholderTextColor="#666"
                    />
                </View>
                <TouchableOpacity
                    style={styles.payButton}
                    onPress={() => router.push('/screen/qrScan')}
                >
                    <Image
                        source={{ uri: 'https://img.icons8.com/3d-fluency/94/qr-code.png' }}
                        style={styles.icon}
                    />
                    <Text style={styles.payText}>Pay</Text>
                </TouchableOpacity>
            </View>

            <TouchableOpacity
                style={styles.banner}
                onPress={handlePress}
                activeOpacity={0.7}
            >
                <View style={styles.bannerTextContainer}>
                    <Text style={styles.bannerText}>Save 30% OFF</Text>
                    <Text style={styles.bannerSubText}>FIRST 2 ORDERS</Text>
                    <Text style={styles.bannerCode}>USE CODE DCVIET30</Text>
                </View>
                <LottieView
                    ref={animationRef}
                    source={animationData}
                    style={styles.bannerImage}
                    autoPlay={false}
                    loop={false}
                />
            </TouchableOpacity>

            {/* Phần Popular Near You */}
            <Text style={[styles.categoryTitle, { paddingHorizontal: 10, }]}>Popular Near You</Text>
            {renderNearRows()}

            {/* Hiển thị categories và foods tương ứng */}
            {categories.map((category) => (
                <View key={category.id} style={styles.categorySection}>
                    <Text style={styles.categoryTitle}>{category.name}</Text>
                    <View style={styles.serviceList}>
                        {renderFoodRows(category.id)}
                    </View>
                </View>
            ))}
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f5f5f5',
    },
    headerSection: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: 10,
    },
    menuButton: {
        padding: 8,
    },
    searchBar: {
        flex: 1,
        marginHorizontal: 10,
    },
    searchInput: {
        backgroundColor: '#fff',
        borderRadius: 20,
        paddingHorizontal: 15,
        height: 40,
    },
    payButton: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: 8,
    },
    payText: {
        marginLeft: 4,
        fontSize: 14,
        fontWeight: '600',
        color: '#333',
    },
    banner: {
        flexDirection: 'row',
        backgroundColor: '#d3c1e5',
        margin: 10,
        borderRadius: 12,
        overflow: 'hidden',
    },
    bannerTextContainer: {
        flex: 1,
        padding: 15,
        justifyContent: 'center',
    },
    bannerText: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#fff',
    },
    bannerSubText: {
        fontSize: 16,
        color: '#fff',
        marginVertical: 4,
    },
    bannerCode: {
        fontSize: 14,
        color: '#fff',
        fontWeight: '600',
    },
    bannerImage: {
        width: 120,
        height: 120,
    },
    categorySection: {
        paddingHorizontal: 10,
        marginBottom: 20,
    },
    categoryTitle: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#333',
        marginVertical: 10,
    },
    serviceList: {
        flex: 1,
    },
    row: {
        flexDirection: 'row',
        // justifyContent: 'space-between',
        // borderWidth: 1,
    },
    icon: {
        width: 24,
        height: 24,
    },
});

export default CourierScreen;