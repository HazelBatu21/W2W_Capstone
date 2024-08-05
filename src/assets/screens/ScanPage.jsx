import React from 'react';
import { View, Image, StyleSheet } from 'react-native';

const Scanpage = () => {
  return (
    <View style={styles.container}>
      <View style={styles.logoContainer}>
        <Image
          source={require('../images/logo-small.png')} // Replace with your logo path
          style={styles.logo}
        />
        <Text>Revive</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  logoContainer: {
    // Positioning the logo at the top center
    position: 'absolute',
    top: 16,
    left: '50%',
    transform: [{ translateX: -45 }], // Center the logo
    zIndex: 10,
  },
  logo: {
    width: 90, // Adjust size as needed
    height: 90,
    resizeMode: 'contain',
  },
});

export default Scanpage;
