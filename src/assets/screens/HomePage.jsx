// import React from 'react';
// import { View, Text, Image, ScrollView, TouchableOpacity, StyleSheet } from 'react-native';
// import LinearGradient from 'react-native-linear-gradient';
// import { useNavigation } from '@react-navigation/native'; // Import the useNavigation hook

// const HomePage = ({ navigation }) => {

//   return (
//     <LinearGradient
//       colors={['rgba(255, 255, 255, 0.01)', '#7FC780']}
//       style={styles.container}
//     >
//       <View style={styles.content}>
//         {/* Burger Menu */}
//         <View style={styles.burgerMenu}>
//           <TouchableOpacity>
//             <Image
//               source={require('../images/bmenu.png')} // Replace with your burger menu icon
//               style={styles.burgerIcon}
//             />
//           </TouchableOpacity>
//         </View>

//         {/* Logo */}
//         <View style={styles.logoContainer}>
//           <Image
//             source={require('../images/logo-small.png')} // Replace with your logo path
//             style={styles.logo}
//           />
//         </View>

//         {/* Profile Picture and Username */}
//         <View style={styles.profileContainer}>
//           <Image
//             source={require('../images/profile-pic.png')} // Replace with your profile picture
//             style={styles.profilePic}
//           />
//           <Text style={styles.username}>Welcome Earth25,</Text>
//         </View>

//         {/* Icons Container */}
//         <View style={styles.iconSectionOuter}>
//           <View style={styles.iconSection}>
//             <View style={styles.iconBoxContainer}>
//               <View style={styles.iconBox}>
//                 <TouchableOpacity>
//                   <Image
//                     source={require('../images/myproject.png')} // Replace with your icon
//                     style={styles.icon}
//                   />
//                 </TouchableOpacity>
//                 <Text style={styles.iconText}>My Project</Text>
//               </View>
//               <View style={styles.iconBox}>
//                 <TouchableOpacity>
//                   <Image
//                     source={require('../images/saved.png')} // Replace with your icon
//                     style={styles.icon}
//                   />
//                 </TouchableOpacity>
//                 <Text style={styles.iconText}>Saved Project</Text>
//               </View>
//               <View style={styles.iconBox}>
//                 <TouchableOpacity>
//                   <Image
//                     source={require('../images/upcycle.png')} // Replace with your icon
//                     style={styles.icon}
//                   />
//                 </TouchableOpacity>
//                 <Text style={styles.iconText}>Upcycling Guide</Text>
//               </View>
//             </View>
//           </View>
//         </View>

//         {/* Image Bins Section */}
//         <View style={styles.imageBinsContainer}>
//           <Image
//             source={require('../images/bins.png')} // Replace with your bin image
//             style={styles.imageBin}
//           />
//         </View>

//         {/* Notification Bell */}
//         <View style={styles.notificationBell}>
//           <TouchableOpacity>
//             <Image
//               source={require('../images/bell.png')} // Replace with your notification bell icon
//               style={styles.bellIcon}
//             />
//           </TouchableOpacity>
//         </View>

//         {/* Content */}
//         <ScrollView style={styles.scrollView}>
//           {/* Add any other content or components here */}
//         </ScrollView>

//         {/* Bottom Navigation Bar */}
//         <View style={styles.bottomNavBar}>
//           <TouchableOpacity onPress={() => navigation.navigate('Scanpage')}>
//             <Image
//               source={require('../images/scan.png')}
//               style={styles.navIcon}
//             />
//             <Text style={styles.navText}>Scan</Text>
//           </TouchableOpacity>
//           <TouchableOpacity>
//             <Image
//               source={require('../images/homeon.png')}
//               style={styles.navIcon}
//             />
//             <Text style={styles.navText}>Home</Text>
//           </TouchableOpacity>
//           <TouchableOpacity onPress={() => navigation.navigate('Savedpage')}>
//             <Image
//               source={require('../images/save.png')}
//               style={styles.navIcon}
//             />
//             <Text style={styles.navText}>Saved</Text>
//           </TouchableOpacity>
//           <TouchableOpacity>
//             <Image
//               source={require('../images/profile.png')}
//               style={styles.navIcon}
//             />
//             <Text style={styles.navText}>Profile</Text>
//           </TouchableOpacity>
//         </View>
//       </View>
//     </LinearGradient>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//   },
//   content: {
//     flex: 1,
//     position: 'relative',
//   },
//   burgerMenu: {
//     position: 'absolute',
//     top: 16,
//     left: 16,
//     zIndex: 10,
//   },
//   logoContainer: {
//     position: 'absolute',
//     top: 16,
//     left: '50%',
//     transform: [{ translateX: -45 }], // Center logo
//     zIndex: 10,
//   },
//   logo: {
//     width: 90, // Adjust size as needed
//     height: 90,
//     resizeMode: 'contain',
//   },
//   profileContainer: {
//     position: 'absolute',
//     top: 80, // Adjust as needed
//     left: 16, // Align to the left side
//     flexDirection: 'row',
//     alignItems: 'center',
//     zIndex: 10,
//     marginTop: 40,
//     marginBottom: 40,
//   },
//   profilePic: {
//     width: 60, // Adjust size as needed
//     height: 60,
//     borderRadius: 30, // Circular profile picture
//     marginRight: 8, // Space between profile pic and username
//   },
//   username: {
//     color: '#409152',
//     fontSize: 20,
//     fontWeight: 'bold',
//   },
//   notificationBell: {
//     position: 'absolute',
//     top: 16,
//     right: 16, // Adjust to fit well with burger menu
//     zIndex: 10,
//   },
//   burgerIcon: {
//     width: 50, // Adjust size to make the burger menu icon bigger
//     height: 50,
//   },
//   bellIcon: {
//     width: 30, // Adjust size to make the bell icon smaller
//     height: 30,
//   },
//   scrollView: {
//     padding: 16,
//   },
//   iconSectionOuter: {
//     position: 'absolute',
//     top: 150, // Adjust as needed
//     width: '100%', // Increase width as needed
//     height: 160, // Increase height as needed
//     backgroundColor: '#CCE6FB', // Change background color as needed
//     padding: 20, // Increase padding as needed
//     borderRadius: 10,
//     zIndex: 10,
//     marginTop: 60,
//   },
//   iconSection: {
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     flexWrap: 'wrap', // Allows wrapping if needed
//   },
//   iconBoxContainer: {
//     flexDirection: 'row',
//     justifyContent: 'space-around', // Distribute icons evenly
//     flexWrap: 'wrap', // Allows wrapping if needed
//     alignItems: 'center'
//   },
//   iconBox: {
//     backgroundColor: 'white', // Change background color as needed
//     padding: 10,
//     borderRadius: 8,
//     width: 100, // Adjust size as needed
//     height: 120, // Adjust size as needed
//     alignItems: 'center',
//     justifyContent: 'center',
//     margin: 'auto', // Add space between icon boxes
//     marginLeft: 16,
//   },
//   icon: {
//     width: 40, // Adjust size as needed
//     height: 40,
//   },
//   iconText: {
//     marginTop: 8, // Space between icon and text
//     fontSize: 14,
//     color: '#000',
//   },
//   imageBinsContainer: {
//     position: 'absolute',
//     top: 300, // Adjust to be just below the iconSectionOuter
//     width: '80%', // Adjust width as needed
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     zIndex: 10,
//   },
//   imageBin: {
//     width: 400, // Adjust size as needed
//     height: 400, // Adjust size as needed
//     resizeMode: 'contain',
//   },
//   bottomNavBar: {
//     position: 'absolute',
//     bottom: 0,
//     left: 0,
//     right: 0,
//     backgroundColor: 'white',
//     paddingVertical: 10,
//     flexDirection: 'row',
//     justifyContent: 'space-around',
//     alignItems: 'center',
//     shadowColor: '#000',
//     shadowOffset: { width: 0, height: -2 },
//     shadowOpacity: 0.2,
//     shadowRadius: 4,
//   },
//   navIcon: {
//     width: 30,
//     height: 30,
//   },
//   navText: {
//     color: 'black',
//     fontSize: 12,
//     marginTop: 4,
//   },
// });

// export default HomePage;
// HomePage.js
// HomePage.js
import React from 'react';
import { View, Text, Image, ScrollView, TouchableOpacity, StyleSheet } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import TopNavigator from './TopNavigator'; // Import the Header component
import BottomNavBar from './BottomNavBar'; // Import the BottomNavBar component

const HomePage = () => {
  return (
    <LinearGradient
      colors={['rgba(255, 255, 255, 0.01)', '#7FC780']}
      style={styles.container}
    >
      <View style={styles.content}>
        <TopNavigator /> {/* Use the Header component */}
        
        {/* Profile Picture and Username */}
        <View style={styles.profileContainer}>
          <Image
            source={require('../images/profile-pic.png')}
            style={styles.profilePic}
          />
          <Text style={styles.username}>Welcome Earth25,</Text>
        </View>

        {/* Icons Container */}
        <View style={styles.iconSectionOuter}>
          <View style={styles.iconSection}>
            <View style={styles.iconBoxContainer}>
              <View style={styles.iconBox}>
                <TouchableOpacity>
                  <Image
                    source={require('../images/myproject.png')}
                    style={styles.icon}
                  />
                </TouchableOpacity>
                <Text style={styles.iconText}>My Project</Text>
              </View>
              <View style={styles.iconBox}>
                <TouchableOpacity>
                  <Image
                    source={require('../images/saved.png')}
                    style={styles.icon}
                  />
                </TouchableOpacity>
                <Text style={styles.iconText}>Saved Project</Text>
              </View>
              <View style={styles.iconBox}>
                <TouchableOpacity>
                  <Image
                    source={require('../images/upcycle.png')}
                    style={styles.icon}
                  />
                </TouchableOpacity>
                <Text style={styles.iconText}>Upcycling Guide</Text>
              </View>
            </View>
          </View>
        </View>

        {/* Image Bins Section */}
        <View style={styles.imageBinsContainer}>
          <Image
            source={require('../images/bins.png')}
            style={styles.imageBin}
          />
        </View>

        {/* Content */}
        <ScrollView style={styles.scrollView}>
          {/* Add any other content or components here */}
        </ScrollView>

        <BottomNavBar /> {/* Use the BottomNavBar component */}
      </View>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  content: {
    flex: 1,
    position: 'relative',
  },
  profileContainer: {
    position: 'absolute',
    top: 80, // Adjust as needed
    left: 16, // Align to the left side
    flexDirection: 'row',
    alignItems: 'center',
    zIndex: 10,
    marginTop: 40,
    marginBottom: 40,
  },
  profilePic: {
    width: 60,
    height: 60,
    borderRadius: 30,
    marginRight: 8,
  },
  username: {
    color: '#409152',
    fontSize: 20,
    fontWeight: 'bold',
  },
  scrollView: {
    padding: 16,
  },
  iconSectionOuter: {
    position: 'absolute',
    top: 150,
    width: '100%',
    height: 160,
    backgroundColor: '#CCE6FB',
    padding: 20,
    borderRadius: 10,
    zIndex: 10,
    marginTop: 60,
  },
  iconSection: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    flexWrap: 'wrap',
  },
  iconBoxContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    flexWrap: 'wrap',
    alignItems: 'center'
  },
  iconBox: {
    backgroundColor: 'white',
    padding: 10,
    borderRadius: 8,
    width: 100,
    height: 120,
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: 16,
  },
  icon: {
    width: 40,
    height: 40,
  },
  iconText: {
    marginTop: 8,
    fontSize: 14,
    color: '#000',
  },
  imageBinsContainer: {
    position: 'absolute',
    top: 300,
    width: '80%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    zIndex: 10,
  },
  imageBin: {
    width: 400,
    height: 400,
    resizeMode: 'contain',
  },
});

export default HomePage;
