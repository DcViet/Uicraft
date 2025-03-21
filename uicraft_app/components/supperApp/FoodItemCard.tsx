import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';
import { FoodItem } from '@/app/data/mockData';

interface FoodItemCardProps {
    item: FoodItem;
    width: number;
}

export const FoodItemCard: React.FC<FoodItemCardProps> = ({ item, width }) => {
    const itemWidth = (width - 40) / 3;

    return (
        <View key={item.id} style={styles.container}>
            <TouchableOpacity style={[styles.touchable, { width: itemWidth }]}>
                <View style={styles.content}>
                    <Text style={styles.text} numberOfLines={2}>
                        {item.name}
                    </Text>
                    <Image
                        source={item.image}
                        style={styles.image}
                        resizeMode="contain"
                    />
                </View>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    container: { flex: 1 },
    touchable: {
        height: 60,
        backgroundColor: '#fff',
        borderRadius: 8,
        marginBottom: 8,
        elevation: 2,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 4,
    },
    content: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 10,
    },
    text: {
        fontSize: 14,
        fontWeight: '500',
        color: '#333',
        textAlign: 'left',
        flex: 1,
    },
    image: {
        width: 40,
        height: 40,
        marginBottom: 5,
    },
});