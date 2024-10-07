import React, { useState } from 'react';
import { View, SafeAreaView, StyleSheet, TouchableOpacity, TextInput } from 'react-native';
import IndexModel from '../../components/Models/IndexModel';
import AntDesign from '@expo/vector-icons/AntDesign';
import MapView, { Marker } from 'react-native-maps';

const Map = () => {
  const [isModalVisible, setModalVisible] = useState(false);
  const [search, setSearch] = useState('');

  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };

  const handleSearchChange = (text) => {
    setSearch(text);
    console.log('Search:', text);
  };

  const markers = [
    {
      id: 1,
      coordinate: { latitude: 26.846053, longitude: 81.061402 },
      title: 'I am here',
      description: 'This is my current location',
    },
    // {
    //   id: 2,
    //   coordinate: { latitude: 26.245935, longitude: 80.301564 },
    //   title: 'I am here',
    //   description: 'This is the second location',
    // },
    // {
    //   id: 3,
    //   coordinate: { latitude: 26.781776, longitude: 83.424849 },
    //   title: 'I am here',
    //   description: 'This is the third location',
    // },
  ];

  return (
    <SafeAreaView style={styles.container}>
           <MapView
        style={styles.map}
        initialRegion={{
          latitude: 26.5,
          longitude: 80.7,
          latitudeDelta: 2,
          longitudeDelta: 2,
        }}
      >
        {markers.map(marker => (
          <Marker
            key={marker.id}
            draggable
            coordinate={marker.coordinate}
            title={marker.title}
            description={marker.description}
          />
        ))}
      </MapView>
      <View style={styles.overlay}>
        <TouchableOpacity onPress={toggleModal} style={styles.indexModelBtn} >
          <AntDesign name="bars" size={20} color="#888" />
        </TouchableOpacity>
        <TextInput
          style={styles.input}
          value={search}
          onChangeText={setSearch}
          onPress={handleSearchChange}
          placeholder='Search...'
          placeholderTextColor="#888" />
      </View>
      {/* ============ model box ========== */}
      <IndexModel isModalVisible={isModalVisible} toggleModal={toggleModal} />
    </SafeAreaView>
  );
};

export default Map;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  map: {
    ...StyleSheet.absoluteFillObject,
  },
  overlay: {
    position: 'absolute',
    top: 50,
    left: 20,
    right: 20,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    zIndex: 10,
  },
  indexModelBtn: {
    backgroundColor: '#fff',
    padding: 15,
    borderRadius: 50,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 10,
  },
  input: {
    flex: 1,
    height: 50,
    borderColor: '#ccc',
    backgroundColor: '#fff',
    borderRadius: 15,
    paddingHorizontal: 15,
    marginLeft: 10,
  },
});
