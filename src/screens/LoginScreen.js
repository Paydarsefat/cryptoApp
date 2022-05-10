import React from 'react';
import {
  StyleSheet,
  Text,
  KeyboardAvoidingView,
  TextInput,
  TouchableOpacity,
  Alert,
} from 'react-native';

import auth from '@react-native-firebase/auth';

const LoginScreen = () => {
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  const handleSignIn = () => {
    console.log(email, password);
    auth() // Firebase auth instance
      .signInWithEmailAndPassword(email, password) // Email and password
      .then(
        user => {
          user ? Alert.alert('Login success') : Alert.alert('Login failed');
        }, // Sign in success
      ) // Sign in failure
      .catch(error => {
        Alert.alert('Login failed');
        console.log(error); // Sign in failure
      });
  };
  const handleRegister = () => {
    console.log(email, password);
    auth() // Firebase auth instance
      .createUserWithEmailAndPassword(email, password) // Email and password
      .then(
        user => {
          user
            ? Alert.alert('Register success')
            : Alert.alert('Register failed');
        }, // Create User success
      ) // Create User failure
      .catch(error => {
        Alert.alert('Register failed');
        console.log(error); // Create User failure
      });
  };

  return (
    <KeyboardAvoidingView style={styles.container}>
      <Text style={styles.titleText}>Login</Text>
      <TextInput
        style={styles.input}
        placeholder={'Email'}
        onChangeText={text => setEmail(text)}
        value={email}
        autoCapitalize={'none'}
        autoCorrect={false}
        keyboardType={'email-address'}
      />
      <TextInput
        style={styles.input}
        placeholder={'password'}
        onChangeText={text => setPassword(text)}
        // value={password}
        secureTextEntry
      />
      <TouchableOpacity style={styles.button} onPress={handleSignIn}>
        <Text style={styles.textButton}>Login</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.registerButton} onPress={handleRegister}>
        <Text style={styles.textButton}>Register</Text>
      </TouchableOpacity>
    </KeyboardAvoidingView>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  titleText: {
    fontSize: 30,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  input: {
    backgroundColor: '#fff',
    width: 300,
    height: 50,
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 10,
    marginVertical: 10,
    padding: 10,
  },
  button: {
    backgroundColor: '#63CEB2',
    justifyContent: 'center',
    alignItems: 'center',
    width: '50%',
    borderColor: '#fff',
    borderWidth: 1,
    borderRadius: 10,
    marginVertical: 10,
    padding: 5,
  },
  registerButton: {
    backgroundColor: '#FE8328',
    justifyContent: 'center',
    alignItems: 'center',
    width: '50%',
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
