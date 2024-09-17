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
} from '../Reducers/User'; // Assuming these are imported from your user slice

// Types for user details and error
interface User {
  name: string;
  email: string;
  password?: string;
  token?: string;
  expiresIn?: string;
}

interface ErrorResponse {
  message: string;
}

// Login User
export const loginUser =
  (email: string, password: string) => async (dispatch: AppDispatch) => {
    try {
      dispatch(LoginRequest());
      console.log(email, password);

      const {data} = await axios.post<User>(
        `${server}/api/v1/login`,
        {email, password},
        {
          headers: {
            'Content-Type': 'application/json',
          },
        },
      );

      // document.cookie = `token=${data.token}`;
      dispatch(LoginSuccess(data));
    } catch (error: any) {
      const errorMessage =
        (error?.response?.data as ErrorResponse)?.message || 'Login failed';
      // alert(errorMessage);
      dispatch(LoginFailure(errorMessage));
    }
  };

// Load User
export const loadUser = () => async (dispatch: AppDispatch) => {
  try {
    dispatch(LoadUserRequest());

    const {data} = await axios.get<User>(`${server}/api/v1/me`, {
      headers: {
        'Content-Type': 'application/json',
        // 'Authorization': `Bearer ${document.cookie.split('=')[1]}`
      },
    });

    dispatch(LoadUserSuccess(data));
  } catch (error: any) {
    const errorMessage =
      (error?.response?.data as ErrorResponse)?.message ||
      'Failed to load user';
    dispatch(LoadUserFailure(errorMessage));
  }
};

// Logout User
export const logoutUser = () => async (dispatch: AppDispatch) => {
  try {
    await axios.get(`${server}/api/v1/logout`, {
      headers: {
        'Content-Type': 'application/json',
      },
    });

    // document.cookie = `token=; expires=${new Date(Date.now())}; path=/;`;
    // window.location.href = '/';
    dispatch({type: 'Logout'});
  } catch (error: any) {
    const errorMessage =
      (error?.response?.data as ErrorResponse)?.message || 'Logout failed';
    dispatch({
      type: 'Logout',
      payload: errorMessage,
    });
  }
};

// Register User
export const registerUser =
  (name: string, email: string, password: string) =>
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

      dispatch(RegisterSuccess(data));
      // document.cookie = `token=${data.token}; expires=${new Date(data.expiresIn)}; path=/;`;
      // window.location.href = '/';
    } catch (error: any) {
      const errorMessage =
        (error?.response?.data as ErrorResponse)?.message ||
        'Registration failed';
      // alert(errorMessage);
      dispatch(RegisterFailure(errorMessage));
    }
  };
