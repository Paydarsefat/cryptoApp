import React, {useState, useEffect} from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Alert,
  FlatList,
  RefreshControl,
  Linking
} from 'react-native';
import auth from '@react-native-firebase/auth';
import {SafeAreaView} from 'react-native-safe-area-context';
import axios from 'axios';

const HomeScreen = () => {
  const [email, setEmail] = useState(auth().currentUser.email);
  const [data, setData] = useState([]);
  const handleSignOut = () => {
    auth()
      .signOut()
      .then(() => Alert.alert(`${email} signed out!`))
      .catch(error => {
        Alert.alert('Sign out failed');
        console.log(error); // Sign out User failure
      });
  };
  const getData = async () => {
    try {
      const response = await axios.get('https://api.coincap.io/v2/assets', {
        headers: {},
        params: {
          limit: 20,
        },
      });
      setData(response.data.data);
    } catch (error) {
      console.log(error);
    }
  };
  const renderItem = ({item}) => {
    return (
      <View style={styles.itemContainer}>
        <View style={styles.itemTitleContainer}>
          <Text style={styles.itemText}>
            {item.symbol} : {item.name}
          </Text>
          <Text
            style={[
              styles.itemPrice,
              item.changePercent24Hr > 0 ? {color: 'green'} : {color: 'red'},
            ]}>
            24Hr: {parseFloat(item.changePercent24Hr).toFixed(2)}
          </Text>
          <Text
            style={[
              styles.itemPrice,
              item.changePercent24Hr > 0 ? {color: 'green'} : {color: 'red'},
            ]}>
            {parseFloat(item.priceUsd).toFixed(4)}
          </Text>
        </View>
      </View>
    );
  };

  useEffect(() => {
    getData();
  }, [email]);

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.textUserTitle}>{email}</Text>
        <TouchableOpacity style={styles.registerButton} onPress={handleSignOut}>
          <Text style={styles.textButton}>Sign out</Text>
        </TouchableOpacity>
      </View>
      <FlatList
        data={data}
        renderItem={renderItem}
        keyExtractor={item => item.index}
        refreshControl={
          <RefreshControl refreshing={false} onRefresh={getData} />
        }
      />
    </SafeAreaView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 16,
  },
  registerButton: {
    backgroundColor: '#FE6E00',
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: '#fff',
    borderWidth: 1,
    borderRadius: 10,
    padding: 5,
  },
  textUserTitle: {
    color: 'blue',
    fontSize: 15,
  },
  textButton: {
    color: '#fff',
    fontSize: 11,
  },
  itemContainer: {
    backgroundColor: '#fff',
    padding: 10,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  itemText: {
    fontSize: 14,
  },
  itemTitleContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  itemPrice: {
    fontSize: 14,
    color: '#FE6E00',
  },
});
