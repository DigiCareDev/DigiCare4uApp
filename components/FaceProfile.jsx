import { FlatList, StyleSheet, Text, View, Image } from 'react-native';
import React from 'react';
import { Link } from 'expo-router';

const FaceProfile = () => {
  const FaceProfiles = [
    { id: '1', imageUrl: 'https://cdn.pixabay.com/photo/2020/07/01/12/58/icon-5359553_640.png', name:'User Name' },
    { id: '2', imageUrl: 'https://cdn.pixabay.com/photo/2020/07/01/12/58/icon-5359553_640.png', name:'User Name' },
    { id: '3', imageUrl: 'https://cdn.pixabay.com/photo/2020/07/01/12/58/icon-5359553_640.png', name:'User Name' },
    { id: '4', imageUrl: 'https://cdn.pixabay.com/photo/2020/07/01/12/58/icon-5359553_640.png', name:'User Name' },
    { id: '5', imageUrl: 'https://cdn.pixabay.com/photo/2020/07/01/12/58/icon-5359553_640.png', name:'User Name' },
  ];

  const renderItem = ({ item }) => {
    return (
     <Link href="/employes">
      <View style={styles.imageContainer}>
        <Image source={{ uri: item.imageUrl }} style={styles.image} />
        <Text style={{textAlign:"center", fontSize:13,}}>{item.name}</Text>
      </View>
     </Link>
    );
  };

  return (
    <FlatList
    data={FaceProfiles}
    renderItem={renderItem}
    keyExtractor={(item) => item.id}
    horizontal 
    showsHorizontalScrollIndicator={false}
    contentContainerStyle={styles.sliderContainer}
  />
  );
};

export default FaceProfile;

const styles = StyleSheet.create({
    sliderContainer: {
      paddingHorizontal: 5,
      paddingVertical:10,
    },
    imageContainer: {
      padding: 7,
      justifyContent:'center',
      alignSelf:'center'
    },
    image: {
      height: 100,
      width: 100,
      resizeMode: 'cover',
      borderRadius: 25,
    },
  });
  