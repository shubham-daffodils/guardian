import * as React from 'react';
import type {NativeStackScreenProps} from '@react-navigation/native-stack';
import {StyleSheet, View, TextInput} from 'react-native';
import RootStackParamList from '../types/RootStackParamList';
// import {useSelector} from 'react-redux';
// import UserState from '../types/UserState';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Feeds from '../components/Feeds';
import { darkTheme, lightTheme } from '../Styles/modeStyle';
import { useSelector } from 'react-redux';
import { RootState } from '../Store';

const SearchScreen = ({}: // navigation,
NativeStackScreenProps<RootStackParamList, 'Search'>) => {
  const {isDarkMode} = useSelector((state: RootState) => state.config);
  return (
    <View
      style={{
        ...styles.container,
        backgroundColor: isDarkMode
          ? darkTheme.background
          : lightTheme.background,
      }}>
      <View style={styles.searchContainer}>
        <Icon name="file-find" size={30} style={styles.searchIcon} />
        <TextInput placeholder="Search..." style={styles.searchInput} />
      </View>
      <View style={styles.feedContainer}>
        <Feeds />
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    position: 'relative',
    paddingTop: 90,
  },
  text: {
    fontSize: 20,
    marginBottom: 20,
    color: 'black',
  },
  searchContainer: {
    position: 'absolute',
    width: '90%',
    borderColor: 'gray',
    borderWidth: 1,
    paddingHorizontal: 15,
    borderRadius: 60,
    marginHorizontal: '5%',
    top: 20,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#ccc',
  },
  searchIcon: {
    color: 'gray',
    marginRight: 5,
  },
  searchInput: {
    color: 'black',
  },
  feedContainer: {
    flex: 1,
  },
});
export default SearchScreen;
