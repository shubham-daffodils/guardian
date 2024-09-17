import * as React from 'react';
import type {NativeStackScreenProps} from '@react-navigation/native-stack';
import { Pressable, StyleSheet, Text, TextInput, View} from 'react-native';
import RootStackParamList from '../types/RootStackParamList';

const ForgotPasswordScreen = ({
  navigation,
}: NativeStackScreenProps<RootStackParamList, 'ForgotPassword'>) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome to the app!</Text>
      <Text style={styles.description}>Enter Your Mail</Text>
      <View style={styles.formContainer}>
        <TextInput placeholder="Email" style={styles.input} />
        <Pressable
          style={styles.button}
          onPress={() => navigation.navigate('Login')}>
          <Text>Send Reset Mail</Text>
        </Pressable>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f9c2ff',
    padding: 20,
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
  },
  description: {
    fontSize: 18,
    color: '#333333',
    marginBottom: 60,
  },

  formContainer: {
    width: '100%',
    padding: 20,
    borderRadius: 10,
  },

  input: {
    backgroundColor: '#cccccc',
    padding: 10,
    marginBottom: 20,
    borderRadius: 10,
    color: 'black',
  },

  button: {
    backgroundColor: '#4CAF50',
    padding: 10,
    borderRadius: 10,
    alignItems: 'center',
  },
});


export default ForgotPasswordScreen;
