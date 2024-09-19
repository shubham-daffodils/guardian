import 'react-native-gesture-handler';
import RootStackParamList from './types/RootStackParamList';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import SettingsScreen from './screens/SettingsScreen';
import ChatScreen from './screens/ChatScreen';
import TabNavigator from './TabNavigator';
import NotificationScreen from './screens/NotificationScreen';

const DrawerNavigator = ({}: // navigation,
NativeStackScreenProps<RootStackParamList, 'Drawer'>) => {
  const Drawer = createDrawerNavigator<RootStackParamList>();

  return (
    <Drawer.Navigator
      screenOptions={()=> ({
        drawerActiveTintColor: '#4CAF50',
        drawerInactiveTintColor: 'gray',
      })}
    >
      <Drawer.Screen
        name="Main"
        component={TabNavigator}
        options={{headerShown: false}}
      />
      <Drawer.Screen name="Setting" component={SettingsScreen} />
      <Drawer.Screen name="Chat" component={ChatScreen} />
      <Drawer.Screen name="Notification" component={NotificationScreen} />
    </Drawer.Navigator>
  );
};

export default DrawerNavigator;
