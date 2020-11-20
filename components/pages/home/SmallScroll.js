
import React from "react";
import { View, StyleSheet, Text, Image } from "react-native";
import { text } from '../../../globalStyle'
// import { AppLoading } from 'expo';
// import {
//   useFonts,
//   Inter_200Black,
// } from '@expo-google-fonts/inter'




const SmallScroll = () => {

  // let [fontsLoaded] = useFonts({
  //   Inter_200Black,
  // });

  // if (!fontsLoaded) {
  //   return <AppLoading />;
  // } else {

  return (
    <View style={styles.container}>
      <Text style={text.medium}>
        Small horizontal scroll
      </Text>
      <View style={styles.imgContainer}> 
      <Image source={{ uri: 'https://picsum.photos/300/200' }}
        style={styles.img}
      />
      
    </View>
    </View>
  );
// }
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingLeft: '8%',
    marginTop: '5%'
  },

  imgContainer: {
    width: '60%',
    height: 150,
    marginTop: '3%',
  },

  img: {
    flex: 1,
    width: undefined,
    height: undefined,
    resizeMode: 'cover',
    
    borderBottomLeftRadius: 15,
    borderBottomRightRadius: 15,
    borderTopRightRadius: 15,
  }
});

export default SmallScroll;
