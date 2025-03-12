import React, { useEffect } from "react";
import { View, StyleSheet } from "react-native";
import Animated, { useSharedValue, withRepeat, withTiming, useAnimatedStyle } from "react-native-reanimated";

export default function BellAnimation() {
  const rotation = useSharedValue(0); // Giá trị ban đầu là 0 độ

  useEffect(() => {
    rotation.value = withRepeat(
      withTiming(10, { duration: 200 }), // Lắc qua phải (10 độ)
      -1, // Lặp vô hạn
      true // Đảo chiều (lắc qua trái)
    );
  }, []);

  const animatedStyle = useAnimatedStyle(() => ({
    transform: [{ rotate: `${rotation.value}deg` }],
  }));

  return (
    <View style={styles.container}>
      <Animated.Text style={[styles.bell, animatedStyle]}>🔔</Animated.Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: "center", alignItems: "center", backgroundColor: "#fff" },
  bell: { fontSize: 50 },
});
