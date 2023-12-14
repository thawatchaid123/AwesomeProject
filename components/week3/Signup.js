import React from 'react';
import { Button, TextInput, View } from 'react-native';


export default function Signup() {
    return (
        <View style={{ padding : 20}}>
            <TextInput placeholder='Input ID' />
            <TextInput placeholder='Input Email' />
            <TextInput placeholder='Input Address' />
            <Button title='Sign up' color={"green"}/>
        </View>
    );
}
