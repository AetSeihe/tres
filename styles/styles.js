import {StyleSheet, Dimensions} from "react-native";


var { height } = Dimensions.get('window');


export const gStyle = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: "#fff",
      alignItems: "center",
      justifyContent: "center",
    },
  
    image: {
      marginBottom: 40,
      width: 90,
      height: 90,
    },
  
    inputView: {
      backgroundColor: "#f0f0f0",
      borderRadius: 10,
      width: "70%",
      height: 45,
      marginBottom: 20,
  
      alignItems: "center",
    },
  
    TextInput: {
      height: 50,
      flex: 1,
      padding: 10,
    },
  
    forgot_button: {
      height: 30,
      marginBottom: 10,
      alignItems: "center",
      fontSize: 16,
      textAlign: "center",
    },
  
    forgot_button1: {
      height: 30,
      marginBottom: 30,
      fontSize: 16,
      alignItems: "center",
      textAlign: "center",
    },
  
    loginBtn: {
      width: "70%",
      borderRadius: 10,
      height: 50,
      alignItems: "center",
      justifyContent: "center",
      marginTop: 40,
      backgroundColor: "#f0f0f0",
    },

    derContent: {
      flex: 1,
      alignItems: "center",
      backgroundColor: "#f8f9fa",
      minHeight: height,
      paddingBottom: 50,
    },

    derBox: {
      backgroundColor: "#fff",
      width: "100%",
      marginTop: 10,
      padding: 10,
      borderRadius: 10,
    },
    imgBox: {
      flex: .5,
      flexDirection: 'row',
    },

    derName: {
      fontSize: 18,
    },

    derDate: {
      fontSize: 14,
    },

    derBtnBox: {
      flex: 1,
      flexDirection: 'row',
      marginTop: 5,
    },

    derBtn: {
      height: 34,
      marginRight: 10,
      paddingBottom: 5,
      paddingLeft: 7,
      paddingRight: 7,
      paddingTop: 5,
      borderWidth: 1,
      borderColor: '#000',
      borderRadius: 10,

    },



    nuwContent: {
      flex: 1,
      alignItems: "center",
      backgroundColor: "#f8f9fa",
      minHeight: height,
      paddingBottom: 50,
    },

    nuwBox: {
      backgroundColor: "#fff",
      width: "90%",
      height: 400,
      marginTop: 10,
      borderRadius: 10,
    },

     

    nuwImage: {
      height: '100%',
      width: '100%',
    },

    nuwBtnBox:{
      flex: 1,
      flexDirection: 'row',
      marginTop: -50,
      justifyContent: 'flex-end',
    },

    nuwBtn: {
      height: 34,
      marginRight: 10,
      paddingBottom: 5,
      paddingLeft: 7,
      paddingRight: 7,
      paddingTop: 5,
      borderWidth: 1,
      borderColor: '#584d82',
      backgroundColor: '#584d82',
      color: '#fff',
      borderRadius: 10,
    },


    container_form:{
      flex: 1,
      backgroundColor: "#fff",
      padding: 10,
    },

    inputForm:{
      marginBottom: 15,
    },

    textForm:{
      fontSize: 18,
    },

    textInputForm:{
      padding: 10,
      width: "100%",
      backgroundColor: "#f0f0f0",
      borderRadius: 10,
    },

    SaveBtnForm: {
      width: "100%",
      borderRadius: 10,
      height: 50,
      alignItems: "center",
      justifyContent: "center",
      marginTop: 40,
      backgroundColor: "#f0f0f0",
    },

    yaMap:{
      width: "100%",
      height: 300,
      flex: 1,
    },

    ImageSections: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    flexWrap: "wrap",
    },
    ImageSect: {
    width: "40%",
    height: 150,
    margin: 5,
    },

    images: {
      width: 150,
      height: 150,
    },

    
    btnSection: {
      width: '100%',
      height: 50,
      backgroundColor: '#DCDCDC',
      alignItems: 'center',
      justifyContent: 'center',
      borderRadius: 3,
      marginBottom:10
    },
    btnText: {
      textAlign: 'center',
      color: 'gray',
      fontSize: 14,
      fontWeight:'bold'
    }

  });