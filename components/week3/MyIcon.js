import React from 'react';
import { View } from 'react-native';


export default function MyIcon() {
    return (
        <View style={{  justifyContent: 'center', alignItems : 'center' }}>
           <FontAwesome name = "heart " size ={28} color = "tomato" />
              <Text> หัวใจ</Text>
            
        </View>    
    );
}
