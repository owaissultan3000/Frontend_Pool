// SignUp.js
import React, {useState, createRef} from 'react';
import {
  StyleSheet,
  TextInput,
  View,
  Text,
  Image,
  KeyboardAvoidingView,
  Keyboard,
  TouchableOpacity,
  ScrollView,
} from 'react-native';

import Loader from './Components/Loader'
import axios from "axios";
import {USERS_API_URL} from "../Constants/index";

export default function RegistrationScreen({navigation})  {
  
  const [username,setUsername] = useState('')
  const [phonenumber,setPhonenumber] = useState('')
  const [gender, setGender] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmpassword, setconfirmpassword] = useState('');
  const [role] = useState('user');

  const [loading, setLoading] = useState(false);
  const [errortext, setErrortext] = useState('');
  const [
    isRegistraionSuccess,
    setIsRegistraionSuccess
  ] = useState(false);

  
  const phoneInputRef = createRef();
  const genderInputRef = createRef();
  const emailInputRef = createRef();
  const confirmInputRef = createRef();
  const passwordInputRef = createRef();

  
  const Register = (e) => {
    if (password !== confirmpassword) {
      
      alert('Passwords do not match');
      return;
    }
    else
    {
      const payload = {
          "userName": username,
          "phoneNumber": phonenumber,
          "gender":gender,
          "email": email,
          "password": password,
          "confirmPassword":confirmpassword,
          "role":role

      } 
      
      const url = `${USERS_API_URL + "UserRegistration"}`
              
                    axios.post(url,payload)
                    .then((response) => {setLoading(false)
                  console.log(response)
                  if (response.status === 200) {
                    setIsRegistraionSuccess(true);
                    console.log(
                      'Registration Successful. Please Login to proceed'
                    );
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
    setUsername('')
    setPhonenumber('')
    setGender('')
    setEmail('')
    setPassword('')
    setconfirmpassword('')

  }
  if (isRegistraionSuccess) {
    return (
      <View
        style={{
          flex: 1,
          backgroundColor: '#307ecc',
          justifyContent: 'center',
        }}>
        <Image
          source={require('../Image/success.jpg')}
          style={{
            height: 150,
            resizeMode: 'contain',
            alignSelf: 'center'
          }}
        />
        <Text style={styles.successTextStyle}>
          Registration Successful
        </Text>
        <TouchableOpacity
          style={styles.buttonStyle}
          activeOpacity={0.5}
          onPress={() => navigation.navigate('LoginScreen')}>
          <Text style={styles.buttonTextStyle}>Login Now</Text>
        </TouchableOpacity>
      </View>
    );
  }
  return (
    <View style={{flex: 1, backgroundColor: '#191919'}}>
      <Loader loading={loading} />
      <ScrollView
        keyboardShouldPersistTaps="handled"
        contentContainerStyle={{
          justifyContent: 'center',
          alignContent: 'center',
        }}>
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
           <Text style={styles.logo}>CARPOOL REGISTRATION</Text>
        </View>
        <KeyboardAvoidingView enabled>
          <View style={styles.SectionStyle}>
            <TextInput
              style={styles.inputStyle}
              value={username}
              onChangeText={(name) => setUsername(name)}
              underlineColorAndroid="#f000"
              placeholder="Enter Name"
              placeholderTextColor="#8b9cb5"
              autoCapitalize="sentences"
              returnKeyType="next"
              onSubmitEditing={() =>
                phoneInputRef.current && phoneInputRef.current.focus()
              }
              blurOnSubmit={false}
            />
          </View>
          <View style={styles.SectionStyle}>
            <TextInput
              style={styles.inputStyle}
              value={phonenumber}
              onChangeText={(phone) => setPhonenumber(phone) }
              underlineColorAndroid="#f000"
              placeholder="Phone Number"
              placeholderTextColor="#8b9cb5"
              ref={phoneInputRef}
              returnKeyType="next"
              onSubmitEditing={() =>
                genderInputRef.current &&
                genderInputRef.current.focus()
              }
              blurOnSubmit={false}
            />
          </View>
          <View style={styles.SectionStyle}>
            <TextInput
              style={styles.inputStyle}
              value={gender}
              onChangeText={(gender) => setGender(gender)}
              underlineColorAndroid="#f000"
              placeholder="Gender"
              placeholderTextColor="#8b9cb5"
              ref={genderInputRef}
              returnKeyType="next"
              
              onSubmitEditing={() =>
                emailInputRef.current &&
                emailInputRef.current.focus()
              }
              blurOnSubmit={false}
            />
          </View>
          <View style={styles.SectionStyle}>
            <TextInput
              style={styles.inputStyle}
              value = {email}
              onChangeText={(email) => setEmail(email)}
              underlineColorAndroid="#f000"
              placeholder="Email (Format k18XXXX@nu.edu.pk)"
              placeholderTextColor="#8b9cb5"
              ref={emailInputRef}
              returnKeyType="next"
              onSubmitEditing={() =>
                passwordInputRef.current &&
                passwordInputRef.current.focus()
              }
              blurOnSubmit={false}
            />
          </View>
          <View style={styles.SectionStyle}>
            <TextInput
              style={styles.inputStyle}
              value = {password}
              onChangeText={(password) => setPassword(password)}
              underlineColorAndroid="#f000"
              placeholder="Enter Password"
              placeholderTextColor="#8b9cb5"
              autoCapitalize="sentences"
              ref={passwordInputRef}
              secureTextEntry={true}
              returnKeyType="next"
              // onSubmitEditing={Keyboard.dismiss}
              onSubmitEditing={() =>
                confirmInputRef.current &&
                confirmInputRef.current.focus()
              }
              blurOnSubmit={false}
            />
          </View>
          <View style={styles.SectionStyle}>
            <TextInput
              style={styles.inputStyle}
              value = {confirmpassword}
              onChangeText={(confirmpassword) => setconfirmpassword(confirmpassword)}
              underlineColorAndroid="#f000"
              placeholder="Confirm Password"
              placeholderTextColor="#8b9cb5"
              autoCapitalize="sentences"
              ref={confirmInputRef}
              secureTextEntry={true}
              returnKeyType="next"
              onSubmitEditing={Keyboard.dismiss}
              blurOnSubmit={false}
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
            onPress={Register}>
            <Text style={styles.buttonTextStyle}>REGISTER</Text>
          </TouchableOpacity>
        </KeyboardAvoidingView>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  SectionStyle: {
    flexDirection: 'row',
    height: 40,
    marginTop: 20,
    marginLeft: 35,
    marginRight: 35,
    margin: 10,
  },
  logo: {
    fontWeight:'bold',
    fontSize:30,
    color:"#2AAA8A",
    marginTop:150,
  },
  buttonStyle: {
    backgroundColor: '#2AAA8A',
    borderWidth: 0,
    color: '#FFFFFF',
    borderColor: '#7DE24E',
    width:"50%",
    height: 40,
    alignItems: 'center',
    borderRadius: 30,
    marginLeft: 95,
    marginRight: 35,
    marginTop: 30,
    marginBottom: 20,
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
  errorTextStyle: {
    color: 'red',
    textAlign: 'center',
    fontSize: 14,
  },
  successTextStyle: {
    color: 'white',
    textAlign: 'center',
    fontSize: 18,
    padding: 30,
  },
});
