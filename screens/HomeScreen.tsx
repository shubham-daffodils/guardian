import * as React from 'react';
import type {NativeStackScreenProps} from '@react-navigation/native-stack';
import {StyleSheet, Text, View} from 'react-native';
import RootStackParamList from '../types/RootStackParamList';
import {useSelector} from 'react-redux';
// import {AppDispatch} from '../Store';
import UserState from '../types/UserState';
// import Stories from '../components/Stories';
import Posts from '../components/Posts';

const HomeScreen = ({}: // navigation,
NativeStackScreenProps<RootStackParamList, 'Home'>) => {
  const {user, loading} = useSelector((state: UserState) => state.user);
  // const dispatch: AppDispatch = useDispatch();

  console.log('user', user);
  return loading ? (
    <View style={styles.container}>
      <Text style={styles.text}>Loading</Text>
    </View>
  ) : (
    <View style={styles.container}>
      {/* <Stories /> */}
      <Posts />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  text: {
    fontSize: 20,
    marginBottom: 20,
    color: 'black',
  },
});

export default HomeScreen;
