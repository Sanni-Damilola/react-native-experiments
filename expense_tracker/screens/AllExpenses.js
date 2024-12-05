import { StyleSheet, Text, View } from "react-native"
import React, { useContext } from "react"
import ExpensesOut from "../components/ExpensesOutPut/ExpensesOutPut"
import { ExpenseContext } from "../store/expenses-context"

const AllExpenses = () => {
  const expensesCtx = useContext(ExpenseContext)

  return (
    <ExpensesOut
      expenses={expensesCtx.expenses}
      expensesPeriod="Total"
      fallBackText="No Registered Expenses Found"
    />
  )
}

export default AllExpenses

const styles = StyleSheet.create({})
