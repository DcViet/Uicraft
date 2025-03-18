import React from "react";
import { View, StyleSheet, SafeAreaView, StatusBar } from "react-native";
import ImageUploader from "@/components/withFirebase/ImageUploader";

// import SvgList from "@/components/withNodeServer/SvgList";
import ImageList from "@/components/withFirebase/ImageList";

export default function ImageScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" backgroundColor="#f5f5f5" />
      <View style={styles.contentWrapper}>
        <View style={styles.headerSection}>
          <ImageUploader />
        </View>
        <View style={styles.listSection}>
          <ImageList />
          {/* <SvgList /> */}
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  contentWrapper: {
    flex: 1,
    paddingTop: 10,
  },
  headerSection: {
    alignItems: "center",
    padding: 5,
    backgroundColor: '#ffffff',
    borderRadius: 12,
    marginHorizontal: 15,
    marginBottom: 15,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.15,
    shadowRadius: 6,
    elevation: 5,
  },
  listSection: {
    flex: 1,
    backgroundColor: '#ffffff',
    borderRadius: 12,
    padding: 15,
    marginHorizontal: 15,
    marginBottom: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.15,
    shadowRadius: 6,
    elevation: 5,
  },
});