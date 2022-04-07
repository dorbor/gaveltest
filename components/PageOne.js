import { Text, View, SafeAreaView,  Pressable, TextInput, Alert, TouchableOpacity, StyleSheet, Image, Modal } from 'react-native'
import React, {useState, useEffect } from 'react'
import PhoneInput from 'react-native-phone-number-input'
import { backgroundColor, color } from 'react-native/Libraries/Components/View/ReactNativeStyleAttributes'


 const PageOne = () =>  {
     const [phone, setPhone] = useState('')
     const [modalVisible, setModalVisible] = useState(false); 

     const onPressButton = () => {
        Alert.alert('Welcome To GeeksForGeeks..')
      }

    return (
        <SafeAreaView style={styles.container}>
          
           <View style={styles.header}>
                <View style={styles.logo}>
                  <Image style={styles.img} source={require('../assets/logo.png')} />
                </View>

                <View style={styles.headerRight}></View>
           </View>
        
        <View style={styles.welcome}>
          <Text style={styles.welcomeText}>Welcome to Gavel </Text>
        </View>

        <View style={styles.info}>
            <Text>Please enter you phone number to create {"\n"}your profile </Text>
        </View>

        <View style={styles.inputSection}> 
          <Text>Phone Number </Text>
            <PhoneInput defaultValue={phone} 
                onChangeFormattedText={(text) => {
                    setPhone(text);
                }}
                withShadow
                style={styles.input}
            />
        </View>

        <View style={styles.btnSection}>
          <TouchableOpacity style={styles.btn} onPress={ () => {Alert.alert(phone)}}>
            <Text style={styles.btnText}>{'Continue'}</Text>
          </TouchableOpacity>
        </View>
        {/* <Modal>
                <Text>phone</Text>
        </Modal> */}

      </SafeAreaView>
    )
 
}
export default PageOne

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
    
    },
    header: {
        flex:1.6/4,
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    headerRight:{
      backgroundColor: '#00ffff',
      flex: 1/2,
      borderTopLeftRadius: 100,
      borderBottomLeftRadius: 100,
      borderBottomRightRadius: 100,
      marginLeft:10,
      marginBottom: 10,
      marginRight: -20,
      marginTop: -20
    },
   
    logo:{
      backgroundColor: '#00ffff',
      flex: 1/2,
      alignSelf: 'center',
      marginLeft: 15
    },
    img: {
      width: '100%',
      // height: '100%',
      resizeMode: 'stretch',
    },

    // welcome gavel styles
    welcome: {
      width:'100%',
      marginTop: 10,
      
    },
    welcomeText:{
      fontSize: 30,
      paddingHorizontal: 20,
      marginBottom: 30,
    },
    info: {
      marginHorizontal: 20,
      marginBottom: 30
    },
    inputSection:{
      marginHorizontal: 20,
      marginBottom: 20,
      marginTop: 20
    },
    input:{
       
    },
    btnSection: {
      alignItems: 'center',
      // padding: 20,
      // backgroundColor: 'red',
      marginHorizontal:20,
      marginTop: 20
    },
    btn: {
      alignItems: 'stretch',
      backgroundColor: 'black',
      marginHorizontal: 20,
      paddingVertical: 12,
      borderRadius: 40,
      width: '85%',

    },
    btnText: {
      color: '#fff',
      fontSize: 20,
      alignSelf: 'center'
    }
  });