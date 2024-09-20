import React from 'react';
import {Image, StyleSheet, View} from 'react-native';
import FeedProps from '../types/FeedProps';
import CustomPressable from './CustomPressable';
const Feed = ({image, id}: FeedProps) => (
  <CustomPressable style={styles.item} key={id}>
    <View style={styles.imageContainer}>
      <Image source={{uri: image}} style={styles.image} resizeMode="cover" />
    </View>
  </CustomPressable>
);

const styles = StyleSheet.create({
  item: {
    flex: 1,
    borderWidth:  1,
    borderColor: 'transparent',
  },

  imageContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: 125,
    height: 160,
  },
});

export default Feed;
