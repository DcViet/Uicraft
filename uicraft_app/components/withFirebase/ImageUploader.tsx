import React, { useState, useCallback } from "react";
import {
  View,
  Image,
  TouchableOpacity,
  Text,
  StyleSheet,
  ActivityIndicator,
  Alert,
} from "react-native";
import * as ImagePicker from "expo-image-picker";
import { storage, ref, uploadBytesResumable, getDownloadURL } from "../../firebaseConfig";

const ImageUploader = () => {
  const [image, setImage] = useState<string | null>(null);
  const [uploading, setUploading] = useState(false);
  const [progress, setProgress] = useState(0);

  // Chọn ảnh từ thư viện
  const pickImage = useCallback(async () => {
    const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
    if (status !== "granted") {
      Alert.alert("Quyền bị từ chối", "Cần quyền truy cập thư viện ảnh!");
      return;
    }

    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 0.8, // Giảm nhẹ quality để upload nhanh hơn
    });

    if (!result.canceled) {
      setImage(result.assets[0].uri);
      setProgress(0); // Reset progress khi chọn ảnh mới
    }
  }, []);

  // Upload ảnh lên Firebase
  const uploadImage = useCallback(async () => {
    if (!image) return;

    setUploading(true);
    try {
      const response = await fetch(image);
      const blob = await response.blob();
      const filename = `uploads/${Date.now()}.jpg`;
      const storageRef = ref(storage, filename);
      const uploadTask = uploadBytesResumable(storageRef, blob);

      uploadTask.on(
        "state_changed",
        (snapshot) => {
          const progressPercent = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
          setProgress(progressPercent);
        },
        (error) => {
          Alert.alert("Lỗi", `Upload thất bại: ${error.message}`);
          setUploading(false);
        },
        async () => {
          const downloadURL = await getDownloadURL(storageRef);
          Alert.alert("Thành công", "Ảnh đã được upload thành công!");
          setImage(null);
          setUploading(false);
          setProgress(0);
        }
      );
    } catch (error) {
      Alert.alert("Lỗi", "Có lỗi xảy ra khi upload ảnh.");
      setUploading(false);
    }
  }, [image]);

  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={[styles.button, uploading && styles.buttonDisabled]}
        onPress={pickImage}
        disabled={uploading}
      >
        <Text style={styles.buttonText}>Chọn ảnh</Text>
      </TouchableOpacity>

      {image && (
        <View style={styles.imageWrapper}>
          <Image source={{ uri: image }} style={styles.image} resizeMode="cover" />
          
          {uploading ? (
            <View style={styles.progressContainer}>
              <ActivityIndicator size="small" color="#fff" />
              <Text style={styles.progressText}>{Math.round(progress)}%</Text>
            </View>
          ) : (
            <TouchableOpacity style={styles.uploadButton} onPress={uploadImage}>
              <Text style={styles.uploadButtonText}>Upload ảnh</Text>
            </TouchableOpacity>
          )}
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    padding: 15,
  },
  button: {
    backgroundColor: '#007AFF',
    paddingVertical: 12,
    paddingHorizontal: 25,
    borderRadius: 8,
  },
  buttonDisabled: {
    backgroundColor: '#999',
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
  },
  imageWrapper: {
    marginTop: 15,
    alignItems: "center",
  },
  image: {
    width: 200,
    height: 200,
    borderRadius: 10,
  },
  progressContainer: {
    marginTop: 10,
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "rgba(0,0,0,0.7)",
    paddingVertical: 8,
    paddingHorizontal: 15,
    borderRadius: 6,
  },
  progressText: {
    color: "#fff",
    marginLeft: 10,
    fontSize: 16,
  },
  uploadButton: {
    marginTop: 10,
    backgroundColor: '#34C759',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 6,
  },
  uploadButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
  },
});

export default ImageUploader;