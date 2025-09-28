import { SafeAreaView, StatusBar, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Homeheader from './Homeheader'
import Stories from './Stories'
const Home = () => {
  return (
    <>
    <StatusBar backgroundColor={"black"}/>
   <Homeheader/>
   <Stories/>
  </>
  )
}

export default Home

const styles = StyleSheet.create({})