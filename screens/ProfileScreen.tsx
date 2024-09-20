import * as React from 'react';
import type {NativeStackScreenProps} from '@react-navigation/native-stack';
import {StyleSheet, Text, View} from 'react-native';
import RootStackParamList from '../types/RootStackParamList';
import {useDispatch, useSelector} from 'react-redux';
import {AppDispatch, RootState} from '../Store';
import {darkTheme, lightTheme} from '../Styles/modeStyle';
import Profile from '../components/Profile';
import CustomPressable from '../components/CustomPressable';
import Icon from 'react-native-vector-icons/Entypo';
import Stories from '../components/Stories';

const ProfileScreen = ({
  navigation,
}: NativeStackScreenProps<RootStackParamList, 'Profile'>) => {
  const dispatch: AppDispatch = useDispatch();
  const {user} = useSelector((state: RootState) => state.user);
  const {isDarkMode} = useSelector((state: RootState) => state.config);
  return (
    <View
      style={{
        ...styles.container,
        backgroundColor: isDarkMode
          ? darkTheme.background
          : lightTheme.background,
      }}>
      <View style={styles.header}>
        <Profile
          title={user?.user?.name}
          avatar={'https://picsum.photos/200/300'}
          id={1}
          size={64}
        />
        <View style={styles.headerCard}>
          <Text
            style={{
              ...styles.headerCardTitle,
              color: isDarkMode ? darkTheme.text : lightTheme.text,
            }}>
            4
          </Text>
          <Text
            style={{
              ...styles.headerCardText,
              color: isDarkMode ? darkTheme.text : lightTheme.text,
            }}>
            posts
          </Text>
        </View>
        <View style={styles.headerCard}>
          <Text
            style={{
              ...styles.headerCardTitle,
              color: isDarkMode ? darkTheme.text : lightTheme.text,
            }}>
            258
          </Text>
          <Text
            style={{
              ...styles.headerCardText,
              color: isDarkMode ? darkTheme.text : lightTheme.text,
            }}>
            followers
          </Text>
        </View>
        <View style={styles.headerCard}>
          <Text
            style={{
              ...styles.headerCardTitle,
              color: isDarkMode ? darkTheme.text : lightTheme.text,
            }}>
            347
          </Text>
          <Text
            style={{
              ...styles.headerCardText,
              color: isDarkMode ? darkTheme.text : lightTheme.text,
            }}>
            following
          </Text>
        </View>
      </View>
      <View style={styles.profileButtons}>
        <CustomPressable style={styles.profileButton}>
          <Text
            style={{
              ...styles.profileButtonText,
              color: isDarkMode ? darkTheme.text : lightTheme.text,
            }}>
            Edit Profile
          </Text>
        </CustomPressable>
        <CustomPressable style={styles.profileButton}>
          <Text
            style={{
              ...styles.profileButtonText,
              color: isDarkMode ? darkTheme.text : lightTheme.text,
            }}>
            Share Profile
          </Text>
        </CustomPressable>
        <CustomPressable style={styles.profileIconButton}>
          <Icon
            name="add-user"
            size={24}
            color={isDarkMode ? darkTheme.text : lightTheme.text}
          />
        </CustomPressable>
      </View>
      <Stories />
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 5,
    paddingHorizontal: 10,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  headerCard: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  headerCardTitle: {
    fontSize: 24,
  },
  headerCardText: {
    fontSize: 16,
  },
  profileButtons: {
    flexDirection: 'row',
    paddingVertical: 10,
    paddingHorizontal: 10,
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  profileButton: {
    backgroundColor: '#ccc',
    opacity: 0.5,
    paddingHorizontal: 20,
    paddingVertical: 5,
    borderRadius: 10,
  },
  profileButtonText: {
    fontWeight: 'bold',
    fontSize: 18,
  },
  profileIconButton: {
    backgroundColor: '#ccc',
    opacity: 0.5,
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 10,
  },
});
export default ProfileScreen;
