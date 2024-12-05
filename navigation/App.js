import { StatusBar } from "expo-status-bar"
import { StyleSheet, View } from "react-native"
import { NavigationContainer } from "@react-navigation/native"
import Home from "./screens/Home"
import { createStackNavigator } from "@react-navigation/stack"
import About from "./screens/About"
import Contact from "./screens/Contact"

const Stack = createStackNavigator()

export default function App() {
  return (
    <NavigationContainer>
      <StatusBar style="auto" />
      <Stack.Navigator>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="About" component={About} />
        <Stack.Screen name="Contact" component={Contact} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "lavender",
    alignItems: "center",
    justifyContent: "center",
  },
})
