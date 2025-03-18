import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import * as DocumentPicker from "expo-document-picker";

const SvgUpload = () => {
  const [fileName, setFileName] = useState<string | null>(null);
  const [fileUri, setFileUri] = useState<string | null>(null);

  const pickFile = async () => {
    try {
      const result = await DocumentPicker.getDocumentAsync({
        type: "image/svg+xml", // Chỉ chọn SVG
      });

      if (result.canceled) {
        setFileName(null);
        setFileUri(null);
        return;
      }

      const file = result.assets[0];
      setFileName(file.name);
      setFileUri(file.uri);
    } catch (error) {

      setFileName(null);
      setFileUri(null);
    }
  };

  const resetFile = () => {
    setFileName(null);
    setFileUri(null);
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.uploadButton}
        onPress={pickFile}
      >
        <Text style={styles.buttonText}>Chọn file SVG</Text>
      </TouchableOpacity>

      {fileName && (
        <View style={styles.fileInfo}>
          <Text style={styles.fileName}>File đã chọn: {fileName}</Text>
          <Text style={styles.fileUri}>Đường dẫn: {fileUri}</Text>
          <TouchableOpacity
            style={styles.resetButton}
            onPress={resetFile}
          >
            <Text style={styles.resetButtonText}>Chọn lại</Text>
          </TouchableOpacity>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#f8f8f8",
    justifyContent: "center",
    alignItems: "center",
  },
  uploadButton: {
    backgroundColor: "#007AFF",
    paddingVertical: 15,
    paddingHorizontal: 30,
    borderRadius: 10,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 3,
  },
  buttonText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "600",
    textAlign: "center",
  },
  fileInfo: {
    marginTop: 20,
    padding: 15,
    backgroundColor: "#fff",
    borderRadius: 8,
    width: "100%",
    alignItems: "center",
    gap: 10,
  },
  fileName: {
    color: "#333",
    fontSize: 16,
    textAlign: "center",
  },
  fileUri: {
    color: "#666",
    fontSize: 14,
    textAlign: "center",
    paddingHorizontal: 10,
  },
  resetButton: {
    marginTop: 10,
    backgroundColor: "#FF3B30",
    paddingVertical: 8,
    paddingHorizontal: 20,
    borderRadius: 6,
  },
  resetButtonText: {
    color: "#fff",
    fontSize: 14,
    fontWeight: "500",
  },
});

export default SvgUpload;