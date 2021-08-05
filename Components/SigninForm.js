import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  Button,
  Keyboard,
  TouchableOpacity,
} from "react-native";
 
export default function SigninForm() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const submitValue = () => {
    console.log(email, password);
    setEmail('');
    setPassword('');
    Keyboard.dismiss()
  }
 
  return (
    <View style={styles.container}>
      
      <Text style={styles.logo}>C A R P O O L</Text>
     
      <Text style={styles.subText}>Signin With NU Mail</Text>
     
      <StatusBar style="auto" />
     
      <View style={styles.inputView}>
        <TextInput
          style={styles.TextInput}
          placeholder="Email Format (18kXXXX@nu.edu.pk)"
          placeholderTextColor="#003f5c"
          value = {email}
          onChangeText={(email) => setEmail(email)}
        />
      </View>
 
      <View style={styles.inputView}>
        <TextInput
          style={styles.TextInput}
          placeholder="Password."
          placeholderTextColor="#003f5c"
          secureTextEntry={true}
          value = {password}
          onChangeText={(password) => setPassword(password)}
        />
      </View>
 
      <TouchableOpacity>
        <Text style={styles.forgot_button}>Forgot Password?</Text>
      </TouchableOpacity>
 
      <TouchableOpacity onPress={submitValue} style={styles.loginBtn}>
        <Text  style={styles.loginText}>LOGIN</Text>
      </TouchableOpacity>

      <View >
      <Text style={styles.registertxt} >Don't Have Account? 
      </Text>

      <TouchableOpacity  >
        <Text style={styles.register} > Register Now</Text>
      </TouchableOpacity>
      
      </View>
    </View>
  );
}
 
const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#191919',
      alignItems: "center",
      justifyContent: "center",
    },
   
    subText:{
        fontSize:18,
        color:"#2AAA8A",
        marginTop:10,
      },
      registertxt:{
        color:"white",
        paddingTop:40,
      },
      register:{
        color:"#2AAA8A",
        paddingLeft:20,
        fontWeight:"bold",
      },
      
   
    inputView: {
      backgroundColor: '#2AAA8A',
      borderRadius: 30,
      width: "70%",
      height: 45,
      marginBottom: 20,
      marginTop: 20,
    
    },
   
    TextInput: {
      height: 50,
      flex: 1,
      padding: 10,
      marginLeft: 20,
      color: 'white',
      
    },
   
    forgot_button: {
      height: 30,
      marginBottom: 30,
      color: 'white',
    },
   
    loginBtn: {
      width: "50%",
      borderRadius: 25,
      height: 50,
      alignItems: "center",
      justifyContent: "center",
      marginTop: 5,
      backgroundColor: "#2AAA8A",
    },
    logo: {
      fontWeight:"bold",
      fontSize:50,
      color:"#2AAA8A",
      marginTop:50, 
    },
  });