import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import ProfileProps from '../types/ProfileProps';
import {darkTheme, lightTheme} from '../Styles/modeStyle';
import { useSelector } from 'react-redux';
import { RootState } from '../Store';
const Profile = ({title, avatar, id, size, hideTitle}: ProfileProps) => {
  const {isDarkMode}  = useSelector((state : RootState)  => state.config);
  return (
    <View style={styles.item} key={id}>
      <View
        style={{
          width: size + 10,
          height: size + 10,
          borderRadius: (size + 10) / 2,
          ...styles.avatarContainer,
          borderWidth: hideTitle  ? 0 : 1.5,
        }}>
        <Image
          source={{uri: avatar}}
          style={{
            width: size,
            height: size,
            borderRadius: size / 2,
          }}
        />
      </View>
      <Text
        style={{
          ...styles.title,
          display: hideTitle ? 'none' : 'flex',
          color: !isDarkMode ? lightTheme.text : darkTheme.text,
        }}>
        {title}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  item: {
    paddingHorizontal: 10,
    paddingVertical: 2,
    alignItems: 'center',
    justifyContent: 'flex-start',
    gap: 8,
  },
  title: {
    fontSize: 16,
  },
  avatarContainer: {
    // borderWidth: 3,
    borderColor: '#4CAF50',
    padding: 3,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default Profile;
