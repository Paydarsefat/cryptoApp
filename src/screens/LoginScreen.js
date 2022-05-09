import {
  StyleSheet,
  Text,
  KeyboardAvoidingView,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import React from 'react';

const LoginScreen = () => {
  return (
    <KeyboardAvoidingView style={styles.container}>
      <Text style={styles.titleText}>Login</Text>
      <TextInput
        style={styles.input}
        placeholder={'Email'}
        autoCapitalize={'none'}
        autoCorrect={false}
        keyboardType={'email-address'}
      />
      <TextInput
        style={styles.input}
        placeholder={'password'}
        secureTextEntry
      />
      <TouchableOpacity style={styles.button}>
        <Text style={styles.textButton}>Login</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.registerButton}>
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
