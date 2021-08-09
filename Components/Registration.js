// SignUp.js
import React,{useState} from 'react'
import {
  View,
  Button,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity
} from 'react-native'
import { USERS_API_URL } from '../Constants';

export default function Registration()  {
  
  const [username,setUsername] = useState('')
  const [phonenumber,setPhonenumber] = useState('')
  const [gender, setGender] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmpassword, setconfirmpassword] = useState('');
  const [role] = useState('user');

  
  const signUp = (e) => {
    if (password !== confirmpassword) {
      console.log("fizzzzzzzzz")
      alert('Passwords do not match');
      return;
    }
    else
    {
      let user = {
        username: username,
          phonenumber: phonenumber,
          gender:gender,
          email: email,
          password: password,
          role:role

      } 
      console.log(user)
  //     console.log("bzzzzzzzzz")
  //     e.preventDefault();
  //     fetch(USERS_API_URL, {
  //       method: 'POST',
  //       headers: {
  //         'Accept': 'application/json',
  //         'Content-Type': 'application/json'
  //       },
  //       body: JSON.stringify({
  //         username: username,
  //         phonenumber: phonenumber,
  //         gender:gender,
  //         email: email,
  //         password: password,
  //         role:role
          
          
  //   })
  // })

  // .then(res => res.json())
  // .catch(err =>console.log(err))
    }
  }
  return (
        
    <View style={styles.container}>
        <Text style={styles.logo}>CARPOOL REGISTRATION</Text>
      <TextInput
        style={styles.input}
        placeholder='Name'
        autoCapitalize="none"
        placeholderTextColor='white'
        value={username}
        onChangeText={(name) => setUsername(name) }
      />
      <TextInput
        style={styles.input}
        placeholder='Phone Number'
        autoCapitalize="none"
        placeholderTextColor='white'
        value={phonenumber}
        onChangeText={(phone) => setPhonenumber(phone) }
      />
      <TextInput
        style={styles.input}
        placeholder='Gender'
        autoCapitalize="none"
        placeholderTextColor='white'
        value={gender}
        onChangeText={(gender) => setGender(gender)}
      />
      <TextInput
        style={styles.input}
        placeholder='Email'
        autoCapitalize="none"
        placeholderTextColor='white'
        value = {email}
        onChangeText={(email) => setEmail(email)}
      />
      <TextInput
        style={styles.input}
        placeholder='Password'
        secureTextEntry={true}
        autoCapitalize="none"
        placeholderTextColor='white'
        value = {password}
        onChangeText={(password) => setPassword(password)}
      />
      <TextInput
        style={styles.input}
        placeholder='Confirm Password'
        secureTextEntry={true}
        autoCapitalize="none"
        placeholderTextColor='white'
        value = {confirmpassword}
        onChangeText={(confirmpassword) => setconfirmpassword(confirmpassword)}
      />
      
      
      
      <TouchableOpacity onPress={signUp} style={styles.loginBtn}>
      <Text>Register</Text>
    </TouchableOpacity>
    </View>
  );

  }
  


const styles = StyleSheet.create({
  input: {
    width: "70%",
    height: 45,
    backgroundColor: '#2AAA8A',
    margin: 10,
    padding: 8,
    color: 'white',
    borderRadius: 15,
    fontSize: 15,
    fontWeight: '400',
    paddingLeft: 20,
  },
  logo: {
    fontWeight:'bold',
    fontSize:30,
    color:"#2AAA8A",
    marginBottom:30, 
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#191919',
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
});