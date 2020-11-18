import "react-native-gesture-handler";
import React from "react";
import { View } from "react-native";
import Home from "./components/Home/Home.js";
import SignIn from "./components/SignIn/SignIn.js";
import SignUp from "./components/SignUp/SignUp.js";
import User from "./components/User/User.js";
import Profile from "./components/Profile/Profile.js";
import Seats from "./components/Seats/Seats.js";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="SignIn" component={SignIn} />
        <Stack.Screen name="SignUp" component={SignUp} />
        <Stack.Screen name="User" component={User} />
        <Stack.Screen name="Profile" component={Profile} />
        <Stack.Screen name="Seats" component={Seats} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
