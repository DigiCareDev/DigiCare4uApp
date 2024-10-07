import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, Image, ScrollView} from 'react-native';
import { AnimatedCircularProgress } from 'react-native-circular-progress';
import Icon from 'react-native-vector-icons/MaterialIcons';
import GoBack from '../components/GoBack';

const Details = () => {
  const totalSeconds = 9 * 60 * 60;
  const [countdown, setCountdown] = useState(totalSeconds);
  const [fill, setFill] = useState(100);
  const distance = 10;

  useEffect(() => {
    if (countdown > 0) {
      const timer = setInterval(() => {
        setCountdown(prev => prev - 1);
        setFill(((totalSeconds - (countdown - 1)) / totalSeconds) * 100);
      }, 1000);
      return () => clearInterval(timer);
    }
  }, [countdown]);

  const formatTime = (seconds) => {
    const hrs = Math.floor(seconds / 3600);
    const mins = Math.floor((seconds % 3600) / 60);
    const secs = seconds % 60;
    return `${hrs}h ${mins}m ${secs}s`;
  };

  return (
    <View style={styles.mainContainer}>
      <GoBack/>

      <ScrollView contentContainerStyle={styles.container}>
        <AnimatedCircularProgress
          size={200}
          width={10}
          fill={fill}
          tintColor="#00e0ff"
          backgroundColor="#3d5875"
          rotation={0} >
          {() => (<Text style={styles.countdownText}>{formatTime(countdown)}</Text>)}
        </AnimatedCircularProgress>

        <View style={{ flexDirection: "row", justifyContent: "space-between", width: "80%", marginBottom:10 }}>
          <View style={styles.twoDot}>
            <Text style={styles.dotText}>{formatTime(countdown)}</Text>
          </View>
          <View style={styles.twoDot}>
            <Text style={styles.dotText}>{distance} km</Text>
          </View>
        </View>

        <View style={styles.Detailscard}>
          <Image
            source={{ uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQzCb4DonWw5pT1-A3Su9HzG6TTN4nMOmj7tg&s' }}
            style={styles.image}
          />
          <View>
            <Text style={styles.title}>Name : User Name</Text>
            <Text style={styles.userid}><Text style={{ fontWeight: "800" }}>Emplyer Id</Text> : PGT-01</Text>
            <Text style={styles.number}><Text style={{ fontWeight: "800" }}>Number</Text> : +91 9987654321</Text>
          </View>
        </View>

        <View style={styles.card}>
          <View style={styles.detailRow}>
            <Icon name="directions-car" size={34} color="#666" style={styles.icon} />
            <View >
              <Text style={styles.detailText}>License Number</Text>
              <Text style={styles.detailText2}>ABC123456</Text>
            </View>
          </View>
          <View style={styles.detailRow}>
            <Icon name="location-on" size={34} color="#666" style={styles.icon} />
            <View>
              <Text style={styles.detailText}>Total Distance</Text>
              <Text style={styles.detailText2}>{distance} km</Text>
            </View>
          </View>
          <View style={styles.detailRow}>
            <Icon name="access-time" size={34} color="#666" style={styles.icon} />
            <View>
              <Text style={styles.detailText}>Start Time: </Text>
              <Text style={styles.detailText2}>08:30 AM</Text>
            </View>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

export default Details;

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
  },
  container: {
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
    padding: 20,
  },
  countdownText: {
    fontSize: 24,
    color: '#333',
  },
  imageContainer: {
    marginRight: 15,
  },
  image: {
    width: 80,
    height: 80,
    borderRadius: 40, // Circular image
    resizeMode: 'cover',
  },
  textUser: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5,
    color: '#333',
  },
  card: {
    backgroundColor: '#fff',
    borderRadius: 10,
    marginVertical: 10,
    padding: 15,
    width: '100%',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 5,
    borderWidth: 1,
    borderColor: '#ddd',
  },
  Detailscard: {
    backgroundColor: '#fff',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 5,
    elevation: 5,
    marginVertical: 10,
    overflow: 'hidden',
    flexDirection: "row",
    justifyContent: "flex-start",
    padding: 15,
    width: '100%',
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    paddingHorizontal: 5,
    paddingBottom: 5,
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
  detailsContainer: {
    flex: 1,
  },
  detailRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  icon: {
    marginRight: 10,
    color: "black"
  },
  detailText: {
    fontSize: 17,
    color: 'black',
    fontWeight: "500"
  },
  detailText2: {
    fontSize: 17,
    color: '#666',
    fontWeight: "700"
  },
  twoDot: {
    padding: 15,
    borderRadius: 40, // Half of width/height to make it circular
    height: 80,
    width: 80,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 5,
    elevation: 5,
    backgroundColor: '#fff', // Add background color for visibility
  },
  dotText: {
    fontSize: 14,
    textAlign: 'center',
  },
});
