import { StatusBar } from "expo-status-bar"
import { Alert, Button, StyleSheet, View, Platform } from "react-native"
import * as Notifications from "expo-notifications"
import { useEffect } from "react"

Notifications.setNotificationHandler({
  handleNotification: async () => {
    return {
      shouldPlaySound: true,
      shouldSetBadge: true,
      shouldShowAlert: true,
    }
  },
})

export default function App() {
  useEffect(() => {
    async function configurePushNotifications() {
      try {
        const { status } = await Notifications.getPermissionsAsync()

        if (status !== "granted") {
          const { status: newStatus } =
            await Notifications.requestPermissionsAsync()
          if (newStatus !== "granted") {
            Alert.alert(
              "Permission Required",
              "Push notifications require the appropriate permissions to function."
            )
            return
          }
        }

        const pushTokenData = await Notifications.getExpoPushTokenAsync()
        console.log("Push Token:", pushTokenData)

        if (Platform.OS === "android") {
          Notifications.setNotificationChannelAsync("default", {
            name: "default",
            importance: Notification.AndroidImportance.DEFAULT,
          })
        }
      } catch (error) {
        console.error("Error configuring push notifications", error)
      }
    }

    configurePushNotifications()
  }, [])

  useEffect(() => {
    const subscription = Notifications.addNotificationReceivedListener(
      (notification) => {
        const userName = notification.request.content.data.userName
      }
    )

    const sub = Notifications.addNotificationResponseReceivedListener(
      (response) => {
        const userName = response.notification.request.content.data.userName
      }
    )

    return () => {
      subscription.remove()
      sub.remove()
    }
  }, [])

  async function scheduleNotificationHandler() {
    const { status } = await Notifications.requestPermissionsAsync()
    if (status !== "granted") return

    await Notifications.scheduleNotificationAsync({
      content: {
        title: "My First Local Notification",
        body: "This is the Body of the notification.",
        data: { userName: "Sanni" },
      },
      trigger: { seconds: 9 },
    })
  }

  return (
    <View style={styles.container}>
      <Button
        title="Schedule Notification"
        onPress={scheduleNotificationHandler}
      />
      <StatusBar style="auto" />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
})
