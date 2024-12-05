import { StyleSheet, Text, View } from "react-native"
import React from "react"
import { NavigationContainer } from "@react-navigation/native"
import { createDrawerNavigator } from "@react-navigation/drawer"
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"
import Welcome from "./screens/Welcome"
import UserScreens from "./screens/UserScreens"
import { Ionicons } from "@expo/vector-icons"

const Drawer = createDrawerNavigator()
const Tab = createBottomTabNavigator()

const App = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={{
          headerStyle: { backgroundColor: "#3c0a6b" },
          headerTintColor: "white",
          // drawerActiveBackgroundColor: "#f0e1ff",
          // drawerActiveTintColor: "#3c0a6b",
          // drawerStyle: { backgroundColor: "#cccc" },
          tabBarActiveTintColor: "#3c0a6b",
        }}>
        <Tab.Screen
          name="welcome"
          component={Welcome}
          options={{
            // drawerLabel: "Welcome Screen",
            // drawerIcon: ({ color, size }) => (
            //   <Ionicons name="home" color={color} size={size} />
            // ),
            tabBarIcon: ({ color, size }) => (
              <Ionicons name="home" color={color} size={size} />
            ),
          }}
        />
        <Tab.Screen
          name="Profile"
          component={UserScreens}
          options={{
            // drawerIcon: ({ color, size }) => (
            //   <Ionicons name="person" color={color} size={size} />
            // ),

            tabBarIcon: ({ color, size }) => (
              <Ionicons name="person" color={color} size={size} />
            ),
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  )
}

export default App

const styles = StyleSheet.create({})
