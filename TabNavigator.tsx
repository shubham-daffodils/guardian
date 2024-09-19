import {useDispatch} from 'react-redux';
import RootStackParamList from './types/RootStackParamList';
import {AppDispatch} from './Store';
import React from 'react';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import ScreenList from './ScreenList';
import ActivityScreen from './screens/ActivityScreen';
import ProfileScreen from './screens/ProfileScreen';
import HomeScreen from './screens/HomeScreen';
import {loadUser} from './Actions/User';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {RouteProp} from '@react-navigation/native';
import SearchScreen from './screens/SearchScreen';
import AddPostScreen from './screens/AddPostScreen';
import {View, StyleSheet} from 'react-native';
import CombinedNavigationProp from './types/CombinedNavigationProp';
import {Pressable} from 'react-native';

// Define a type that combines both stack and drawer navigation
// Create a type for valid screen names
type ScreenNames = keyof typeof ScreenList;

// Function to render tab bar icons
// Adjust the function to accept a more specific type
const renderTabBarIcon = (
  route: RouteProp<RootStackParamList, ScreenNames>,
  {color, size}: {color: string; size: number},
) => {
  return <Icon name={ScreenList[route.name].icon} size={size} color={color} />;
};

// DrawerButton component
const DrawerButton = ({navigation}: CombinedNavigationProp<'Main'>) => {
  return (
    <Pressable
      onPress={() => navigation.openDrawer()} // Open drawer on button press
      style={styles.menuButton}>
      <Icon name="menu" size={24} color="black" />
    </Pressable>
  );
};

const NotificationButton = ({navigation}: CombinedNavigationProp<'Main'>) => {
  return (
    <Pressable
      onPress={() => navigation.navigate('Notification')} // Open drawer on button press
      style={styles.menuButton}>
      <Icon name="bell" size={24} color="black" />
    </Pressable>
  );
};

const ChatButton = ({navigation}: CombinedNavigationProp<'Main'>) => {
  return (
    <Pressable
      onPress={() => navigation.navigate('Chat')} // Open drawer on button press
      style={styles.menuButton}>
      <Icon name="chat" size={24} color="black" />
    </Pressable>
  );
};

// Main navigator
const TabNavigator = ({navigation, route}: CombinedNavigationProp<'Main'>) => {
  const Tab = createBottomTabNavigator<RootStackParamList>();
  const dispatch: AppDispatch = useDispatch();

  React.useEffect(() => {
    dispatch(loadUser(navigation));
  }, [dispatch, navigation]);

  return (
    <View style={styles.tabView}>
      <Tab.Navigator
        screenOptions={({
          route,
        }: {
          route: RouteProp<RootStackParamList, keyof RootStackParamList>;
        }) => ({
          tabBarActiveTintColor: '#4CAF50',
          tabBarInactiveTintColor: 'gray',
          tabBarShowLabel: false,
          tabBarIcon: props =>
            renderTabBarIcon(
              route as RouteProp<RootStackParamList, ScreenNames>,
              props,
            ),
        })}>
        <Tab.Screen
          name="Home"
          component={HomeScreen}
          options={{
            headerLeft: () => (
              <DrawerButton navigation={navigation} route={route} />
            ),
            headerRight: () => (
              <View style={styles.headerRight}>
                <NotificationButton navigation={navigation} route={route} />
                <ChatButton navigation={navigation} route={route} />
              </View>
            ),
            title: 'InstaGrim',
          }}
        />
        <Tab.Screen
          name="Search"
          component={SearchScreen}
          options={{
            headerShown: false,
          }}
        />
        <Tab.Screen
          name="AddPost"
          component={AddPostScreen}
          options={{
            headerLeft: () => (
              <DrawerButton navigation={navigation} route={route} />
            ),
          }}
        />
        <Tab.Screen
          name="Activity"
          component={ActivityScreen}
          options={{
            headerLeft: () => (
              <DrawerButton navigation={navigation} route={route} />
            ),
          }}
        />
        <Tab.Screen
          name="Profile"
          component={ProfileScreen}
          options={{
            headerLeft: () => (
              <DrawerButton navigation={navigation} route={route} />
            ),
          }}
        />
      </Tab.Navigator>
    </View>
  );
};

const styles = StyleSheet.create({
  tabView: {
    flex: 1,
  },
  menuButton: {
    paddingHorizontal: 10,
  },
  headerRight: {
    flexDirection: 'row',
    paddingHorizontal: 10,
  },
});

export default TabNavigator;
