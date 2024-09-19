import * as React from 'react';
import type {NativeStackScreenProps} from '@react-navigation/native-stack';
import {
  ActivityIndicator,
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';
import RootStackParamList from '../types/RootStackParamList';
import {useDispatch, useSelector} from 'react-redux';
import {AppDispatch} from '../Store';
import {registerUser} from '../Actions/User';
import UserState from '../types/UserState';

const RegisterScreen = ({
  navigation,
}: NativeStackScreenProps<RootStackParamList, 'Register'>) => {
  const dispatch: AppDispatch = useDispatch();
  const [username, setUsername] = React.useState('');
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  const {loading} = useSelector((state: UserState) => state.user);
  const onRegisterPress = () => {
    if (loading) {
      return;
    }
    dispatch(registerUser(username, email, password, navigation));
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome to the app!</Text>
      <Text style={styles.description}>Please Register!</Text>
      <View style={styles.formContainer}>
        <TextInput
          placeholder="Name"
          style={styles.input}
          value={username}
          onChangeText={setUsername}
        />
        <TextInput
          placeholder="Email"
          style={styles.input}
          value={email}
          onChangeText={setEmail}
        />
        <TextInput
          placeholder="Password"
          style={styles.input}
          value={password}
          onChangeText={setPassword}
        />
        <Pressable style={styles.button} onPress={onRegisterPress}>
          {loading ? <ActivityIndicator /> : <Text>Register</Text>}
        </Pressable>
      </View>
      <View style={styles.lineBreak} />

      <View style={styles.linkContainer}>
        <Text style={styles.linkText}>Already have an account?</Text>
        <Text style={styles.link} onPress={() => navigation.navigate('Login')}>
          Login
        </Text>
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
  lineBreak: {
    height: 2,
    backgroundColor: '#cccccc',
    width: '100%',
  },

  linkContainer: {
    flexDirection: 'row',
    paddingVertical: 20,
    alignItems: 'center',
  },
  link: {
    color: '#4CAF50',
    fontSize: 16,
    textDecorationLine: 'underline',
    marginLeft: 10,
  },

  linkText: {
    color: 'black',
    fontWeight: 'bold',
  },
});

export default RegisterScreen;
