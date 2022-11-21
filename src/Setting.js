import * as React from 'react';
import {
    Text,
    View,
    Image,
    TextInput,
    Button,
    TouchableOpacity,
  } from "react-native";
  import {gStyle} from '../styles/styles.js';
import 'react-native-gesture-handler';
import 'react-native-reanimated';


export default function Setting() {
    return (
        <View style={gStyle.container}>
        <Image style={gStyle.image} source={require("../assets/logo.png")} />
  
  
        <View style={gStyle.inputView}>
          <TextInput
            style={gStyle.TextInput}
            placeholder="Логин"
            placeholderTextColor="#000"
            onChangeText={(email) => setEmail(email)}
          />
        </View>
  
        <View style={gStyle.inputView}>
          <TextInput
            style={gStyle.TextInput}
            placeholder="Пароль"
            placeholderTextColor="#000"
            secureTextEntry={true}
            onChangeText={(password) => setPassword(password)}
          />
        </View>
        <View style={gStyle.inputView}>
          <TextInput
            style={gStyle.TextInput}
            placeholder="Повторите пароль"
            placeholderTextColor="#000"
            secureTextEntry={true}
            onChangeText={(password) => setPassword(password)}
          />
        </View>
    
  
       
  
        <TouchableOpacity style={gStyle.loginBtn}>
          <Text style={gStyle.loginText}>Сохранить</Text>
        </TouchableOpacity>
      </View>
    );
  }