import React from 'react';
import { Image, Text, View } from 'react-native';


export default function Card() {
    return (

        <View style={{ }}>
            
              {/*1 */}
               <View style = {{flexDirection:'row',paddingHorizontal:10}}>
               <Image style ={{ Width :50,height: 50, borderRadius : 100/2,}} source={ require("../../assets/week3/profile-2.jpg")}/>
                      <View style={{paddingLeft:10 }}>
                            <Text style ={{FontFaceSize:20}}> Steve Garrett</Text> 
                            <Text style={{ color :'gray'}}> 5 hours ago |100k views </Text>  
                </View>                      
             </View>
              {/*2*/} 
               <View style = {{flexDirection:'row',marginVertical:10}} >
                 <Image style ={{ flex : 1,resizeMode :'cover', aspectRatio: 16/9}} source={require ("../../assets/week3/trip-2.jpg")}/>
              </View>
        
            {/*3*/} 
             <View style={{ baddingHorizontal :10}}  >
                <Text style={{fontSize:20}} > Overseas Adventure Travel In Nepal</Text>
                <Text style={{ colorolor : 'gray'}} > Overseas Adventure Travel In Nepal</Text>



           </View>
        </View>    
    );
}

