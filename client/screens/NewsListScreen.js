import { useEffect, useState, useContext } from "react"
import { StyleSheet, View, FlatList, Pressable } from "react-native"
//import components
import News from "../components/News"
import Carousel from "../components/Carousel"
// import context api
import { NewsContext } from "../context/NewsContext"

export default function NewsListScreen({ route, navigation }) {
  const [newsList, setNewsList] = useState([])
  //get data from context api
  const { appleNews, bitcoinNews, teslaNews } = useContext(NewsContext)
  const { categoryId } = route.params

  useEffect(() => {
    if (categoryId === "Apple News") {
      setNewsList(appleNews)
    } else if (categoryId === "Bitcoin News") {
      setNewsList(bitcoinNews)
    } else if (categoryId === "Tesla News") {
      setNewsList(teslaNews)
    }
  }, [categoryId])

  return (
    <View style={styles.container}>
      <Carousel navigation={navigation} data={newsList} />
      <FlatList
        data={newsList}
        keyExtractor={(item, index) => index + "_" + item.title.toString()}
        renderItem={({ item }) => (
          <Pressable
            onPress={() =>
              navigation.navigate("Details", {
                item: item,
              })
            }
          >
            <News
              title={item.title}
              content={item.content}
              image={item.urlToImage}
              date={item.publishedAt}
            />
          </Pressable>
        )}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
  },
})
