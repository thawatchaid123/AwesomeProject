import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { FontAwesome } from "@expo/vector-icons";
//screen
import Homepage from '../components/Project/Homepage';
import Menu from '../components/Project/Menu';

const Tab = createBottomTabNavigator();
export default function Pjbottom() {
  return(
    <Tab.Navigator screenOptions={{ tabBarActiveTintColor: 'tomato', tabBarInactiveTintColor: 'gray' }} >
    <Tab.Screen
      name="Homepage" component={Homepage}
      options={{
        tabBarLabel: "Home",
        tabBarIcon: ({ color, size }) => ( <FontAwesome name="home" color={color} size={size} /> ),
        headerShown : false,
      }}
    />
    <Tab.Screen
      name="menu" component={Menu}
      options={{
        tabBarLabel: "Menu",
        tabBarIcon: ({ color, size }) => ( <FontAwesome name="list" color={color} size={size} /> ),
        headerShown : false,
      }}
    />
  </Tab.Navigator>
); 
}