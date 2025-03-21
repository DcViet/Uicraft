import React from 'react';
import { View, StyleSheet } from 'react-native';
import { FoodItem } from '@/app/data/mockData';
import { FoodItemCard } from './FoodItemCard';

interface FoodSectionProps {
    categoryId: string;
    foods: FoodItem[];
    width: number;
}

export const FoodSection: React.FC<FoodSectionProps> = ({ categoryId, foods, width }) => {
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

    if (currentRow.length > 0) rows.push(currentRow);

    return (
        <View style={styles.container}>
            {rows.map((row, index) => (
                <View key={index} style={styles.row}>
                    {row.map((item) => (
                        <FoodItemCard key={item.id} item={item} width={width} />
                    ))}
                    {row.length < 3 && <View style={{ flex: 3 - row.length }} />}
                </View>
            ))}
        </View>
    );
};

const styles = StyleSheet.create({
    container: { marginBottom: 10 },
    row: { flexDirection: 'row', justifyContent: 'space-between' },
});