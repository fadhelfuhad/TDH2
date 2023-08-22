import { Stack } from "expo-router";
import Map from "../screens/map";
import React, { useCallback, useMemo, useRef } from "react";
import { Button, StyleSheet, View } from "react-native";
import { GooglePlacesAutocomplete } from "react-native-google-places-autocomplete";
import {
  BottomSheetModal,
  BottomSheetModalProvider,
} from '@gorhom/bottom-sheet';

function map() {
  const bottomSheetModalRef = useRef<BottomSheetModal>(null);

  // variables
  const snapPoints = useMemo(() => ['25%', '50%'], []);

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
      
      <GooglePlacesAutocomplete
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
      />
         {/* <BottomSheetModalProvider>
      <View style={styles.container}>
        <Button
          onPress={handlePresentModalPress}
          title="Present Modal"
          color="black"
        />
        <BottomSheetModal
          ref={bottomSheetModalRef}
          index={1}
          snapPoints={snapPoints}
          onChange={handleSheetChanges}
        >
       
        </BottomSheetModal>
      </View>
    </BottomSheetModalProvider> */}
    </View>
  );
}
export default map;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    height: "50%",
  },
  contentContainer: {
    flex: 1,
    alignItems: 'center',
  },
});