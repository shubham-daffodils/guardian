import 'react-native-gesture-handler';
import RootStackParamList from './types/RootStackParamList';
import {
  NativeStackNavigationProp,
  NativeStackScreenProps,
} from '@react-navigation/native-stack';
import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import SettingsScreen from './screens/SettingsScreen';
import ChatScreen from './screens/ChatScreen';
import TabNavigator from './TabNavigator';
import NotificationScreen from './screens/NotificationScreen';
import {
  DrawerContentScrollView,
  DrawerItemList,
} from '@react-navigation/drawer';
import {DrawerContentComponentProps} from '@react-navigation/drawer/lib/typescript/src/types';
import {Switch, Text, View} from 'react-native';
import {StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import DeviceInfo from 'react-native-device-info';
import {AppDispatch, RootState} from './Store';
import {useDispatch, useSelector} from 'react-redux';
import {logoutUser} from './Actions/User';
import CustomPressable from './components/CustomPressable';
import {darkTheme, lightTheme} from './Styles/modeStyle';
import {toggleDarkMode} from './Reducers/Config';
type DrawerCustomProps = {
  navigator: NativeStackNavigationProp<RootStackParamList, 'Drawer'>;
} & DrawerContentComponentProps;

function CustomDrawerContent(props: DrawerCustomProps) {
  const dispatch: AppDispatch = useDispatch();
  const onLogoutPress = () => {
    dispatch(logoutUser(props.navigator));
  };
  const toggleSwitch = () => {
    dispatch(toggleDarkMode());
  };
  const {isDarkMode} = useSelector((state: RootState) => state.config);
  return (
    <View style={customStyles.drawer}>
      <DrawerContentScrollView
        {...props}
        contentContainerStyle={customStyles.drawerContent}>
        <DrawerItemList {...props} />
        <View style={customStyles.drawerFooter}>
          <View style={customStyles.modeContainer}>
            <Switch
              trackColor={{false: '#767577', true: '#4CAF50'}}
              thumbColor={!isDarkMode ? '#4CAF50' : '#f4f3f4'}
              ios_backgroundColor="#3e3e3e"
              onValueChange={toggleSwitch}
              value={isDarkMode}
              style={customStyles.modeIcon}
            />
            <Text style={customStyles.modeButton}>
              {isDarkMode ? 'Dark Mode' : 'Light Mode'}
            </Text>
          </View>
          <CustomPressable
            style={customStyles.logoutContainer}
            onPress={onLogoutPress}>
            <Icon
              name="exit-to-app"
              size={30}
              style={customStyles.logoutIcon}
            />
            <Text style={customStyles.logoutButton}>Logout</Text>
          </CustomPressable>
          <View style={customStyles.versionContainer}>
            <Text style={customStyles.version}>
              Version: {DeviceInfo.getVersion()}
            </Text>
          </View>
        </View>
      </DrawerContentScrollView>
    </View>
  );
}

const customStyles = StyleSheet.create({
  drawer: {
    flex: 1,
    justifyContent: 'space-between',
  },
  drawerContent: {
    flexGrow: 1,
  },
  drawerFooter: {
    height: 150,
    marginTop: 'auto',
    width: '100%',
    paddingVertical: 10,
  },
  modeContainer: {
    flex: 2,
    flexDirection: 'row',
    paddingVertical: 5,
    paddingHorizontal: 15,
    borderTopWidth: 1, // Optional: to separate footer from the drawer items
    borderTopColor: '#ddd', // Optional: border color
    borderBottomWidth: 1, // Optional: to separate footer from the drawer items
    borderBottomColor: '#ddd', // Optional: border color
    alignItems: 'center',
  },
  modeIcon: {
    marginRight: 10,
    color: '#4CAF50',
  },
  modeButton: {
    color: '#4CAF50',
    fontSize: 16,
    fontWeight: 'bold',
  },
  logoutContainer: {
    flex: 3,
    flexDirection: 'row',
    paddingVertical: 10,
    paddingHorizontal: 20,
  },
  logoutIcon: {
    marginRight: 10,
    color: '#4CAF50',
  },
  logoutButton: {
    color: '#4CAF50',
    fontSize: 20,
    fontWeight: 'bold',
  },
  versionContainer: {
    flex: 1,
    flexDirection: 'row',
    paddingVertical: 0,
    paddingHorizontal: 25,
  },
  version: {
    color: 'gray',
  },
});

const DrawerNavigator = ({
  navigation,
}: // navigation,
NativeStackScreenProps<RootStackParamList, 'Drawer'>) => {
  const Drawer = createDrawerNavigator<RootStackParamList>();
  const {isDarkMode} = useSelector((state: RootState) => state.config);
  return (
    <Drawer.Navigator
      screenOptions={() => ({
        drawerActiveTintColor: '#4CAF50',
        drawerInactiveTintColor: 'gray',
        drawerStyle: {
          backgroundColor: isDarkMode
            ? darkTheme.background
            : lightTheme.background,
        },
        drawerLabelStyle: {
          fontSize: 18,
        },
        headerStyle: {
          backgroundColor: isDarkMode
            ? darkTheme.background
            : lightTheme.background,
        },
        headerTitleStyle: {
          color: isDarkMode ? darkTheme.text : lightTheme.text,
        },
        headerTintColor: isDarkMode ? darkTheme.text : lightTheme.text,
      })}
      drawerContent={(props: DrawerContentComponentProps) => (
        <CustomDrawerContent {...props} navigator={navigation} />
      )}>
      <Drawer.Screen
        name="Main"
        component={TabNavigator}
        options={{headerShown: false}}
      />
      <Drawer.Screen name="Setting" component={SettingsScreen} />
      <Drawer.Screen name="Chat" component={ChatScreen} />
      <Drawer.Screen
        name="Notification"
        component={NotificationScreen}
      />
    </Drawer.Navigator>
  );
};

export default DrawerNavigator;
