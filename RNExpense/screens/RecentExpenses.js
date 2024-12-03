import { StyleSheet, Text, View } from "react-native"
import React from "react"
import ExpensesOut from "../components/ExpensesOutPut/ExpensesOutPut"

const RecentExpenses = () => {
  return <ExpensesOut expensesPeriod="Last 7 Days" />
}

export default RecentExpenses

const styles = StyleSheet.create({})
