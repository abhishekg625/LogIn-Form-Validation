import { View, Text , StyleSheet, Alert} from 'react-native'
import React , {useState} from 'react'
import { TextInput } from 'react-native'
import Checkbox from 'expo-checkbox'
import { TouchableOpacity } from 'react-native'

export default function FormValid( {navigation}) {
  const [userName, setUserName] = useState("")
  
  const [password, setPassword] = useState("")
  console.log(userName, password)
  const Submit= ()=>{
    //return alert(userName, password);
    if(userName==="" && password===""){
      
      alert("username and password cant be empty")
      
    }else{
     // alert(`Welcome  ${userName}`);
      navigation.navigate("Home");
    }
    
  }


    const [agree, setAgree] = useState(false)
  return (
    <View style={
      styles.mainContainer
    }>
      <Text style={styles.mainHeader}>Log In Form </Text>
      <Text style={styles.description}>You can reach me at any time abhishekg625@gmail.com</Text>
      <View style={styles.inputContainer}> 
          <Text style={styles.labels}> Enter your name</Text>
          <TextInput style={styles.inputStyle}   
          autoCapitalize ="none"
          autoCorrect="false"
          value={userName}
          onChangeText={(actualData)=>{
            setUserName(actualData)
          }}

          />
      </View>
      <View> 
          <Text style={styles.labels}> Enter your password</Text>
          <TextInput  
          style={styles.inputStyle} 
          autoCapitalize ="none"
          autoCorrect="false"
          secureTextEntry="true"
          value={password}
          onChangeText={(actualPass)=>{
            setPassword(actualPass)}}
          
          />
          <View style={styles.wrapper} >
          <Checkbox 
          style={styles.checkbox}

          value={agree} 
            onValueChange={()=> setAgree(!agree)} 
            color= {agree? "#4630EB" : undefined}
           
           />
           
           <Text  style={styles.checkboxContainer}> I agree for T&C</Text>
           <TouchableOpacity 
           style={[styles.loginBtn, {backgroundColor: agree? "#fb5b5a": "grey"}]}
            color ={ agree ? "#4630EB" : undefined}
            disabled={!agree} 
            onPress={()=> Submit()}>
               <Text>LogIn</Text>
           </TouchableOpacity>
           
          </View>
         
      </View>
    </View>
    
  )
}

const  styles= StyleSheet.create({
  mainContainer:{
    height: "100%",
    paddingHorizontal:30,
    paddingTop: 30,
    //backgroundColor:"#fff",
    flex: 1,
    backgroundColor: "beige",
    borderWidth: 3,
    borderRadius: 50,
    
  },
  mainHeader:{
    fontSize:25,
    color:"#344055",
    fontWeight: "500",
    paddingTop: 20,
    paddingBottom: 15,
    textTransform: "capitalize",
    fontFamily: "bold"
  },
  description:{
    fontSize: 20,
    color: "#7d7d7d",
    paddingBottom: 20
  },
  inputContainer:{
    marginTop: 20

  },
  labels:{
    fontSize: 18,
    color: "#7d7d7d",
    marginTop: 10,
    marginBottom: 5,
    lineHeight:25,
    fontFamily: "regular"
  },
  inputStyle:{
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
  checkbox: {
    alignSelf:"auto",
  },
  checkboxContainer: {
    flexDirection: "row",
    marginBottom: 20,
  },
  loginBtn:{
    width:"20%",
    backgroundColor:"#fb5b5a",
    borderRadius:25,
    height:50,
    alignItems:"center",
    justifyContent:"center",
    marginTop:40,
    marginBottom:10
  },
  wrapper:{

  }


})