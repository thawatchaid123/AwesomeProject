import React from 'react';
import { Button, View } from 'react-native';
import { useNavigation } from "@react-navigation/native";
export default function Ex03() {
  const navigation = useNavigation();
  return (
    
    <View style={{ flex: 1 }}>

    
    <View style={{ flex : 1 , flexDirection : 'row' }}>    
      <View style={{
width: 100, height: 50, 
backgroundColor: ' 50E3C2'}} />
<View style={{
width: 100, height: 50, 
backgroundColor: '#4A90E2'}} />
<View style={{
width: 100, height: 50, 
backgroundColor: '#9013FE'}} />  
    </View>

    <Button title="Next" onPress={() => navigation.navigate("Ex04")} />
    </View>


    );
   
}