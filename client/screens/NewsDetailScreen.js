import { StyleSheet, View, Image, Text, ScrollView } from "react-native"

const NewsDetailScreen = ({ route }) => {
  const { item } = route.params

  return (
    <View style={styles.container}>
      <Image style={styles.newsImage} source={{ uri: item.urlToImage }} />
      <Text style={styles.newsTitle}>{item.title}</Text>
      <View style={styles.content}>
        <ScrollView>
          <Text style={styles.newsText}> {item.content} </Text>
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
