import React from "react"
import { Dimensions, StyleSheet, View } from "react-native"
import Colors from "../../constants/color"

const Card = ({ children }) => {
  return <View style={styles.card}>{children}</View>
}

export default Card

const deviceWidth = Dimensions.get("window").width

const styles = StyleSheet.create({
  card: {
    marginTop: deviceWidth < 380 ? 18 : 36,
    justifyContent: "center",
    alignItems: "center",
    marginHorizontal: 24,
    padding: 16,
    backgroundColor: Colors.primary800,
    borderRadius: 8,
    elevation: 4, // shadow (Android  only)
    // (IOS)
    shadowColor: "black",
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 6,
    shadowOpacity: 0.25,
  },
})
