import 'react-native-gesture-handler';
import React, { useState } from 'react';
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from '@react-navigation/stack';
import Home from './screens/Home';
import RequestPopUp from "./screens/RequestPopUp";
import Chargers from "./screens/Chargers";
import Users from "./screens/Users";
import Login from './screens/Login';
import UsersOverview from './screens/UsersOverview';
import Admin from './screens/Admin';
import ChargerOverview from './screens/ChargerOverview';
import Signup from './screens/Signup';
import StopPopUp from './components/StopPopUp';

const Stack = createStackNavigator();

const App = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    return (
        <NavigationContainer>
            <Stack.Navigator screenOptions={{ headerShown: false }}>
                {isLoggedIn ? (
                    <>
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
                            name="StopPopUp"
                            component={StopPopUp}
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
                        <Stack.Screen
                            name="Chargers"
                            component={Chargers}
                            options={{ headerShown: false }}
                        />
                        <Stack.Screen
                            name="Login"
                            component={Login}
                            options={{ headerShown: false }}
                            initialParams={{ setIsLoggedIn }}
                        />
                    </>
                ) : (
                    <>
                        <Stack.Screen
                            name="Login"
                            component={Login}
                            options={{ headerShown: false }}
                            initialParams={{ setIsLoggedIn }}
                        />
                        <Stack.Screen
                            name="Home"
                            component={Home}
                            options={{ headerShown: false }}
                        />
                        <Stack.Screen
                            name="Signup"
                            component={Signup}
                            options={{ headerShown: false }}
                            initialParams={{ setIsLoggedIn }} // Pass setIsLoggedIn to Signup screen
                        />
                        <Stack.Screen
                            name="Admin"
                            component={Admin}
                            options={{ headerShown: false }}
                        />

                    </>
                )}
            </Stack.Navigator>
        </NavigationContainer>
    );
};

export default App;
