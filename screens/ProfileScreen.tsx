import * as React from 'react';
import type {NativeStackScreenProps} from '@react-navigation/native-stack';
import {Button, Text, View} from 'react-native';
import RootStackParamList from '../types/RootStackParamList';

const ProfileScreen = ({
  navigation,
}: NativeStackScreenProps<RootStackParamList, 'Profile'>) => {
  return (
    <View>
      <Text>This is Profile Screen</Text>
      <Button
        title="Go Back Home"
        onPress={() => navigation.navigate('Home')}
      />
    </View>
  );
};

export default ProfileScreen;
