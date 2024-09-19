import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import UserState from '../types/UserState';

const initialState: UserState = {
  isAuthenticated: false,
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    LoginRequest(state) {
      state.loading = true;
    },
    LoginFailure(state, action: PayloadAction<string>) {
      state.loading = false;
      state.error = action.payload;
      state.isAuthenticated = false;
    },
    LoginSuccess(state, action: PayloadAction<any>) {
      state.loading = false;
      state.user = action.payload;
      state.error = null;
      state.isAuthenticated = true;
    },
    RegisterRequest(state) {
      state.loading = true;
    },
    RegisterFailure(state, action: PayloadAction<string>) {
      state.loading = false;
      state.error = action.payload;
      state.isAuthenticated = false;
    },
    RegisterSuccess(state, action: PayloadAction<any>) {
      state.loading = false;
      state.user = action.payload;
      state.error = null;
      state.isAuthenticated = true;
    },
    LoadUserRequest(state) {
      state.loading = true;
    },
    LoadUserFailure(state, action: PayloadAction<string>) {
      state.loading = false;
      state.error = action.payload;
      state.isAuthenticated = false;
    },
    LoadUserSuccess(state, action: PayloadAction<any>) {
      state.loading = false;
      state.user = action.payload;
      state.error = null;
      state.isAuthenticated = true;
    },
    ClearErrors(state) {
      state.error = null;
    },
    ClearUser(state) {
      state.user = null;
      state.isAuthenticated = false;
    },
  },
});

// Export the actions and reducer
export const {
  LoginRequest,
  LoginFailure,
  LoginSuccess,
  RegisterRequest,
  RegisterFailure,
  RegisterSuccess,
  LoadUserRequest,
  LoadUserFailure,
  LoadUserSuccess,
  ClearErrors,
  ClearUser,
} = userSlice.actions;

export default userSlice.reducer;
