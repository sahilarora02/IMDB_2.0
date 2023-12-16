import React from 'react'
import { ScrollView, Text, StyleSheet, Image, View } from 'react-native'
const img = require("../assets/DP.jpg")
const AboutScreen = ({ route }) => {
    // const { name } = route.params;
  return (
    <ScrollView style={styles.scrollViewStyle} >
      <View style={styles.container} >
      <Image  style={styles.profileImg} source={img} />
    <Text style={styles.styleText} >Sahil Arora</Text>
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  scrollViewStyle:{
    flex:1,
    backgroundColor:"black",
  },
  container:{
    alignContent:'center',
    alignItems:'center',
    padding:25,
    flex:1,
   flexDirection:'column',
   gap:10
  },
  profileImg:{
    height:200,
    width:200,
    borderRadius:150
  },
  styleText:{
    fontSize:25,
    fontWeight:'bold',
    color:'white'
  }
}) 

export default AboutScreen