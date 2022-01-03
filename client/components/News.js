import { StyleSheet, View, Text, Image } from "react-native"

const News = (props) => {
  return (
    <View style={styles.container}>
      <Image style={styles.newsImage} source={props.image} />
      <View style={styles.newsText}>
        <View style={styles.dateDiv}>
          <Text style={styles.date}>{props.date}</Text>
        </View>
        <Text style={{ color: "white", fontWeight: "bold" }}>
          {props.title}
        </Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row-reverse",
    paddingHorizontal: 10,
    borderColor: "gray",
    paddingVertical: 10,
    borderTopWidth: 0.3,
    borderBottomWidth: 0.3,
  },
  date: {
    color: "#ff6000",
    fontWeight: "bold",
  },
  dateDiv: {
    paddingBottom: 20,
  },
  newsImage: {
    flex: 1.5,
    height: 100,
    width: 300,
    marginLeft: 10,
    borderRadius: 8,
  },
  newsText: {
    flex: 3,
    color: "white",
    paddingBottom: 3,
  },
})

export default News
