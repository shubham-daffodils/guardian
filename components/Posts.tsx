import * as React from 'react';
import {View, FlatList, StyleSheet} from 'react-native';
import Post from './Post';
import Stories from './Stories';

const defaultUserList = [
  {
    id: 1,
    desc: 'Lorem Ispum Jispum Bispum Curling the Car',
    image: 'https://picsum.photos/200/300',
    user: 'shubhamagga',
  },
  {
    id: 2,
    desc: 'Lorem Ispum Jispum Bispum Curling the Car',
    image: 'https://picsum.photos/200/300',
    user: 'shubhamagga',
  },
  {
    id: 3,
    desc: 'Lorem Ispum Jispum Bispum Curling the Car',
    image: 'https://picsum.photos/200/300',
    user: 'shubhamagga',
  },
  {
    id: 4,
    desc: 'Lorem Ispum Jispum Bispum Curling the Car',
    image: 'https://picsum.photos/200/300',
    user: 'shubhamagga',
  },
  {
    id: 5,
    desc: 'Lorem Ispum Jispum Bispum Curling the Car',
    image: 'https://picsum.photos/200/300',
    user: 'shubhamagga',
  },
  {
    id: 6,
    desc: 'Lorem Ispum Jispum Bispum Curling the Car',
    image: 'https://picsum.photos/200/300',
    user: 'shubhamagga',
  },
];

const Posts = () => {
  return (
    <View style={styles.posts}>
      <FlatList
        data={defaultUserList}
        renderItem={({item}) => (
          <Post
            desc={item.desc}
            image={item.image}
            id={item.id}
            user={item.user}
          />
        )}
        ListHeaderComponent={Stories}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  posts: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
});

export default Posts;
