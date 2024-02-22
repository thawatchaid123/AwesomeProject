import React from 'react';
import { Image,  Text,  View, Tab, ScrollView} from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import { useNavigation } from "@react-navigation/native";
import MyIcon from '../week3/MyIcon';
//screen

export default function Hoenpage() {
  const navigation = useNavigation();
    return (
      <ScrollView>
    <View style={{backgroundColor:'lightblue'}}>
      {/* รูป */}
      <View style={{flexDirection:'row',marginVertical:5 }}>
          <Image style={{flex:1,resizeMode:'cover',aspectRatio:16/9}} source={require("../../assets/Project/sea.jpg")}/>
      </View> 

      {/*หัวแอพ*/}
      <View style={{marginHorizontal:50,backgroundColor:'#eee8aa',borderRadius:40,padding:30,marginTop:-50}}>
        <Text style={{ textAlign: 'center', fontSize:32,fontWeight:'bold'}}> บ้านริมเล</Text>
            <View style={{ flexDirection:'row',justifyContent:'center'}}>
            <FontAwesome name="star" size={30} color="tomato"/>
            <FontAwesome name="star" size={30} color="tomato"/>
            <FontAwesome name="star" size={30} color="tomato"/>
            <FontAwesome name="star" size={30} color="tomato"/>
            <FontAwesome name='star' size={30} color="tomato"/>
            </View>
            <Text style={{ textAlign:'center'}} >ใครไม่มีตังไม่ต้องมาสั่ง</Text>
      </View>

      {/* รายละเอียดร้าน */}
      <View style={{marginTop:10, borderTopWidth: 2, borderBottomWidth: 5 ,padding:20,marginHorizontal:10}}>
            <Text style={{fontSize:36, fontWeight:'bold'}}>บ้านริมเล</Text>
            <Text style={{fontSize:24}}>Tom Rim Le Restaurant is a restaurant that has been established since the beginning of Europeans hunt for industrial estates. This restaurant was founded in 1916 by Mr. Thawatchai Chaithawat, beginning with an emphasis on sales. Marine raw materials for Europeans And later opened a seaside restaurant in 1958 and added various branches along the seaside throughout the seaside area. and has gained popularity both People in the country and abroad Until having the power to monopolize products by sea Later, there were more diverse food menus according to the time period. </Text>
        </View>
        <View style={{ flexDirection : "row", marginTop : 10 , justifyContent : "space-around"}}>
        <MyIcon title="โต๊ะ" name="table" size={30} color="tomato" onPress={()=>{ navigation.navigate("Table"); }} />
        <MyIcon title="เมนู" name="book" size={30} color="tomato" onPress={ ()=>{ navigation.navigate("Menu")}} />
        <MyIcon title="แผนที่สาขา" name="map-marker" size={30} color="tomato" onPress={ ()=>{ navigation.navigate("Map") }}  />
      </View>
  </View>
  </ScrollView>
    );
}

