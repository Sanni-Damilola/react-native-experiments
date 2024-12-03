import { StyleSheet, Text, View } from "react-native"
import React from "react"
import ExpensesOut from "../components/ExpensesOutPut/ExpensesOutPut"

const AllExpenses = () => {
  return <ExpensesOut expensesPeriod="Total" />
}

export default AllExpenses

const styles = StyleSheet.create({})
