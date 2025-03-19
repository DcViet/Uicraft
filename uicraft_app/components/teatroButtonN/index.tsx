import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';

interface TeatroButtonProps {
  title?: string;
  onPress?: () => void;
  backgroundColor?: string;
  borderWidth?: number;
  borderColor?: string;
  textColor?: string;
  disabled?: boolean;
}

const TeatroButton = ({
  title = 'Teatro',
  onPress,
  backgroundColor = '#FFFFFF', // Default to white
  borderWidth = 4,
  borderColor = '#000000', // Default to black border
  textColor = '#000000', // Default to black text
  disabled = false,
}: TeatroButtonProps) => {
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
      <Text style={[styles.buttonText, { color: textColor }]}>{title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    paddingVertical: 10,
    paddingHorizontal: 30,
    borderRadius: 20,
    marginVertical: 10,
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 5,
    shadowColor: '#000000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 2,
  },
  buttonText: {
    fontSize: 18,
    fontWeight: '700',
    textTransform: 'uppercase',
  },
});

export default TeatroButton;