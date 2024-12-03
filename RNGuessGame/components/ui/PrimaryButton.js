import { Pressable, StyleSheet, Text, View } from "react-native"
import Colors from "../../constants/color"

const PrimaryButton = ({ children, onPress }) => {
  return (
    <View style={buttonOuterContainer}>
      <Pressable
        style={({ pressed }) =>
          pressed ? [buttonInnerContainer, pressed] : buttonInnerContainer
        }
        android_ripple={{ color: Colors.primary500 }}
        onPress={onPress}>
        <Text style={buttontext}>{children}</Text>
      </Pressable>
    </View>
  )
}

export default PrimaryButton

const { create } = StyleSheet

const { buttontext, buttonInnerContainer, buttonOuterContainer } = create({
  buttonOuterContainer: {
    borderRadius: 28,
    margin: 4,
    overflow: "hidden",
  },

  buttonInnerContainer: {
    backgroundColor: Colors.primary500,
    paddingVertical: 8,
    paddingHorizontal: 16,
    elevation: 2,
  },

  buttontext: {
    color: "#fff",
    textAlign: "center",
  },

  pressedForIos: {
    opacity: 0.75,
  }, // (IOS)
})
