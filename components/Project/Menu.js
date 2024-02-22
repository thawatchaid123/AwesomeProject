import React, { useEffect, useLayoutEffect, useState } from "react";
import { FlatList, Image, Text, View ,TouchableOpacity} from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
// import { TouchableOpacity } from "react-native-gesture-handler";
import BookStorage from "../../storages/BookStorage";
export default function Menu() {
    const navigation = useNavigation();
    const [products, setProducts] = useState([
        { id: 1, name: "พัฒนา Application ด้วย React และ React Native", price: 330, image: "https://raw.githubusercontent.com/arc6828/myreactnative/master/assets/week9/book-1.jpg", },
        { id: 2, name: "พัฒนาเว็บแอพพลิเคชันด้วย Firebase ร่วมกับ React", price: 229, image: "https://raw.githubusercontent.com/arc6828/myreactnative/master/assets/week9/book-2.jpg", },
        { id: 3, name: "พัฒนา Web Apps ด้วย React Bootstrap + Redux", price: 349, image: "https://raw.githubusercontent.com/arc6828/myreactnative/master/assets/week9/book-3.jpg", },
    ]);
    //UI
    const loadBooks = async () => {
        setRefresh(true);
        let products = await BookStorage.readItems();
        setProducts(products);
        setRefresh(false);
      };
    
      useEffect(() => {
        // WHEN MOUNT AND UPDATE
        const unsubscribe = navigation.addListener("focus", () => {
            loadBooks();
        });
        // WHEN UNMOUNT
        return unsubscribe;
      }, [navigation]);

      const [refresh, setRefresh] = useState(false);
    return (
        <View style={{ flex: 1, flexDirection: "row" }}>
            <FlatList
                numColumns={2}
                data={products}
                keyExtractor={(item) => item.id.toString()}
                refreshing={refresh}        
                onRefresh={() => { loadBooks(); }}

                renderItem={({ item, index }) => (
                    // <Text>{ item.name }</Text>
                    <TouchableOpacity onPress={() => { navigation.navigate("Menudetail", { "item": item }); }}
                        style={{
                            borderRadius: 10, backgroundColor: "white", margin: 5, padding: 10, flex: 1, elevation: 5,
                        }} >
                        <View style={{ flexDirection: "row", }}>
                            <Image style={{
                                flex: 1, resizeMode: "contain", aspectRatio: 1 / 1
                            }} source={{ uri: item.image }} />
                        </View>
                        <Text style={{ fontSize: 20, height: 70, marginVertical: 10 }}> {item.name} </Text>
                        <View style={{ flexDirection: "row" }}>
                            <Text style={{ color: "green", fontSize: 20 }}>{item.price}</Text>
                            <Text style={{ paddingTop: 6 }}> บาท</Text>
                        </View>
                    </TouchableOpacity>
                )}
            />
                <TouchableOpacity
                onPress={() => {
                  navigation.navigate("Menuform", { item: null });
                }}
                style={{
            backgroundColor: "lightblue",
            flex: 10,
            alignItems: "center",
            justifyContent: "center",
            width: 70,
            height: 50,
            borderRadius: 40,
            position: "absolute",
            right: 30,
            bottom: 30,
            elevation: 5,
          }}
      >
                <FontAwesome name="plus" size={40} />
            </TouchableOpacity>


        </View>
    );
}