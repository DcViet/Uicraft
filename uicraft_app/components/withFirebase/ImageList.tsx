import React, { useEffect, useState, useCallback } from "react";
import {
  View,
  Image,
  FlatList,
  TouchableOpacity,
  Text,
  StyleSheet,
  ActivityIndicator,
  Alert,
} from "react-native";
import { storage, ref, getDownloadURL, deleteObject } from "../../firebaseConfig";
import { listAll } from "firebase/storage";

const ImageList = () => {
  const [images, setImages] = useState<string[]>([]);
  const [loading, setLoading] = useState(true);

  // Lấy danh sách ảnh từ Firebase
  const fetchImages = useCallback(async () => {
    try {
      setLoading(true);
      const storageRef = ref(storage, "uploads/");
      const result = await listAll(storageRef);
      const urls = await Promise.all(result.items.map((item) => getDownloadURL(item)));
      setImages(urls);
    } catch (error) {
      Alert.alert("Lỗi", "Không thể tải danh sách ảnh.");
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchImages();
  }, [fetchImages]);

  // Xóa ảnh
  const deleteImage = useCallback(
    async (imageUrl: string) => {
      const fileName = imageUrl.split("%2F")[1].split("?")[0];
      const imageRef = ref(storage, `uploads/${fileName}`);

      Alert.alert(
        "Xác nhận",
        "Bạn có chắc muốn xóa ảnh này?",
        [
          { text: "Hủy", style: "cancel" },
          {
            text: "Xóa",
            style: "destructive",
            onPress: async () => {
              try {
                await deleteObject(imageRef);
                setImages((prev) => prev.filter((url) => url !== imageUrl));
                Alert.alert("Thành công", "Ảnh đã được xóa.");
              } catch (error) {
                Alert.alert("Lỗi", "Không thể xóa ảnh.");
              }
            },
          },
        ]
      );
    },
    []
  );

  // Render item cho FlatList
  const renderItem = ({ item }: { item: string }) => (
    <View style={styles.imageContainer}>
      <Image source={{ uri: item }} style={styles.image} resizeMode="cover" />
      <TouchableOpacity style={styles.deleteButton} onPress={() => deleteImage(item)}>
        <Text style={styles.deleteButtonText}>Xóa</Text>
      </TouchableOpacity>
    </View>
  );

  if (loading) {
    return (
      <View style={styles.loadingContainer}>
        <ActivityIndicator size="large" color="#007AFF" />
      </View>
    );
  }

  return (
    <FlatList
      data={images}
      keyExtractor={(_, index) => index.toString()}
      renderItem={renderItem}
      contentContainerStyle={styles.listContainer}
      ListEmptyComponent={
        <Text style={styles.emptyText}>Chưa có ảnh nào được tải lên.</Text>
      }
    />
  );
};

const styles = StyleSheet.create({
  listContainer: {
    padding: 10,
  },
  imageContainer: {
    alignItems: "center",
    marginBottom: 20,
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  image: {
    width: 200,
    height: 200,
    borderRadius: 8,
  },
  deleteButton: {
    marginTop: 10,
    backgroundColor: '#FF3B30',
    paddingVertical: 8,
    paddingHorizontal: 20,
    borderRadius: 6,
  },
  deleteButtonText: {
    color: '#fff',
    fontWeight: '600',
    fontSize: 16,
  },
  loadingContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  emptyText: {
    textAlign: "center",
    color: "#666",
    fontSize: 16,
    marginTop: 20,
  },
});

export default ImageList;