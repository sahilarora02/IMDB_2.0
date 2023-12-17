import {
  StyleSheet,
  Text,
  View,
  StatusBar,
  ScrollView,
  ImageBackground,
  Image,
  Modal,
  Pressable,
  Button,
} from "react-native";
import { useState, useEffect } from "react";
import * as React from "react";
import { PaperProvider } from "react-native-paper";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "./Screens/HomeScreen";
import AboutScreen from "./Screens/AboutScreen";

const stack = createNativeStackNavigator();

export default function AppStack() {
  return (
    <PaperProvider>
      {/* <NavigationContainer> */}
      <stack.Navigator>
        <stack.Screen
          name="Home"
          options={{
            headerShown: false,
          }}
          component={HomeScreen}
        />
        <stack.Screen
          name="About"
          component={AboutScreen}
          options={{
            headerStyle: {
              backgroundColor: "orange",
            },
            headerShown: false,
          }}
        />
      </stack.Navigator>

      {/* </NavigationContainer> */}
    </PaperProvider>
  );
}
