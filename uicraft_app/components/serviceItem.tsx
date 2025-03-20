import { TouchableOpacity, View, Text, Image, StyleSheet, Dimensions } from 'react-native';

const { width } = Dimensions.get('window');

interface ServiceItemProps {
  id: string;
  name: string;
  icon: string;
  image: { uri: string } | string;
  time: string;
  span?: number;
  backgroundColor?: string;
}

export default function ServiceItem({ id, name, image, time, span, backgroundColor, icon }: ServiceItemProps) {
  const itemWidth = (width - 40) / 3;

  return (
    <View
      style={{
        width: '100%', // Chiếm toàn màn hình trong trang chi tiết
        height: 200,   // Tăng chiều cao cho trang chi tiết
        backgroundColor: backgroundColor || '#fff',
        borderRadius: 8,
        margin: 4,
        position: 'relative',
      }}
    >
      <View
        style={{
          flex: 1,
          flexDirection: 'column',
          alignItems: 'flex-end',
          padding: 20,
        }}
      >
        <View
          style={{
            width: '100%',
          }}
        >
          <Text
            style={{
              fontSize: 24, // Tăng kích thước chữ cho trang chi tiết
              fontWeight: 'bold',
              color: backgroundColor ? '#fff' : '#000',
              textAlign: 'left',
            }}
          >
            {icon} {name}
          </Text>
          {time && (
            <Text
              style={{
                fontSize: 18,
                color: backgroundColor ? '#fff' : '#000',
                textAlign: 'left',
                marginTop: 10,
              }}
            >
              Thời gian: {time}
            </Text>
          )}
        </View>
        <Image
          source={typeof image === 'string' ? { uri: image } : image}
          style={{
            width: 100, // Tăng kích thước ảnh cho trang chi tiết
            height: 100,
            resizeMode: 'contain',
            position: 'absolute',
            bottom: 20,
            right: 20,
          }}
        />
      </View>
    </View>
  );
}