import { View, Text, SafeAreaView, ScrollView, StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react';
import AntDesign from '@expo/vector-icons/AntDesign';
import Ionicons from '@expo/vector-icons/Ionicons';
import TopCard from '../../components/TopCard';
import Icard from '../../components/Icard';
import FaceProfile from '../../components/FaceProfile';
import { Link } from 'expo-router';


export default function home() {

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.ScrollView}>
        <View style={styles.ViewOne}>
          <View style={styles.overlay}>
            <TouchableOpacity>
              <AntDesign name="bars" size={30} color="black" onPress={() => console.log('change')} style={styles.indexModelBtn} />
            </TouchableOpacity>
            <Text style={styles.mainTxt}>Admin Dashboard</Text>
            <TouchableOpacity >
              <Link href="/notification"><Ionicons name="notifications" size={30} color="black" style={styles.indexModelBtn} /></Link>
            </TouchableOpacity>
          </View>
          <TopCard />
          <View>
            <Text style={styles.employerDetails}>Employer Details</Text>
            <Icard />
          </View>
         <View>
         <Text style={styles.employerDetails}>All Employes</Text>
         <FaceProfile/>
         </View>
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
  },
  ViewOne: {
    marginTop: 10,
  },
  mainTxt: {
    fontSize: 25,
    fontWeight: "600"
  },
  overlay: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  indexModelBtn: {
    padding: 15,
    borderRadius: 50,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 10,
  },
  employerDetails: {
    fontSize: 17,
    fontWeight: "600",
    paddingTop: 15,
    paddingBottom: 0,
    paddingHorizontal: 5,
    textAlign: 'left',
  }
});