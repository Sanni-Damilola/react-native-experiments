import { createContext, useReducer } from "react"

export const ExpenseContext = createContext({
  expenses: [],
  addExpense: ({ description, amount, date }) => {},
  setExpenses: (expenses) => {},
  deleteExpense: (id) => {},
  updateExpense: (id, { description, amount, date }) => {},
})

function expensesReducer(state, action) {
  switch (action.type) {
    case "ADD":
      return [action.payload, ...state]

    case "SET":
      return action.payload

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
  const [expensesState, dispatch] = useReducer(expensesReducer, [])

  function addExpense(expenseData) {
    dispatch({ type: "ADD", payload: expenseData })
  }

  function deleteExpense(id) {
    dispatch({ type: "DELETE", payload: id })
  }

  function setExpenses(expenses) {
    dispatch({ type: "SET", payload: expenses })
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
        setExpenses,
      }}>
      {children}
    </ExpenseContext.Provider>
  )
}

export default ExpenseContextProvider
