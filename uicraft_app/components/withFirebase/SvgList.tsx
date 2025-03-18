import React, { useEffect, useState, useCallback } from "react";
import {
  View,
  FlatList,
  TouchableOpacity,
  Text,
  StyleSheet,
  ActivityIndicator,
  Alert,
} from "react-native";
import { storage } from "../../firebaseConfig";
import { ref, getDownloadURL, deleteObject, listAll } from "firebase/storage";

// Import SVG components với tên file thực tế
import BallIcon from "@/assets/svgs/ball.svg"; 
import BugIcon from "@/assets/svgs/bug.svg"; 

const SvgList = () => {
  const [svgs, setSvgs] = useState<string[]>([]);
  const [loading, setLoading] = useState(true);
  const [refreshing, setRefreshing] = useState(false);

  // Cập nhật svgMap với tên file thực tế
  const svgMap = {
    "ball.svg": BallIcon,
    "bug.svg": BugIcon,
  };

  const fetchSvgs = useCallback(async () => {
    setLoading(true);
    try {
      const storageRef = ref(storage, "uploads/");
      const result = await listAll(storageRef);
      const svgItems = result.items.filter((item) =>
        item.name.toLowerCase().endsWith(".svg")
      );
      const urls = await Promise.all(svgItems.map((item) => getDownloadURL(item)));
      setSvgs(urls);
    } catch (error) {
      console.error("Error fetching SVGs:", error);
      Alert.alert("Lỗi", "Không thể tải danh sách SVG.");
    } finally {
      setLoading(false);
      setRefreshing(false);
    }
  }, []);

  const deleteSvg = useCallback(
    (svgUrl: string) => {
      Alert.alert("Xác nhận", "Bạn có chắc muốn xóa SVG này?", [
        { text: "Hủy", style: "cancel" },
        {
          text: "Xóa",
          style: "destructive",
          onPress: async () => {
            try {
              const decodedUrl = decodeURIComponent(svgUrl);
              const fileName = decodedUrl.split("/").pop()?.split("?")[0];
              if (!fileName) throw new Error("Invalid file name");

              const svgRef = ref(storage, `uploads/${fileName}`);
              await deleteObject(svgRef);
              
              setSvgs((prev) => prev.filter((url) => url !== svgUrl));
              Alert.alert("Thành công", "SVG đã được xóa.");
            } catch (error) {
              console.error("Error deleting SVG:", error);
              Alert.alert("Lỗi", "Không thể xóa SVG.");
            }
          },
        },
      ]);
    },
    []
  );

  useEffect(() => {
    fetchSvgs();
  }, [fetchSvgs]);

  const renderItem = ({ item }: { item: string }) => {
    const fileName = item.split("/").pop()?.split("?")[0] || "";
    const SvgComponent = svgMap[fileName as keyof typeof svgMap];

    return (
      <View style={styles.svgContainer}>
        <View style={styles.svgWrapper}>
          {SvgComponent ? (
            <SvgComponent width={200} height={200} />
          ) : (
            <View style={styles.fallbackContainer}>
              <Text style={styles.fallbackText}>
                {fileName ? `Không hỗ trợ: ${fileName}` : "Không tìm thấy SVG"}
              </Text>
            </View>
          )}
        </View>
        <TouchableOpacity
          style={styles.deleteButton}
          onPress={() => deleteSvg(item)}
        >
          <Text style={styles.deleteButtonText}>Xóa</Text>
        </TouchableOpacity>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      {loading && !refreshing ? (
        <View style={styles.loadingContainer}>
          <ActivityIndicator size="large" color="#007AFF" />
          <Text style={styles.loadingText}>Đang tải...</Text>
        </View>
      ) : (
        <FlatList
          data={svgs}
          keyExtractor={(item) => item}
          renderItem={renderItem}
          contentContainerStyle={styles.listContainer}
          ListEmptyComponent={
            <Text style={styles.emptyText}>Chưa có SVG nào được tải lên.</Text>
          }
          refreshing={refreshing}
          onRefresh={() => {
            setRefreshing(true);
            fetchSvgs();
          }}
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f8f8f8",
  },
  listContainer: {
    padding: 15,
    flexGrow: 1,
  },
  svgContainer: {
    alignItems: "center",
    marginBottom: 20,
    backgroundColor: "#fff",
    borderRadius: 12,
    padding: 15,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.15,
    shadowRadius: 6,
    elevation: 5,
  },
  svgWrapper: {
    borderRadius: 8,
    overflow: "hidden",
  },
  deleteButton: {
    marginTop: 12,
    backgroundColor: "#FF3B30",
    paddingVertical: 10,
    paddingHorizontal: 25,
    borderRadius: 8,
  },
  deleteButtonText: {
    color: "#fff",
    fontWeight: "600",
    fontSize: 16,
  },
  loadingContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    gap: 10,
  },
  loadingText: {
    color: "#666",
    fontSize: 16,
  },
  emptyText: {
    textAlign: "center",
    color: "#666",
    fontSize: 16,
    marginTop: 20,
  },
  fallbackContainer: {
    width: 200,
    height: 200,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#f0f0f0",
    borderRadius: 8,
  },
  fallbackText: {
    color: "#666",
    fontSize: 14,
    textAlign: "center",
    padding: 10,
  },
});

export default SvgList;