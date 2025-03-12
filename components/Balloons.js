import React, { useEffect } from "react";
import { View, StyleSheet, Text } from "react-native";
import Animated, { useSharedValue, withTiming, useAnimatedStyle } from "react-native-reanimated";

export default function Balloons() {
  const positionY = useSharedValue(500); // Bắt đầu từ vị trí dưới màn hình

  useEffect(() => {
    positionY.value = withTiming(-100, { duration: 3000 }); // Bay lên trên trong 3 giây
  }, []);

  const animatedStyle = useAnimatedStyle(() => ({
    transform: [{ translateY: positionY.value }],
  }));

  return (
    <View style={styles.container}>
      <Animated.Text style={[styles.balloon, animatedStyle]}>🎈</Animated.Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: "flex-end", alignItems: "center", backgroundColor: "#87CEEB" }, // Màu nền trời
  balloon: { fontSize: 50 },
});
