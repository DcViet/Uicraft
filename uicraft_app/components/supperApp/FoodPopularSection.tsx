import React from 'react';
import { FlatList, StyleSheet } from 'react-native';
import { PopularFoodItem } from '@/app/data/mockData';
import { FoodPopularItem } from './FoodPopularItem';

interface FoodPopularSectionProps {
    populars: PopularFoodItem[];
    width: number;
}

export const FoodPopularSection: React.FC<FoodPopularSectionProps> = ({ populars, width }) => {
    return (
        <FlatList
            data={populars}
            renderItem={({ item }) => <FoodPopularItem populars={item} width={width} />}
            keyExtractor={(item) => item.id}
            horizontal={true}
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={styles.container}
        />
    );
};

const styles = StyleSheet.create({
    container: {
        paddingHorizontal: 10,
    },
});