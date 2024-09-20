// slices/appConfigSlice.ts
import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {AppConfigState} from '../types/AppConfigState';

const initialState: AppConfigState = {
  isDarkMode: true,
  textSize: 'medium',
};

const appConfigSlice = createSlice({
  name: 'appConfig',
  initialState,
  reducers: {
    toggleDarkMode(state) {
      state.isDarkMode = !state.isDarkMode;
    },
    setTextSize(state, action: PayloadAction<'small' | 'medium' | 'large'>) {
      state.textSize = action.payload;
    },
    loadConfigSuccess(state, action: PayloadAction<AppConfigState>) {
      state.isDarkMode = action.payload.isDarkMode;
      state.textSize = action.payload.textSize;
    },
  },
});

export const {toggleDarkMode, setTextSize, loadConfigSuccess} =
  appConfigSlice.actions;

export default appConfigSlice.reducer;
