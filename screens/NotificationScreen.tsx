import * as React from 'react';
import type {NativeStackScreenProps} from '@react-navigation/native-stack';
import {Button, StyleSheet, Text, View} from 'react-native';
import RootStackParamList from '../types/RootStackParamList';
import {useSelector} from 'react-redux';
import UserState from '../types/UserState';

const NotificationScreen = ({
  navigation,
}: NativeStackScreenProps<RootStackParamList, 'Notification'>) => {
  const {user} = useSelector((state: UserState) => state.user);
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Notification Screen</Text>
      <Text style={styles.text}>Name: {user?.user?.name}</Text>
      <Text style={styles.text}>Email: {user?.user?.email}</Text>
      <Button
        title="Go Back Home"
        onPress={() => navigation.navigate('Home')}
      />
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 10,
  },
  text: {
    fontSize: 20,
    marginBottom: 20,
    color: 'black',
  },
});
export default NotificationScreen;
