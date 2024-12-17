import { Pressable, StyleSheet, Text, View } from "react-native"
import { Ionicons } from "@expo/vector-icons"
import { colors } from "../../constants/colors"

const OutLineButton = ({ onPress, icon, children }) => {
  return (
    <Pressable
      style={({ pressed }) => [styles.button, pressed && styles.pressed]}
      onPress={onPress}>
      <Ionicons
        style={styles.icon}
        name={icon}
        size={18}
        color={colors.primary500}
      />
      <Text style={styles.text}>{children}</Text>
    </Pressable>
  )
}

export default OutLineButton

const styles = StyleSheet.create({
  button: {
    paddingVertical: 6,
    paddingHorizontal: 12,
    margin: 4,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    backgroundColor: "white",
  },
  pressed: {
    opacity: 0.7,
  },
  icon: {
    marginRight: 6,
  },
  text: {
    color: colors.primary500,
  },
})
