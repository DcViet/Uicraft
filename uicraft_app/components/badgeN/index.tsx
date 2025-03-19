import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons'; // Using Ionicons for the pencil icon

interface BadgeProps {
  text?: string;
  imageUrl?: string;
  backgroundColor?: string;
  borderWidth?: number;
  borderColor?: string;
  textColor?: string;
  // iconName?: string; // Name of the icon (e.g., 'pencil' or custom)
  iconName?: 'pencil' | 'text',
  iconColor?: string;
  onPress?: () => void;
  disabled?: boolean;
}

const CustomBadge = ({
  text = 'Flame',
  imageUrl,
  backgroundColor = '#000000', // Default to black
  borderWidth = 4,
  borderColor = '#000000',
  textColor = '#FFFFFF', // Default to white text
  iconName = 'pencil', // Default to pencil icon
  iconColor = '#000000',
  onPress,
  disabled = false,
}: BadgeProps) => {
  return (
    <TouchableOpacity
      style={[
        styles.badge,
        {
          backgroundColor: imageUrl ? 'transparent' : backgroundColor, // Transparent for image, colored for text
          borderWidth,
          borderColor,
          opacity: disabled ? 0.5 : 1,
        },
      ]}
      onPress={onPress}
      disabled={disabled}
    >
      {imageUrl ? (
        <>
          <Image source={{ uri: imageUrl }} style={styles.badgeImage} />
          <View style={styles.iconContainer}>
            <Ionicons name={iconName} size={20} color={iconColor} />
          </View>
        </>
      ) : (
        <>
          <Text style={[styles.badgeText, { color: textColor }]}>{text}</Text>
          {/* Placeholder for flame-like design; you can replace with a custom image or SVG */}
          <View style={styles.flamePlaceholder} />
        </>
      )}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  badge: {
    width: 120,
    height: 120,
    borderRadius: 60,
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 5,
    shadowColor: '#000000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 2,
    overflow: 'hidden', // Ensure image and content stay within border
  },
  badgeImage: {
    width: '100%',
    height: '100%',
    borderRadius: 60,
  },
  badgeText: {
    fontSize: 24,
    fontWeight: '700',
    textTransform: 'uppercase',
    textAlign: 'center',
    zIndex: 1, // Ensure text is above placeholder
  },
  flamePlaceholder: {
    position: 'absolute',
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: '#FFFFFF',
    top: 10,
    left: 30,
    zIndex: 0, // Behind the text
  },
  iconContainer: {
    position: 'absolute',
    bottom: 10,
    right: 10,
    backgroundColor: '#FFFFFF',
    borderRadius: 10,
    padding: 2,
  },
});

export default CustomBadge;