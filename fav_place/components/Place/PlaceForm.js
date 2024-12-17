import { ScrollView, StyleSheet, Text, TextInput, View } from "react-native"
import React, { useState } from "react"
import { colors } from "../../constants/colors"
import ImagePicker from "./ImagePicker"
import LocationPicker from "./LocationPicker"

const PlaceForm = () => {
  const [enteredTitle, setEnteredTitle] = useState("")

  function onChangedTitleHandler(enteredText) {
    setEnteredTitle(enteredText)
  }

  return (
    <ScrollView style={styles.form}>
      <View style={styles.inputContainer}>
        <Text style={styles.label}>Title</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter a title..."
          placeholderTextColor={colors.primary300}
          value={enteredTitle}
          onChangeText={onChangedTitleHandler}
        />
      </View>
      <ImagePicker />
      <LocationPicker />
    </ScrollView>
  )
}

export default PlaceForm

const styles = StyleSheet.create({
  form: {
    flex: 1,
    padding: 24,
    backgroundColor: colors.background,
  },
  inputContainer: {
    marginBottom: 20,
  },
  label: {
    fontWeight: "600",
    marginBottom: 6,
    color: colors.primary200,
    fontSize: 16,
  },
  input: {
    paddingHorizontal: 12,
    paddingVertical: 10,
    fontSize: 16,
    borderWidth: 1,
    borderRadius: 8,
    borderColor: colors.primary200,
    backgroundColor: colors.primary100,
    color: colors.primary800,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
})
