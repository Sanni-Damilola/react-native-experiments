import { Pressable, StyleSheet, Text, View } from "react-native"
import React from "react"
import { GlobalStyles } from "../../constants/styles"
import { getForMattedDate } from "../../utils/date"

const ExpenseItem = ({ description, amount, date }) => {
  function expensePressHandler() {}

  return (
    <Pressable
      onPress={expensePressHandler}
      style={({ pressed }) => [
        styles.pressable,
        pressed && styles.pressedItem,
      ]}>
      <View style={styles.expenseItem}>
        <View style={styles.textContainer}>
          <Text
            style={[styles.textBase, styles.description]}
            numberOfLines={2}
            ellipsizeMode="tail">
            {description}
          </Text>
          <Text style={styles.textBase}>{getForMattedDate(date)}</Text>
        </View>
        <View style={styles.amountContainer}>
          <Text style={styles.amount}>{amount.toFixed(2)}</Text>
        </View>
      </View>
    </Pressable>
  )
}

export default ExpenseItem

const styles = StyleSheet.create({
  pressable: {
    borderRadius: 6,
    overflow: "hidden",
  },
  pressedItem: {
    opacity: 0.75,
  },
  expenseItem: {
    padding: 12,
    marginVertical: 8,
    backgroundColor: GlobalStyles.colors.primary500,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    borderRadius: 6,
    elevation: 3,
  },
  textContainer: {
    flex: 1,
    marginRight: 10,
  },
  textBase: {
    color: GlobalStyles.colors.primary50,
  },
  description: {
    fontSize: 16,
    marginBottom: 4,
    fontWeight: "bold",
  },
  amountContainer: {
    paddingHorizontal: 12,
    paddingVertical: 4,
    backgroundColor: "white",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 4,
    minWidth: 80,
  },
  amount: {
    color: GlobalStyles.colors.primary500,
    fontWeight: "bold",
    fontSize: 16,
  },
})
