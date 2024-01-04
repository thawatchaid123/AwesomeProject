import React from 'react';
import { View,Button,  ViewComponent } from 'react-native';
import { useNavigation } from "@react-navigation/native";
export default function Ex11() {
  const navigation = useNavigation();
  return (
    <View style={{ flex: 1 }}>
    <View style={{ flex : 1 ,flex : 2, flexDirection : 'column'}}>    
      <View style={{ backgroundColor : '#4A90E2',flex : 2, }}></View> 
      <View style={{ backgroundColor : '#50E3C2',flex : 2, }}></View> 
    </View>
    <Button title="Next" onPress={() => navigation.navigate("Ex12")} />
    </View>
  );
}