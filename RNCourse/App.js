import { useState } from "react"
import { StyleSheet, View, FlatList, Button } from "react-native"
import GoalItem from "./components/GoalItem"
import GoalInput from "./components/GoalInput"
import { StatusBar } from "expo-status-bar"

export default function App() {
  const [modalIsVisible, setModalIsVisible] = useState(false)

  function startAddGoalHandler() {
    setModalIsVisible(true)
  }

  function endAddGoalHandler() {
    setModalIsVisible(false)
  }

  const [courseGoal, setCourseGoal] = useState([])

  function addGoalHandler(enteredGoalText) {
    setCourseGoal((currentCourseGoal) => [
      ...currentCourseGoal,
      { text: enteredGoalText, id: Math.random().toString() },
    ])
    endAddGoalHandler()
  }

  function deleteGoalHandler(id) {
    setCourseGoal((currentCourseGoal) => {
      return currentCourseGoal.filter((goal) => goal.id !== id)
    })
  }

  return (
    <>
      <StatusBar style="light" />
      <View style={appContainer}>
        <Button
          title="Add New Goal"
          onPress={startAddGoalHandler}
          color="#5308cc"
        />
        {modalIsVisible && (
          <GoalInput
            visible={modalIsVisible}
            onCancel={endAddGoalHandler}
            onAddGoal={addGoalHandler}
          />
        )}
        <View style={goalsContainer}>
          <FlatList
            data={courseGoal}
            alwaysBounceVertical={false}
            renderItem={(itemData) => {
              return (
                <GoalItem
                  id={itemData.item.id}
                  text={itemData.item.text}
                  onDeleteGoalItem={deleteGoalHandler}
                />
              )
            }}
            keyExtractor={(item, _) => {
              return item.id
            }}
          />
        </View>
      </View>
    </>
  )
}

const { appContainer, goalsContainer } = StyleSheet.create({
  appContainer: {
    paddingTop: 50,
    paddingHorizontal: 16,
    flex: 1,
  },

  goalsContainer: {
    flex: 5,
    overflow: "scroll",
  },
})
