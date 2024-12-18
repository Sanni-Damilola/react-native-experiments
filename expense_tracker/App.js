import { StatusBar } from "expo-status-bar"
import { StyleSheet } from "react-native"
import { NavigationContainer } from "@react-navigation/native"
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"
import { createNativeStackNavigator } from "@react-navigation/native-stack"
import ManageExpense from "./screens/ManageExpense"
import RecentExpenses from "./screens/RecentExpenses"
import AllExpenses from "./screens/AllExpenses"
import { GlobalStyles } from "./constants/styles"
import { Ionicons } from "@expo/vector-icons"
import Button from "./components/ui/Button"
import ExpenseContextProvider from "./store/expenses-context"

const Stack = createNativeStackNavigator()
const Tabs = createBottomTabNavigator()

function ExpensesOverView() {
  return (
    <Tabs.Navigator
      screenOptions={({ navigation }) => ({
        headerStyle: { backgroundColor: GlobalStyles.colors.primary500 },
        headerTintColor: "white",
        tabBarStyle: { backgroundColor: GlobalStyles.colors.primary500 },
        tabBarActiveTintColor: GlobalStyles.colors.accent500,
        headerRight: ({ tintColor }) => (
          <Button
            icon="add"
            size={24}
            color={tintColor}
            onPress={() => {
              navigation.navigate("ManageExpense")
            }}
          />
        ),
      })}>
      <Tabs.Screen
        name="RecentExpenses"
        component={RecentExpenses}
        options={{
          title: "Recent Expenses",
          tabBarLabel: "Recent",
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="hourglass" size={size} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="AllExpenses"
        component={AllExpenses}
        options={{
          title: "All Expenses",
          tabBarLabel: "All Expenses",
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="calendar" size={size} color={color} />
          ),
        }}
      />
    </Tabs.Navigator>
  )
}

export default function App() {
  return (
    <>
      <StatusBar style="light" />
      <ExpenseContextProvider>
        <NavigationContainer style={styles.container}>
          <Stack.Navigator
            screenOptions={{
              headerStyle: { backgroundColor: GlobalStyles.colors.primary500 },
              headerTintColor: "white",
            }}>
            <Stack.Screen
              name="ExpensesOverView"
              component={ExpensesOverView}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              options={{
                presentation: "modal",
              }}
              name="ManageExpense"
              component={ManageExpense}
            />
          </Stack.Navigator>
        </NavigationContainer>
      </ExpenseContextProvider>
    </>
  )
}

const styles = StyleSheet.create({
  container: {},
})
