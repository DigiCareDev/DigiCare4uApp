import React, { useState } from 'react';
import { View, Text, FlatList, TextInput, Image, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import employes from '../employes';

const employees = [
  { id: '1', name: 'Rohit Kushwaha', position: 'Software Engineer', image: 'https://via.placeholder.com/80', employesId:'PGT-01' },
  { id: '2', name: 'Kupdeep Pal', position: 'Product Manager', image: 'https://via.placeholder.com/80', employesId:'PGT-02' },
  { id: '3', name: 'Shyam Rathore', position: 'UX Designer', image: 'https://via.placeholder.com/80', employesId:'PGT-03' },
  { id: '4', name: 'Anamika Singh', position: 'QA Tester', image: 'https://via.placeholder.com/80', employesId:'PGT-04' },
];

export default function Explore() {
  const [searchQuery, setSearchQuery] = useState('');

  const filteredEmployees = employees.filter(employee =>
    employee.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Employees</Text>
      <View style={styles.searchContainer}>
        <Icon name="search" size={30} color="#666" style={styles.searchIcon} />
        <TextInput
          style={styles.searchBox}
          placeholder="Search by name..."
          value={searchQuery}
          onChangeText={setSearchQuery}
        />
      </View>
      <FlatList
        data={filteredEmployees}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.employeeCard}>
            <Image source={{ uri: item.image }} style={styles.employeeImage} />
            <View style={styles.employeeInfo}>
              <Text style={styles.employeeName}>{item.name}</Text>
              <Text style={styles.employeePosition}>{item.position}</Text>
              <Text style={styles.employeePosition}>{item.employesId}</Text>
            </View>
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginTop:20,
    marginBottom: 20,
    textAlign: 'center',
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderColor: '#ddd',
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 10,
    marginBottom: 20,
  },
  searchIcon: {
    marginRight: 5,
  },
  searchBox: {
    flex: 1,
    height: 40,
  },
  employeeCard: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 15,
    borderRadius: 8,
    backgroundColor: '#f9f9f9',
    marginBottom: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.2,
    shadowRadius: 3,
    elevation: 2,
  },
  employeeImage: {
    width: 80,
    height: 80,
    borderRadius: 40,
    marginRight: 15,
  },
  employeeInfo: {
    flex: 1,
  },
  employeeName: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom:5
  },
  employeePosition: {
    fontSize: 14,
    color: '#666',
    marginBottom:5
  },
});
