import { StyleSheet, Text, View, Dimensions } from "react-native"
import Colors from "../../constants/color"

const NumberConatiner = ({ children, style }) => {
  return (
    <View style={styles.container}>
      <Text style={[styles.numberText, style]}>{children}</Text>
    </View>
  )
}

export default NumberConatiner

const deviceWidth = Dimensions.get("screen").width
const deviceHeight = Dimensions.get("screen").height

const styles = StyleSheet.create({
  container: {
    borderWidth: 4,
    borderColor: Colors.accent500,
    padding: deviceWidth < 350 ? 12 : 24,
    margin: deviceWidth < 350 ? 12 : 24,
    borderRadius: 8,
    margin: 24,
    justifyContent: "center",
    alignItems: "center",
  },
  numberText: {
    color: Colors.accent500,
    fontSize: deviceWidth < 350 ? 28 : 36,
    fontFamily: "open-sans",
  },
})
