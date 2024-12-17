import { StyleSheet, Text, View } from "react-native"
import React, { useContext, useEffect, useState } from "react"
import ExpensesOut from "../components/ExpensesOutPut/ExpensesOutPut"
import { ExpenseContext } from "../store/expenses-context"
import { getDateMinusDays } from "../utils/date"
import { fetchExpenses } from "../utils/http"
import LoadingOverlay from "../components/ui/LoadingOverlay"
import ErrorOverLay from "../components/ui/ErrorOverLay"

const RecentExpenses = () => {
  const [isFetching, setIsFetching] = useState(true)
  const [error, setError] = useState()
  const expensesCtx = useContext(ExpenseContext)

  useEffect(() => {
    async function getExpense() {
      setIsFetching(true)
      try {
        const expenses = await fetchExpenses()
        // Ensure all dates are converted to Date objects
        const parsedExpenses = expenses.map((expense) => ({
          ...expense,
          date: new Date(expense.date), // Ensure date is parsed
        }))
        expensesCtx.setExpenses(parsedExpenses)
      } catch (error) {
        setError("Could not fetch expenses")
      }
      setIsFetching(false)
    }

    getExpense()
  }, [])

  const recentExpenses = expensesCtx.expenses?.filter((expense) => {
    const today = new Date()
    const get7DaysAgo = getDateMinusDays(today, 7)
    return expense.date >= get7DaysAgo && expense.date <= today
  })

  if (error && !isFetching) {
    return <ErrorOverLay message={error} />
  }

  if (isFetching) {
    return <LoadingOverlay />
  }

  return (
    <ExpensesOut
      expenses={recentExpenses}
      expensesPeriod="Last 7 Days"
      fallBackText="No Expenses Registered for the Last 7 Days"
    />
  )
}

export default RecentExpenses

const styles = StyleSheet.create({})
