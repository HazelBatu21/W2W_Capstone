// Header.js
import React from 'react';
import { View, Image, TouchableOpacity, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const TopNavigator = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.headerContainer}>
      <View style={styles.burgerMenu}>
        <TouchableOpacity onPress={() => navigation.openDrawer()}>
          <Image
            source={require('../images/bmenu.png')}
            style={styles.burgerIcon}
          />
        </TouchableOpacity>
      </View>
      <View style={styles.logoContainer}>
        <Image
          source={require('../images/logo-small.png')}
          style={styles.logo}
        />
      </View>
      <View style={styles.notificationBell}>
        <TouchableOpacity onPress={() => navigation.navigate('Notifications')}>
          <Image
            source={require('../images/bell.png')}
            style={styles.bellIcon}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  headerContainer: {
    position: 'absolute',
    top: 16,
    left: 0,
    right: 0,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 16,
    zIndex: 10,
  },
  burgerMenu: {
    zIndex: 10,
  },
  logoContainer: {
    zIndex: 10,
  },
  notificationBell: {
    zIndex: 10,
  },
  burgerIcon: {
    width: 50,
    height: 50,
  },
  logo: {
    width: 90,
    height: 90,
    resizeMode: 'contain',
  },
  bellIcon: {
    width: 30,
    height: 30,
  },
});

export default TopNavigator;
