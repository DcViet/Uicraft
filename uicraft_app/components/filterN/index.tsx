import React from 'react';
import { TouchableOpacity, Text, StyleSheet, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons'; // Using Ionicons for the icons

interface FilterButtonProps {
  title?: string;
  onPress?: () => void;
  backgroundColor?: string;
  borderWidth?: number;
  borderColor?: string;
  textColor?: string;
  // Name of the icon (e.g., 'chevron-forward', 'checkmark')
//   iconName?: string; 
  iconName?: 'chevron-forward' | 'checkmark'; 

  iconColor?: string;
  disabled?: boolean;
}

const FilterButton = ({
  title = 'Filtro',
  onPress,
  backgroundColor = '#000000', // Default to black
  borderWidth = 4,
  borderColor = '#000000',
  textColor = '#FFFFFF', // Default to white text
  iconName = 'chevron-forward', // Default to right arrow
  iconColor = '#FFFFFF',
  disabled = false,
}: FilterButtonProps) => {
  return (
    <TouchableOpacity
      style={[
        styles.button,
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
      <View style={styles.content}>
        <Text style={[styles.buttonText, { color: textColor }]}>{title}</Text>
        <Ionicons name={iconName} size={24} color={iconColor} />
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    paddingVertical: 10,
    paddingHorizontal: 20,
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
  content: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '100%',
  },
  buttonText: {
    fontSize: 18,
    fontWeight: '700',
    textTransform: 'uppercase',
  },
});

export default FilterButton;