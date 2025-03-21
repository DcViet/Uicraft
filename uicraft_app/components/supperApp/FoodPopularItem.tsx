
import React from 'react';
import { View, Text, Image, TouchableOpacity, ImageBackground, StyleSheet } from 'react-native';
import { PopularFoodItem } from '@/app/data/mockData';

interface FoodPopularItemProps {
    populars: PopularFoodItem;
    width: number; 
}

export const FoodPopularItem: React.FC<FoodPopularItemProps> = ({ populars, width }) => {
    const itemWidth = (width - 40) / 3;

    // Nếu là nút "Xem thêm"
    if (populars.isViewMore) {
        return (
            <TouchableOpacity
                style={[styles.viewMoreButton, { width: itemWidth }]}
                onPress={() => console.log('Xem thêm Popular Near You')}
            >
                <Text style={styles.viewMoreText}>Xem thêm</Text>
            </TouchableOpacity>
        );
    }

    // Nếu là populars thông thường
    return (
        <TouchableOpacity style={[styles.card, { width: itemWidth }]}>
            <ImageBackground
                source={populars.image}
                style={styles.imageBackground}
                resizeMode="cover"
            >
                {/* Phần trên: Tên món ăn và đánh giá sao */}
                <View style={styles.topSection}>
                    <Text style={styles.name} numberOfLines={2}>
                        {populars.name}
                    </Text>
                    <View style={styles.rating}>
                        <Image
                            source={{ uri: 'https://img.icons8.com/skeuomorphism/32/christmas-star.png' }}
                            style={styles.starIcon}
                        />
                        <Text style={styles.ratingText}>4.9</Text>
                    </View>
                </View>

                {/* Phần dưới: Giá, thời gian giao hàng và icon giỏ hàng */}
                <View style={styles.bottomSection}>
                    <View>
                        <Text style={styles.price}>20.000 ₫</Text>
                        <Text style={styles.deliveryTime}>20 phút</Text>
                    </View>
                    <TouchableOpacity style={styles.cartButton}>
                        <Image
                            source={{ uri: 'https://img.icons8.com/3d-fluency/94/shopping-basket.png' }}
                            style={styles.cartIcon}
                        />
                    </TouchableOpacity>
                </View>
            </ImageBackground>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    viewMoreButton: {
        height: 180,
        backgroundColor: '#007AFF',
        borderRadius: 12,
        margin: 5,
        elevation: 3,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 3 },
        shadowOpacity: 0.15,
        shadowRadius: 5,
        justifyContent: 'center',
        alignItems: 'center',
    },
    viewMoreText: {
        color: '#fff',
        fontSize: 14,
        fontWeight: '600',
    },
    card: {
        height: 180,
        borderRadius: 12,
        margin: 5,
        elevation: 3,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 3 },
        shadowOpacity: 0.15,
        shadowRadius: 5,
        overflow: 'hidden',
    },
    imageBackground: {
        width: '100%',
        height: '100%',
        justifyContent: 'space-between',
    },
    topSection: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: 10,
    },
    name: {
        fontSize: 14,
        fontWeight: '600',
        color: '#fff',
        textAlign: 'left',
        flex: 1,
        marginRight: 8,
    },
    rating: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: 'rgba(255, 255, 255, 0.8)',
        padding: 4,
        borderRadius: 10,
    },
    starIcon: {
        width: 16,
        height: 16,
    },
    ratingText: {
        fontSize: 12,
        color: '#333',
    },
    bottomSection: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: 10,
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
    },
    price: {
        fontSize: 14,
        fontWeight: '800',
        color: '#fff',
    },
    deliveryTime: {
        fontSize: 12,
        color: '#ccc',
    },
    cartButton: {
        backgroundColor: 'rgba(255, 255, 255, indec 0.8)',
        borderRadius: 20,
        padding: 6,
    },
    cartIcon: {
        width: 20,
        height: 20,
    },
});