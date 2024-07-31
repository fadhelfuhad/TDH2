import { StyleSheet } from "react-native";
import { Text, View } from "@/components/Themed";
import Cart from "../screens/cart";
import { Stack } from "expo-router";

export default function cart() {
  return (
    <View style={styles.container}>
      <Stack.Screen
        options={{
          headerStyle: { backgroundColor: "#003867" },
          headerTitleAlign: "center",
          headerTitleStyle: { color: "white" },
        }}
      />
      <Cart />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: "80%",
  },
});
