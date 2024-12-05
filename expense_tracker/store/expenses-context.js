import { createContext, useReducer } from "react"
import { my_expenses } from "../data"

export const ExpenseContext = createContext({
  expenses: [],
  addExpense: ({ description, amount, date }) => {},
  deleteExpense: (id) => {},
  updateExpense: (id, { description, amount, date }) => {},
})

function expensesReducer(state, action) {
  switch (action.type) {
    case "ADD":
      const id = new Date().toISOString() + Math.random().toString()
      return [{ ...action.payload, id }, ...state]

    case "UPDATE":
      const updatableExpenseIndex = state.findIndex(
        (expense) => expense.id === action.payload.id
      )

      if (updatableExpenseIndex === -1) return state

      const updatedExpenses = [...state]
      updatedExpenses[updatableExpenseIndex] = {
        ...updatedExpenses[updatableExpenseIndex],
        ...action.payload.data,
      }

      return updatedExpenses

    case "DELETE":
      return state.filter((expense) => expense.id !== action.payload)

    default:
      return state
  }
}

function ExpenseContextProvider({ children }) {
  const [expensesState, dispatch] = useReducer(expensesReducer, my_expenses)

  function addExpense(expenseData) {
    dispatch({ type: "ADD", payload: expenseData })
  }

  function deleteExpense(id) {
    dispatch({ type: "DELETE", payload: id })
  }

  function updateExpense(id, expenseData) {
    dispatch({ type: "UPDATE", payload: { id, data: expenseData } })
  }

  return (
    <ExpenseContext.Provider
      value={{
        expenses: expensesState,
        addExpense,
        deleteExpense,
        updateExpense,
      }}>
      {children}
    </ExpenseContext.Provider>
  )
}

export default ExpenseContextProvider
