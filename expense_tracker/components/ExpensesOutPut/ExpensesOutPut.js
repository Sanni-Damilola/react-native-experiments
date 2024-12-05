import { StyleSheet, Text, View } from "react-native"
import ExpensesSummary from "./ExpensesSummary"
import ExpensesList from "./ExpensesList"
import { GlobalStyles } from "../../constants/styles"

const ExpensesOut = ({ expenses = [], expensesPeriod, fallBackText }) => {
  let content = <Text style={styles.infoText}>{fallBackText}</Text>

  if (expenses.length > 0) {
    content = <ExpensesList expenses={expenses} />
  }

  return (
    <View style={styles.container}>
      <ExpensesSummary expenses={expenses} periodName={expensesPeriod} />
      {content}
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

  infoText: {
    color: "white",
    fontSize: 16,
    textAlign: "center",
    marginTop: 32,
  },
})
