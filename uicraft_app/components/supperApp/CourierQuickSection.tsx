import React from 'react';
import { View, StyleSheet } from 'react-native';
import { QuickAccess } from '@/app/data/mockData';
import { CourierItemCard } from './CourierItemCard';

interface QuickSectionProps {
    nears: QuickAccess[];
    width: number;
}

export const QuickSection: React.FC<QuickSectionProps> = ({ nears, width }) => {
    const itemWidth = (width - 40) / 2;

    return (
        <View style={styles.container}>
            <View style={styles.row}>
                {nears.slice(0, 2).map((item) => (
                    <CourierItemCard
                        key={item.id}
                        id={item.id}
                        name={item.name}
                        image={item.image}
                        width={itemWidth}
                    />
                ))}
            </View>
            <View style={styles.row}>
                {nears.slice(2, 4).map((item) => (
                    <CourierItemCard
                        key={item.id}
                        id={item.id}
                        name={item.name}
                        image={item.image}
                        width={itemWidth}
                    />
                ))}
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: { paddingHorizontal: 5 },
    row: { flexDirection: 'row', justifyContent: 'space-between' },
});