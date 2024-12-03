import { Dimensions, Image, StyleSheet, Text, View } from "react-native"
import Title from "../components/ui/Title"
import Colors from "../constants/color"
import PrimaryButton from "../components/ui/PrimaryButton"

const GameOverScreen = ({ roundsumber, userNumber, onStartNewGame }) => {
  return (
    <View style={styles.rootContainer}>
      <Title>GAME OVER!</Title>
      <View style={styles.imageContainer}>
        <Image
          style={styles.image}
          source={require("../assets/pawel-czerwinski-g0eRErPBoTA-unsplash.jpg")}
        />
      </View>
      <Text style={styles.summaryText}>
        Your phone neeed <Text style={styles.highlight}>{roundsumber}</Text>{" "}
        round to guess the number{" "}
        <Text style={styles.highlight}>{userNumber}</Text>.
      </Text>
      <PrimaryButton onPress={onStartNewGame}>Start New Game</PrimaryButton>
    </View>
  )
}

export default GameOverScreen

const devicewidth = Dimensions.get("window").width

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    padding: 24,
    justifyContent: "center",
    alignItems: "center",
  },

  imageContainer: {
    borderRadius: devicewidth < 380 ? 75 : 150,
    width: devicewidth < 380 ? 150 : 300,
    height: devicewidth < 380 ? 150 : 300,
    borderWidth: 3,
    borderColor: "black",
    overflow: "hidden",
    margin: 36,
  },

  image: {
    width: "100%",
    height: "100%",
  },

  summaryText: {
    fontFamily: "open-sans-italic",
    fontSize: 20,
    textAlign: "center",
    marginBottom: 24,
  },

  highlight: {
    fontFamily: "open-sans",
    color: Colors.primary500,
    fontWeight: "bolder;",
  },
})
