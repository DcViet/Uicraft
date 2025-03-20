import { useRouter, useLocalSearchParams } from 'expo-router';
import { View, Text, Image, StyleSheet } from 'react-native';

const services = [
  { id: '1', name: 'Food', icon: '🍔', image: { uri: 'https://img.icons8.com/3d-fluency/94/take-away-food.png' }, time: '20 min', span: 1 },
  { id: '2', name: 'Grocery', icon: '🛒', image: { uri: 'https://img.icons8.com/3d-fluency/94/ingredients.png' }, time: '15 min', span: 1 },
  { id: '3', name: 'Courier', icon: '📦', image: { uri: 'https://img.icons8.com/3d-fluency/94/delivery.png' }, time: '18 min', span: 1 },
  { id: '4', name: 'Taxi', icon: '🚗', image: { uri: 'https://img.icons8.com/3d-fluency/94/taxi.png' }, time: '15 min', span: 2 },
  { id: '5', name: 'Send Money', icon: '➡️', image: { uri: 'https://img.icons8.com/3d-fluency/94/money-transfer.png' }, time: '', backgroundColor: '#73E3C5', span: 1 },
  { id: '6', name: 'Home Cleaning', icon: '🏠', image: { uri: 'https://img.icons8.com/3d-fluency/94/housekeeping.png' }, time: '13 min', span: 1 },
  { id: '7', name: 'Medicine', icon: '💊', image: { uri: 'https://img.icons8.com/3d-fluency/94/pill.png' }, time: '20 min', span: 1 },
  { id: '8', name: 'Doctor', icon: '🩺', image: { uri: 'https://img.icons8.com/3d-fluency/94/stethoscope.png' }, time: '30 min', span: 1 },
];

export default function ServiceDetail() {
  const { id } = useLocalSearchParams();
  const service = services.find((s) => s.id === id);

  if (!service) {
    return (
      <View style={styles.container}>
        <Text>Service not found</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>
        {service.icon} {service.name}
      </Text>
      <Image source={{ uri: service.image.uri }} style={styles.image} />
      {service.time ? <Text style={styles.time}>Thời gian: {service.time}</Text> : null}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  image: {
    width: 100,
    height: 100,
    marginBottom: 20,
  },
  time: {
    fontSize: 16,
    color: '#666',
  },
});