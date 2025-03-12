import React from "react";
import { View, Button, StyleSheet } from "react-native";
import Animated, { useSharedValue, withTiming, useAnimatedStyle } from "react-native-reanimated";

export default function MovingShape() {
  const position = useSharedValue(0); // Giá trị ban đầu là 0

  const animatedStyle = useAnimatedStyle(() => ({
    transform: [{ translateX: position.value }],
  }));

  return (
    <View style={styles.container}>
      <Animated.View style={[styles.box, animatedStyle]} />
      <View style={styles.buttonContainer}>
        <Button title="Start" onPress={() => (position.value = withTiming(position.value + 100, { duration: 1000 }))} />
        <Button title="Restart" onPress={() => (position.value = withTiming(0, { duration: 1000 }))} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: "center", alignItems: "center", backgroundColor: "#fff" },
  box: { width: 50, height: 50, backgroundColor: "black", borderRadius: 5 },
  buttonContainer: { flexDirection: "row", marginTop: 20, gap: 10 },
});
