import React from 'react';
import { View } from 'react-native';
import {createNativeStackNavigator} from "@react-navigation/native-stack";

import Home from  "./Components/Home";
import Sigin from "./Components/Sigin"

const Stack = createNativeStackNavigator();

export default function Routes() {
 return (
    <Stack.Navigator>
      <Stack.Screen 
      name="Home"
      component={Home}
      options={ {headerShown: false}}
      />
      <Stack.Screen 
      name="Sigin"
      component={Sigin}
      options={ {headerShown: false}}/>
    </Stack.Navigator>
    
   

  );
}