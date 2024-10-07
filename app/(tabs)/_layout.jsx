import { Tabs } from "expo-router";
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import Ionicons from '@expo/vector-icons/Ionicons';
import { View, StyleSheet } from "react-native";
import FontAwesome5 from '@expo/vector-icons/FontAwesome5';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';

export default function TabsLayout() {
  return (
    <Tabs >
      <Tabs.Screen 
        name="map"
        options={{
          headerShown: false, 
          tabBarIcon: ({ color }) => <FontAwesome5 name="map-marker-alt" size={30} color={color} />,
        }}
      />
      <Tabs.Screen 
        name="home"
        options={{
          headerShown: false, 
          tabBarIcon: ({ color }) => (
            <View style={styles.middleIconContainer}>
             <MaterialCommunityIcons name="folder-home-outline" size={30} color={color} />
            </View>
          ),
        }}
      />
      <Tabs.Screen 
        name="explore"
        options={{
          headerShown: false, 
          tabBarIcon: ({ color }) =><MaterialIcons name="explore" size={30} color={color} />,
        }}
      />
      <Tabs.Screen 
        name="profile"
        options={{
          headerShown: false, 
          tabBarIcon: ({ color }) =><MaterialCommunityIcons name="card-account-details-star" size={30} color={color} />,
        }}
      />
    </Tabs>
  );
}

const styles = StyleSheet.create({
  middleIconContainer: {
    width: 55,
    height: 55,
    borderRadius: 30,
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 6,
    marginTop: -20,
  },
});
