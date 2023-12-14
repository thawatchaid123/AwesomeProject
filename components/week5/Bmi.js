import React, { useState } from "react";
import { Button, Text, TextInput, TouchableOpacity, View } from "react-native";

export default function bmi() {
  const [weight, setWeight] = useState("70");
  const [height, setHeight] = useState("170");
  const [bmi, setBmi] = useState("0");
  const [tom, settom] = useState("");

  console.log("STATE : ", weight, height, bmi, tom);

  const onPressButton = () => {
    console.log("Calculate button is pressed!!!");
    let output = weight / (((height / 100) * height) / 100);
    setBmi(output.toFixed(2));

    let description = "";
    if (output < 18.5) description = "Underweight ";
    else if (output <= 18.5 && output <= 24.99) description = "Normal ";
    else if (output <= 25 && output <= 29.99) description = "Overweight ";
    else if (output <= 30 && output <= 39.99) description = "Obese ";
    else description = "Morbidly";
    settom(description);
  };
  return (
    <View>
      {/* แถว 1 */}
      <View
        style={{
          padding: 20,
          backgroundColor: "white",
          borderRadius: 20,
          height: 150,
          justifyContent: "space-around",
          marginBottom: 30,
        }}
      >
        <Text style={{ fontSize: 44 }}>Weight (kg.)</Text>
        <TextInput
          value={weight}
          onChangeText={(newWeight) => setWeight(newWeight)}
          placeholder="Input your Weight..."
          keyboardType="numeric"
        />
      </View>

      {/* แถว 2 */}
      <View
        style={{
          padding: 20,
          backgroundColor: "white",
          borderRadius: 20,
          height: 150,
          justifyContent: "space-around",
          marginBottom: 30,
        }}
      >
        <Text style={{ fontSize: 44 }}>Hight (m.)</Text>
        <TextInput
          value={height}
          onChangeText={(newHeight) => setHeight(newHeight)}
          placeholder="Input your Hight..."
          keyboardType="numeric"
        />
      </View>

      {/* แถว 3 */}
      <View
        style={{
          padding: 10,
          borderRadius: 10,
          height: 100,
          justifyContent: "space-between",
          marginBottom: 30,
          flexDirection: "row",
        }}
      >
        <View
          style={{
            flex: 1,
            marginRight: 10,
            padding: 10,
            backgroundColor: "white",
            borderRadius: 10,
            height: 100,
          }}
        >
          <Text style={{ fontSize: 42, textAlign: "center" }}>
            {" "}
            BMI : {bmi}{" "}
          </Text>
        </View>

        <View
          style={{
            flex: 1,
            marginLeft: 10,
            padding: 10,
            backgroundColor: "white",
            borderRadius: 10,
            height: 100,
          }}
        >
          <Text style={{ fontSize: 20, textAlign: "center" }}>
            <Text
              onPressButton ={(newtom) => settom(newtom)}
              value={tom}
              style={{ fontSize: 20, textAlign: "center" }}
            >
              {tom}
            </Text>
          </Text>
        </View>
      </View>

      {/* ปุ่ม */}
      <View style={{ marginTop: 50 }}>
        <Button title="Calculate" onPress={onPressButton} color={"brown"} />

        <TouchableOpacity onPress={onPressButton}>
          <View
            style={{ padding: 20, backgroundColor: "blue", borderRadius: 40 }}
          >
            <Text style={{ fontSize: 30, textAlign: "center", color: "white" }}>
              Calculate
            </Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
}
