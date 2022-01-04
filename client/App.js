//Navigation packages
import { NavigationContainer } from "@react-navigation/native"
import { createNativeStackNavigator } from "@react-navigation/native-stack"
//screens
import OpeningScreen from "./screens/OpeningScreen"
import NewsListScreen from "./screens/NewsListScreen"
import CategoryScreen from "./screens/CategoryScreen"
import NewsDetailScreen from "./screens/NewsDetailScreen"
//context api
import { NewsContext } from "./context/NewsContext"
import { useNews } from "./hooks/news-hook"

//navigation stack and theme
const Stack = createNativeStackNavigator()
const MyTheme = {
  colors: {
    primary: "gray",
    background: "black",
  },
}

function App() {
  const { appleNews, bitcoinNews, teslaNews } = useNews()

  return (
    <NewsContext.Provider
      value={{
        appleNews,
        bitcoinNews,
        teslaNews,
      }}
    >
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
          <Stack.Screen name="Apple News" component={NewsListScreen} />
          <Stack.Screen name="Tesla News" component={NewsListScreen} />
          <Stack.Screen name="Bitcoin News" component={NewsListScreen} />
          <Stack.Screen name="Details" component={NewsDetailScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </NewsContext.Provider>
  )
}

export default App
