import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import GoBack from '../components/GoBack'

const employes = () => {
  return (
    <View style={styles.mainContainer}> 
      <GoBack/>
    </View>
  )
}

export default employes

const styles = StyleSheet.create({
    mainContainer: {
        flex: 1,
      },
})