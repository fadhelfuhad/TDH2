import { Stack } from "expo-router";
import { Image } from "react-native";
import { View } from '@/components/Themed';
import Home from '../screens/home';

function LogoTitle() {
  return (
    <Image
      style={{ width: 30, height: 30, bottom: 1 }}
      // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment, @typescript-eslint/no-require-imports
      source={require("@/assets/icons/logo.png")}
      alt="Parcel Logo"
    />
  );
}
export default function TabOneScreen() {
  return (
    <View className="flex-1">
    <Stack.Screen
      options={{
        headerStyle: { backgroundColor: "#62516D" },
        headerTitle: () => <LogoTitle />,
        headerTitleAlign: "center",
      }}
    />
    <Home />
  </View>
  );
}
