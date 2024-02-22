import React from 'react';
import { Image,  Text,  View, Tab} from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
//screen


export default function () {
    return (
    <View>
      {/* รูป */}
      <View style={{flexDirection:'row',marginVertical:5 }}>
          <Image style={{flex:1,resizeMode:'cover',aspectRatio:16/9}} source={require("../../assets/week3/map.jpg")}/>
      </View> 
  </View>
    );
}