import React, { Component } from 'react'
import SigninForm from './Components/SigninForm'
import Registration from './Components/Registration'
import { StyleSheet, Text, View, TouchableHighlight } from 'react-native';


export class App extends Component {
  render() {
    
  const fetchApiCall = () => {
    fetch("https://quotes15.p.rapidapi.com/quotes/random/?language_code=en", {
      "method": "GET",
      "headers": {
        "x-rapidapi-host": "quotes15.p.rapidapi.com",
        "x-rapidapi-key": "5b1c518b57mshb21fe8459f9107ep197b97jsn936206c676b3"
      }
    })
      .then(response => response.json())
      .then(response => {
        console.log(response.content);
        console.log(response.originator.name)
      })
      .catch(err => {
        console.log(err);
      });
  }

    return (
      
     
       <SigninForm/>
     
        // <Registration/>
      
    )
  }
}





export default App
