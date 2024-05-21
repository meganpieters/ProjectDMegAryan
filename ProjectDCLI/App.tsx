const Stack = createNativeStackNavigator();
import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";

import Home from "./screens/Home";
import RequestPopUp from "./screens/RequestPopUp";
import Chargers from "./screens/Chargers";
import Login from "./screens/Login";
import Signup from "./screens/Signup";
import Users from "./screens/Users";
import UsersOverview from "./screens/UsersOverview";
import Secure from "./components/Secure";
import MaleUser from "./components/MaleUser";
import User1 from "./components/User1";
import CircledEnvelope from "./components/CircledEnvelope";
import Admin from "./screens/Admin";
import ChargerOverview from "./screens/ChargerOverview";
import Afbeelding from "./components/Afbeelding";
import Afbeelding1 from "./components/Afbeelding1";
import Afbeelding2 from "./components/Afbeelding2";
import Afbeelding3 from "./components/Afbeelding3";
import Afbeelding4 from "./components/Afbeelding4";
import Afbeelding5 from "./components/Afbeelding5";
import Logout from "./components/Logout";
import UserShield from "./components/UserShield";

import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { View, Text, Pressable, TouchableOpacity } from "react-native";

const App = () => {
  const [hideSplashScreen, setHideSplashScreen] = React.useState(true);

  return (
    <>
      <NavigationContainer>
        {hideSplashScreen ? (
          <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen
              name="Home"
              component={Home}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="RequestPopUp"
              component={RequestPopUp}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Chargers"
              component={Chargers}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Login"
              component={Login}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Signup"
              component={Signup}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Users"
              component={Users}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="UsersOverview"
              component={UsersOverview}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Admin"
              component={Admin}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="ChargerOverview"
              component={ChargerOverview}
              options={{ headerShown: false }}
            />
          </Stack.Navigator>
        ) : null}
      </NavigationContainer>
    </>
  );
};
export default App;
