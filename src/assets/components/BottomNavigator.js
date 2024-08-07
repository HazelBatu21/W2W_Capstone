// BottomNavBar.js
import React from 'react';
import { View, Image, TouchableOpacity, Text, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const BottomNavBar = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.bottomNavBar}>
      <TouchableOpacity onPress={() => navigation.navigate('Scanpage')}>
        <Image
          source={require('../images/scan.png')}
          style={styles.navIcon}
        />
        <Text style={styles.navText}>Scan</Text>
      </TouchableOpacity>
      <TouchableOpacity>
        <Image
          source={require('../images/homeon.png')}
          style={styles.navIcon}
        />
        <Text style={styles.navText}>Home</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate('Savedpage')}>
        <Image
          source={require('../images/save.png')}
          style={styles.navIcon}
        />
        <Text style={styles.navText}>Saved</Text>
      </TouchableOpacity>
      <TouchableOpacity>
        <Image
          source={require('../images/profile.png')}
          style={styles.navIcon}
        />
        <Text style={styles.navText}>Profile</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  bottomNavBar: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: 'white',
    paddingVertical: 10,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: -2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
  },
  navIcon: {
    width: 30,
    height: 30,
  },
  navText: {
    color: 'black',
    fontSize: 12,
    marginTop: 4,
  },
});

export default BottomNavBar;
