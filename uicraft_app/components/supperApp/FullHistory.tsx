import React from 'react';
import { View, Text, Image, FlatList, StyleSheet } from 'react-native';
import { CourierHistory, courierHistory } from '@/app/data/mockData'; 
import { HistoryCard } from './HistoryCard';

interface HistoryItemProps {
    item: CourierHistory;
}

const HistoryItem: React.FC<HistoryItemProps> = ({ item }) => {
    return (
        <View style={styles.container}>
        <Text style={styles.header}>Toàn bộ lịch sử đơn hàng</Text>
        {courierHistory.map((item) => (
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
    </View>
    );
};

const FullHistoryScreen: React.FC = () => {
    const renderItem = ({ item }: { item: CourierHistory }) => <HistoryItem item={item} />;

    return (
        <View style={styles.container}>
            <Text style={styles.header}>Toàn bộ lịch sử đơn hàng</Text>
            <FlatList
                data={courierHistory}
                renderItem={renderItem}
                keyExtractor={(item) => item.id}
                contentContainerStyle={styles.list}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f5f5f5',
        paddingTop: 20,
    },
    header: {
        fontSize: 24,
        fontWeight: 'bold',
        textAlign: 'center',
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
});

export default FullHistoryScreen;