import {useDispatch, useSelector} from 'react-redux';
import RootStackParamList from './types/RootStackParamList';
import {AppDispatch, RootState} from './Store';
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
import CustomPressable from './components/CustomPressable';
import {darkTheme, lightTheme} from './Styles/modeStyle';

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
  const {isDarkMode} = useSelector((state: RootState) => state.config);
  return (
    <CustomPressable
      onPress={() => navigation.openDrawer()} // Open drawer on button press
      style={styles.menuButton}>
      <Icon
        name="menu"
        size={24}
        color={isDarkMode ? darkTheme.text : lightTheme.text}
      />
    </CustomPressable>
  );
};

const NotificationButton = ({navigation}: CombinedNavigationProp<'Main'>) => {
  const {isDarkMode} = useSelector((state: RootState) => state.config);
  return (
    <CustomPressable
      onPress={() => navigation.navigate('Notification')} // Open drawer on button press
      style={styles.menuButton}>
      <Icon
        name="bell"
        size={24}
        color={isDarkMode ? darkTheme.text : lightTheme.text}
      />
    </CustomPressable>
  );
};

const ChatButton = ({navigation}: CombinedNavigationProp<'Main'>) => {
  const {isDarkMode} = useSelector((state: RootState) => state.config);
  return (
    <CustomPressable
      onPress={() => navigation.navigate('Chat')} // Open drawer on button press
      style={styles.menuButton}>
      <Icon
        name="chat"
        size={24}
        color={isDarkMode ? darkTheme.text : lightTheme.text}
      />
    </CustomPressable>
  );
};

// Main navigator
const TabNavigator = ({navigation, route}: CombinedNavigationProp<'Main'>) => {
  const Tab = createBottomTabNavigator<RootStackParamList>();
  const dispatch: AppDispatch = useDispatch();
  const {user} = useSelector((state: RootState) => state.user);
  const {isDarkMode} = useSelector((state: RootState) => state.config);
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
          tabBarStyle: {
            backgroundColor: isDarkMode
              ? darkTheme.background
              : lightTheme.background,
          },
          headerStyle: {
            backgroundColor: isDarkMode
              ? darkTheme.background
              : lightTheme.background,
          },
          headerTitleStyle: {
            color: isDarkMode ? darkTheme.text : lightTheme.text,
          },
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
            title: user?.user?.email, // display user's name in the header
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
