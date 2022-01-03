import { StyleSheet, View, Image, Text, ScrollView } from "react-native"
import news from "../resources/news"
const NewsDetailScreen = ({ route }) => {
  const { categoryId, key } = route.params

  let data = news[`${categoryId}`][`${Number(key)}`]

  return (
    <View style={styles.container}>
      <Image style={styles.newsImage} source={data.image} />
      <Text style={styles.newsTitle}>{data.title}</Text>
      <View style={styles.content}>
        <ScrollView>
          <Text style={styles.newsText}> {data.content} </Text>
        </ScrollView>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 10,
  },
  newsImage: {
    flex: 5,
    width: "100%",
    height: "100%",
  },
  content: {
    flex: 5,
  },
  newsTitle: {
    color: "#ff6000",
    fontWeight: "bold",
    fontSize: 25,
    marginVertical: 10,
  },
  newsText: {
    color: "white",
    fontWeight: "bold",
    fontSize: 15,
  },
})

export default NewsDetailScreen
