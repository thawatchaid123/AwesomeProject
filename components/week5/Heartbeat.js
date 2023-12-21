import React, { useState } from "react";
import { Text, TouchableOpacity, View } from "react-native";
import { FontAwesome } from "@expo/vector-icons";

export default function Heartbeat() {
    const [count, setCount] = useState(0);

    console.log("STATE : ", count);
    const onPressButton = () =>  {
        // let output = (count => count ++);

        setCount(count => count +1);
    }


    return (
        <View style={{ flexDirection: 'row', marginTop: 50, justifyContent: 'space-around' }}>

            <TouchableOpacity onPress={onPressButton}  >
            <FontAwesome name="heart" size={30}  />
            </TouchableOpacity>
            <Text style={{ fontSize: 50, textAlign: "center", color: ' pink' }}>
                {count}
            </Text>
        </View>
    );
}