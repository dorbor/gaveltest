import { Text, View, SafeAreaView,  Pressable, TextInput, Alert, TouchableOpacity, StyleSheet, Image, Modal } from 'react-native'
import React, {useState, useEffect } from 'react'
import PhoneInput from 'react-native-phone-number-input'
import Header from './Header'
import { styles } from '../assets/styles'


 const PageOne = ({ navigation }) =>  {
    //  PHONE NUMBER
     const [phone, setPhone] = useState('')
     const [modalVisible, setModalVisible] = useState(false); 

    //  navigate to page 2
     const nextPage = () => {
      //navigation.navigate('ReviewDetails');
      setModalVisible(false)
      navigation.push('PageTwo');
    }

    return (
        <SafeAreaView style={styles.container}>
          
        <Header />
        
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
          <TouchableOpacity style={styles.btn} onPress={() => setModalVisible(!modalVisible)}>
            <Text style={styles.btnText}>{'Continue'}</Text>
          </TouchableOpacity>
        </View>
        

        {/* model section */}
        <Modal
              animationType="slide"
              transparent={true}
              visible={modalVisible}
              onRequestClose={() => {
                Alert.alert("Modal has been closed.");
                setModalVisible(!modalVisible);
              }}
            >
              <View style={styles.centeredView}>
                <View style={styles.modalView}>
                    <Text style={{paddingBottom: 50}}>{phone}</Text>
                  <View style={styles.modelBtnSection}>
                      <TouchableOpacity
                      style={[styles.modelBtn]}
                      onPress={nextPage}
                    >
                      {<Text style={styles.modelBtnText}>Continue</Text>}
                    </TouchableOpacity>
                  </View>
                  
                </View>
              </View>

            </Modal>

      </SafeAreaView>
    )
 
}
export default PageOne