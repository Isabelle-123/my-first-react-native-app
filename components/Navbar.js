import * as React from 'react';
import { Ionicons } from '@expo/vector-icons';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from './pages/home/Home'
import Explore from './pages/Explore'
import Insights from './pages/Insights'
import Me from './pages/Me'
import { Text, View, StyleSheet, ImageBackground, Dimensions, tabBarHeight } from 'react-native';
import { Inter_100Thin } from '@expo-google-fonts/inter';


const Tab = createBottomTabNavigator();

export default function Navbar() {
  return (
    <NavigationContainer >
      <Tab.Navigator 
        sceneContainerStyle={{ backgroundColor: 'transparent' }}
        screenOptions={({ route }) => ({
          tabBarIcon: ({ color, size }) => {
            let iconName;

            switch (route.name) {
                case 'Home':
                    iconName = 'md-home';
                break;
                case 'Explore':
                    iconName = 'ios-apps';
                break;
                case 'Insights':
                    iconName = 'md-bulb';
                break;
                case 'Home':
                    iconName = 'md-home';
                default:
                    iconName = 'md-person';
            }
        
            return <Ionicons name={iconName} size={size} color={color} />;
          },
        })}

        tabBarOptions={{
            activeTintColor: '#fff',
            inactiveTintColor: 'grey',
            alignItems: 'center',
            position: 'absolute',
            style: {
                backgroundColor: 'transparent',
                position: 'relative',
                left: 0,
                right: 0,
                bottom: 0,
                elevation: 0,
                marginBottom: '5%',
      
            position: 'absolute',

            },

        //   tabStyle: {
        //     color: 'blue',
        //     },

            labelStyle: {
                position: 'absolute',
            },
        }}
      > 
        <Tab.Screen name="Home" component={Home} />
        <Tab.Screen name="Explore" component={Explore} />
        <Tab.Screen name="Insights" component={Insights} />
        <Tab.Screen name="Me" component={Me} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
