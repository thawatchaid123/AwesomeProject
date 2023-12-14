import React from 'react';
import {  View } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';


export default function Section5() {
    return (
        <View style={{ marginTop:10,flexDirection: 'row', justifyContent: "space-around", padding: 15 }}>
            <FontAwesome name='wifi' size={20} color="blue" />
            <FontAwesome name='coffee' size={20} color="blue" />
            <FontAwesome name='bath' size={20} color="blue" />
            <FontAwesome name='car' size={20} color="blue" />
            <FontAwesome name='paw' size={20} color="blue" />
        </View>
    );
}