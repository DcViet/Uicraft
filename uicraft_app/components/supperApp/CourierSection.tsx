import React from 'react';
import { View, StyleSheet } from 'react-native';
import { CourierService } from '@/app/data/mockData';
import { CourierItemCard } from './CourierItemCard';


interface CourierSectionProps {
    categoryId: string;
    services: CourierService[];  
    width: number;
}

export const CourierSection: React.FC<CourierSectionProps> = ({ categoryId, services, width }) => {
    const itemWidth = (width - 40) / 3;
    const filteredServices = services.filter(service => service.categoryId === categoryId);

    const rows: CourierService[][] = [];
    let currentRow: CourierService[] = [];

    filteredServices.forEach((item) => {
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
                        <CourierItemCard
                            key={item.id}
                            id={item.id}
                            name={item.name}
                            image={item.image}
                            width={itemWidth}
                        />
                    ))}
                    {/* Nếu hàng chưa đủ 3 cột, thêm View rỗng để căn chỉnh */}
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
