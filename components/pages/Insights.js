import React from 'react'
import { View, Text} from 'react-native'
import { text } from '../../globalStyle'

const Insights = () => {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text style={text.medium}>Insights</Text>
      </View>
    );
  }

  export default Insights;