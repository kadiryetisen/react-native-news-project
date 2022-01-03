import {
  StyleSheet,
  View,
  Text,
  Image,
  Dimensions,
  Pressable,
} from "react-native"
const { width, height } = Dimensions.get("window")
const CarouselItem = ({ item, navigation }) => {
  return (
    <View style={styles.cardView}>
      <Pressable
        onPress={() =>
          navigation.navigate("Details", {
            categoryId: item.categoryId,
            key: item.key,
          })
        }
      >
        <Image style={styles.image} source={item.image} />
      </Pressable>
      <View style={styles.textView}>
        <Text style={styles.itemTitle}>{item.title}</Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  cardView: {
    flex: 1,
    width: width - 7,
    height: height / 2.5,
    backgroundColor: "white",
    marginLeft: 6,
    borderRadius: 10,
    shadowColor: "#000",
    shadowOffset: { width: 0.5, height: 0.5 },
    shadowOpacity: 0.5,
    shadowRadius: 3,
    elevation: 5,
  },
  textView: {
    position: "absolute",
    bottom: 10,
    margin: 10,
    left: 5,
  },
  image: {
    width: "100%",
    height: "100%",
    borderRadius: 10,
  },
  itemTitle: {
    color: "whitesmoke",
    fontSize: 18,
    shadowColor: "#000",
    shadowOffset: { width: 0.8, height: 0.8 },
    shadowOpacity: 1,
    shadowRadius: 3,
    marginBottom: 5,
    fontWeight: "bold",
    elevation: 5,
  },
})

export default CarouselItem
