import { StyleSheet, Text, View } from "react-native"

const MainButton = ({ children, onPress }) => {
  return (
    <View style={styles.buttonStyle}>
      <Text style={styles.textStyle} onPress={onPress}>
        {children}
      </Text>
    </View>
  )
}

export default MainButton

const styles = StyleSheet.create({
  buttonStyle: {
    margin: 10,
    elevation: 4,
    backgroundColor: "blue",
    padding: 20,
    borderRadius: 10,
  },

  textStyle: {
    color: "white",
  },
})
