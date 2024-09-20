// actions/appConfigActions.ts
import {AppDispatch} from '../Store';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {
  loadConfigSuccess,
  toggleDarkMode,
  setTextSize,
} from '../Reducers/Config';
import {AppConfigState} from '../types/AppConfigState';

const CONFIG_STORAGE_KEY = 'app_config';

export const loadAppConfig = () => async (dispatch: AppDispatch) => {
  try {
    const storedConfig = await AsyncStorage.getItem(CONFIG_STORAGE_KEY);
    if (storedConfig) {
      const config: AppConfigState = JSON.parse(storedConfig);
      dispatch(loadConfigSuccess(config));
    }
  } catch (error) {
    console.error('Error loading app config from AsyncStorage', error);
  }
};

export const saveAppConfig = (config: AppConfigState) => async () => {
  try {
    await AsyncStorage.setItem(CONFIG_STORAGE_KEY, JSON.stringify(config));
  } catch (error) {
    console.error('Error saving app config to AsyncStorage', error);
  }
};

export const toggleModeAndSave =
  () => async (dispatch: AppDispatch, getState: any) => {
    dispatch(toggleDarkMode());
    const config = getState().appConfig;
    dispatch(saveAppConfig(config));
  };

export const setTextSizeAndSave =
  (size: 'small' | 'medium' | 'large') =>
  async (dispatch: AppDispatch, getState: any) => {
    dispatch(setTextSize(size));
    const config = getState().appConfig;
    dispatch(saveAppConfig(config));
  };
