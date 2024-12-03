import React from "react"
import { StyleSheet, Text } from "react-native"

const InstructionText = ({ children }) => {
  return <Text style={styles.instructionText}>{children}</Text>
}

export default InstructionText

const styles = StyleSheet.create({
  instructionText: {
    color: "white",
    fontSize: 24,
    fontFamily: "open-sans-italic"
  },
})
