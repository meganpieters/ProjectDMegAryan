
import 'react-native-gesture-handler';
import React, { useState } from 'react';
// import type { ReactNode } from 'react';



const Stack = createStackNavigator();
//import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";

import Home from "./screens/Homepage";
import RequestPopUp from "./components/RequestPopUp";
import Chargers from "./screens/Chargers";
import Users from "./screens/Users";

import { createStackNavigator } from '@react-navigation/stack';
import { View, Text, Pressable, TouchableOpacity } from "react-native";
import Homepage from './screens/Homepage';

const App = () => {
  const [hideSplashScreen, setHideSplashScreen] = React.useState(true);

  return (
    <>
      <NavigationContainer>
        {hideSplashScreen ? (
          <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen
              name="Homepage"
              component={Homepage}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Chargers"
              component={Chargers}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Users"
              component={Users}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="RequestPopUp"
              component={RequestPopUp}
              options={{ headerShown: false }}
            />
          </Stack.Navigator>
        ) : null}
      </NavigationContainer>
    </>
  );
};
export default App;
