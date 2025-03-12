import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import FadeText from "./components/FadeText";
import MovingShape from "./components/MovingShape";
import BellAnimation from "./components/BellAnimation";
import Balloons from "./components/Balloons";
import ShopeeAd from "./components/ShopeeAd";
import CatAndMouse from "./components/CatAndMouse";

const Stack = createNativeStackNavigator();

function HomeScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>React Native Animation Lab</Text>
      <View style={styles.nav}>
        <NavButton title="Fade Text" onPress={() => navigation.navigate("FadeText")} />
        <NavButton title="Moving Shape" onPress={() => navigation.navigate("MovingShape")} />
        <NavButton title="Bell Animation" onPress={() => navigation.navigate("BellAnimation")} />
        <NavButton title="Balloons" onPress={() => navigation.navigate("Balloons")} />
        <NavButton title="Shopee Ad" onPress={() => navigation.navigate("ShopeeAd")} />
        <NavButton title="Cat & Mouse" onPress={() => navigation.navigate("CatAndMouse")} />
      </View>
    </View>
  );
}

function NavButton({ title, onPress }) {
  return (
    <TouchableOpacity style={styles.button} onPress={onPress}>
      <Text style={styles.buttonText}>{title}</Text>
    </TouchableOpacity>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="FadeText" component={FadeText} />
        <Stack.Screen name="MovingShape" component={MovingShape} />
        <Stack.Screen name="BellAnimation" component={BellAnimation} />
        <Stack.Screen name="Balloons" component={Balloons} />
        <Stack.Screen name="ShopeeAd" component={ShopeeAd} />
        <Stack.Screen name="CatAndMouse" component={CatAndMouse} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: "center", alignItems: "center", backgroundColor: "#fff" },
  title: { fontSize: 24, fontWeight: "bold", marginBottom: 20 },
  nav: { width: "100%", alignItems: "center" },
  button: { backgroundColor: "#007bff", padding: 10, marginVertical: 5, borderRadius: 5 },
  buttonText: { color: "#fff", fontSize: 16 },
});
