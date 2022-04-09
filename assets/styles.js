import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
    
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
    },

  
      listSection: {
        marginVertical: 40,
        flexDirection: 'row'
      },
      checkbox: {
        
      },
      btnSection: {
        alignItems: 'center',
       
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
      },
      centeredView: {
        flex: 1,
        flexDirection: 'column-reverse',
        alignItems: "center",
        // paddingBottom: -5,
        width: '100%',
        backgroundColor: 'rgba(0,0,0,0.5)'
      },
      modalView: {
        flex: 1/3,
        width: '80%',
        flexDirection: 'column',
        margin: 20,
        backgroundColor: "white",
        borderRadius: 20,
        padding: 35,
        alignItems: "center",
        shadowColor: "#000",
        shadowOffset: {
          width: 0,
          height: 2
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5
      },
      modelBtnSection: {
        marginTop: 40,
        flexDirection: 'column',
        alignItems: 'flex-end'
      },
      modelBtnText: {
        padding:8,
        backgroundColor: '#000',
        borderRadius: 50,
        color: 'white'
      },
      modelBtn :{
        flexDirection: 'column',
        alignSelf: 'flex-end',
        borderRadius: 40,
        paddingHorizontal: 40,
        paddingVertical: 6,
        backgroundColor: 'black'
      }
  });