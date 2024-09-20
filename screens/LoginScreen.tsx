import * as React from 'react';
import type {NativeStackScreenProps} from '@react-navigation/native-stack';
import {
  ActivityIndicator,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';
import RootStackParamList from '../types/RootStackParamList';
import {useDispatch, useSelector} from 'react-redux';
import {loginUser} from '../Actions/User';
import {AppDispatch, RootState} from '../Store';
import CustomPressable from '../components/CustomPressable';
import {darkTheme, lightTheme} from '../Styles/modeStyle';
const LoginScreen = ({
  navigation,
}: NativeStackScreenProps<RootStackParamList, 'Login'>) => {
  const dispatch: AppDispatch = useDispatch();
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  const {loading} = useSelector((state: RootState) => state.user);
  const onLoginPress = () => {
    if (loading) {
      return;
    }
    dispatch(loginUser(email, password, navigation));
  };

  const {isDarkMode} = useSelector((state: RootState) => state.config);
  return (
    <View
      style={{
        ...styles.container,
        backgroundColor: isDarkMode
          ? darkTheme.background
          : lightTheme.background,
      }}>
      <Text
        style={{
          ...styles.title,
          color: isDarkMode ? darkTheme.text : lightTheme.text,
        }}>
        Welcome to the app!
      </Text>
      <Text
        style={{
          ...styles.description,
          color: isDarkMode ? darkTheme.text : lightTheme.text,
        }}>
        Please Login!
      </Text>
      <View style={styles.formContainer}>
        <TextInput
          placeholder="Email"
          style={styles.input}
          value={email}
          onChangeText={text => setEmail(text)}
        />
        <TextInput
          placeholder="Password"
          style={styles.input}
          value={password}
          onChangeText={text => setPassword(text)}
        />
        <CustomPressable style={styles.button} onPress={onLoginPress}>
          {loading ? <ActivityIndicator /> : <Text>Login</Text>}
        </CustomPressable>
        <View style={styles.linkContainer}>
          <Text
            style={{
              ...styles.linkText,
              color: isDarkMode ? darkTheme.text : lightTheme.text,
            }}>
            Forgot Password?
          </Text>
          <Text
            style={styles.link}
            onPress={() => navigation.navigate('ForgotPassword')}>
            Reset
          </Text>
        </View>
      </View>
      <View style={styles.lineBreak} />

      <View style={styles.linkContainer}>
        <Text
          style={{
            ...styles.linkText,
            color: isDarkMode ? darkTheme.text : lightTheme.text,
          }}>
          Don't have an account?
        </Text>
        <Text
          style={styles.link}
          onPress={() => navigation.navigate('Register')}>
          Register
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
    padding: 20,
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
    fontWeight: '800',
  },
  description: {
    fontSize: 18,
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
    fontWeight: 'bold',
  },
});

export default LoginScreen;
