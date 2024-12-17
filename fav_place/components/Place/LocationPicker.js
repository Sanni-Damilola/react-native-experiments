import { StyleSheet, Text, View, Alert } from "react-native"
import React, { useEffect, useState } from "react"
import OutLineButton from "../ui/OutLineButton"
import { colors } from "../../constants/colors"
import {
  getCurrentPositionAsync,
  PermissionStatus,
  useForegroundPermissions,
} from "expo-location"
import { useNavigation, useRoute, useIsFocused } from "@react-navigation/native"
import MapView, { Marker } from "react-native-maps"

const LocationPicker = () => {
  const [locationPermissionInformation, requestPermission] =
    useForegroundPermissions()
  const [pickedLocation, setPickedLocation] = useState(null)
  const navigation = useNavigation()
  const route = useRoute()
  const isFocused = useIsFocused()

  async function verifyPermission() {
    if (
      locationPermissionInformation.status === PermissionStatus.UNDETERMINED
    ) {
      const permissionResponse = await requestPermission()
      return permissionResponse.granted
    }

    if (locationPermissionInformation.status === PermissionStatus.DENIED) {
      Alert.alert(
        "Permission Denied",
        "You need to grant location permissions to use this feature."
      )
      return false
    }

    return true
  }

  useEffect(() => {
    if (isFocused && route.params) {
      const mapPickedLocation = {
        lat: route.params.latitude,
        lng: route.params.longitude,
      }
      setPickedLocation(mapPickedLocation)
    }
  }, [route, isFocused])

  async function getLocationHandler() {
    const hasPermission = await verifyPermission()
    if (!hasPermission) return

    const location = await getCurrentPositionAsync()
    setPickedLocation({
      lat: location.coords.latitude,
      lng: location.coords.longitude,
    })
  }

  function pickOnMapHandler() {
    navigation.navigate("Map")
  }

  let locationPreview = <Text>No location chosen yet!</Text>

  if (pickedLocation) {
    locationPreview = (
      <MapView
        style={styles.mapPreview}
        region={{
          latitude: pickedLocation.lat,
          longitude: pickedLocation.lng,
          latitudeDelta: 0.01,
          longitudeDelta: 0.01,
        }}>
        <Marker
          coordinate={{
            latitude: pickedLocation.lat,
            longitude: pickedLocation.lng,
          }}
        />
      </MapView>
    )
  }

  return (
    <View>
      <View style={styles.mapContainer}>{locationPreview}</View>
      <View style={styles.actions}>
        <OutLineButton onPress={getLocationHandler} icon="location">
          Locate Me
        </OutLineButton>
        <OutLineButton onPress={pickOnMapHandler} icon="map">
          Pick on Map
        </OutLineButton>
      </View>
    </View>
  )
}

export default LocationPicker

const styles = StyleSheet.create({
  mapContainer: {
    width: "100%",
    height: 200,
    marginVertical: 8,
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
    backgroundColor: colors.primary100,
    borderRadius: 4,
  },
  actions: {
    flexDirection: "row",
    justifyContent: "space-around",
  },
  mapPreview: {
    width: "100%",
    height: "100%",
    borderRadius: 4,
  },
})
