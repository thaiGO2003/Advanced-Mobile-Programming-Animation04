import React, { useEffect } from "react";
import { View, StyleSheet, Text } from "react-native";
import Animated, { useSharedValue, withTiming, useAnimatedStyle } from "react-native-reanimated";

export default function FadeText() {
  const fadeAnim = useSharedValue(0); // Giá trị bắt đầu từ 0

  useEffect(() => {
    fadeAnim.value = withTiming(1, { duration: 3000 }); // Hiển thị hoàn toàn trong 3 giây
  }, []);

  const animatedStyle = useAnimatedStyle(() => ({
    opacity: fadeAnim.value,
  }));

  return (
    <View style={styles.container}>
      <Animated.Text style={[styles.text, animatedStyle]}>
        Hello, React Native Animation!
      </Animated.Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: "center", alignItems: "center", backgroundColor: "#fff" },
  text: { fontSize: 24, fontWeight: "bold", color: "#333" },
});
