
import React from "react";
import { View, StyleSheet, Text, Image, Dimensions, ScrollView } from "react-native";
import { text } from '../../../globalStyle'

const { width, height} = Dimensions.get('window');

const SmallScroll = () => {


  return (
    <View style={styles.container}>
      <Text style={text.medium}>
        Small horizontal scroll
      </Text>
      <ScrollView
            horizontal
            pagingEnabled
            showsHorizontalScrollIndicator={false}
          >
      <Image source={{ uri: 'https://picsum.photos/id/180/300/200' }}
        style={styles.img}
      />
      <Image source={{ uri: 'https://picsum.photos/id/157/300/200' }}
        style={styles.img}
      />
      <Image source={{ uri: 'https://picsum.photos/id/1060/300/200' }}
        style={styles.img}
      />
       </ScrollView>
    </View>
  );
};
// 152
// 157
// 163
// 159

// 192
// 175
// 20
// 2003

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingLeft: '8%',
    marginTop: '15%',
    marginBottom: '5%',
  },

  img: {
    flex: 1,
    width: height * .25,
    marginTop: 10,
    marginRight: 20,
    resizeMode: 'cover',
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
    borderTopRightRadius: 10,
    }
});

export default SmallScroll;
