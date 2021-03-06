import * as React from 'react';
import { View, StyleSheet, ImageBackground } from 'react-native';
import Navbar from './components/Navbar'

const App = () => {
  const background = require('./assets/background.png')

  return (
    <View style={styles.container}>
      <ImageBackground source={background} style={styles.background}/>
      <Navbar />
      
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    color : "#fff",
  },

  background: {
    flex: 1,
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 0,
    height: '100%',
  }
});

export default App