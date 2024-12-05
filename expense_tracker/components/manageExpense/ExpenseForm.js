import { StyleSheet, Text, View } from "react-native"
import React, { useState } from "react"
import Input from "./Input"
import CustomButton from "../../components/ui/CustomButton"
import { getForMattedDate } from "../../utils/date"
import { Alert } from "react-native"
import { GlobalStyles } from "../../constants/styles"

const ExpenseForm = ({
  onCancel,
  onSubmit,
  submitButtonLabel,
  defaultValue,
}) => {
  const [inputs, setInputs] = useState({
    amount: {
      value: defaultValue ? defaultValue.amount.toString() : "",
      isValid: true,
    },
    date: {
      value: defaultValue ? getForMattedDate(defaultValue.date) : "",
      isValid: true,
    },
    description: {
      value: defaultValue ? defaultValue.description.toString() : "",
      isValid: true,
    },
  })

  function inputChangedHandler(inputIdentifier, enteredValue) {
    setInputs((currentInputs) => {
      return {
        ...currentInputs,
        [inputIdentifier]: { value: enteredValue, isValid: true },
      }
    })
  }

  function submitHandler() {
    const expenseData = {
      amount: +inputs.amount.value,
      date: new Date(inputs.date.value),
      description: inputs.description.value,
    }

    const amountIsValid = !isNaN(expenseData.amount) && expenseData.amount > 0
    const isValidDate = expenseData.date.toString() !== "Invalid Date"
    const isValidDescription = expenseData.description.trim().length > 0

    if (!amountIsValid || !isValidDate || !isValidDescription) {
      // Alert.alert("Invalid Input", "Please check your input values")
      setInputs((currentInputs) => {
        return {
          amount: { value: currentInputs.amount.value, isValid: amountIsValid },
          date: { value: currentInputs.date.value, isValid: isValidDate },
          description: {
            value: currentInputs.description.value,
            isValid: isValidDescription,
          },
        }
      })
      return
    }

    onSubmit(expenseData)
  }

  const forIsInvalid =
    !inputs.amount.isValid ||
    !inputs.date.isValid ||
    !inputs.description.isValid

  return (
    <View style={styles.formContainer}>
      <Text style={styles.title}>Your Expense</Text>
      <View style={styles.inputRow}>
        <Input
          label="Amount"
          textInputConfig={{
            keyboardType: "decimal-pad",
            onChangeText: inputChangedHandler.bind(this, "amount"),
            value: inputs.amount.value,
          }}
          style={styles.rowInput}
          inValid={!inputs.amount.isValid}
        />

        <Input
          label="Date"
          textInputConfig={{
            placeholder: "YYYY-MM-DD",
            maxLength: 10,
            onChangeText: inputChangedHandler.bind(this, "date"),
            value: inputs.date.value,
          }}
          style={styles.rowInput}
          inValid={!inputs.date.isValid}
        />
      </View>
      <Input
        style={styles.fullWidthInput}
        label="Description"
        textInputConfig={{
          multiline: true,
          onChangeText: inputChangedHandler.bind(this, "description"),
          value: inputs.description.value,
        }}
        inValid={!inputs.description.isValid}
      />

      {forIsInvalid && (
        <Text style={styles.errorText}>
          Invalid Input, Please check your input values
        </Text>
      )}

      <View style={styles.buttonContainer}>
        <CustomButton mode="flat" onPress={onCancel}>
          Cancel
        </CustomButton>
        <CustomButton onPress={submitHandler}>{submitButtonLabel}</CustomButton>
      </View>
    </View>
  )
}

export default ExpenseForm

const styles = StyleSheet.create({
  formContainer: {
    padding: 16,
  },
  inputRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 16,
  },
  rowInput: {
    flex: 1,
    marginHorizontal: 8,
  },
  fullWidthInput: {
    marginTop: 16,
  },

  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: "white",
    textAlign: "center",
    marginVertical: 24,
  },

  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    marginVertical: 16,
  },

  errorText: {
    textAlign: "center",
    color: GlobalStyles.colors.error500,
    margin: 8,
  },
})
