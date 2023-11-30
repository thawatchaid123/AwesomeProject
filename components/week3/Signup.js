import React from 'react';
import { Button, TextInput, View } from 'react-native';


export default function Signup() {
    return (
        <View style={{ padding : 20  }}>
             <TextInput>555</TextInput>
             <TextInput placeholder='Input ID'  />
             <TextInput placeholder='Input email'  />
             <TextInput placeholder='Input address'  />
             

             <Button title='sign Up' color="tomato" />
        </View>    
    );
}
