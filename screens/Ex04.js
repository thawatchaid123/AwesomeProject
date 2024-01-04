import React from "react";
import { View, Button } from "react-native";
import { useNavigation } from "@react-navigation/native";

export default function Ex04() {
  const navigation = useNavigation();
  return (
    <View style={{ flex: 1 }}>
      <View style={{ flex: 1, flexDirection: "column" }}>
        <View
          style={{
            width: 100,
            height: 100,
            backgroundColor: "50E3C2",
          }}
        />
        <View
          style={{
            width: 100,
            height: 100,
            backgroundColor: "4A90E2",
          }}
        />
        <View
          style={{
            width: 100,
            height: 100,
            backgroundColor: " 9013FE ",
          }}
        />
      </View>
      <Button title="Next" onPress={() => navigation.navigate("Ex05")} />
    </View>
  );
}
