import axios from 'axios';
import {server} from '../config/config';
import {AppDispatch} from '../Store'; // Import AppDispatch if you have defined it in your store
import {
  LoginRequest,
  LoginSuccess,
  LoginFailure,
  LoadUserRequest,
  LoadUserSuccess,
  LoadUserFailure,
  RegisterRequest,
  RegisterSuccess,
  RegisterFailure,
  ClearUser,
} from '../Reducers/User'; // Assuming these are imported from your user slice

// Types for user details and error
interface User {
  name: string;
  email: string;
  password?: string;
  token: string;
  expiresIn?: string;
}

interface ErrorResponse {
  message: string;
}
import AsyncStorage from '@react-native-async-storage/async-storage';
import RootStackParamList from '../types/RootStackParamList';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {Alert} from 'react-native';
import ScreenList from '../ScreenList';
// Login User
export const loginUser =
  (
    email: string,
    password: string,
    navigation: NativeStackNavigationProp<RootStackParamList, 'Login'>,
  ) =>
  async (dispatch: AppDispatch) => {
    try {
      dispatch(LoginRequest());
      // console.log(email, password);

      const {data} = await axios.post<User>(
        `${server}/api/v1/login`,
        {email, password},
        {
          headers: {
            'Content-Type': 'application/json',
          },
        },
      );

      await AsyncStorage.setItem('token', data?.token);
      dispatch(LoginSuccess(data));
      navigation.navigate('Home');
    } catch (error: any) {
      const errorMessage =
        (error?.response?.data as ErrorResponse)?.message || 'Login failed';
      console.log(error);
      Alert.alert('Error Loging In', errorMessage, [
        {text: 'OK', onPress: () => console.log('OK Pressed')},
      ]);
      dispatch(LoginFailure(errorMessage));
    }
  };

// Load User
export const loadUser =
  (navigation: NativeStackNavigationProp<RootStackParamList, 'Main'>) =>
  async (dispatch: AppDispatch) => {
    try {
      dispatch(LoadUserRequest());
      const token = await AsyncStorage.getItem('token');
      console.log('Get Item', token);
      const {data} = await axios.get<any>(`${server}/api/v1/me`, {
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
      });

      dispatch(LoadUserSuccess(data));
    } catch (error: any) {
      const errorMessage =
        (error?.response?.data as ErrorResponse)?.message ||
        'Failed to load user';
      navigation.navigate('Login');
      dispatch(LoadUserFailure(errorMessage));
      Alert.alert('Error  Loading', errorMessage, [
        {text: 'OK', onPress: () => console.log('OK Pressed')},
      ]);
      dispatch(LoginFailure(errorMessage));
    }
  };
type ScreenNames = keyof typeof ScreenList;
// Logout User
export const logoutUser =
  (navigation: NativeStackNavigationProp<RootStackParamList, ScreenNames>) =>
  async (dispatch: AppDispatch) => {
    try {
      await axios.get(`${server}/api/v1/logout`, {
        headers: {
          'Content-Type': 'application/json',
        },
      });

      // Remove the token without the callback
      await AsyncStorage.removeItem('token')
        .then(() => {
          // Navigate to Login after token is removed
          AsyncStorage.getItem('token').then(item => {
            console.log('item', item);
          });
          dispatch(ClearUser());
          navigation.navigate('Login');
        })
        .catch(error => {
          console.log(error);
        });
    } catch (error: any) {
      const errorMessage =
        (error?.response?.data as ErrorResponse)?.message || 'Logout failed';
      Alert.alert('Error  Logging Out', errorMessage, [
        {text: 'OK', onPress: () => console.log('OK Pressed')},
      ]);
      dispatch({
        type: 'Logout',
        payload: errorMessage,
      });
    }
  };

// Register User
export const registerUser =
  (
    name: string,
    email: string,
    password: string,
    navigation: NativeStackNavigationProp<RootStackParamList, 'Register'>,
  ) =>
  async (dispatch: AppDispatch) => {
    try {
      dispatch(RegisterRequest());
      console.log(name, email, password);

      const {data} = await axios.post<User>(
        `${server}/api/v1/register`,
        {name, email, password},
        {
          headers: {
            'Content-Type': 'application/json',
          },
        },
      );
      await AsyncStorage.setItem('token', data?.token);
      navigation.navigate('Home');
      dispatch(RegisterSuccess(data));
    } catch (error: any) {
      const errorMessage =
        (error?.response?.data as ErrorResponse)?.message ||
        'Registration failed';
      console.log(errorMessage);
      Alert.alert('Error  Registering', errorMessage, [
        {text: 'OK', onPress: () => console.log('OK Pressed')},
      ]);
      dispatch(RegisterFailure(errorMessage));
    }
  };
