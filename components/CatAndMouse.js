import React from "react";
import { View, StyleSheet, Text, TouchableOpacity } from "react-native";
import Animated, { useSharedValue, withTiming, useAnimatedStyle } from "react-native-reanimated";

export default function CatAndMouse() {
  const mousePos = useSharedValue(100);
  const catPos = useSharedValue(0);

  const moveMouse = () => {
    mousePos.value = withTiming(mousePos.value + 50, { duration: 500 });
  };

  const moveCat = () => {
    catPos.value = withTiming(catPos.value + 50, { duration: 500 });
  };

  const mouseStyle = useAnimatedStyle(() => ({
    transform: [{ translateX: mousePos.value }],
  }));

  const catStyle = useAnimatedStyle(() => ({
    transform: [{ translateY: catPos.value }],
  }));

  return (
    <View style={styles.container}>
      <Animated.Text style={[styles.emoji, mouseStyle]}>🐭</Animated.Text>
      <Animated.Text style={[styles.emoji, catStyle]}>🐱</Animated.Text>

      <TouchableOpacity style={styles.button} onPress={moveMouse}>
        <Text style={styles.buttonText}>Move Mouse</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={moveCat}>
        <Text style={styles.buttonText}>Move Cat</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: "center", alignItems: "center", backgroundColor: "#fff" },
  emoji: { fontSize: 40, marginVertical: 20 },
  button: { backgroundColor: "#FF4500", padding: 10, borderRadius: 10, marginTop: 10 },
  buttonText: { color: "#fff", fontSize: 18, fontWeight: "bold" },
});
