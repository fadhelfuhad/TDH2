import { Stack } from "expo-router";
import Map from "../screens/map";
import React, { useCallback, useMemo, useRef } from "react";
import { Button, StyleSheet, View, Text } from "react-native";
import { GooglePlacesAutocomplete } from "react-native-google-places-autocomplete";
import BottomSheet, {
  BottomSheetModal,
BottomSheetTextInput
} from '@gorhom/bottom-sheet';
import MapCatelogue from "@/components/MapCatelogue";


function map() {
  const bottomSheetModalRef = useRef<BottomSheetModal>(null);

  // variables
  const snapPoints = useMemo(() => ['25%', '100%'], []);

  // callbacks
  const handlePresentModalPress = useCallback(() => {
    bottomSheetModalRef.current?.present();
  }, []);
  const handleSheetChanges = useCallback((index: number) => {
    console.log('handleSheetChanges', index);
  }, []);

  return (
    <View style={styles.container}>
       <Stack.Screen
      options={{
        headerStyle: { backgroundColor: "#62516D" },
        headerTitleAlign: "center",
        headerTitleStyle: {color:"white"}
      }}
    />
      <Map />
      
      {/* <GooglePlacesAutocomplete
        placeholder="Search"
        onPress={(data, details = null) => {
          // 'details' is provided when fetchDetails = true
          console.log(data, details);
        }}
        
        query={{
          key: "AIzaSyBSxMmDVlldnooFEue930cMR2WJLFZ26Xk",
          language: "en",
          // components: "country:us",
        }}
      /> */}
       <BottomSheet snapPoints={snapPoints}>
        <View style={styles.contentContainer}>
          {/* <BottomSheetTextInput value="Search nearby..." style={styles.textInput} /> */}
      <MapCatelogue/>
      </View>  
      </BottomSheet>
    </View>
  );
}
export default map;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    height: "100%",
  },
  sheetcontainer: {
    flex: 1,
    padding: 24,
    backgroundColor: "grey",
  },
  textInput: {
    alignSelf: "stretch",
    marginHorizontal: 12,
    marginBottom: 12,
    padding: 12,
    borderRadius: 12,
    backgroundColor: "grey",
    color: "white",
    textAlign: "center",
  },
  contentContainer: {
    flex: 1,
    alignItems: 'center',
  },
});