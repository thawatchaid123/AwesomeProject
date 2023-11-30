import { StatusBar } from 'expo-status-bar';
import React from 'react';

import { View } from 'react-native';
import Greeting from './Components/Greeting';


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
import Travel from './screens/week3/Travel';



export default function App() {
  return (
   // <View style={{alignItems: 'center', top: 50}}>
   //     <Greeting name='Rexxar' />
  //      <Greeting name='Jaina' />
   //     <Greeting name='Valeera' />
    //  </View>

<Travel />

  // <Welcome />
    //<Ex01 />
    //<Ex02 />
    //<Ex03 />
    //<Ex04 />
    //<Ex05 />
    //<Ex06 />
    //<Ex07 />
   // <Ex08 />
    //<Ex09 />
    //<Ex10 />
    //<Ex11 />
    //<Ex12 />

  );
}
