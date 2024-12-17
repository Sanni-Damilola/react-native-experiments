import { StatusBar } from "expo-status-bar"
import { StyleSheet, View } from "react-native"
import { NavigationContainer } from "@react-navigation/native"
import { createNativeStackNavigator } from "@react-navigation/native-stack"
import AllPlace from "./screens/AllPlace"
import AddPlace from "./screens/AddPlace"
import IconButton from "./components/ui/IconButton"
import { colors } from "./constants/colors"
import Map from "./screens/Map"

const Stack = createNativeStackNavigator()

export default function App() {
  return (
    <>
      <StatusBar style="light" />
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            headerStyle: { backgroundColor: colors.primary500 },
            headerTintColor: "white",
            contentStyle: { backgroundColor: colors.gray700 },
          }}>
          <Stack.Screen
            name="AllPlaces"
            component={AllPlacesScreen}
            options={{ title: "All Places" }}
          />
          <Stack.Screen
            name="AddPlace"
            component={AddPlace}
            options={{
              title: "Add a New Place",
            }}
          />
          <Stack.Screen
            name="Map"
            component={Map}
            options={{
              title: "Map",
            }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  )
}

function AllPlacesScreen({ navigation }) {
  return (
    <View style={styles.screen}>
      <AllPlace />

      <IconButton
        icon="add"
        size={40}
        color="white"
        onPress={() => navigation.navigate("AddPlace")}
        style={styles.floatingButton}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },
  floatingButton: {
    position: "absolute",
    bottom: 20,
    right: 20,
    backgroundColor: colors.accent500,
    borderRadius: 60,
    width: 80,
    height: 80,
    justifyContent: "center",
    alignItems: "center",
    elevation: 5,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
  },
})
