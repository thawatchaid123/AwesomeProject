import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import BottomTab from "./BottomTab";
import PokemonTab from "./PokemonTab";
import Travel from "../screens/week3/Travel";
import Resort from "../screens/week4/Resort";
import Health from "../screens/week5/Health";

import Book from "../screens/week9/Book";
import BookDetail from "../screens/week9/BookDetail";
import BookForm from "../screens/week9/BookForm";
import TodoList from "../screens/week9/TodoList";
import LocationQuiz from "../screens/week10/LocationQuiz";
import Location from "../screens/week10/Location";
//p
import Homepage from "../components/Project/Homepage";
import Menu from "../components/Project/Menu";
import Table from "../components/Project/Table";
import Map from "../components/Project/Map";
import Menuform from "../components/Project/Menuform";
import Menudetail from "../components/Project/Menudetail";

import Pjbottom from "./Pjbottom";


const Stack = createStackNavigator();

export default function RootStack() {
  return (
    <Stack.Navigator initialRouteName="BottomTab">
      <Stack.Screen name="BottomTab" component={BottomTab} options={{ headerShown: false }} />
      <Stack.Screen name="Pjbottom" component={Pjbottom} options={{ headerShown: false }} />
      <Stack.Screen name="PokemonTab" component={PokemonTab} options={{ title : "Pokemon World" }}  />
      <Stack.Screen name="Travel" component={Travel} options={{ title : "Travel " }}  />
      <Stack.Screen name="Resort" component={Resort} options={{ title : "Resort " }}  />
      <Stack.Screen name="Health" component={Health} options={{ title : "Health " }}  />

      <Stack.Screen name="Book" component={Book} options={{ title: "Book" }} />
      <Stack.Screen name="BookDetail" component={BookDetail} options={{ title: "Book Detail" }} />
      <Stack.Screen name="BookForm" component={BookForm}   />
      <Stack.Screen name="TodoList" component={TodoList}   />

      <Stack.Screen name="Location" component={Location} />
      <Stack.Screen name="LocationQuiz" component={LocationQuiz} />

      {/* project */}
      <Stack.Screen name="Homepage" component={Homepage} />
      <Stack.Screen name="Menu" component={Menu} />
      <Stack.Screen name="Table" component={Table} />
      <Stack.Screen name="Map" component={Map} />
      <Stack.Screen name="Menuform" component={Menuform} />
      <Stack.Screen name="Menudetail" component={Menudetail} />
    </Stack.Navigator>
  );
}
