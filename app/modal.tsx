import { StatusBar } from 'expo-status-bar';
import { Platform, StyleSheet } from 'react-native';

import { Text, View } from '@/components/Themed';
import MapView from 'react-native-maps';

export default function ModalScreen() {
  return (
    <View style={styles.container}>
    <MapView style={styles.map} />
  </View>
  );
}

const styles = StyleSheet.create({
 
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
  container: {
    flex: 1,
  },
  map: {
    width: '100%',
    height: '100%',
  },
});
