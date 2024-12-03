import React from "react"
import { Text, View } from "react-native"
import MainButton from "../components/MainButton"

const Contact = ({ navigation }) => {
  function navigate(to) {
    navigation.navigate(to)
  }

  return (
    <View>
      <MainButton onPress={() => navigate("Home")}>Home</MainButton>
      <MainButton onPress={() => navigate("About")}>About</MainButton>
      <MainButton onPress={() => navigate("Contact")}>Contact</MainButton>
    </View>
  )
}

export default Contact
