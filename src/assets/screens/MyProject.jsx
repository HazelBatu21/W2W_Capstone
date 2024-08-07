// MyProject.js
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import TopNavigator from './TopNavigator'; // Import the Header component
import BottomNavBar from './BottomNavBar'; // Import the BottomNavBar component

//I CREATED A TOP AND BOT COMPONENTS SO THE CODE IS REUSABLE. 


const MyProject = () => {
  return (
    <View style={styles.container}>
      <TopNavigator /> {/* Use the Header component */}
      <View style={styles.content}>
        <Text>My Project</Text>
        {/* Add any other content or components here */}
      </View>
      <BottomNavBar /> {/* Use the BottomNavBar component */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    position: 'relative',
  },
  content: {
    flex: 1,
    marginTop: 100, // Adjust this to fit your layout
    padding: 16,
  },
});

export default MyProject;
