import React from 'react';
import { StyleSheet, View, Text, Image, FlatList } from 'react-native';

const Card = () => {
    const iCard = [
        { id: '1', imageUri: 'https://cdn.pixabay.com/photo/2020/07/01/12/58/icon-5359553_640.png', title: 'User Name', userId: 'PGT-01', number:'9876543210' },
        { id: '2', imageUri: 'https://cdn.pixabay.com/photo/2020/07/01/12/58/icon-5359553_640.png', title: 'User Name', userId: 'PGT-02', number:'9876543210' },
        { id: '3', imageUri: 'https://cdn.pixabay.com/photo/2020/07/01/12/58/icon-5359553_640.png', title: 'User Name', userId: 'PGT-03', number:'9876543210' },
    ];

    const renderItem = ({ item }) => (
        <View style={styles.card}>
            <Image source={{ uri: item.imageUri }} style={styles.image} />
            <View>
                <Text style={styles.title}>Name : {item.title}</Text>
                <Text style={styles.userid}><Text style={{fontWeight:"800"}}>Emplyer Id</Text> : {item.userId}</Text>
                <Text style={styles.number}><Text style={{fontWeight:"800"}}>Number</Text> : {item.number}</Text>
            </View>
        </View>
    );

    return (
        <FlatList
            data={iCard}
            renderItem={renderItem}
            keyExtractor={(item) => item.id}
            contentContainerStyle={styles.listContainer}
            showsVerticalScrollIndicator={false}
        />
    );
};

export default Card;

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
        overflow: 'hidden',
        flexDirection: "row",
        justifyContent:"flex-start",
        padding:5,
    },
    image: {
        width: 80,
        height: 80,
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
    number:{
        paddingHorizontal: 5,
        paddingBottom: 4,
        fontSize: 15,
        color: '#555',
    }
});
