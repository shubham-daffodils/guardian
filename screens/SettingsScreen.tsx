import * as React from 'react';
import {Button, StyleSheet, Text, View} from 'react-native';
import {useSelector} from 'react-redux';
import UserState from '../types/UserState';
import CombinedNavigationProp from '../types/CombinedNavigationProp';
import { RootState } from '../Store';
import { darkTheme, lightTheme } from '../Styles/modeStyle';

const SettingsScreen = ({navigation}: CombinedNavigationProp<'Setting'>) => {
  const {user} = useSelector((state: UserState) => state.user);
  const {isDarkMode} = useSelector((state: RootState) => state.config);
  return (
    <View
      style={{
        ...styles.container,
        backgroundColor: isDarkMode
          ? darkTheme.background
          : lightTheme.background,
      }}>
      <Text style={styles.text}>Settings Screen</Text>
      <Text style={styles.text}>Name: {user?.user?.name}</Text>
      <Text style={styles.text}>Email: {user?.user?.email}</Text>
      <Button
        title="Go Back Home"
        onPress={() => navigation.navigate('Main')}
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
export default SettingsScreen;
