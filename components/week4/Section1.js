import React from 'react';
import { Image,  View, } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';

export default function Section1() {
    return (

      <View>
             <FontAwesome  class="fas fa-yen-sign"/> 
  
             <FontAwesome name="heart"  size={22} color="orange" />

      {/* ก้อน2 */}
      <View style={{flexDirection:'row',marginVertical:5 }}>
        
      <FontAwesome  name ="gamepad"  size={60} colcr='orange'/> 
          <Image style={{flex:1,resizeMode:'cover',aspectRatio:16/9}} source={require("../../assets/week3/room-6.jpg")}/>
       

      </View> 
     


  </View>


    );
}

