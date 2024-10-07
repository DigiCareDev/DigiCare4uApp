import { StyleSheet, View, Text, Image, FlatList } from 'react-native';
import React from 'react';
import { Link } from 'expo-router';

const Icard = () => {
    const iCard = [
        { id: '1', imageUri: 'https://cdn.pixabay.com/photo/2020/07/01/12/58/icon-5359553_640.png', title: 'User Name', userId: 'PGT-01', number: '9876543210' },
        { id: '2', imageUri: 'https://cdn.pixabay.com/photo/2020/07/01/12/58/icon-5359553_640.png', title: 'User Name', userId: 'PGT-02', number: '9876543210' },
        { id: '3', imageUri: 'https://cdn.pixabay.com/photo/2020/07/01/12/58/icon-5359553_640.png', title: 'User Name', userId: 'PGT-03', number: '9876543210' },
        // Add more cards as needed
    ];

    const renderItem = ({ item }) => (
     <Link href="/userDetails" style={styles.detailsPage}>
        <View style={styles.card}>
            <Image source={{ uri: item.imageUri }} style={styles.image} />
            <View>
                <Text style={styles.title}>Name: {item.title}</Text>
                <Text style={styles.userid}><Text style={{ fontWeight: '800' }}>Employee Id:</Text> {item.userId}</Text>
                <Text style={styles.number}><Text style={{ fontWeight: '800' }}>Number:</Text> {item.number}</Text>
            </View>
        </View>
     </Link>
    );

    return (
        <FlatList
            data={iCard}
            renderItem={renderItem}
            keyExtractor={(item) => item.id}
            horizontal // Enables horizontal scrolling
            contentContainerStyle={styles.listContainer}
            showsHorizontalScrollIndicator={false}
        />
    );
};

export default Icard;

const styles = StyleSheet.create({
    listContainer: {
        paddingHorizontal: 5,
    },
    card: {
        backgroundColor: '#fff',
        borderRadius: 10,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.3,
        shadowRadius: 5,
        elevation: 5,
        marginVertical: 10,
        marginHorizontal: 5,
        overflow: 'hidden',
        flexDirection: 'row',
        justifyContent: 'flex-start',
        padding: 10,
        width: 280,
    },
    image: {
        width: 100,
        height: 100,
    },
    title: {
        fontSize: 18,
        fontWeight: 'bold',
    },
    userid: {
        paddingHorizontal: 5,
        paddingBottom: 5,
        fontSize: 15,
        color: '#555',
    },
    number: {
        paddingHorizontal: 5,
        paddingBottom: 4,
        fontSize: 15,
        color: '#555',
    },
    detailsPage:{
        paddingHorizontal:10,
        paddingVertical:10,
    }
});
