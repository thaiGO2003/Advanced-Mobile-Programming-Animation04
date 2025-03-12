import React, { useRef } from 'react';
import { View, StyleSheet, Animated, TouchableOpacity } from 'react-native';

export default function ShopeeAd() {
  const scale = useRef(new Animated.Value(1)).current;

  const handlePress = () => {
    Animated.spring(scale, {
      toValue: 1.5,
      duration: 500, // Thêm duration để kiểm soát tốc độ animation
      useNativeDriver: false, // Bỏ useNativeDriver
    }).start(() => {
      Animated.spring(scale, {
        toValue: 1,
        duration: 500, // Thêm duration để kiểm soát tốc độ animation
        useNativeDriver: false, // Bỏ useNativeDriver
      }).start();
    });
  };

  const animatedStyle = {
    transform: [{ scale }],
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={handlePress}>
        <Animated.Text style={[styles.text, animatedStyle]}>
          Shopee, cái gì cũng có...
        </Animated.Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  text: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#FF4500',
  },
});