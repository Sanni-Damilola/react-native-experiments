import { StyleSheet, Text, TextInput, View } from "react-native"
import React from "react"
import { GlobalStyles } from "../../constants/styles"

const Input = ({ label, style, textInputConfig, inValid }) => {
  let inputStyles = [styles.input]

  if (textInputConfig && textInputConfig.multiline) {
    inputStyles.push(styles.inputMultiline)
  }

  if (inValid) {
    inputStyles.push(styles.invalidInput)
  }

  return (
    <View style={[styles.inputContainer, style]}>
      <Text style={[styles.label, inValid && styles.invalidLabel]}>
        {label}
      </Text>
      <TextInput style={inputStyles} {...textInputConfig} />
    </View>
  )
}

export default Input

const styles = StyleSheet.create({
  inputContainer: {
    marginHorizontal: 4,
    marginVertical: 8,
  },

  label: {
    fontSize: 12,
    color: GlobalStyles.colors.primary100,
    marginBottom: 4,
  },

  input: {
    backgroundColor: GlobalStyles.colors.primary200,
    padding: 6,
    borderRadius: 6,
    fontSize: 18,
    color: GlobalStyles.colors.primary700,
  },

  inputMultiline: {
    minHeight: 100,
    textAlignVertical: "top",
  },

  invalidLabel: {
    color: GlobalStyles.colors.error500,
  },

  invalidInput: {
    backgroundColor: GlobalStyles.colors.error50,
  },
})
