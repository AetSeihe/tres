import * as React from 'react';
import {
    Text,
    View,
    Image,
    TextInput,
    Button,
    TouchableOpacity,
    ScrollView,
    Linking,
  } from "react-native";
  import {gStyle} from '../styles/styles.js';
import 'react-native-gesture-handler';
import 'react-native-reanimated';
import { useNavigation } from '@react-navigation/native';

export default function Nuw() {
    const navigation = useNavigation();

    
    return (
        <ScrollView>
        <View style={gStyle.nuwContent}>

            <View style={gStyle.nuwBox}>
                <Image style={gStyle.nuwImage} source={require("../assets/ex.jpg")} />
                <View style={gStyle.nuwBtnBox}>
                    <TouchableOpacity><Text style={gStyle.nuwBtn} onPress={() => navigation.navigate( 'Форма', {id: 0} )}>Выбрать</Text></TouchableOpacity>
                    <TouchableOpacity><Text style={gStyle.nuwBtn} onPress={ ()=>{ Linking.openURL("https://tree-life.site/example_7.php")}}>Посмотреть</Text></TouchableOpacity>
                </View>
            </View>

            

            

        </View>
        </ScrollView>
    );
  }