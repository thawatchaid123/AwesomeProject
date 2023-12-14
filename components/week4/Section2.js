import { View,Text } from "react-native";
import React from "react";
import{ FontAwesome} from '@expo/vector-icons';

export default function Section2(){
return  (
      <View style={{flex:5,marginHorizontal:50,backgroundColor:'pink',borderRadius:40,padding:30,marginTop:-50}}>
        <Text style={{ textAlign: 'center', fontSize:32,fontWeight:'bold'}}> Hilton San Francisco  </Text>
           <View style={{ flexDirection:'row',justifyContent:'center'}}>
            <FontAwesome name="star" size={30} color="orange"/>
            <FontAwesome name="star" size={30} color="orange"/>
            <FontAwesome name="star" size={30} color="orange"/>
            <FontAwesome name="star" size={30} color="orange"/>
            <FontAwesome name='star-half' size={30} color="orange"/>


           </View>
            <Text style={{ textAlign:'center'}} > Facilities provided may range from a modest qulity mattress in a small romm to large suites</Text>






      </View>




);


}