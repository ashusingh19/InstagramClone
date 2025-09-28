import { Image, SafeAreaView, StyleSheet, Text, View } from 'react-native'
import React, { useEffect } from 'react'




const Splashscreen = ({navigation}) => {

 useEffect(()=>{
  const timer = setTimeout (()=>{
   navigation.replace("Login")
  }, 5000)
  return ()=> clearInterval(timer)
},[navigation])
  return (
   <View style={{flex:1 ,alignItems:"center",paddingTop:250}} >
    <Image source={require('../../assets/image/Icon.png')}/>
    <Text style={{color:"black",fontSize:56}}>Instagram</Text>
    <Text style={{color:"black",fontSize:26}}>Followed by</Text>
    <Text style={{color:"#008b8b",fontSize:56,marginBottom:56}}>meta</Text>

   </View>
  )
}

export default Splashscreen

const styles = StyleSheet.create({})