import React, { useRef } from 'react';
import { View, Text, Image, TouchableOpacity, ScrollView, TextInput, StyleSheet, Dimensions } from 'react-native';
import LottieView from 'lottie-react-native';
import animationData from '@/assets/lottie.json';
import { router } from 'expo-router';
import { foodCategories, foodItems, popularFoods } from '@/app/data/mockData';
import { FoodSection } from '@/components/supperApp/FoodSection';
import { FoodPopularSection } from '@/components/supperApp/FoodPopularSection';

const { width } = Dimensions.get('window');

const FoodScreen = () => {
    const animationRef = useRef<LottieView>(null);

    const handlePress = () => animationRef.current?.play();

    return (
        <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
            <View style={styles.headerSection}>
                <TouchableOpacity style={styles.menuButton}>
                    <Image source={{ uri: 'https://img.icons8.com/3d-fluency/94/menu.png' }} style={styles.icon} />
                </TouchableOpacity>
                <View style={styles.searchBar}>
                    <TextInput
                        style={styles.searchInput}
                        placeholder="Search location"
                        placeholderTextColor="#666"
                    />
                </View>
                <TouchableOpacity style={styles.payButton} onPress={() => router.push('/screen/qrScan')}>
                    <Image source={{ uri: 'https://img.icons8.com/3d-fluency/94/qr-code.png' }} style={styles.icon} />
                    <Text style={styles.payText}>Pay</Text>
                </TouchableOpacity>
            </View>

            <TouchableOpacity style={styles.banner} onPress={handlePress} activeOpacity={0.7}>
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

            <Text style={[styles.categoryTitle, { paddingHorizontal: 10 }]}>Popular Near You</Text>
            <FoodPopularSection populars={popularFoods} width={width} />

            {foodCategories.map((category) => (
                <View key={category.id} style={styles.categorySection}>
                    <Text style={styles.categoryTitle}>{category.name}</Text>
                    <FoodSection categoryId={category.id} foods={foodItems} width={width} />
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

export default FoodScreen;