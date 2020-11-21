import * as React from 'react';
import { Ionicons } from '@expo/vector-icons';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from './pages/home/Home'
import Explore from './pages/Explore'
import Insights from './pages/Insights'
import Me from './pages/Me'

const Tab = createBottomTabNavigator();

export default function Navbar() {
  return (
    <NavigationContainer>
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
          
        tabStyle: {
          backgroundColor: '#202074',
        },
        style: {
          backgroundColor: '#202074',
          paddingTop: 5,
        },
        labelStyle: {
          paddingBottom: 5,
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
