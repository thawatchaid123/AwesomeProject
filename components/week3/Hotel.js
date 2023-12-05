import React from "react";
import {View,Image,Text } from 'react-native';
import {FontAwesome } from '@expo/vector-icons';


export default function Hotel() {
return (
       <View style={{  padding : 20 }}>
            <Image style={{ flex: 1,resizeMode: 'cover', aspectRatio: 16/9, borderRadius : 10}} source={require ('../../assets/week3/room-1.jpg')}/>


        <View style={{ flexDirection :'row', marginVertical : 10}}>
             <FontAwesome name="map-marker" size={28} color="tomato"/>
             <Text style={{ fontSize : 20,color: 'gray'}} > 553 Cislason Radia </Text>
         </View>

         <View>
             <Text style= {{ fontSize :20}} > Boston Hotal</Text>
         </View>

          <View style={{ flexDirection : 'row',justifyContent : 'space-between',marginVertical :10}}>
              <View style={{ flexDirection :'row'}}>
                   <FontAwesome name="star" size={20} color="orange"/> 
                   <FontAwesome name="star" size={20} color="orange"/> 
                   <FontAwesome name="star" size={20} color="orange"/> 
                   <FontAwesome name="star" size={20} color="orange"/> 
                   <FontAwesome name="star-half" size={20} color="orange"/> 
              </View>
                   <View>
                       <Text style={{ color: 'gray'}} >100 Reviews </Text>
                   </View>
            </View> 
                     <View>
                         <Text style={{ fontSize:30,color :"tomato"}} > $125</Text>
                     </View>                          
       </View>
);
}