import { Pressable, StyleSheet } from "react-native"
import React from "react"
import { Ionicons } from "@expo/vector-icons"

const IconButton = ({ icon, size, onPress, color, style }) => {
  return (
    <Pressable
      style={({ pressed }) => [styles.button, style, pressed && styles.pressed]}
      onPress={onPress}>
      <Ionicons name={icon} size={size} color={color} />
    </Pressable>
  )
}

export default IconButton

const styles = StyleSheet.create({
  button: {
    padding: 16, 
    margin: 4,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 50, 
    backgroundColor: "#9b52e5", 
  },
  pressed: {
    opacity: 0.8,
  },
})
