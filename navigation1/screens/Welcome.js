import { StyleSheet, Text, View } from "react-native"
import React from "react"

const Welcome = () => {
  return (
    <View style={styles.container}>
      <Text style={{ textAlign: "center" }}>
        This is the <Text style={styles.welcome}>Welcome</Text> screen!
      </Text>
    </View>
  )
}

export default Welcome

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },

  welcome: {
    color: "#f0e",
    textAlign: "center",
  },
})
