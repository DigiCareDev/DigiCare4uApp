import { StyleSheet, View, TouchableOpacity  } from 'react-native'
import React from 'react'
import AntDesign from 'react-native-vector-icons/AntDesign';
import { useRouter } from 'expo-router';

const GoBack = () => {
    const router = useRouter();
    
    return (
        <View style={styles.topLeftButtonContainer}>
            <TouchableOpacity onPress={() => router.back()}>
                <AntDesign name="arrowleft" size={30} color="black" />
            </TouchableOpacity>
        </View>
    )
}

export default GoBack

const styles = StyleSheet.create({
    topLeftButtonContainer: {
        position: 'absolute',
        top: 50, 
        left: 20,
        zIndex: 10,
      },
})