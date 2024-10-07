// src/components/Notifications.js
import React from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';
import GoBack from '../components/GoBack';
import { Link } from 'expo-router';

const Notifications = () => {
  const notifications = [
    { id: '1', message: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam in porro exercitationem aspernatur, non, dolore modi voluptas facere eius, distinctio amet nulla perferendis fugiat deserunt accusamus enim nesciunt temporibus quis.", date: '2024-09-18 12:30 PM' },
    { id: '2', message: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam in porro exercitationem aspernatur, non, dolore modi voluptas facere eius, distinctio amet nulla perferendis fugiat deserunt accusamus enim nesciunt temporibus quis.", date: '2024-09-18 10:45 AM' },
    { id: '3', message: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam in porro exercitationem aspernatur, non, dolore modi voluptas facere eius, distinctio amet nulla perferendis fugiat deserunt accusamus enim nesciunt temporibus quis.", date: '2024-09-17 08:20 AM' },
  ];

  return (
    <View style={styles.container}>
      <GoBack />
      <View style={styles.mainContainer}>
        <FlatList
          data={notifications}
          keyExtractor={item => item.id}
          renderItem={({ item }) => (
              <View style={styles.notification}>
                <Text numberOfLines={2} style={styles.message}>{item.message}</Text>
                <Text style={styles.date}>{item.date}</Text>
              </View>
          )}
        />          
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  mainContainer: {
    marginTop: 50,
    paddingVertical: 10,
  },
  notification: {
    width: '98%',
    marginLeft:5,
    marginTop:10,
    padding: 20,
    marginBottom: 5,
    backgroundColor: '#fff',
    borderRadius: 8,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 5,
    position: 'relative',
  },
  message: {
    marginBottom: 10,
  },
  date: {
    position: 'absolute',
    bottom: 10,
    right: 10,
    fontSize: 12,
    color: '#888',
  },
});

export default Notifications;
