import React, { useState } from "react";
import {
  Text,
  View,
  Image,
  TextInput,
  TouchableOpacity,
} from "react-native";
import {gStyle} from '../styles/styles.js';
import 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';
import { AsyncStorage } from '@react-native-async-storage/async-storage';


export default function Avtor() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigation = useNavigation();


  const avtoriz = async(email,password) => {
    if(email && password){
      await AsyncStorage.setItem('id', username);
    }else{
      setError('Заполните все поля!');
    }
  }

  //signup_api.php
  //login_api.php
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

      <TouchableOpacity>
      <Text style={gStyle.forgot_button} onPress={() => navigation.navigate( 'Reg' )}>Забыл пароль?</Text>
      <Text style={gStyle.forgot_button1} onPress={() => navigation.navigate( 'Pass' )}>Регистрация</Text>
      </TouchableOpacity>

      <TouchableOpacity style={gStyle.loginBtn}>
        <Text style={gStyle.loginText} onPress={() => navigation.navigate( 'Home' )}>Войти</Text>
      </TouchableOpacity>
    </View>
  );
}
