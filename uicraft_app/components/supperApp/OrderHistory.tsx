import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import { CourierHistory, courierHistory } from '@/app/data/mockData'; // Đảm bảo đường dẫn đúng
import { router } from 'expo-router';
import { HistoryCard } from './HistoryCard';

interface HistoryItemProps {
    item: CourierHistory;
}

const HistoryItem: React.FC<HistoryItemProps> = ({ item }) => {
    return (
        <View style={styles.itemContainer}>
            <Image source={{ uri: item.image.uri }} style={styles.image} />
            <View style={styles.textContainer}>
                <Text style={styles.title}>{item.title}</Text>
                <Text style={styles.date}>Ngày gửi: {item.sendDate}</Text>
                {item.deliveryDate && (
                    <Text style={styles.date}>Ngày giao: {item.deliveryDate}</Text>
                )}
                {item.description.length > 0 && (
                    <Text style={styles.description}>{item.description}</Text>
                )}
            </View>
        </View>
    );
};

const OrderHistoryScreen: React.FC = () => {
    const initialDisplayCount = 3; // Hiển thị 3 mục đầu tiên
    const displayedHistory = courierHistory.slice(0, initialDisplayCount);

    const renderItem = ({ item }: { item: CourierHistory }) => <HistoryItem item={item} />;



    return (
        <View style={styles.container}>
            <Text style={styles.header}>Lịch sử đơn hàng</Text>
            {displayedHistory.map((item) => (
                <HistoryCard
                    key={item.id}
                    id={item.id}
                    title={item.title}
                    sendDate={item.sendDate}
                    deliveryDate={item.deliveryDate}
                    description={item.description}
                    image={item.image}
                    width={350} // Tùy chỉnh chiều rộng
                />
            ))}
            {courierHistory.length > initialDisplayCount && (
                <TouchableOpacity style={styles.showMoreButton}>
                    <Text style={styles.showMoreText}>Xem thêm</Text>
                </TouchableOpacity>
            )}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f5f5f5',
        paddingTop: 10,
        paddingHorizontal: 10,
    },
    header: {
        fontSize: 20,
        fontWeight: 'bold',
        textAlign: 'left',
        marginBottom: 20,
    },
    list: {
        paddingHorizontal: 10,
    },
    itemContainer: {
        flexDirection: 'row',
        backgroundColor: '#fff',
        padding: 15,
        marginBottom: 10,
        borderRadius: 8,
        elevation: 2,
    },
    image: {
        width: 50,
        height: 50,
        borderRadius: 5,
        marginRight: 10,
    },
    textContainer: {
        flex: 1,
    },
    title: {
        fontSize: 16,
        fontWeight: 'bold',
        marginBottom: 5,
    },
    date: {
        fontSize: 14,
        color: '#666',
    },
    description: {
        fontSize: 14,
        color: '#333',
        marginTop: 5,
    },
    showMoreButton: {
        padding: 10,
        backgroundColor: '#007AFF',
        borderRadius: 5,
        alignItems: 'center',
        marginVertical: 10,
        marginHorizontal: 10,
    },
    showMoreText: {
        color: '#fff',
        fontSize: 16,
        fontWeight: 'bold',
    },
});

export default OrderHistoryScreen;