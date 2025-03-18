import React from "react";
import { View, Text, StyleSheet } from "react-native";

// Import SVG components từ assets
import BallIcon from "@/assets/svgs/ball.svg";
import BugIcon from "@/assets/svgs/bug.svg";
import ZoomSvg from "@/assets/svgs/zoom.svg";

const SvgList = () => {
  return (
    <View style={styles.container}>
      <View style={styles.svgContainer}>
        {typeof BallIcon === "function" ? (
          <BallIcon width={24} height={24} />
        ) : (
          <Text>BallIcon not available</Text>
        )}
        <Text style={styles.svgName}>ball.svg</Text>
      </View>

      <View style={styles.svgContainer}>
        {typeof BugIcon === "function" ? (
          <BugIcon width={24} height={24} />
        ) : (
          <Text>BugIcon not available</Text>
        )}
        <Text style={styles.svgName}>bug.svg</Text>
      </View>

      <View style={styles.svgContainer}>
        {typeof ZoomSvg === "function" ? (
          <ZoomSvg width={24} height={24} />
        ) : (
          <Text>ZoomSvg not available</Text>
        )}
        <Text style={styles.svgName}>zoom.svg</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f5f5f5",
    padding: 15,
  },
  svgContainer: {
    backgroundColor: "#fff",
    borderRadius: 12,
    padding: 15,
    marginBottom: 15,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  svgName: {
    color: "#333",
    fontSize: 14,
    marginTop: 10,
  },
});

export default SvgList;