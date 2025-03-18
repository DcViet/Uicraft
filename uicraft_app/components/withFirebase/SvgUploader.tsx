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

const MAX_FILE_SIZE = 1 * 1024 * 1024; // 1MB in bytes

const SvgUploader = () => {
  const [fileUri, setFileUri] = useState<string | null>(null);
  const [uploading, setUploading] = useState(false);
  const [progress, setProgress] = useState(0);

  // Chọn file SVG từ thư viện
  const pickFile = useCallback(async () => {
    const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
    if (status !== "granted") {
      Alert.alert("Quyền bị từ chối", "Cần quyền truy cập thư viện!");
      return;
    }

    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: false,
      quality: 1,
    });

    if (!result.canceled) {
      const uri = result.assets[0].uri;
      // Lấy fileSize và đảm bảo nó là number
      let fileSize: number | undefined = result.assets[0].fileSize;
      if (!fileSize) {
        const response = await fetch(uri);
        const sizeHeader = response.headers.get("content-length");
        fileSize = sizeHeader ? parseInt(sizeHeader, 10) : undefined;
      }

      // Kiểm tra định dạng và kích thước
      if (!uri.toLowerCase().endsWith(".svg")) {
        Alert.alert("Lỗi", "Vui lòng chọn file SVG!");
        return;
      }
      if (fileSize && fileSize > MAX_FILE_SIZE) {
        Alert.alert("Lỗi", "File vượt quá dung lượng 1MB!");
        return;
      }

      setFileUri(uri);
      setProgress(0);
    }
  }, []);

  // Upload file lên Firebase
  const uploadFile = useCallback(async () => {
    if (!fileUri) return;

    setUploading(true);
    try {
      const response = await fetch(fileUri);
      const blob = await response.blob();
      const filename = `uploads/${Date.now()}.svg`;
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
          Alert.alert("Thành công", "File SVG đã được upload!");
          setFileUri(null);
          setUploading(false);
          setProgress(0);
        }
      );
    } catch (error) {
      Alert.alert("Lỗi", "Có lỗi xảy ra khi upload file.");
      setUploading(false);
    }
  }, [fileUri]);

  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={[styles.button, uploading && styles.buttonDisabled]}
        onPress={pickFile}
        disabled={uploading}
      >
        <Text style={styles.buttonText}>Chọn file SVG</Text>
      </TouchableOpacity>

      {fileUri && (
        <View style={styles.fileWrapper}>
          <Image source={{ uri: fileUri }} style={styles.image} resizeMode="contain" />
          <View style={styles.fileInfo}>
            <Text style={styles.fileName}>{fileUri.split("/").pop()}</Text>
            {uploading ? (
              <View style={styles.progressContainer}>
                <ActivityIndicator size="small" color="#fff" />
                <Text style={styles.progressText}>{Math.round(progress)}%</Text>
              </View>
            ) : (
              <TouchableOpacity style={styles.uploadButton} onPress={uploadFile}>
                <Text style={styles.uploadButtonText}>Upload SVG</Text>
              </TouchableOpacity>
            )}
          </View>
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
    backgroundColor: "#007AFF",
    paddingVertical: 12,
    paddingHorizontal: 25,
    borderRadius: 8,
  },
  buttonDisabled: {
    backgroundColor: "#999",
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "600",
  },
  fileWrapper: {
    marginTop: 15,
    alignItems: "center",
    backgroundColor: "#fff",
    borderRadius: 10,
    padding: 10,
    shadowColor: "#000",
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
  fileInfo: {
    marginTop: 10,
    alignItems: "center",
  },
  fileName: {
    fontSize: 14,
    color: "#333",
    marginBottom: 8,
  },
  progressContainer: {
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
    backgroundColor: "#34C759",
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 6,
  },
  uploadButtonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "600",
  },
});

export default SvgUploader;