import React from 'react';
import {Image, StyleSheet, View} from 'react-native';
import FeedProps from '../types/FeedProps';
const Feed = ({image, id}: FeedProps) => (
  <View style={styles.item} key={id}>
    <View style={styles.imageContainer}>
      <Image source={{uri: image}} style={styles.image} resizeMode="cover" />
    </View>
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

  imageContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: '95%',
    height: 150,
  },
});

export default Feed;
