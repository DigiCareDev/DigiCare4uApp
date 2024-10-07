import React from "react";
import { View, StyleSheet, Text } from "react-native";


const  TopCard = () =>{
    const cardData = [
        { id: 1, title: 'Total Users', value: '1,234', icon: 'users' },
        { id: 2, title: 'Active Subscriber ', value: '$12,345', icon: 'dollar' },
        { id: 3, title: 'Active User', value: '567', icon: 'shopping-cart' },
        { id: 4, title: 'New Subscriber', value: '89', icon: 'user-plus' },
      ];
    return(
        <View style={styles.ViewTwo}>
        {/* Render cards here */}
        {cardData.map((item) => (
          <View key={item.id} style={styles.card}>
            <Text style={styles.cardTitle}>{item.title}</Text>
            <Text style={styles.cardValue}>{item.value}</Text>
          </View>
        ))}
      </View>
    )
}
export default TopCard;

const styles = StyleSheet.create({
    ViewTwo: {
        marginTop: 20,
        flexDirection: 'row', 
        flexWrap: 'wrap',
        justifyContent: 'space-between', 
      },
      card: {
        backgroundColor: '#ffffff',
        borderRadius: 10,
        padding: 15,
        width: '48%',
        marginBottom: 15,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 5,
        elevation: 3,
      },
      cardTitle: {
        fontSize: 16,
        fontWeight: '500',
        marginBottom: 5,
        color: '#333',
      },
      cardValue: {
        fontSize: 22,
        fontWeight: 'bold',
        color: '#007BFF',
      },
})