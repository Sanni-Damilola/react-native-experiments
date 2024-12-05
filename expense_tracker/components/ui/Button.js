import { Pressable, StyleSheet, View } from "react-native"
import { Ionicons } from "@expo/vector-icons"

const Button = ({ size, icon, onPress, color }) => {
  return (
    <Pressable onPress={onPress}>
      <View style={styles.buttonContainner}>
        <Ionicons name={icon} size={size} color={color} />
      </View>
    </Pressable>
  )
}

export default Button

const styles = StyleSheet.create({
  buttonContainner: {
    borderRadius: 24,
    padding: 6,
    margin: 8,
  },
})
