import { useEffect, useState } from "react"
import { StyleSheet, View, FlatList, Pressable } from "react-native"
import News from "../components/News"
import news from "../resources/news"
import Carousel from "../components/Carousel"
export default function NewsListScreen({ route, navigation }) {
  const [newsList, setNewsList] = useState({})
  const { categoryId } = route.params

  const lowerFirstLetterOfCategoryId = (cid) => {
    return cid.charAt(0).toLowerCase() + cid.slice(1)
  }
  let editedCategoryId = lowerFirstLetterOfCategoryId(categoryId)

  useEffect(() => {
    setNewsList(news[`${editedCategoryId}`])
  }, [editedCategoryId])

  return (
    <View style={styles.container}>
      <Carousel navigation={navigation} data={newsList} />
      <FlatList
        data={newsList}
        renderItem={({ item }) => (
          <Pressable
            onPress={() =>
              navigation.navigate("Details", {
                categoryId: item.categoryId,
                key: item.key,
              })
            }
          >
            <News
              title={item.title}
              content={item.content}
              image={item.image}
              date={item.date}
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
