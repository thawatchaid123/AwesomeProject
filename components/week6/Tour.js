import React from "react";
import { View  ,Image, Text, ScrollView} from "react-native";
import TourItem from "./TourItem";



export default function Tour(props) {
    
    return (
        <View style={props.style}>
           <ScrollView horizontal={true}>
         <View style={{flexDirection:'row'}}>

         {/* <TourItem/> 
         <TourItem/>   
         <TourItem/>    */}
            <View style={{ marginRight: 10}}>
        <Image
          style={{ whidth: 250, height: 150, borderRadius: 10 }}
          source={{
            uri: "https://raw.githubusercontent.com/arc6828/myreactnative/master/assets/all/trip-1.jpg",
          }}
        />
        <View
          style={{
            marginTop: 30,
            height: 30,
            width: 200,
            paddingHorizontal: 10,
            backgroundColor: "black",
            opacity: 0.5,
            borderBottomLeftRadius: 10,
            borderBottomRightRadius: 10,
          }}
        >
          <Text style={{ fontSiz: 20, close: "white" }}>
            {" "}
            Tour in somewhere
          </Text>
        </View>
      </View><View style={{ marginRight: 10}}>
        <Image
          style={{ whidth: 250, height: 150, borderRadius: 10 }}
          source={{
            uri: "https://raw.githubusercontent.com/arc6828/myreactnative/master/assets/all/trip-1.jpg",
          }}
        />
        <View
          style={{
            marginTop: 30,
            height: 30,
            width: 200,
            paddingHorizontal: 10,
            backgroundColor: "black",
            opacity: 0.5,
            borderBottomLeftRadius: 10,
            borderBottomRightRadius: 10,
          }}
        >
          <Text style={{ fontSiz: 20, close: "white" }}>
            {" "}
            Tour in somewhere
          </Text>
        </View>
      </View>
      <View style={{ marginRight: 10}}>
        <Image
          style={{ whidth: 250, height: 150, borderRadius: 10 }}
          source={{
            uri: "https://raw.githubusercontent.com/arc6828/myreactnative/master/assets/all/trip-1.jpg",
          }}
        />
        <View
          style={{
            marginTop: 30,
            height: 30,
            width: 200,
            paddingHorizontal: 10,
            backgroundColor: "black",
            opacity: 0.5,
            borderBottomLeftRadius: 10,
            borderBottomRightRadius: 10,
          }}
        >
          <Text style={{ fontSiz: 20, close: "white" }}>
            {" "}
            Tour in somewhere
          </Text>
        </View>
      </View>
                   

      </View>
        </ScrollView>
        
           

        </View>
    );
}
