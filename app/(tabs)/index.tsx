import { StyleSheet } from 'react-native';
import { Text, View } from '@/components/Themed';
import Home from '../screens/home';

export default function TabOneScreen() {
  return (
    <View className="flex-1 items-center justify-center bg-white">
      <Home/>
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
