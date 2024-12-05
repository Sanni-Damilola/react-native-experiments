import { Pressable, StyleSheet, Text, View } from "react-native"
import React from "react"
import { GlobalStyles } from "../../constants/styles"

const CustomButton = ({ children, onPress, mode, style }) => {
  return (
    <View style={[style, styles.buttonWrapper]}>
      <Pressable
        onPress={onPress}
        style={({ pressed }) => [pressed && styles.pressed]}>
        <View style={[styles.button, mode === "flat" && styles.flat]}>
          <Text style={[styles.buttonText, mode === "flat" && styles.flatText]}>
            {children}
          </Text>
        </View>
      </Pressable>
    </View>
  )
}

export default CustomButton

const styles = StyleSheet.create({
  button: {
    borderRadius: 8,
    paddingVertical: 12,
    paddingHorizontal: 20,
    backgroundColor: GlobalStyles.colors.primary500,
    elevation: 2,
    shadowColor: "black",
    shadowOffset: { width: 1, height: 1 },
    shadowOpacity: 0.3,
    shadowRadius: 3,
    alignItems: "center",
    justifyContent: "center",
  },

  flat: {
    backgroundColor: "transparent",
  },

  buttonText: {
    color: "white",
    textAlign: "center",
    fontSize: 16,
    fontWeight: "600",
    flexShrink: 1,
  },

  flatText: {
    color: GlobalStyles.colors.primary400,
  },

  pressed: {
    opacity: 0.75,
    backgroundColor: GlobalStyles.colors.primary100,
    borderRadius: 8,
  },

  buttonWrapper: {
    marginHorizontal: 8,
    flexShrink: 0,
  },
})
