import { useState } from "react"
import { Button, Image, Modal, StyleSheet, TextInput, View } from "react-native"

const GoalInput = (props) => {
  const [enteredGoalText, setEnteredGoalText] = useState("")
  function goalInputHandler(enteredText) {
    setEnteredGoalText(enteredText)
  }

  function addGoalInput() {
    props.onAddGoal(enteredGoalText)
    setEnteredGoalText("")
  }

  return (
    <Modal visible={props.visible} animationType="slide">
      <View style={inputCcntainer}>
        <Image
          style={image}
          source={require("../assets/images/c96b4d8ac3b1c68595a4e9a9473f6f87.jpg")}
        />
        <TextInput
          value={enteredGoalText}
          style={textInput}
          placeholder="Your course goal!"
          onChangeText={goalInputHandler}
        />
        <View style={buttonCOntainer}>
          <View style={button}>
            <Button title="Cancel" color="#f31282" onPress={props.onCancel} />
          </View>
          <View style={button}>
            <Button title="Add Goal" onPress={addGoalInput} color={"#b180f0"} />
          </View>
        </View>
      </View>
    </Modal>
  )
}

export default GoalInput

const { inputCcntainer, textInput, buttonCOntainer, button, image } =
  StyleSheet.create({
    inputCcntainer: {
      justifyContent: "center",
      alignItems: "center",
      flex: 1,
      padding: 16,
      backgroundColor: "#1C2C5B",
    },

    textInput: {
      borderWidth: 1,
      borderColor: "#efd0ff",
      width: "100%",
      padding: 16,
      backgroundColor: "#efd0ff",
      color: "#120438",
    },

    buttonCOntainer: {
      flexDirection: "row",
      marginTop: 16,
    },

    button: {
      width: "40%",
      marginHorizontal: 8,
    },

    image: {
      width: "100%",
      height: 100,
      margin: 20,
    },
  })
