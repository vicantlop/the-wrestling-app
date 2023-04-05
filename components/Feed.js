import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, FlatList } from 'react-native';

const posts = [
  { id: 1, user: 'johndoe', image: require('../assets/favicon.png'), likes: 10, comments: 2 },
  { id: 2, user: 'janedoe', image: require('../assets/favicon.png'), likes: 25, comments: 4 },
  { id: 3, user: 'marysmith', image: require('../assets/favicon.png'), likes: 16, comments: 1 },
  // Add more posts as needed
];

export default function FeedScreen() {
  const renderItem = ({ item }) => (
    <View style={styles.postContainer}>
      <View style={styles.postHeader}>
        <Image source={require('../assets/profile-avatar.png')} style={styles.avatar} />
        <Text style={styles.username}>{item.user}</Text>
      </View>
      <Image source={item.image} style={styles.postImage} />
      <View style={styles.postActions}>
        <TouchableOpacity style={styles.postActionButton}>
          <Image source={require('../assets/like.png')} style={styles.postActionButtonIcon} />
        </TouchableOpacity>
        <TouchableOpacity style={styles.postActionButton}>
          <Image source={require('../assets/comment.png')} style={styles.postActionButtonIcon} />
        </TouchableOpacity>
        <TouchableOpacity style={styles.postActionButton}>
          <Image source={require('../assets/link.png')} style={styles.postActionButtonIcon} />
        </TouchableOpacity>
      </View>
      <View style={styles.postFooter}>
        <Text style={styles.postFooterText}>{item.likes} likes</Text>
        <Text style={styles.postFooterText}>{item.comments} comments</Text>
      </View>
    </View>
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={posts}
        renderItem={renderItem}
        keyExtractor={item => item.id.toString()}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  postContainer: {
    marginVertical: 16,
  },
  postHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 8,
    paddingHorizontal: 16,
  },
  avatar: {
    width: 32,
    height: 32,
    borderRadius: 16,
    marginRight: 8,
  },
  username: {
    fontWeight: 'bold',
    fontSize: 16,
  },
  postImage: {
    width: '100%',
    aspectRatio: 1,
  },
  postActions: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
    marginTop: 8,
  },
  postActionButton: {
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: '#ddd',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  postActionButtonIcon: {
    width: 24,
    height: 24,
  },
  postFooter: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
    marginTop: 8,
  },
  postFooterText: {
    fontSize: 14,
    color: '#888',
  },
});
