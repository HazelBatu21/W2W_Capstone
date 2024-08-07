// MyProject.js
import React, { useState } from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet, Alert, ScrollView } from 'react-native';
import TopNavigator from './TopNavigator'; // Import the Header component
import BottomNavBar from './BottomNavBar'; // Import the BottomNavBar component
import ImagePicker from 'react-native-image-crop-picker';

const MyProject = () => {
  const [images, setImages] = useState([]);

  const handleImagePick = () => {
    ImagePicker.openPicker({
      width: 300,
      height: 400,
      cropping: true,
      multiple: true
    }).then(selectedImages => {
      setImages(selectedImages);
    }).catch(error => {
      console.log(error);
      Alert.alert('Error', 'Something went wrong with the image picker.');
    });
  };

  return (
    <View style={styles.container}>
      <TopNavigator /> {/* Use the Header component */}
      <View style={styles.content}>
        <TouchableOpacity style={styles.postingButton} onPress={handleImagePick}>
          <Text style={styles.postingButtonText}>Posting</Text>
        </TouchableOpacity>
        <ScrollView contentContainerStyle={styles.imageContainer}>
          {images.map((image, index) => (
            <Image key={index} source={{ uri: image.path }} style={styles.postedImage} />
          ))}
        </ScrollView>
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
  postingButton: {
    backgroundColor: '#409152',
    padding: 10,
    borderRadius: 5,
    alignItems: 'center',
    marginBottom: 20,
  },
  postingButtonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
  imageContainer: {
    alignItems: 'center',
  },
  postedImage: {
    width: 300,
    height: 400,
    resizeMode: 'contain',
    marginVertical: 10,
  },
});

export default MyProject;
