import React from 'react'
import { View, Text } from 'react-native'
import { text } from '../../globalStyle'

const Explore = () => {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text style={text.medium}>Explore</Text>
      </View>
    );
  }

  export default Explore;