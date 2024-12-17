import { StyleSheet, View, Text } from "react-native"
import React, { useContext, useLayoutEffect, useState } from "react"
import Button from "../components/ui/Button"
import { GlobalStyles } from "../constants/styles"
import { ExpenseContext } from "../store/expenses-context"
import ExpenseForm from "../components/manageExpense/ExpenseForm"
import { deleteExpense, storeExpense, updateExpense } from "../utils/http"
import LoadingOverlay from "../components/ui/LoadingOverlay"

const ManageExpense = ({ route, navigation }) => {
  const [isSubmitting, setIsSubmitting] = useState(false)

  const expensesCtx = useContext(ExpenseContext)

  const editedExpenseId = route.params?.expenseId
  const isEditing = !!editedExpenseId

  const selectedExpense = expensesCtx.expenses.find(
    (expense) => expense.id === editedExpenseId
  )

  useLayoutEffect(() => {
    navigation.setOptions({
      title: isEditing ? "Edit Expense" : "Add Expense",
    })
  }, [navigation, isEditing])

  async function deleteExpenseHandler() {
    try {
      setIsSubmitting(true)
      await deleteExpense(editedExpenseId)
      expensesCtx.deleteExpense(editedExpenseId)
      navigation.goBack()
    } catch (error) {
      console.error("Error deleting expense:", error)
    }
  }

  async function confirmHandler(expenseData) {
    try {
      setIsSubmitting(true)
      if (isEditing) {
        expensesCtx.updateExpense(editedExpenseId, expenseData)
        await updateExpense(editedExpenseId, expenseData)
      } else {
        const id = await storeExpense(expenseData)
        expensesCtx.addExpense({ ...expenseData, id })
      }
      navigation.goBack()
    } catch (error) {
      console.error("Error saving expense:", error)
    }
  }

  function cancelHandler() {
    navigation.goBack()
  }

  if (isSubmitting) {
    return <LoadingOverlay />
  }

  return (
    <View style={styles.container}>
      <ExpenseForm
        onCancel={cancelHandler}
        onSubmit={confirmHandler}
        defaultValue={selectedExpense}
        submitButtonLabel={isEditing ? "Update" : "Add"}
      />

      {isEditing && (
        <View style={styles.deleteContainer}>
          <Text style={styles.warningText}>
            Be careful! This action cannot be undone.
          </Text>
          <Button
            icon="trash"
            color={GlobalStyles.colors.error500}
            size={27}
            onPress={deleteExpenseHandler}
            style={styles.deleteButton}
          />
        </View>
      )}
    </View>
  )
}

export default ManageExpense

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    backgroundColor: GlobalStyles.colors.primary800,
  },
  deleteContainer: {
    marginTop: 24,
    padding: 16,
    backgroundColor: GlobalStyles.colors.primary700,
    borderRadius: 8,
    alignItems: "center",
    justifyContent: "center",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 5,
  },
  warningText: {
    fontSize: 16,
    color: GlobalStyles.colors.error50,
    marginBottom: 8,
    textAlign: "center",
  },
  deleteButton: {
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: GlobalStyles.colors.error50,
    alignItems: "center",
    justifyContent: "center",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 6,
    elevation: 10,
  },
})
