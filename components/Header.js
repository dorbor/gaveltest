import { View, Text, StyleSheet, Image } from 'react-native'
import React from 'react'

export default function Header() {
  return (
    <View style={styles.header}>
        <View style={styles.logo}>
        <Image style={styles.img} source={require('../assets/logo.png')} />
        </View>

        <View style={styles.headerRight}></View>
    </View>
  )
}

const styles = StyleSheet.create({
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
})