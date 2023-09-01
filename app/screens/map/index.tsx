import { useState } from "react";
import { StyleSheet, View } from "react-native";
import MapView, { Callout, Marker } from "react-native-maps";
import { Text } from "@/components/Themed";


function map() {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars, react-hooks/rules-of-hooks
  const [mapRegion, setMapRegion] = useState({
    latitude: 26.0667,
    longitude: 50.5577,
    latitudeDelta: 0.0922,
    longitudeDelta: 0.0421,
  });
  return (
    <View style={styles.container}>
      <MapView
        style={{ alignSelf: "stretch", height: "100%" }}
        region={mapRegion}
      ><Marker
      coordinate={{latitude: 26.0567, longitude: 50.5577}}
      style={{borderColor:"white"}}
    >
      <Marker
      coordinate={{latitude: 26.0667, longitude: 50.5577}}
      style={{borderColor:"white"}}
    >
      <Marker
      coordinate={{latitude: 26.0667, longitude: 50.5577}}
      style={{borderColor:"white"}}
    >
      <Marker
      coordinate={{latitude: 26.0667, longitude: 50.5577}}
      style={{borderColor:"white"}}
    ></Marker>
    </Marker>
    </Marker>
    <Callout><Text>Im here</Text></Callout></Marker>
      </MapView>
    </View>
  );
}
export default map;
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});