import {StyleSheet, Text, View, TouchableOpacity, Alert} from 'react-native';
import React, {useState} from 'react';
import auth from '@react-native-firebase/auth';
import {SafeAreaView} from 'react-native-safe-area-context';

const HomeScreen = () => {
  const [email, setEmail] = useState(auth().currentUser.email);
  const handleSignOut = () => {
    auth()
      .signOut()
      .then(() => Alert.alert(`${email} signed out!`))
      .catch(error => {
        Alert.alert('Sign out failed');
        console.log(error); // Sign out User failure
      });
  };
  return (
    <SafeAreaView style={styles.container}>
      <Text>Welcome {email}</Text>
      <TouchableOpacity style={styles.registerButton} onPress={handleSignOut}>
        <Text style={styles.textButton}>Sign out</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  registerButton: {
    backgroundColor: '#FE6E00',
    justifyContent: 'center',
    alignItems: 'center',
    width: '80%',
    borderColor: '#fff',
    borderWidth: 1,
    borderRadius: 10,
    marginVertical: 10,
    padding: 5,
  },
  textButton: {
    color: '#fff',
    padding: 10,
    fontSize: 20,
  },
});
