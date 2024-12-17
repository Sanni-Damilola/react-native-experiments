import { Alert, Image, StyleSheet, Text, View } from "react-native"
import React, { useState } from "react"
import {
  launchCameraAsync,
  useCameraPermissions,
  PermissionStatus,
} from "expo-image-picker"
import { colors } from "../../constants/colors"
import OutLineButton from "../ui/OutLineButton"

const ImagePicker = () => {
  const [cameraPermissionInformation, requestPermission] =
    useCameraPermissions()
  const [pickedImage, setPickedImage] = useState()

  async function verifyPermission() {
    if (cameraPermissionInformation.status === PermissionStatus.UNDETERMINED) {
      const permissionResponse = await requestPermission()

      return permissionResponse.granted
    }

    if (cameraPermissionInformation.status === PermissionStatus.DENIED) {
      Alert.alert(
        "Can't Access Camera",
        "You need to grant camera permissions to use this app"
      )

      return false
    }

    return true
  }

  async function takeImageHandler() {
    const hasPermission = await verifyPermission()

    if (!hasPermission) {
      return
    }

    const image = await launchCameraAsync({
      aspect: [16, 9],
      allowsEditing: true,
      quality: 0.5,
    })

    const uri = image?.assets?.[0]?.uri
    setPickedImage(uri)
  }

  let imagePreview = (
    <Text style={{ color: colors.primary500 }}>No Image taken Yet.</Text>
  )

  if (pickedImage) {
    console.log(pickedImage)

    imagePreview = <Image source={{ uri: pickedImage }} style={styles.image} />
  }

  return (
    <View>
      <View style={styles.imagePreview}>{imagePreview}</View>
      <OutLineButton icon="camera" onPress={takeImageHandler}>
        Take Image
      </OutLineButton>
    </View>
  )
}

export default ImagePicker

const styles = StyleSheet.create({
  imagePreview: {
    width: "100%",
    height: 200,
    marginVertical: 8,
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
    backgroundColor: colors.primary100,
    borderRadius: 4,
  },

  image: {
    width: "100%",
    height: "100%",
    borderRadius: 4,
  },
})
