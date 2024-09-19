import * as React from 'react';
import type {NativeStackScreenProps} from '@react-navigation/native-stack';
import {Button, StyleSheet, Text, View} from 'react-native';
import RootStackParamList from '../types/RootStackParamList';
import Anime from '../components/Anime';

const ActivityScreen = ({
  navigation,
}: NativeStackScreenProps<RootStackParamList, 'Activity'>) => {
  return (
    <View style={styles.container}>
      <Anime />
      <Text style={styles.text}>This is Activity Screen</Text>
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
    justifyContent: 'flex-start',
    alignItems: 'center',
    // paddingHorizontal: 10,
  },
  text: {
    fontSize: 20,
    marginBottom: 20,
    color: 'black',
  },
});

export default ActivityScreen;
