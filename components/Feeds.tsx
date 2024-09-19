import * as React from 'react';
import {View, FlatList, StyleSheet} from 'react-native';
import Feed from './Feed';

const defaultUserList = [
  {
    id: 1,
    image: 'https://picsum.photos/200/300',
  },
  {
    id: 2,
    image: 'https://picsum.photos/200/300',
  },
  {
    id: 3,
    image: 'https://picsum.photos/200/300',
  },
  {
    id: 4,
    image: 'https://picsum.photos/200/300',
  },
  {
    id: 5,
    image: 'https://picsum.photos/200/300',
  },
  {
    id: 6,
    image: 'https://picsum.photos/200/300',
  },
  {
    id: 1,
    image: 'https://picsum.photos/200/300',
  },
  {
    id: 2,
    image: 'https://picsum.photos/200/300',
  },
  {
    id: 3,
    image: 'https://picsum.photos/200/300',
  },
  {
    id: 4,
    image: 'https://picsum.photos/200/300',
  },
  {
    id: 5,
    image: 'https://picsum.photos/200/300',
  },
  {
    id: 6,
    image: 'https://picsum.photos/200/300',
  },
  {
    id: 1,
    image: 'https://picsum.photos/200/300',
  },
  {
    id: 2,
    image: 'https://picsum.photos/200/300',
  },
  {
    id: 3,
    image: 'https://picsum.photos/200/300',
  },
  {
    id: 4,
    image: 'https://picsum.photos/200/300',
  },
  {
    id: 5,
    image: 'https://picsum.photos/200/300',
  },
  {
    id: 6,
    image: 'https://picsum.photos/200/300',
  },
  {
    id: 1,
    image: 'https://picsum.photos/200/300',
  },
  {
    id: 2,
    image: 'https://picsum.photos/200/300',
  },
  {
    id: 3,
    image: 'https://picsum.photos/200/300',
  },
  {
    id: 4,
    image: 'https://picsum.photos/200/300',
  },
  {
    id: 5,
    image: 'https://picsum.photos/200/300',
  },
  {
    id: 6,
    image: 'https://picsum.photos/200/300',
  },
  {
    id: 1,
    image: 'https://picsum.photos/200/300',
  },
  {
    id: 2,
    image: 'https://picsum.photos/200/300',
  },
  {
    id: 3,
    image: 'https://picsum.photos/200/300',
  },
  {
    id: 4,
    image: 'https://picsum.photos/200/300',
  },
  {
    id: 5,
    image: 'https://picsum.photos/200/300',
  },
  {
    id: 6,
    image: 'https://picsum.photos/200/300',
  },
  {
    id: 1,
    image: 'https://picsum.photos/200/300',
  },
  {
    id: 2,
    image: 'https://picsum.photos/200/300',
  },
  {
    id: 3,
    image: 'https://picsum.photos/200/300',
  },
  {
    id: 4,
    image: 'https://picsum.photos/200/300',
  },
  {
    id: 5,
    image: 'https://picsum.photos/200/300',
  },
  {
    id: 6,
    image: 'https://picsum.photos/200/300',
  },
];

const Feeds = () => {
  return (
    <View style={styles.feeds}>
      <FlatList
        data={defaultUserList}
        renderItem={({item}) => (
          <Feed
            image={item.image}
            id={item.id}
          />
        )}
        numColumns={3}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  feeds: {
    flex: 1,
  },
});

export default Feeds;
