import * as React from 'react';
import type {NativeStackScreenProps} from '@react-navigation/native-stack';
import {Pressable, StyleSheet, Text, TextInput, View} from 'react-native';
import RootStackParamList from '../types/RootStackParamList';

const ResetPasswordScreen = ({
  navigation,
  // route,  // Add route to access parameters
}: NativeStackScreenProps<RootStackParamList, 'ResetPassword'>) => {
  // const { id } = route.params; // Extract id from route params

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Reset Password</Text>
      <View style={styles.formContainer}>
        <TextInput placeholder="New Password" style={styles.input} />
        <Pressable
          style={styles.button}
          onPress={() => navigation.navigate('Login')}>
          <Text>Submit</Text>
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
    backgroundColor: 'white',
    padding: 20,
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
    color: 'black',
    fontWeight: '800',
  },
  description: {
    fontSize: 18,
    color: '#333333',
    marginBottom: 60,
    fontWeight: '500',
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

export default ResetPasswordScreen;
