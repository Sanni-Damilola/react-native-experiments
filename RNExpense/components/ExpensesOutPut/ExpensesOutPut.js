import { StyleSheet, View } from "react-native"
import ExpensesSummary from "./ExpensesSummary"
import ExpensesList from "./ExpensesList"
import { my_expenses } from "../../data"
import { GlobalStyles } from "../../constants/styles"

const ExpensesOut = ({ expenses, expensesPeriod }) => {
  return (
    <View style={styles.container}>
      <ExpensesSummary expenses={my_expenses} periodName={expensesPeriod} />
      <ExpensesList expenses={my_expenses} />
    </View>
  )
}

export default ExpensesOut

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 24,
    paddingTop: 24,
    paddingBottom: 0,
    flex: 1,
    backgroundColor: GlobalStyles.colors.primary500,
  },
})
