import { StyleSheet, Text, View } from "react-native"
import React, { useContext } from "react"
import ExpensesOut from "../components/ExpensesOutPut/ExpensesOutPut"
import { ExpenseContext } from "../store/expenses-context"
import { getDateMinusDays } from "../utils/date"

const RecentExpenses = () => {
  const expensesCtx = useContext(ExpenseContext)
  const recentExpenses = expensesCtx.expenses.filter((expense) => {
    const today = new Date()
    const get7DaysAgo = getDateMinusDays(today, 7)

    return expense.date >= get7DaysAgo && expense.date <= today
  })

  return <ExpensesOut expenses={recentExpenses} expensesPeriod="Last 7 Days" fallBackText="No Expenses Registered for the Last 7 Days" />
}

export default RecentExpenses

const styles = StyleSheet.create({})
