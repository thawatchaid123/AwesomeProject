import React from 'react';
import { Image, Text, View } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';


export default function Section6() {
    return (
            <View style={{ flexDirection: 'column', marginHorizontal: 100 ,marginTop:5}}>
            <Text style={{ fontSize: 20, fontWeight: 'bold' }}>Location</Text>
            <Text>218 Austen Mountain, consectetur adipiscing, sed do
                eiusmod tempor incididunt ut labore et….............
            </Text>
            <View>
                <Image style={{ flex: 5, borderRadius: 10, resizeMode: 'cover' }} source={require("../../assets/week3/map.jpg")}></Image>
            </View>
            </View>
    );
}