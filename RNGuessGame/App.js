import { ImageBackground, StyleSheet, SafeAreaView } from "react-native"
import StartGameScreen from "./screens/StartGameScreen"
import { LinearGradient } from "expo-linear-gradient"
import { useState } from "react"
import GameScreen from "./screens/GameScreen"
import { StatusBar } from "expo-status-bar"
import Colors from "./constants/color"
import GameOverScreen from "./screens/GameOverScreen"
import { useFonts } from "expo-font"
import AppLoading from "expo-app-loading"

export default function App() {
  const [userNumber, setUserNumber] = useState()
  const [gameIsOver, setGameIsOver] = useState(true)
  const [guessRounds, setGuessRounds] = useState(0)

  const [fontsLoading] = useFonts({
    "open-sans-italic": require("./assets/fonts/OpenSans-Italic-VariableFont_wdth,wght.ttf"),
    "open-sans": require("./assets/fonts/OpenSans-VariableFont_wdth,wght.ttf"),
  })

  if (!fontsLoading) {
    return <AppLoading />
  }

  function pickedNumberHandler(pickedNumber) {
    setUserNumber(pickedNumber)
    setGameIsOver(false)
  }

  function startNewFGameHandler() {
    setUserNumber(null)
    setGuessRounds(0)
  }

  let screen = <StartGameScreen onPickNumber={pickedNumberHandler} />

  if (userNumber) {
    screen = (
      <GameScreen userNumber={userNumber} onGameOver={gameHoverHandler} />
    )
  }

  if (gameIsOver && userNumber) {
    screen = (
      <GameOverScreen
        userNumber={userNumber}
        onStartNewGame={startNewFGameHandler}
        roundsumber={guessRounds}
      />
    )
  }

  function gameHoverHandler(numberOfRounds) {
    setGameIsOver(true)
    setGuessRounds(numberOfRounds)
  }

  return (
    <>
      <StatusBar style="inverted" />
      <LinearGradient
        colors={[Colors.primary700, Colors.accent500]}
        style={styles.rootScreen}>
        <ImageBackground
          source={require("./assets/colourblind-kevin-NtzHyyixxmo-unsplash.jpg")}
          resizeMode="cover"
          style={styles.rootScreen}
          imageStyle={styles.bgcImg}>
          <SafeAreaView style={styles.rootScreen}>{screen}</SafeAreaView>
        </ImageBackground>
      </LinearGradient>
    </>
  )
}

const styles = StyleSheet.create({
  rootScreen: {
    flex: 1,
  },

  bgcImg: {
    opacity: 0.15,
  },
})
