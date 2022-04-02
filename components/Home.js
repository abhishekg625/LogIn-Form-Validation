import { View, Text , StyleSheet} from 'react-native'
import React from 'react'
import { Button } from 'react-native-web'

const Home = ( {navigation}) => {
  return (
    <View style= {styles.mainContainer}>
      <Text>Welcom Giri Ji </Text>
      <Button title= "Go Back"
      onPress={()=> navigation.goBack()}
      />
    </View>
  )
}
 const styles= StyleSheet.create({
     mainContainer:{
         width:"100%",
         height:"100%",
         display: "flex",
         justifyContent:"center",
         alignItems:"center"

     }


 })
export default Home