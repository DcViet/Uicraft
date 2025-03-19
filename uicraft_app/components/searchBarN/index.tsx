import React from 'react';
import { View, TextInput, StyleSheet, NativeSyntheticEvent, TextInputChangeEventData } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

interface SearchBarProps {
  placeholder?: string;
  onChangeText?: (text: string) => void; 
  value?: string;
  backgroundColor?: string;
  borderWidth?: number;
  borderColor?: string;
  textColor?: string;
  placeholderTextColor?: string;
  disabled?: boolean;
}

const SearchBar = ({
  placeholder = 'Busca aquí un evento',
  onChangeText,
  value = '',
  backgroundColor = '#FFFFFF',
  borderWidth = 4,
  borderColor = '#000000',
  textColor = '#000000',
  placeholderTextColor = '#666666',
  disabled = false,
}: SearchBarProps) => {
  return (
    <View
      style={[
        styles.container,
        {
          backgroundColor,
          borderWidth,
          borderColor,
          opacity: disabled ? 0.5 : 1,
        },
      ]}
    >
      <Ionicons name="search" size={20} color={textColor} style={styles.icon} />
      <TextInput
        style={[styles.input, { color: textColor }]}
        placeholder={placeholder}
        placeholderTextColor={placeholderTextColor}
        onChangeText={onChangeText} // Pass the text directly
        value={value}
        editable={!disabled}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 20,
    paddingHorizontal: 15,
    paddingVertical: 8,
    marginVertical: 10,
    elevation: 5,
    shadowColor: '#000000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 2,
  },
  icon: {
    marginRight: 10,
  },
  input: {
    flex: 1,
    fontSize: 16,
    fontWeight: '500',
  },
});

export default SearchBar;