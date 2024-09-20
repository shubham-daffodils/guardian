import * as React from 'react';
import type {NativeStackScreenProps} from '@react-navigation/native-stack';
import {ActivityIndicator, StyleSheet, View} from 'react-native';
import RootStackParamList from '../types/RootStackParamList';
import {useSelector} from 'react-redux';
import Posts from '../components/Posts';
import {RootState} from '../Store';
import {darkTheme, lightTheme} from '../Styles/modeStyle';

const HomeScreen = ({}: // navigation,
NativeStackScreenProps<RootStackParamList, 'Home'>) => {
  const {user, loading} = useSelector((state: RootState) => state.user);
  const {isDarkMode} = useSelector((state: RootState) => state.config);
  console.log('user', user);
  return loading ? (
    <View
      style={{
        ...styles.loadcontainer,
        backgroundColor: isDarkMode
          ? darkTheme.background
          : lightTheme.background,
      }}>
      <ActivityIndicator size={40} />
    </View>
  ) : (
    <View
      style={{
        ...styles.container,
        backgroundColor: isDarkMode
          ? darkTheme.background
          : lightTheme.background,
      }}>
      <Posts />
    </View>
  );
};

const styles = StyleSheet.create({
  loadcontainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  container: {
    flex: 1,
  },
});

export default HomeScreen;
