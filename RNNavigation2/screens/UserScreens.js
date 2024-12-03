import { Button, StyleSheet, Text, View } from "react-native"
import React from "react"

const UserScreens = ({ navigation }) => {
  function openDrawerHandler() {
    // For bottom tab or other navigation:
    navigation.navigate("welcome") // Replace "HomeScreen" with your target screen name

    // For drawer navigation (if used in conjunction with bottom tabs):
    // navigation.toggleDrawer(); // Uncomment if you are using a drawer
  }

  return (
    <View style={styles.container}>
      <Text>
        This is the <Text style={styles.highlight}>User</Text> screen!
      </Text>
      <Button title="Open Drawer" onPress={openDrawerHandler} />
    </View>
  )
}

export default UserScreens

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },

  highlight: {
    color: "purple",
    textAlign: "center",
  },
})
