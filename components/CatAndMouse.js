import React, { useRef, useState, useEffect } from "react";
import { View, StyleSheet, Text, TouchableOpacity, Alert } from "react-native";
import Animated, { useSharedValue, withTiming, useAnimatedStyle } from "react-native-reanimated";

export default function CatAndMouse() {
  const mousePos = useSharedValue(0);
  const catPos = useSharedValue(-100);
  const [gameOver, setGameOver] = useState(false);

  const mouseStyle = useAnimatedStyle(() => ({
    transform: [{ translateX: mousePos.value }],
  }));

  const catStyle = useAnimatedStyle(() => ({
    transform: [{ translateX: catPos.value }],
  }));

  const moveMouse = () => {
    if (!gameOver) {
      mousePos.value = withTiming(mousePos.value + 50, { duration: 500 });
    }
  };

  const moveCat = () => {
    if (!gameOver) {
      catPos.value = withTiming(catPos.value + 50, { duration: 500 });
    }
  };

  const checkCollision = () => {
    const distance = mousePos.value - catPos.value;
    if (distance < 0) {
      setGameOver(true);
      Alert.alert("Game Over!", "Mèo đã bắt được chuột!");
    }
  };

  useEffect(() => {
    if (!gameOver) {
      const interval = setInterval(checkCollision, 100); // Check collision every 100ms
      return () => clearInterval(interval);
    }
  }, [mousePos.value, catPos.value, gameOver]);

  const resetGame = () => {
    mousePos.value = 0;
    catPos.value = -100;
    setGameOver(false);
  };

  return (
    <View style={styles.container}>
      <View style = {{flexDirection:'row'}}>
      <Animated.Text style={[styles.emoji, catStyle]}>🐱</Animated.Text>
      <Animated.Text style={[styles.emoji, mouseStyle]}>🐭</Animated.Text>
</View>
      <TouchableOpacity style={styles.button} onPress={moveMouse}>
        <Text style={styles.buttonText}>Move Mouse</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={moveCat}>
        <Text style={styles.buttonText}>Move Cat</Text>
      </TouchableOpacity>

      {gameOver && (
        <TouchableOpacity style={styles.button} onPress={resetGame}>
          <Text style={styles.buttonText}>Reset Game</Text>
        </TouchableOpacity>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: "center", alignItems: "center", backgroundColor: "#fff" },
  emoji: { fontSize: 40, marginVertical: 20 },
  button: { backgroundColor: "#FF4500", padding: 10, borderRadius: 10, marginTop: 10 },
  buttonText: { color: "#fff", fontSize: 18, fontWeight: "bold" },
});