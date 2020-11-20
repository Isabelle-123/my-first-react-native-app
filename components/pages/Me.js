import React from 'react'
import { View, Text} from 'react-native'
import { text } from '../../globalStyle'

const Me = () => {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text style={text.medium}>Me</Text>
      </View>
    );
  }

  export default Me;