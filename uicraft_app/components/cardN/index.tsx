import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';

interface CardProps {
  name?: string;
  title?: string;
  description?: string;
  imageUrl?: string;
  onPress?: () => void;
  backgroundColor?: string;
  borderWidth?: number;
  borderColor?: string;
  disabled?: boolean;
}

const CustomCard = ({
  name = 'LUCY PATANE',
  title = 'Lorem',
  description = 'Lorem ipsum',
  imageUrl = 'https://via.placeholder.com/200', // Default placeholder image
  onPress,
  backgroundColor = '#FFFFFF', // Default to white
  borderWidth = 4,
  borderColor = '#000000', // Default to black border
  disabled = false,
}: CardProps) => {
  return (
    <TouchableOpacity
      style={[
        styles.card,
        {
          backgroundColor,
          borderWidth,
          borderColor,
          opacity: disabled ? 0.5 : 1,
        },
      ]}
      onPress={onPress}
      disabled={disabled}
    >
      <Image source={{ uri: imageUrl }} style={styles.cardImage} />
      <View style={styles.textContainer}>
        <Text style={styles.cardName}>{name}</Text>
        <Text style={styles.cardTitle}>{title}</Text>
        <Text style={styles.cardDescription}>{description}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  card: {
    width: 150,
    height: 200,
    borderRadius: 10,
    marginVertical: 10,
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 5,
    shadowColor: '#000000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 2,
  },
  cardImage: {
    width: '100%',
    height: '60%',
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
  },
  textContainer: {
    padding: 10,
    alignItems: 'center',
    flex: 1,
    justifyContent: 'center',
  },
  cardName: {
    fontSize: 14,
    fontWeight: '700',
    color: '#000000',
    textTransform: 'uppercase',
    marginBottom: 5,
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: '800',
    color: '#000000',
    textTransform: 'uppercase',
    marginBottom: 5,
  },
  cardDescription: {
    fontSize: 12,
    fontWeight: '600',
    color: '#333333',
  },
});

export default CustomCard;