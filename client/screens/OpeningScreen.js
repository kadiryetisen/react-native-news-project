import { useEffect } from "react"
import { StyleSheet, View, Text } from "react-native"

const OpeningScreen = ({ navigation }) => {
  useEffect(() => {
    setTimeout(() => {
      navigation.navigate("Categories")
    }, 1500)
  }, [])

  return (
    <View style={styles.container}>
      <Text style={styles.brand}>AIS NEWS</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,

    justifyContent: "center",
    alignItems: "center",
  },
  brand: {
    fontSize: 45,
    color: "#ff6000",
  },
})

export default OpeningScreen
