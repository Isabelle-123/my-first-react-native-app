
import React from "react";
import { View, StyleSheet, Text, Image, Dimensions } from "react-native";
import { text } from '../../../globalStyle'

const { width, height} = Dimensions.get('window');

const SmallScroll = () => {


  return (
    <View style={styles.container}>
      <Text style={text.medium}>
        Small horizontal scroll
      </Text>
      <Image source={{ uri: 'https://picsum.photos/300/200' }}
        style={styles.img}
      />
    </View>
  );
// }
};

const styles = StyleSheet.create({
  container: {
    flex: 1.6,
    paddingLeft: '8%',
    marginTop: 100,
    marginBottom: '5%',
  },

  img: {
    flex: 1,
    width: width * .6,
    marginTop: 10,
    resizeMode: 'cover',
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
    borderTopRightRadius: 10,
    }
});

export default SmallScroll;
