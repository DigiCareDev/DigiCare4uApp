import { View, Text, SafeAreaView, ScrollView, StyleSheet } from 'react-native'
import React from 'react'

export default function profile() {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.ScrollView}>
        <View style={styles.ViewOne}>
          <Text style={styles.mainTxt}>Admin Profile</Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    backgroundColor: "#ffff",
  },
  ScrollView: {
    marginTop: 10,
    padding: 10,
    backgroundColor: "#ffff",
  },
  ViewOne: {
    marginTop: 10,
    backgroundColor: "#ffff",
  },
  mainTxt: {
    fontSize: 20,
    fontWeight: "600"
  }
});