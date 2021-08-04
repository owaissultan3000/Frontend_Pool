import React,{useState} from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity,Button,Keyboard, SafeAreaView } from 'react-native';

export default function Welcome() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  
  const submitValue = () => {
    
    setEmail('');
    setPassword('');
    Keyboard.dismiss()
  }
  return (
    
    <View style={styles.container}>
      <View style={styles.container}>
        <Text style={styles.logo}>C A R P O O L</Text>
        <Text style={styles.subText}>Signin With NU Mail</Text>
        <View style={styles.inputView} >
          <TextInput  
            style={styles.inputText}
            type = "text"
            placeholder="Email..." 
            placeholderTextColor="#003f5c"
            value = {email}
            onChangeText={setEmail}/>
        </View>
        <View style={styles.inputView} >
          <TextInput  
            secureTextEntry
            type = "password"
            style={styles.inputText}
            placeholder="Password..." 
            placeholderTextColor="#003f5c"
            value = {password}
            onChangeText={setPassword}/>
        </View>
        <TouchableOpacity>
          <Text style={styles.forgot}>Forgot Password?</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.loginBtn}>
        <Button title="LOGIN" color="#2AAA8A" onPress={submitValue}/>
        </TouchableOpacity>

      </View>
    </View>
    
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#191919',
    alignItems: 'center',
  },
  logo:{
    fontWeight:"bold",
    fontSize:50,
    color:"#2AAA8A",
    marginTop:120,
    
  },
  subText:{
    fontSize:15,
    color:"#2AAA8A",
    marginTop:10,
  },
  inputView:{
    width:"90%",
    backgroundColor:"#2AAA8A",
    borderRadius:25,
    height:50,
    marginTop:30,
    justifyContent:"center",
    padding:20
  },
  inputText:{
    height:50,
    color:"white"
  },
  forgot:{
    color:"white",
    marginTop:20,
    fontSize:15
  },
  loginBtn:{
    width:"80%",
    borderRadius:30,
    height:50,
    alignItems:"center",
    justifyContent:"center",
    marginTop:40
  },
  loginText:{
    color:"white"
  }
});
