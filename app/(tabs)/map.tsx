import { StyleSheet } from 'react-native';

import EditScreenInfo from '@/components/EditScreenInfo';
import { Text, View } from '@/components/Themed';
import Map from '../map';
import MapView from 'react-native-maps';

export default function map() {
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
