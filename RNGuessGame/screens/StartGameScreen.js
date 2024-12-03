import {
  Alert,
  StyleSheet,
  Dimensions,
  TextInput,
  View,
  useWindowDimensions,
  KeyboardAvoidingView,
  ScrollView,
} from "react-native"
import { useState } from "react"
import PrimaryButton from "../components/ui/PrimaryButton"
import Colors from "../constants/color"
import Card from "../components/ui/Card"
import InstructionText from "../components/ui/InstructionText"

const StartGameScreen = ({ onPickNumber }) => {
  const [enteredNumber, setEnteredNumber] = useState("")

  function numberInputHandler(enteredText) {
    setEnteredNumber(enteredText)
  }

  function resetInputhandler() {
    setEnteredNumber("")
  }

  const { width, height } = useWindowDimensions()

  function confirmInputNumber() {
    const chosenNumber = parseInt(enteredNumber)

    if (isNaN(chosenNumber) || chosenNumber <= 0 || chosenNumber > 99) {
      Alert.alert(
        "Invalid Number",
        "Number has to be a number between 1 and 99",
        [
          {
            text: "Okay",
            style: "destructive",
            onPress: resetInputhandler,
          },
        ]
      )
      return
    }
    onPickNumber(chosenNumber)
  }

  const marginTopDistance = height < 400 ? 30 : 100

  return (
    <ScrollView style={screen}>
      <KeyboardAvoidingView behavior="position" style={screen}>
        <View style={[rootContainer, { marginTop: marginTopDistance }]}>
          <InstructionText>Guess My Number</InstructionText>
          <Card>
            <TextInput
              maxLength={2}
              keyboardType="number-pad"
              style={numberInput}
              autoCapitalize="none"
              autoCorrect={false}
              value={enteredNumber}
              onChangeText={numberInputHandler}
            />
            <View style={buttonsContainer}>
              <View style={buttonContainer}>
                <PrimaryButton onPress={resetInputhandler}>Rest</PrimaryButton>
              </View>
              <View style={buttonContainer}>
                <PrimaryButton onPress={confirmInputNumber}>
                  Confirm
                </PrimaryButton>
              </View>
            </View>
          </Card>
        </View>
      </KeyboardAvoidingView>
    </ScrollView>
  )
}

export default StartGameScreen

const deviceHeight = Dimensions.get("window").height

const {
  numberInput,
  buttonsContainer,
  buttonContainer,
  rootContainer,
  screen,
} = StyleSheet.create({
  screen: {
    flex: 1,
  },

  rootContainer: {
    flex: 1,
    alignItems: "center",
  },

  numberInput: {
    height: 50,
    fontSize: 32,
    borderBottomColor: Colors.accent500,
    borderBottomWidth: 2,
    color: Colors.accent500,
    marginVertical: 8,
    fontWeight: "bold",
    width: 50,
    textAlign: "center",
  },

  buttonsContainer: {
    flexDirection: "row",
  },
  buttonContainer: {
    flex: 1,
  },
})
