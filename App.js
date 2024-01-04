import { StatusBar } from 'expo-status-bar';

import React from 'react';

import { View } from 'react-native';



import Welcome from './screens/Welcome';
import Ex01 from './screens/Ex01';
import Ex02 from './screens/Ex02';
import Ex03 from './screens/Ex03';
import Ex04 from './screens/Ex04';
import Ex05 from './screens/Ex05';
import Ex06 from './screens/Ex06';
import Ex07 from './screens/Ex07';
import Ex08 from './screens/Ex08';
import Ex09 from './screens/Ex09';
import Ex10 from './screens/Ex10';
import Ex11 from './screens/Ex11';
import Ex12 from './screens/Ex12';
import Greeting from './components/Greeting';
import Travel from './screens/week3/Travel';

import Health from './screens/week5/Health';

import Resort from './screens/week4/Resort';


import Home from './screens/week6/Home';
import { NavigationContainer } from '@react-navigation/native';
import HomeStack from './navigations/HomeStack';
import BottomTab from './navigations/BottomTab';
import RootStack from './navigations/RootStack';



export default function App() {
  return (
   // <View style={{alignItems: 'center', top: 50}}>
   //     <Greeting name='Rexxar' />
  //      <Greeting name='Jaina' />
   //     <Greeting name='Valeera' />
    //  </View>
   // <Greeting/>
   //<Welcome />
    //<Ex01 />
    //<Ex02 />
    //<Ex03 />
    //<Ex04 />
    //<Ex05 />
    //<Ex06 />
    //<Ex07 />
    //<Ex08 />
    //<Ex09 />
    //<Ex10 />
    //<Ex11 />
    //<Ex12 />
   //<Travel/>
    //<Health />
   //<Resort/>
   //<Home/>
   <NavigationContainer>
   {/* <HomeStack/> */}
   {/* <BottomTab/> */}
   <RootStack/>
    </NavigationContainer>




  );
}
