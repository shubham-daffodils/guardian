import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import ProfileProps from '../types/ProfileProps';
const Profile = ({title, avatar, id, size, hideTitle}: ProfileProps) => (
  <View style={styles.item} key={id}>
    <View
      style={{
        width: size + 10,
        height: size + 10,
        borderRadius: (size + 10) / 2,
        ...styles.avatarContainer,
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
        display: hideTitle ? 'none' : 'flex',
        ...styles.title,
      }}>
      {title}
    </Text>
  </View>
);

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
    color: 'black',
  },
  avatarContainer: {
    borderWidth: 3,
    borderColor: '#4CAF50',
    padding: 3,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default Profile;
