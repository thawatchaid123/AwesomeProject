import React ,{useEffect,useState} from "react";
import { View,Text,FlatList,Image } from "react-native";

export default function TourFlatList(props) {
   
    const tours = [
        { "id": "1", "title": " ", "uri": "https://raw.githubusercontent.com/arc6828/myreactnative/master/assets/all/trip-1.jpg" },
        { "id": "2", "title": " ", "uri": "https://raw.githubusercontent.com/arc6828/myreactnative/master/assets/all/trip-2.jpg"  },
        { "id": "3", "title": "  ", "uri": "https://raw.githubusercontent.com/arc6828/myreactnative/master/assets/all/trip-3.jpg"  },
        { "id": "4", "title": "Tour in Portugal", "uri": "https://raw.githubusercontent.com/arc6828/myreactnative/master/assets/all/trip-4.jpg"  },
        { "id": "5", "title": "Tour in Netherlands", "uri": "https://raw.githubusercontent.com/arc6828/myreactnative/master/assets/all/trip-5.jpg" }
    ];
    const [onlineTours, setOnlineTours] = useState([]);
    const loadOnlineTours = async () => {
        try{
            let promise = await fetch('https://raw.githubusercontent.com/arc6828/myreactnative/master/assets/json/trips.json');
            let data = await promise.json();
            console.log("Load Data : " , data);
          //SET STATE
            setOnlineTours(data);
        }catch(error){
            console.log("ERROR : " , error);
        }
    }  
    useEffect(() => {
        loadOnlineTours();
    }, []);
    

    return (
        <View style={props.style}>
        <Text style={{  }}>Tour with FlatList</Text>
        <Text style={{ }} >Let find out what most interesting things</Text>
        <FlatList
            horizontal={true}
            data={onlineTours }
            renderItem={
                ({ item, index }) => {
                    console.log(item, index, item.uri);
                    return (
                        <View style={{ marginRight: 10}}>
        <Image
          style={{ whidth: 250, height: 150, borderRadius: 10 }}
          source={{
                        uri: item.uri,
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
            { item.title }
          </Text>
        </View>
      </View>
                    );
                }
            }
            keyExtractor={item =>  item.id}
        />
    </View>
);
}


