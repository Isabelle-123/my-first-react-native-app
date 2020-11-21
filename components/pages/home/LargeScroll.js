
import React from "react";
import { View, StyleSheet, Text, Image, Dimensions, ScrollView } from "react-native";
import { text } from '../../../globalStyle'

const { height} = Dimensions.get('window');

const LargeScroll = () => {

  return (
    <View style={styles.container}>
      <Text style={text.medium}>
        Large horizontal scroll
      </Text>
      <ScrollView
            horizontal
            pagingEnabled
            showsHorizontalScrollIndicator={false}
          >
      <Image source={{ uri: 'https://picsum.photos/id/203/300/200' }}
        style={styles.img}
      />
      <Image source={{ uri: 'https://picsum.photos/id/175/300/200' }}
        style={styles.img}
      />
      <Image source={{ uri: 'https://picsum.photos/id/20/300/200' }}
        style={styles.img}
      />
       </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1.3,
    paddingLeft: '5%',
    marginBottom: '10%',
    marginTop: '5%',
  },

  img: {
    flex: 1,
    width: height * .33,
    marginRight: 20,
    resizeMode: 'cover',
    marginTop: '2%',
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
    borderTopRightRadius: 10,
  }
});

export default LargeScroll;
