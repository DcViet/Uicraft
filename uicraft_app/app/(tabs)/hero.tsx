import React, { useRef } from 'react';
import { View, Text, Image, TouchableOpacity, ScrollView, TextInput, StyleSheet, Dimensions } from 'react-native';
import LottieView from 'lottie-react-native';
import animationData from '@/assets/lottie.json';
import Rive, { RiveRef } from 'rive-react-native';
import { router } from 'expo-router';

// Lấy chiều rộng màn hình để tính toán kích thước
const { width } = Dimensions.get('window');

// Định nghĩa type ServiceItem
interface ServiceItem {
    id: string;
    slug: string,
    name: string;
    icon: string;
    image: { uri: string };
    time: string;
    backgroundColor?: string;
    span?: number;

}

// Dữ liệu dịch vụ với span cho Send Money
const services: ServiceItem[] = [
    { id: '1', slug: 'foodApp', name: 'Food', icon: '🍔', image: { uri: 'https://img.icons8.com/3d-fluency/94/take-away-food.png' }, time: '20 min', span: 1 },
    { id: '2', slug: 'groceryApp', name: 'Grocery', icon: '🛒', image: { uri: 'https://img.icons8.com/3d-fluency/94/ingredients.png' }, time: '15 min', span: 1 },
    { id: '3', slug: 'courierApp', name: 'Courier', icon: '📦', image: { uri: 'https://img.icons8.com/3d-fluency/94/delivery.png' }, time: '18 min', span: 1 },
    { id: '4', slug: 'taxiApp', name: 'Taxi', icon: '🚗', image: { uri: 'https://img.icons8.com/3d-fluency/94/taxi.png' }, time: '15 min', span: 2 },
    { id: '5', slug: 'moneyApp', name: 'Send Money', icon: '➡️', image: { uri: 'https://img.icons8.com/3d-fluency/94/money-transfer.png' }, time: '', backgroundColor: '#73E3C5', span: 1 },
    { id: '6', slug: 'cleanApp', name: 'Home Cleaning', icon: '🏠', image: { uri: 'https://img.icons8.com/3d-fluency/94/housekeeping.png' }, time: '13 min', span: 1 },
    { id: '7', slug: 'medicineApp', name: 'Medicine', icon: '💊', image: { uri: 'https://img.icons8.com/3d-fluency/94/pill.png' }, time: '20 min', span: 1 },
    { id: '8', slug: 'doctorApp', name: 'Doctor', icon: '🩺', image: { uri: 'https://img.icons8.com/3d-fluency/94/stethoscope.png' }, time: '30 min', span: 1 },
];


const HeroScreen = () => {

    // const handleServicePressId = (id: string) => {
    //     router.push(`/screen/${id}`);
    // };
    
    const handleServicePress = (slug: string) => {
        router.push(`/screen/${slug}`);
    };

    // Hàm render một item dịch vụ
    const renderServiceItem = (item: ServiceItem) => {
        const itemWidth = (width - 40) / 3; // Chiều rộng cơ bản cho 1 cột
        return (
            <TouchableOpacity
                style={{
                    width: itemWidth * (item.span || 1),
                    height: 100,
                    backgroundColor: item.backgroundColor || '#fff',
                    borderRadius: 8,
                    margin: 4,
                    position: 'relative',
                }}
                key={item.id}
                onPress={() => handleServicePress(item.slug)}
            >
                <View style={{
                    flex: 1,
                    flexDirection: 'column',
                    alignItems: 'flex-end',
                    padding: 10, // Thêm padding cho toàn bộ nội dung
                }}>
                    <View style={{
                        width: '100%',
                    }}>
                        <Text
                            style={{
                                fontSize: 16,
                                fontWeight: 'bold',
                                color: item.backgroundColor ? '#fff' : '#000',
                                textAlign: 'left',
                            }}
                        >
                            {item.name}
                        </Text>
                        {item.time && (
                            <Text
                                style={{
                                    fontSize: 14,
                                    color: item.backgroundColor ? '#fff' : '#000',
                                    textAlign: 'left',
                                }}
                            >
                                {item.time}
                            </Text>
                        )}
                    </View>
                    <Image
                        source={typeof item.image === 'string' ? { uri: item.image } : item.image}
                        style={{
                            width: 54,
                            height: 54,
                            resizeMode: 'contain',
                            position: 'absolute',
                            bottom: 8,  // Khoảng cách từ dưới
                            right: 8,   // Khoảng cách từ phải
                        }}
                    />
                </View>
            </TouchableOpacity>
        );
    };

    // Hàm chia services thành các hàng (mỗi hàng tối đa 3 cột)
    const renderServiceRows = () => {
        const rows: ServiceItem[][] = [];
        let currentRow: ServiceItem[] = [];
        let currentRowSpan = 0;

        services.forEach((item) => {
            const itemSpan = item.span || 1;
            currentRowSpan += itemSpan;

            if (currentRowSpan > 3) {
                // Nếu vượt quá 3 cột, đẩy hàng hiện tại vào rows và bắt đầu hàng mới
                rows.push(currentRow);
                currentRow = [item];
                currentRowSpan = itemSpan;
            } else {
                // Thêm item vào hàng hiện tại
                currentRow.push(item);
            }

            // Nếu hàng hiện tại đủ 3 cột, đẩy vào rows và reset
            if (currentRowSpan === 3) {
                rows.push(currentRow);
                currentRow = [];
                currentRowSpan = 0;
            }
        });

        // Đẩy hàng cuối cùng nếu còn item
        if (currentRow.length > 0) {
            rows.push(currentRow);
        }

        // Render các hàng
        return rows.map((row, rowIndex) => (
            <View key={rowIndex} style={styles.row}>
                {row.map((item) => renderServiceItem(item))}
                {/* Thêm View rỗng để lấp đầy hàng nếu cần */}
                {row.reduce((sum, item) => sum + (item.span || 1), 0) < 3 && (
                    <View
                        style={{
                            width: ((width - 40) / 3) * (3 - row.reduce((sum, item) => sum + (item.span || 1), 0)),
                            height: 120,
                            margin: 5,
                        }}
                    />
                )}
            </View>
        ));
    };

    // Khai báo ref với kiểu LottieView
    const animationRef = useRef<LottieView>(null);
    const riveRef = useRef<RiveRef>(null);

    // Hàm xử lý tương tác khi nhấn
    const handlePress = () => {
        // Play animation khi nhấn
        animationRef.current?.play();
    };

    // Hàm xử lý tương tác khi nhấn
    const handlePressRive = () => {
        // Play animation khi nhấn
        riveRef.current?.play();
    };
    return (
        <ScrollView style={styles.container}>
            <View style={styles.headerSection}>
                {/* Nút Menu */}
                <TouchableOpacity
                    style={styles.menuButton}
                >
                    <Image
                        source={{ uri: 'https://img.icons8.com/3d-fluency/94/menu.png' }}
                        style={{ width: 24, height: 24 }}
                    />
                </TouchableOpacity>

                {/* Thanh tìm kiếm */}
                <View style={styles.searchBar}>
                    {/* <Icon name="search" size={20} color="#666" style={styles.searchIcon} /> */}

                    <TextInput
                        style={styles.searchInput}
                        placeholder="Search location"
                        placeholderTextColor="#666"
                    />
                </View>

                {/* Nút Pay */}
                <TouchableOpacity style={styles.payButton}
                    onPress={() => { router.push('/screen/qrScan'); }}
                >
                    <Image
                        source={{ uri: 'https://img.icons8.com/3d-fluency/94/qr-code.png' }}
                        style={{ width: 24, height: 24 }}
                    />
                    <Text style={styles.payText}>Pay</Text>
                </TouchableOpacity>
            </View>

            {/* Banner quảng cáo */}
            {/* <View style={styles.banner}>
                <View style={styles.bannerTextContainer}>
                    <Text style={styles.bannerText}>Save 30% OFF</Text>
                    <Text style={styles.bannerSubText}>FIRST 2 ORDERS</Text>
                    <Text style={styles.bannerCode}>USE CODE DCVIET30</Text>
                </View>
                <View style={styles.bannerImageContainer}>
                    <Image
                        source={{ uri: 'https://img.icons8.com/3d-fluency/94/grinning-squinting-face.png' }}
                        style={styles.bannerImage}
                    />
                </View>
            </View> */}

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
                <View style={styles.bannerImageContainer}>
                    <LottieView
                        ref={animationRef}
                        source={animationData}
                        style={styles.bannerImage}
                        autoPlay={false} // Tắt autoplay để tương tác bằng tay
                        loop={false} // Lặp animation
                    />
                </View>
            </TouchableOpacity>

            {/* Lưới dịch vụ */}
            <View style={styles.serviceList}>{renderServiceRows()}</View>
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
        paddingHorizontal: 15,
        paddingVertical: 10,
        backgroundColor: '#fff',
    },
    menuButton: {
        padding: 10,
        // backgroundColor: '#f0f0f0',
        borderRadius: 50,
        marginRight: 10,
    },
    searchBar: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#f0f0f0',
        borderRadius: 25,
        paddingHorizontal: 15,
        height: 40,
        marginRight: 10,
    },
    searchIcon: {
        marginRight: 10,
    },
    searchInput: {
        flex: 1,
        fontSize: 16,
        color: '#000',
    },
    payButton: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#000',
        borderRadius: 25,
        paddingHorizontal: 15,
        paddingVertical: 10,
    },
    payText: {
        color: '#fff',
        fontSize: 16,
        fontWeight: 'bold',
        marginLeft: 5,
    },
    // Styles cho Banner với layout 2 cột
    banner: {
        flexDirection: 'row', // Sử dụng layout 2 cột
        backgroundColor: '#d3c1e5',
        padding: 20,
        borderRadius: 10,
        margin: 10,
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    bannerTextContainer: {
        flex: 1, // Cột bên trái cho text
        justifyContent: 'center',
    },
    bannerText: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#000',
    },
    bannerSubText: {
        fontSize: 18,
        color: '#000',
        marginVertical: 5,
    },
    bannerCode: {
        fontSize: 16,
        color: '#000',
        fontWeight: 'bold',
    },
    bannerImageContainer: {
        flex: 1, // Cột bên phải cho hình ảnh
        alignItems: 'flex-end', // Căn hình ảnh sang phải
    },
    bannerImage: {
        width: 100,
        height: 100,
    },
    serviceList: {
        paddingHorizontal: 10,
    },
    row: {
        flexDirection: 'row',
        justifyContent: 'flex-start',
        marginBottom: 10,
    },
    serviceItem: {
        flexDirection: 'column',
        borderRadius: 10,
        height: 120,
        alignItems: 'center',
        justifyContent: 'center',
        margin: 5,
        padding: 10,
        elevation: 2,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 2,
    },
    icon: {
        fontSize: 30,
        marginBottom: 5,
    },
    serviceName: {
        fontSize: 14,
        fontWeight: 'bold',
        color: '#000',
        textAlign: 'center',
    },
    serviceTime: {
        fontSize: 12,
        color: '#666',
        marginTop: 5,
    },
});

export default HeroScreen;