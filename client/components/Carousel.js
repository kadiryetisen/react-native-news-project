import { View, FlatList } from "react-native"
import CarouselItem from "./CarouselItem"

const Carousel = ({ data, navigation }) => {
  return (
    <View>
      <FlatList
        data={data}
        horizontal
        pagingEnabled
        scrollEnabled
        snapToAlignment="center"
        scrollEventThrottle={16}
        keyExtractor={(item, index) => index + "_" + item.title.toString()}
        showsHorizontalScrollIndicator={false}
        renderItem={({ item }) => (
          <CarouselItem
            navigation={navigation}
            style={{ width: "100%" }}
            item={item}
          />
        )}
      />
    </View>
  )
}

export default Carousel
