
import React from "react";
import { View, StyleSheet, Text, Image, Dimensions } from "react-native";
import { text } from '../../../globalStyle'

// var { width}  = Dimensions.get('window');

const LargeScroll = () => {

  return (
    <View style={styles.container}>
      <Text style={text.medium}>
        Large horizontal scroll
      </Text>
      <View style={styles.imgContainer}> 
      <Image source={{ uri: 'https://picsum.photos/300/200' }}
        style={styles.img}
      />
    </View>
    </View>
  );
};


const styles = StyleSheet.create({
  container: {
    flex: 0.9,
    paddingLeft: '5%',
    // marginTop: 0,
    // paddingTop: 0,
  },

  imgContainer: {
    flex: 1,
    //width: undefined,
    height: undefined,
     width: '80%',
    // height: 200,
    // marginBottom: 300,
    marginTop: '3%',
  },

  img: {
    // flex: 1,
    width: undefined,
    height: undefined,
    height: 300,
    // resizeMode: 'contain',
    // resizeMode: 'cover',
    
    borderBottomLeftRadius: 15,
    borderBottomRightRadius: 15,
    borderTopRightRadius: 15,
  // marginRight: 50,
  }
});
// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     paddingLeft: '3%',
//   },

//   imgContainer: {
//     width: '80%',
//     height: 150,
//   },

//   img: {
//     // flex: 1,
//     // width: width * 0.5,
//     // overflow: 'visible',
//     // width: undefined,
//     // height: undefined,
//     // resizeMode: 'cover',
//       flex: 4,
//       width: undefined,
//       height: undefined,
//       resizeMode: 'cover',
      
//       borderBottomLeftRadius: 10,
//       borderBottomRightRadius: 10,
//       borderTopRightRadius: 10,
//     // marginRight: 50,
//     // marginLeft: '5%',
//     //     height: 100,
//     //     flex: 3,
    
//     // borderBottomLeftRadius: 5,
//     // borderBottomRightRadius: 5,
//     // borderTopRightRadius: 5,
//   }
// });

export default LargeScroll;
