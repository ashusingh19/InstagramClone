import { StyleSheet,Image,TextInput,TouchableOpacity, Text, View } from 'react-native'
import React, { useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { scale } from 'react-native-size-matters'


const Forget = ({navigation}) => {
    const [form,setform] =useState({
        email:''
    })
  return (
    <SafeAreaView style={{flex:1}}>
    <View style={{alignItems:"center"}}>
        <Image style={{width:scale(100),height:scale(100),marginTop:scale(140),}} source={require('../../assets/image/circle.png')}/>
        <Text style={{fontSize:scale(28),fontWeight:scale(800),marginTop:scale(10)}}>Trouble Logging in ?</Text>
        <Text style={{fontSize:scale(19),marginRight:scale(10),marginLeft:scale(10),color:"grey"}}>enter your email, phone or username we'll send a link to get back into your account</Text>
    </View>
    <View>
        <TextInput style={styles.username}
            placeholder='Mobile number or email'
            autoCapitalize='none'
            autoCorrect={false}
            placeholderTextColor={"grey"}
            value={form.email}
            onChangeText={email =>setform ({... form,email})}
            />
          </View>
          <TouchableOpacity 
                onPress={( )=> navigation.navigate('Home')}
                >
                  
                  <View style={{marginTop:scale(35),backgroundColor:"#00bfff",paddingVertical:scale(10),paddingHorizontal:scale(10),borderRadius:scale(10),width:scale(310),marginLeft:scale(20)}}>
                  <Text style={{textAlign:"center",color:"white",fontWeight:600,fontSize:scale(20)}}>Send link</Text>
                  </View>
                </TouchableOpacity>
                <Text style={{textAlign:"center",marginTop:scale(25),fontSize:scale(15),color:"grey",fontWeight:"600"}}>OR</Text>
                 <TouchableOpacity style={{marginTop:scale(20),alignItems:"center"}}
                        onPress={() => navigation.navigate('Signup')}
                        >
                         
                           <Text style={{color:"#00bfff",fontSize:scale(20),fontWeight:"bold"}}> Create New Account</Text>
                    
                        </TouchableOpacity>
                         <TouchableOpacity style={{marginTop:scale(20),alignItems:"center"}}
                        onPress={() => navigation.navigate('Login')}
                        >
                         
                           <Text style={{color:"#00bfff",fontSize:20,fontWeight:"bold"}}> Back to Log in. </Text>
                    
                        </TouchableOpacity>
    </SafeAreaView>
  )
}

export default Forget

const styles = StyleSheet.create({
    username:{
     backgroundColor:"white",
     borderRadius:scale(12),
     borderWidth:scale(1),
     marginTop:scale(15),
     paddingVertical:scale(15),
     paddingHorizontal:scale(10),
     width:scale(300),
     marginLeft:scale(25),
     fontSize:scale(15),
    
  }
})