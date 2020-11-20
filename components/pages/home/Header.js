import React from "react";
import { SafeAreaView, StyleSheet, Text, View } from "react-native";
import { Ionicons } from '@expo/vector-icons';
import { text } from '../../../globalStyle'


const Header = () => {
  return (
    <SafeAreaView style={styles.container}>
    <Ionicons name="md-notifications" style={styles.bell} size={30}/>
    
        <View style={styles.wrapper}> 
            <View style={styles.column}> 
                <Text style={text.large}>3</Text>
                <Text style={text.small}>Weekly{'\n'}Goal</Text>
            </View>

            <View style={styles.column}> 
                <Text style={text.large}>1</Text>
                <Text style={text.small}>Completed{'\n'}Activites</Text>
            </View>
        </View>

      <View style={styles.miniContainer}>
        <Text style={text.mini}>
            Complete 2 sessions to reach your goal!
        </Text>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
    container: {
        paddingRight: '5%',
        // paddingTop: Platform.OS === 'android' ? 25 : 30,
        paddingTop: 20,

    },

    bell: {
        color:'blue',
        transform: [{ rotate: '30deg' }],
        top: 100,
        left: '1%',
    },
    
    wrapper: {
        justifyContent: 'space-evenly',
        flexDirection: 'row',
    },

    column: {
        flexDirection: 'column',
        alignItems: 'center',
    },

    miniContainer: {
        marginTop: '5%',
    },

});

export default Header;
