import React, { useState, useEffect } from "react";
import {
    Text,
    View,
    Image,
    TextInput,
    Button,
    TouchableOpacity,
    ScrollView,
    FlatList,
    Item,
    Linking,
  } from "react-native";
  import {gStyle} from '../styles/styles.js';
import 'react-native-gesture-handler';
import 'react-native-reanimated';
import { useNavigation, useIsFocused } from '@react-navigation/native';
import axios from "axios";



export default function Hom() {
    const isFocused = useIsFocused();
    const navigation = useNavigation();
    const [fullName, setFullName] = useState([]);
    const url1 = 'https://tree-life.site/memorial/';
    const url2 = 'https://tree-life.site/admin/qr_gen.php?has=';

    


    useEffect(() => {

    axios({
        method: 'get',
        url: "https://tree-life.site/admin/pipl_api.php",
      }).then((response) => {
        setFullName(response.data);
      })

    },[isFocused]);


    return (
      <ScrollView>
        <View style={gStyle.derContent} >
                
        <FlatList  data={fullName}  renderItem={({ item }) => (
            <View style={gStyle.derBox}>
                <Text style={gStyle.derName} >{item.name} {item.sname} {item.fame}</Text>
                <Text style={gStyle.derDate} >{item.data_r}-{item.data_d}</Text>
                <View style={gStyle.derBtnBox}>
                    <TouchableOpacity><Text style={gStyle.derBtn} onPress={() => navigation.navigate( 'Форма', {id: item.id} )}>Редактировать</Text></TouchableOpacity>
                    <TouchableOpacity><Text style={gStyle.derBtn} onPress={ ()=>{ Linking.openURL(url1 + item.hash)}}>Посмотреть</Text></TouchableOpacity>
                    <TouchableOpacity><Text style={gStyle.derBtn} onPress={ ()=>{ Linking.openURL(url2 + item.hash)}}>Скачать QR</Text></TouchableOpacity>
                </View>
            </View>
        )} />

        </View>
      </ScrollView> 
    );
  }