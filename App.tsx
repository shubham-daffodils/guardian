import * as React from 'react';
import {LinkingOptions, NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {StyleSheet, View} from 'react-native';
import RNBootSplash from 'react-native-bootsplash';
import RootStackParamList from './types/RootStackParamList';
import LoginScreen from './screens/LoginScreen';
import RegisterScreen from './screens/RegisterScreen';
import ForgotPasswordScreen from './screens/ForgotPasswordScreen';
import {Provider} from 'react-redux';
import store from './Store';
import ResetPasswordScreen from './screens/ResetPasswordScreen';
import DrawerNavigator from './DrawerNavigator';

const App = () => {
  const Stack = createNativeStackNavigator<RootStackParamList>();

  const linking: LinkingOptions<RootStackParamList> = {
    prefixes: ['mychat://'],
    config: {
      screens: {
        ResetPassword: {
          path: 'reset/password/:id?',
          parse: {
            id: (id: string) => id || '',
          },
        },
      },
    },
  };

  return (
    <Provider store={store}>
      <View style={styles.container}>
        <NavigationContainer
          onReady={() => RNBootSplash.hide()}
          linking={linking}>
          <Stack.Navigator>
            <Stack.Screen
              name="Drawer"
              component={DrawerNavigator}
              options={{headerShown: false}}
            />
            <Stack.Screen
              name="Login"
              component={LoginScreen}
              options={{headerShown: false}}
            />
            <Stack.Screen
              name="Register"
              component={RegisterScreen}
              options={{headerShown: false}}
            />
            <Stack.Screen
              name="ForgotPassword"
              component={ForgotPasswordScreen}
              options={{headerShown: false}}
            />
            <Stack.Screen
              name="ResetPassword"
              component={ResetPasswordScreen}
              options={{headerShown: false}}
            />
          </Stack.Navigator>
        </NavigationContainer>
      </View>
    </Provider>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default App;
