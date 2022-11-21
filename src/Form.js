import React, { useState, useEffect } from "react";
import {
  Text,
  View,
  Image,
  TextInput,
  TouchableOpacity,
  ScrollView,
  FlatList,
} from "react-native";
import {launchImageLibrary} from "react-native-image-picker"
import {gStyle} from '../styles/styles.js';
import 'react-native-gesture-handler';
import 'react-native-reanimated';
import { useNavigation } from '@react-navigation/native';
import axios from "axios";
import {YaMap, Geocoder, Marker} from 'react-native-yamap';

export default function Form( {route} ) {
  const navigation = useNavigation();
   
    YaMap.init('a81c6157-a898-48c1-9df1-3f0e3f954571');
    Geocoder.init('812eb9b9-ac9c-4cde-b942-20fc8680f28e');
    
    const [name, setName] = useState("");
    const [sname, setSname] = useState("");
    const [fname, setFname] = useState("");
    const [data_r, setData_r] = useState("");
    const [data_d, setData_d] = useState("");
    const [epitaph, setEpitaph] = useState("");
    const [profession, setProfession] = useState("");
    const [biography, setBiography] = useState("");
    const [adres, setAdres] = useState("");
    const [fullName, setFullName] = useState([]);
    const [imgUri, setimgUri] = useState([]);
    

    useEffect(() => {
      if(route.params.id != 0){
        axios({
          method: 'post',
          url: "https://tree-life.site/admin/form_api.php",
          data: { id : route.params.id},
           
        }).then((response) => {
         
          setimgUri(response.data.foto);
          setFullName(response.data);
          setName(response.data.name);
          setSname(response.data.sname);
          setFname(response.data.fname);
          setData_r(response.data.data_r);
          setData_d(response.data.data_d);
          setEpitaph(response.data.epitaph);
          setProfession(response.data.profession);
          setBiography(response.data.biography);
          setAdres(response.data.adres);
        }).catch((error) => {
          console.log(`error`, error.response);
        });
      }

      
      
    },[]);

    const openGaleri = () => {
      const options ={
        storageOptions: {
          skipBackup: true,
          path: 'images',
          mediaType: 'photo',
        },
        includeBase64: true,
      };
  
      launchImageLibrary(options, (response) => {
        if (response.didCancel) {
          console.log('User cancelled image picker');
        } else if (response.error) {
          console.log('ImagePicker Error: ', response.error);
        } else if (response.customButton) {
          console.log('User tapped custom button: ', response.customButton);
        } else {
          //console.log(response);
          const file = response['assets'][0]['base64'];

          
          axios({
            method: 'post',
            url: "https://tree-life.site/upload_app.php",
            data: { file : file},
          }).then((responses) => {
            setimgUri([...imgUri, responses.data]);
          });
          
        }
      });
    };

    const delImg = (index) => {
      //setimgUri(prevState => prevState.filter(el => el[index] !== index))
      setimgUri([...imgUri.slice(0, index), ...imgUri.slice(index + 1)]);
    };

    //console.log(fullName.adres);
    //YaMap.setCenter({lat: 50, lon: 50}, 5);
    //console.log(Geocoder.reverseGeocode(fullName.adres));
   // map = React.createRef();
    //this.map.current.setCenter({lat: 50, lon: 50}, 5);

    /*

    <View style={gStyle.inputForm}>
            <YaMap 
            fitAllMarkers
           style={gStyle.yaMap}
            //ref={this.map}
            >
                <Marker point={{lat: 50, lon: 50}}/>
            </YaMap>
        </View>
    
    */

        const addToo = (name,sname,fname,data_r,data_d,epitaph,profession,biography,adres,imgUri) => {
          axios({
            method: 'post',
            url: "https://tree-life.site/admin/appupp.php",
            data: { id : route.params.id, name:name,sname:sname,fname:fname,data_r:data_r,data_d:data_d,epitaph:epitaph,profession:profession,biography:biography,adres:adres,foto:imgUri},
             
          }).then((response) => {
            console.log(response.data)
          }).catch((error) => {
            console.log(`error`, error.response);
          });

          navigation.navigate( 'Существующие' );
        }

    return (
      <ScrollView>

        

        <View style={gStyle.container_form}>
        
        <View style={gStyle.inputForm}>
        <Text style={gStyle.textForm}>Имя</Text>
          <TextInput
            style={gStyle.textInputForm}
            value={name}
            placeholderTextColor="#000"
            onChangeText={(name) => setName(name)}
          />
        </View>
  
        <View style={gStyle.inputForm}>
        <Text style={gStyle.textForm}>Фамилия</Text>
          <TextInput
            style={gStyle.textInputForm}
            value={sname}
            placeholderTextColor="#000"
            onChangeText={(sname) => setSname(sname)}
          />
        </View>

        <View style={gStyle.inputForm}>
        <Text style={gStyle.textForm}>Отчество</Text>
          <TextInput
            style={gStyle.textInputForm}
            value={fname}
            placeholderTextColor="#000"
            onChangeText={(fname) => setFname(fname)}
          />
        </View>

        <View style={gStyle.inputForm}>
        <Text style={gStyle.textForm}>Дата рождения (гггг.мм.дд)</Text>
          <TextInput
            style={gStyle.textInputForm}
            value={data_r}
            placeholderTextColor="#000"
            onChangeText={(data_r) => setData_r(data_r)}
          />
        </View>

       

        <View style={gStyle.inputForm}>
        <Text style={gStyle.textForm}>Дата смерти (гггг.мм.дд)</Text>
          <TextInput
            style={gStyle.textInputForm}
            value={data_d}
            placeholderTextColor="#000"
            onChangeText={(data_d) => setData_d(data_d)}
          />
        </View>


        <View style={gStyle.inputForm}>
        <Text style={gStyle.textForm}>Эпитафия</Text>
          <TextInput
            style={gStyle.textInputForm}
            value={epitaph}
            placeholderTextColor="#000"
            onChangeText={(epitaph) => setEpitaph(epitaph)}
          />
        </View>

        <View style={gStyle.inputForm}>
        <Text style={gStyle.textForm}>Профессия</Text>
          <TextInput
            style={gStyle.textInputForm}
            value={profession}
            placeholderTextColor="#000"
            onChangeText={(profession) => setProfession(profession)}
          />
        </View>

        <View style={gStyle.inputForm}>
        <Text style={gStyle.textForm}>Биография</Text>
          <TextInput
            multiline
            style={gStyle.textInputForm}
            value={biography}
            placeholderTextColor="#000"
            onChangeText={(biography) => setBiography(biography)}
          />
        </View>

        <View style={gStyle.inputForm}>
        <Text style={gStyle.textForm}>Адрес</Text>
          <TextInput
            style={gStyle.textInputForm}
            value={adres}
            placeholderTextColor="#000"
            onChangeText={(adres) => setAdres(adres)}
          />
        </View>

        <View>
            
              <TouchableOpacity onPress={() => {openGaleri();}} style={gStyle.btnSection}  >
                <Text style={gStyle.btnText}>Добавить фотографию</Text>
              </TouchableOpacity>


              <View style={gStyle.ImageSections}>

              <FlatList numColumns={2} data={imgUri}  renderItem={({ item, index }) => (
                <View style={gStyle.ImageSect}>
                   <TouchableOpacity onPress={() => {delImg(index);}}>
                    <Image source={{uri: 'https://tree-life.site/drop_file/' + item}}  style={gStyle.images}/>
                  </TouchableOpacity>
                </View>
              )} />

              </View>

        </View>      
            
          

        
       
  
        <TouchableOpacity style={gStyle.SaveBtnForm}>
          <Text style={gStyle.loginText} onPress={() => addToo(name,sname,fname,data_r,data_d,epitaph,profession,biography,adres,imgUri)}>Сохранить</Text>
        </TouchableOpacity>
      </View>

    </ScrollView>
    );
  }