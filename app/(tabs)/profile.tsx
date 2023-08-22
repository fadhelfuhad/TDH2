import { StyleSheet } from 'react-native';
import { Text, View } from '@/components/Themed';
import Profile from '../screens/profile';
import { Stack } from 'expo-router';

export default function profile() {
  return (
    <View style={styles.container}>
          <Stack.Screen
      options={{
        headerStyle: { backgroundColor: "#62516D" },
        headerTitleAlign: "center",
        headerTitleStyle: {color:"white"}
      }}
    />
      <Profile/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
});
