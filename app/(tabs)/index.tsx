import { Stack } from "expo-router";
import { Image } from "react-native";
import { View } from "@/components/Themed";
import Home from "../screens/home";

function LogoTitle() {
  return (
    <Image
      style={{ width: 100, height: 27, bottom: 1 }}
      // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment, @typescript-eslint/no-require-imports
      source={require("@/assets/icons/logo.png")}
      alt="WearMeGo Logo"
    />
  );
}
export default function TabOneScreen() {
  return (
    <View className="flex-1">
      <Stack.Screen
        options={{
          headerStyle: { backgroundColor: "#003867" },
          headerTitle: () => <LogoTitle />,
          headerTitleAlign: "center",
        }}
      />
      <Home />
    </View>
  );
}
