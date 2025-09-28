import { StyleSheet, Text, View ,SafeAreaView, TouchableOpacity} from 'react-native'
import React from 'react'
import Icon from "react-native-vector-icons/EvilIcons"
import Icons from "react-native-vector-icons/Ionicons"

const Homeheader = () => {
  return (
    
        <View style={{backgroundColor:"black",paddingHorizontal:18,paddingVertical:15,flexDirection:'row',justifyContent:'space-between'}}>
          <Text style={{fontSize:28,fontWeight:600,color:"white"}} >Instagram</Text>
          <View  style={{flexDirection:'row'}}>
             <TouchableOpacity style={{justifyContent:'space-around',alignSelf:'center'}}>
         <Icon name="heart" size={35} style={{color:"white",marginRight:10}}/>
         
         </TouchableOpacity>
         <TouchableOpacity style={{justifyContent:'space-around',alignSelf:'center'}}>
          <Icons name='chatbubble-ellipses-outline' size={25} style={{color:"white",marginTop:3}}/>
         </TouchableOpacity>
          </View>
        
         
        </View>
  )
}
export default Homeheader 

const styles = StyleSheet.create({})