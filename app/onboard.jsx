import { View, Text, SafeAreaView, StyleSheet, Image, TextInput, TouchableOpacity, Pressable } from 'react-native'
import React from 'react';
import Logo from '../assets/images/com-logo.jpg'
import { useRouter } from 'expo-router';


export default function login() {
  const router = useRouter();

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.mainView}>
                <Image  source={Logo}  style={styles.Logo}/>
                <TouchableOpacity style={styles.button}>
                  <Pressable onPress={()=> router.push('/login')}><Text style={styles.buttonText}>Continue with Login</Text></Pressable>
                 </TouchableOpacity>
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 10,
        // backgroundColor: "red",
      },
      mainView:{
        display:"flex",
        justifyContent:"center",
        alignItems:'center',
        height:"100%"
      },
      Logo:{
        height:250,
        width:200,
        borderRadius:10,
        padding:10,
      },
      button: {
        height: 50,
        width:350,
        backgroundColor: '#007bff',
        borderRadius: 4,
        justifyContent:"center",
        alignSelf:"center",
        marginTop:20,
      },
      buttonText: {
        color: '#fff',
        fontSize: 16,
        fontWeight: 'bold',
        textAlign:"center",
        paddingVertical:10
      },

})