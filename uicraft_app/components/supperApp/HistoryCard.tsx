import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';

interface HistoryCardProps {
    id: string;
    title: string;
    sendDate: string;
    deliveryDate: string | null;
    description: string;
    image: { uri: string };
    width: number;
    onPress?: () => void;
}

export const HistoryCard: React.FC<HistoryCardProps> = ({
    id,
    title,
    sendDate,
    deliveryDate,
    description,
    image,
    width,
    onPress,
}) => {
    return (
        <View key={id} style={styles.container}>
            <TouchableOpacity style={[styles.touchable, { width }]} onPress={onPress}>
                <View style={styles.content}>
                    <View style={styles.textContainer}>
                        <Text style={styles.title} numberOfLines={1}>
                            {title}
                        </Text>
                        <Text style={styles.date}>Ngày gửi: {sendDate}</Text>
                        {deliveryDate && (
                            <Text style={styles.date}>Ngày giao: {deliveryDate}</Text>
                        )}
                        {description.length > 0 && (
                            <Text style={styles.description} numberOfLines={2}>
                                {description}
                            </Text>
                        )}
                    </View>
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
        height: 100, 
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
        justifyContent: 'space-between',
        padding: 10,
    },
    textContainer: {
        flex: 1,
        marginRight: 10,
    },
    title: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#333',
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
    image: {
        width: 40,
        height: 40,
        marginBottom: 5,
    },
});