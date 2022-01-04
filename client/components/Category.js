import { View, Text, Image, StyleSheet } from "react-native"

const Category = (props) => {
  return (
    <View>
      <View style={styles.category}>
        <Image style={styles.categoryImage} source={props.image} />
        <Text style={styles.categoryTitle}>{props.categoryId}</Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  categoryImage: {
    height: 150,
    width: 150,
    marginBottom: 3,
    marginLeft: 10,
    borderRadius: 12,
  },
  category: {
    alignItems: "center",
    marginHorizontal: 5,
  },
  categoryTitle: {
    fontSize: 15,

    color: "white",
    fontWeight: "bold",
  },
})

export default Category
