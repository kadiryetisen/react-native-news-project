import { useState, useEffect } from "react"
import { View, StyleSheet, FlatList, TouchableOpacity } from "react-native"
import Category from "../components/Category"
// get category name from resources
import categories from "../resources/categories"

const CategoryScreen = ({ navigation }) => {
  const [categoryList, setCategoryList] = useState([])

  useEffect(() => {
    setCategoryList(categories)
  }, [])

  return (
    <View style={styles.container}>
      <FlatList
        data={categoryList}
        renderItem={({ item }) => (
          <TouchableOpacity
            onPress={() =>
              navigation.navigate(`${item.categoryId}`, {
                categoryId: item.categoryId,
              })
            }
          >
            <View style={styles.eachCategoryBlock}>
              <Category
                style={styles.eachCategoryBlock}
                categoryId={item.categoryId}
                image={item.image}
                key={item.title}
              />
            </View>
          </TouchableOpacity>
        )}
        numColumns={2}
      />
    </View>
  )
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingTop: 25,
  },
  eachCategoryBlock: {
    marginTop: 20,
    alignItems: "center",
    justifyContent: "center",
  },
})

export default CategoryScreen
