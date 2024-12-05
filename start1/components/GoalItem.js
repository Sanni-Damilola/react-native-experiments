import { Pressable, StyleSheet, Text, View } from "react-native"

function GoalItem(props) {
  return (
    <View style={goalItem}>
      <Pressable
        android_ripple={{ color: "#dddddd" }}
        onPress={props.onDeleteGoalItem.bind(this, props.id)}
        // style={({pressed}) => pressed && pressedItem} // IOS pressable
      >
        <Text style={goalText}>{props.text}</Text>
      </Pressable>
    </View>
  )
}

export default GoalItem

const { goalText, goalItem, pressedItem } = StyleSheet.create({
  goalItem: {
    margin: 8,
    borderRadius: 6,
    backgroundColor: "#5308cc",
  },

  goalText: {
    color: "white",
    padding: 8,
  },

  pressedItem: {
    opacity: 0.5,
  }, // for IOS
})
