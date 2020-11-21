
import React from "react";
import { View, StyleSheet, ScrollView } from "react-native";
import Header from './Header'
import SmallScroll from './SmallScroll'
import LargeScroll from './LargeScroll'

const Home = () => {
  return (
    <View style={styles.container}>
      <Header />
      <SmallScroll />
      <LargeScroll />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default Home;

