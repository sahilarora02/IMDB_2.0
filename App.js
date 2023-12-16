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
import * as React from 'react';
import { PaperProvider } from 'react-native-paper';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "./Screens/HomeScreen";
import AboutScreen from "./Screens/AboutScreen";

const stack = createNativeStackNavigator();

export default function App() {

  
  return (
    <PaperProvider>
    <NavigationContainer>
      <stack.Navigator>
     <stack.Screen name="Home" component={HomeScreen} options={{
      title:"Welcome Home",
      headerStyle:{
        backgroundColor:"#6a51ae"
      },
      headerTintColor:"#fff",
      headerTitleStyle:{
        fontWeight:"bold"
      },
      headerRight: () => (
        <Pressable onPress={()=> alert("Menu btn Pressed")} >
          
             <Text style={{ color:"#fff", fontSize:16 }} >Sidebarr</Text>
        </Pressable>
      )
     }}  />
     <stack.Screen name="About" component={AboutScreen} options={{
      headerStyle:{
        backgroundColor:"orange"
      },
     }} />
      </stack.Navigator>
    
    </NavigationContainer>
    </PaperProvider>
  );
}


