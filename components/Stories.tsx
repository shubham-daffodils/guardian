import * as React from 'react';
import { View, FlatList, StyleSheet} from 'react-native';
import Profile from './Profile';

const defaultUserList = [
  {
    id: 1,
    title: 'buubbles',
    avatar: 'https://picsum.photos/200/300',
  },
  {
    id: 2,
    title: 'vikss',
    avatar: 'https://picsum.photos/200/300',
  },
  {
    id: 3,
    title: 'buubbles',
    avatar: 'https://picsum.photos/200/300',
  },
  {
    id: 4,
    title: 'vikss',
    avatar: 'https://picsum.photos/200/300',
  },
  {
    id: 5,
    title: 'buubbles',
    avatar: 'https://picsum.photos/200/300',
  },
  {
    id: 6,
    title: 'vikss',
    avatar: 'https://picsum.photos/200/300',
  },
  {
    id: 7,
    title: 'buubbles',
    avatar: 'https://picsum.photos/200/300',
  },
  {
    id: 8,
    title: 'vikss',
    avatar: 'https://picsum.photos/200/300',
  },
  {
    id: 9,
    title: 'buubbles',
    avatar: 'https://picsum.photos/200/300',
  },
  {
    id: 10,
    title: 'vikss',
    avatar: 'https://picsum.photos/200/300',
  },
];

const Stories = () => {
  return (
    <View style={styles.stories}>
      <FlatList
        data={defaultUserList}
        renderItem={({item}) => (
          <Profile title={item.title} avatar={item.avatar} id={item.id} size={70}/>
        )}
        horizontal={true}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  stories: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    paddingTop: 5,
  },
});

export default Stories;
