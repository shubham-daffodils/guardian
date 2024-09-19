import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import PostProps from '../types/PostProps';
import Icon from 'react-native-vector-icons/Entypo';
import Profile from './Profile';
import {Pressable} from 'react-native';
const Post = ({desc, image, user, id}: PostProps) => (
  <View style={styles.item} key={id}>
    <View style={styles.itemHeader}>
      <Profile title={user} avatar={image} id={id} hideTitle={true} size={30} />
      <Text style={styles.username}>{user}</Text>
      <Pressable>
        <Icon name="dots-three-vertical" size={20} style={styles.icon} />
      </Pressable>
    </View>
    <View style={styles.imageContainer}>
      <Image source={{uri: image}} style={styles.image} resizeMode="cover" />
    </View>
    <View style={styles.actionButtons}>
      <Pressable>
        <Icon name="heart-outlined" size={30} style={styles.actionIcon} />
      </Pressable>
      <Pressable>
        <Icon name="message" size={30} style={styles.actionIcon} />
      </Pressable>
      <Pressable>
        <Icon name="paper-plane" size={30} style={styles.actionIcon} />
      </Pressable>
      <Pressable style={{marginLeft: 'auto'}}>
        <Icon name="bookmark" size={30} style={styles.actionIcon} />
      </Pressable>
    </View>
    <Text style={styles.desc}>{desc}</Text>
  </View>
);

const styles = StyleSheet.create({
  item: {
    flex: 1,
    borderBottomWidth: 0.5,
    borderBottomColor: '#ccc',
    borderTopColor: '#ccc',
    borderTopWidth: 0.5,
    paddingVertical: 5,
  },
  itemHeader: {
    flexDirection: 'row',
    paddingHorizontal: 8,
    paddingVertical: 10,
    alignItems: 'center',
  },
  username: {
    color: 'black',
    fontSize: 16,
    fontWeight: 'bold',
    marginRight: 'auto',
  },
  icon: {
    color: '#4CAF50',
  },

  imageContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: '100%',
    height: 400,
  },
  actionButtons: {
    paddingVertical: 15,
    paddingHorizontal: 10,
    flexDirection: 'row',
  },
  actionIcon: {
    color: '#4CAF50',
    paddingHorizontal: 10,
  },
  desc: {
    fontSize: 16,
    color: 'gray',
    paddingHorizontal: 15,
    paddingVertical: 5,
  },
});

export default Post;
