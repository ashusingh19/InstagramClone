import { Image, SafeAreaView, StyleSheet, Text, TextInput, TouchableOpacity, useWindowDimensions, View } from 'react-native'
import React, { useState } from 'react'
import Icon from 'react-native-vector-icons/Entypo'
import { scale } from 'react-native-size-matters'

const Login = ({navigation}) => {

  const [showpassword,setshowpassword] = useState(false)
 const [form ,setform] = useState({
  email:'',
  password:'',
 });
  return (
    <SafeAreaView style={{backgroundColor:"#e0ffff ",flex:1}}>
    <View >
      {/* <Image style={{marginTop:165,alignItems:"center",justifyContent:"center"}} source={require("../../assets/image/Instagramlogo.png")}/> */}
      <Text style={{color:"black",textAlign:"center",fontSize:scale(45),fontWeight:"bold",marginTop:scale(140), marginRight:scale(30),}}>Instagram</Text>
       {/* <Icon name="instagram" size={45} style ={{justifyContent:"center",alignItems:"center",flexDirection:"column",marginLeft:100}} />  */}

    </View>
    <View>
    <View  style={{marginTop:scale(20)}}>

      {/* <Text style={{color:"black",fontSize:15,marginTop:15, marginLeft:30,fontWeight:"700"}}>e-mail or username :</Text> */}
      <TextInput
      style={styles.username}

      placeholder=' Phone number , username or email'
      autoCapitalize='none'
      autoCorrect={false}
      placeholderTextColor={"grey"}
      value={form.email}
      onChangeText={email =>setform ({...form,email})}
      
      
      />
    </View>
    <View style={{marginBottom:25}}>
       <View style={{alignItems:"center",flexDirection:"row"}}>
      <TextInput
      style={styles.username}
      placeholder='Password'
      secureTextEntry={!showpassword} //if toggle password dikhega agr use state false means password hide
      placeholderTextColor={"grey"}
      value={form.password}
      onChangeText={password =>setform ({...form,password})}
      />
      <Icon 
      name = {showpassword? 'eye':'eye-with-line'}
      size={22}
       onPress={() => setshowpassword(!showpassword)}
        style={{ marginLeft: scale(10) ,position:"absolute",right:scale(40),top:scale(28)}}
      />
      </View>
      </View>
       <TouchableOpacity 
       onPress={() => navigation.navigate('Forget')}
       >
        <Text style={{marginBottom:scale(10),marginLeft:scale(210),color:"#00bfff"}}>Forget password ?</Text>
      </TouchableOpacity>
      <TouchableOpacity
      onPress={()=> navigation.navigate('BottomTab')}
      >
        <View style={styles.btn}

        >
          <Text style={styles.btntext}>Login</Text>
        </View>
      </TouchableOpacity>
    </View>
    <TouchableOpacity>
      <View style={{flexDirection:"row",marginTop:scale(28),marginLeft:scale(58)}}>
        <Icon name="facebook" size={28} style={{color:"#00bfff"}}/>
        <Text style={{color:"#00bfff",fontSize:scale(20),fontWeight:"600"}}>Login with facebook</Text>
      </View>
    </TouchableOpacity>
    <View style={{flexDirection:"row",marginTop:scale(20)}}>
      <View style={{ borderBottomColor: '#000', borderBottomWidth: scale(1), marginVertical: scale(10),width:scale(120),marginRight:scale(50) }} />
    <Text style={{color:"grey",fontSize:scale(20),fontWeight:500}}>OR</Text>
    <View style={{ borderBottomColor: '#000', borderBottomWidth: scale(1), marginVertical: scale(10),width:scale(120),marginLeft:scale(40) }} />
    </View>
    <TouchableOpacity style={{marginTop:scale(40),marginLeft:scale(50)}}
    onPress={()=> navigation.navigate('Signup')}
    >
     
      <Text style={{fontSize:scale(20)}}>Don't have account ? <Text style={{color:"#00bfff",fontSize:scale(20)}}>Sign up.</Text></Text>

    </TouchableOpacity>
    {/* <Text style={{marginTop:scale(70),marginLeft:scale(58),fontSize:scale(20)}}>Instagram from facebook</Text> */}
    </SafeAreaView>
  )
}

export default Login

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
    
  },
  btntext:{
    fontSize:scale(18),
    fontWeight:"600",
    color:"#fff"
  },
  btn:{
    backgroundColor:"#22a6ceff",
    borderRadius:scale(8),
    borderWidth:scale(1),
    borderColor:"#22a6ceff",
    flexDirection:"row",
    alignItems:"center",
    justifyContent:"center",
    paddingVertical:scale(10),
    paddingHorizontal:scale(10),
    width:scale(315),
    marginLeft:scale(20),
    marginTop:scale(28)
  }
})