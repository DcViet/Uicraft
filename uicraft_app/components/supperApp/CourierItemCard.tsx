import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';

interface CourierItemCardProps {
    id: string;
    name: string;
    image: { uri: string };
    width: number;
    onPress?: () => void;
}

export const CourierItemCard: React.FC<CourierItemCardProps> = ({ id, name, image, width, onPress }) => {
    return (
        <View key={id} style={styles.container}>
            <TouchableOpacity
                style={[styles.touchable, { width }]}
                onPress={onPress}
            >
                <View style={styles.content}>
                    <Text style={styles.text} numberOfLines={2}>
                        {name}
                    </Text>
                    <Image
                        source={image}
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