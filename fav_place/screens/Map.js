import { Alert, StyleSheet } from "react-native"
import React, { useCallback, useLayoutEffect, useState } from "react"
import MapView, { Marker } from "react-native-maps"
import IconButton from "../components/ui/IconButton"

const Map = ({ navigation }) => {
  const [selectedLocation, setSelectedLocation] = useState(null)

  const region = {
    latitude: 6.5244,
    longitude: 3.3792,
    latitudeDelta: 0.0922,
    longitudeDelta: 0.0421,
  }

  function selectLocationHandler(event) {
    const { latitude, longitude } = event.nativeEvent.coordinate
    setSelectedLocation({ lat: latitude, lng: longitude })
  }

  const savedPickedLocationHandler = useCallback(() => {
    if (!selectedLocation) {
      Alert.alert(
        "No location picked!",
        "You have to pick a location (by tapping on the map) first!"
      )
      return
    }

    console.log("Navigating with:", selectedLocation)
    navigation.navigate("AddPlace", {
      latitude: selectedLocation.lat,
      longitude: selectedLocation.lng,
    })
  }, [navigation, selectedLocation])

  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: ({ tintColor }) => (
        <IconButton
          icon="save"
          size={24}
          color={tintColor}
          onPress={savedPickedLocationHandler}
        />
      ),
    })
  }, [navigation, savedPickedLocationHandler])

  return (
    <MapView
      style={styles.map}
      initialRegion={region}
      onPress={selectLocationHandler}>
      {selectedLocation && (
        <Marker
          coordinate={{
            latitude: selectedLocation.lat,
            longitude: selectedLocation.lng,
          }}
        />
      )}
    </MapView>
  )
}

export default Map

const styles = StyleSheet.create({
  map: {
    flex: 1,
  },
})
