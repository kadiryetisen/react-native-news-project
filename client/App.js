import * as React from "react"
import { NavigationContainer } from "@react-navigation/native"
import { createNativeStackNavigator } from "@react-navigation/native-stack"
import NewsListScreen from "./screens/NewsListScreen"
import CategoryScreen from "./screens/CategoryScreen"
import OpeningScreen from "./screens/OpeningScreen"
import NewsDetailScreen from "./screens/NewsDetailScreen"
const Stack = createNativeStackNavigator()

const MyTheme = {
  colors: {
    primary: "gray",
    background: "black",
  },
}

function App() {
  return (
    <NavigationContainer theme={MyTheme}>
      <Stack.Navigator
        screenOptions={{
          headerStyle: {
            backgroundColor: "#111010",
          },
          headerTitleStyle: {
            fontSize: 25,
            fontWeight: "bold",
            color: "#ff6000",
          },
        }}
      >
        <Stack.Screen
          options={{ headerShown: false }}
          name="OpeningPage"
          component={OpeningScreen}
        />
        <Stack.Screen
          options={{ headerTitle: "AIS NEWS", headerBackVisible: false }}
          name="Categories"
          component={CategoryScreen}
        />
        <Stack.Screen name="Politics" component={NewsListScreen} />
        <Stack.Screen name="Economics" component={NewsListScreen} />
        <Stack.Screen name="Sports" component={NewsListScreen} />
        <Stack.Screen name="Weather" component={NewsListScreen} />
        <Stack.Screen name="Science" component={NewsListScreen} />
        <Stack.Screen name="Details" component={NewsDetailScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default App
