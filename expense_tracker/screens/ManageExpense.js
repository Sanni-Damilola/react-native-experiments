import { StyleSheet, View, Text } from "react-native"
import React, { useContext, useLayoutEffect } from "react"
import Button from "../components/ui/Button"
import { GlobalStyles } from "../constants/styles"
import { ExpenseContext } from "../store/expenses-context"
import ExpenseForm from "../components/manageExpense/ExpenseForm"

const ManageExpense = ({ route, navigation }) => {
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

  function deleteEExpenseHandler() {
    expensesCtx.deleteExpense(editedExpenseId)
    navigation.goBack()
  }

  function confirmHandler(expenseData) {
    if (isEditing) {
      expensesCtx.updateExpense(editedExpenseId, expenseData)
    } else {
      expensesCtx.addExpense(expenseData)
    }
    navigation.goBack()
  }

  function cancelHandler() {
    navigation.goBack()
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
            onPress={deleteEExpenseHandler}
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
