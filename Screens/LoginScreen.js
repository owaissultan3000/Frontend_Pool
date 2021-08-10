import React, {useState, createRef} from 'react';
import {
  StyleSheet,
  TextInput,
  View,
  Text,
  ScrollView,
  Image,
  Keyboard,
  TouchableOpacity,
  KeyboardAvoidingView,
} from 'react-native';

import AsyncStorage from '@react-native-community/async-storage';
import axios from "axios";
import {USERS_API_URL} from "../Constants/index";
import Loader from "./Components/Loader";

 

  
export default function LoginScreen({navigation}) {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [token, setToken] = useState('');
  const [loading, setLoading] = useState(false);
  const [errortext, setErrortext] = useState('');
  const passwordInputRef = createRef();


const submitValue = () => {
    if (email.length > 0 && password.length > 0) {
      setLoading(true);
      const url = `${USERS_API_URL + "UserLogin"}`
  

  const payload = { "userEmail": email, "userPassword": password };
                 
          
                  axios.post(url,payload)
                 .then((response) => {setLoading(false)
                console.log(response)
                if (response.status === 200) {
                  AsyncStorage.setItem('user_id', response.data.tokenString);
                  console.log(response.data.tokenString);
                  // navigation.replace('Home');
                } else {
                  setErrortext('Something went wrong');
                  console.log('Please check your email id or password');
                }
                }) 
                .catch((error) => {
                  //Hide Loader
                  setLoading(false);
                  console.error(error);
                });

 
  }

}
 
return (
  <View style={styles.mainBody}>
    <Loader loading={loading} />
    <ScrollView
      keyboardShouldPersistTaps="handled"
      contentContainerStyle={{
        flex: 1,
        justifyContent: 'center',
        alignContent: 'center',
      }}>
      <View>
        <KeyboardAvoidingView enabled>
          <View style={{alignItems: 'center'}}>
            {/* <Image
              source={require('../Image/car.jpg')}
              style={{
                width: '50%',
                height: 100,
                resizeMode: 'contain',
                margin: 30,
              }}
            /> */}
            <Text style={styles.logo}>C A R P O O L</Text>
     
           <Text style={styles.subText}>Signin With NU Mail</Text>
          </View>
          <View style={styles.SectionStyle}>
            <TextInput
              style={styles.inputStyle}
              onChangeText={(email) => setEmail(email)
              }
              value = {email}
              placeholder="Email Format k18XXXX@nu.edu.pk" 
              placeholderTextColor="#8b9cb5"
              autoCapitalize="none"
              keyboardType="email-address"
              returnKeyType="next"
              onSubmitEditing={() =>
                passwordInputRef.current &&
                passwordInputRef.current.focus()
              }
              underlineColorAndroid="#f000"
              blurOnSubmit={false}
            />
          </View>
          <View style={styles.SectionStyle}>
            <TextInput
              style={styles.inputStyle}
              value = {password}
          onChangeText={(password) => setPassword(password)
              }
              placeholder="Enter Password" //12345
              placeholderTextColor="#8b9cb5"
              keyboardType="default"
              ref={passwordInputRef}
              onSubmitEditing={Keyboard.dismiss}
              blurOnSubmit={false}
              secureTextEntry={true}
              underlineColorAndroid="#f000"
              returnKeyType="next"
            />
          </View>
          {errortext != '' ? (
            <Text style={styles.errorTextStyle}>
              {errortext}
            </Text>
          ) : null}
          <TouchableOpacity
            style={styles.buttonStyle}
            activeOpacity={0.5}
            onPress={submitValue}>
            <Text style={styles.buttonTextStyle}>LOGIN</Text>
          </TouchableOpacity>
          <Text
            style={styles.registerTextStyle}
            onPress={() => navigation.navigate('RegistrationScreen')}>
            Don't Have Account ? Register Now
          </Text>
        </KeyboardAvoidingView>
      </View>
    </ScrollView>
  </View>
);
};


const styles = StyleSheet.create({
mainBody: {
  flex: 1,
  justifyContent: 'center',
  backgroundColor: '#191919',
  alignContent: 'center',
},
logo: {
  fontWeight:"bold",
  fontSize:50,
  color:"#2AAA8A",
  marginTop:50, 
},
subText:{
  fontSize:18,
  color:"#2AAA8A",
  marginTop:10,
},
SectionStyle: {
  flexDirection: 'row',
  height: 40,
  marginTop: 20,
  marginLeft: 35,
  marginRight: 35,
  margin: 10,
},
buttonStyle: {
  backgroundColor: '#2AAA8A',
  borderWidth: 0,
  width:"50%",
  color: '#2AAA8A',
  borderColor: '#7DE24E',
  height: 40,
  alignItems: 'center',
  borderRadius: 30,
  marginLeft: 95,
  marginRight: 35,
  marginTop: 20,
  marginBottom: 25,
},
buttonTextStyle: {
  color: '#FFFFFF',
  paddingVertical: 10,
  fontSize: 16,
},
inputStyle: {
  flex: 1,
  color: 'white',
  paddingLeft: 15,
  paddingRight: 15,
  borderWidth: 1,
  borderRadius: 30,
  borderColor: '#2AAA8A',
},
registerTextStyle: {
  color: '#FFFFFF',
  textAlign: 'center',
  fontWeight: 'bold',
  fontSize: 14,
  alignSelf: 'center',
  padding: 10,
},
errorTextStyle: {
  color: 'red',
  textAlign: 'center',
  fontSize: 14,
},
});
