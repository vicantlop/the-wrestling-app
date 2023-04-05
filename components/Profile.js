import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';

export default function ProfileScreen() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity style={styles.editProfileButton}>
          <Text style={styles.editProfileButtonText}>Edit Profile</Text>
        </TouchableOpacity>
        <Text style={styles.username}>johndoe</Text>
        <TouchableOpacity style={styles.settingsButton}>
          <Image source={require('../assets/setting.png')} style={styles.settingsButtonIcon} />
        </TouchableOpacity>
      </View>
      <View style={styles.profileInfo}>
        <View style={styles.avatarContainer}>
          <Image source={require('../assets/profile-avatar.png')} style={styles.avatar} />
        </View>
        <View style={styles.statsContainer}>
          <View style={styles.stat}>
            <Text style={styles.statValue}>10</Text>
            <Text style={styles.statLabel}>Posts</Text>
          </View>
          <View style={styles.stat}>
            <Text style={styles.statValue}>500</Text>
            <Text style={styles.statLabel}>Followers</Text>
          </View>
          <View style={styles.stat}>
            <Text style={styles.statValue}>200</Text>
            <Text style={styles.statLabel}>Following</Text>
          </View>
        </View>
        <Text style={styles.bio}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam vel magna sit amet lacus faucibus vulputate.
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
    marginTop: 16,
  },
  editProfileButton: {
    backgroundColor: '#fff',
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: '#ddd',
  },
  editProfileButtonText: {
    fontWeight: 'bold',
    fontSize: 14,
  },
  username: {
    fontWeight: 'bold',
    fontSize: 16,
  },
  settingsButton: {
    backgroundColor: '#fff',
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: '#ddd',
  },
  settingsButtonIcon: {
    width: 24,
    height: 24,
  },
  profileInfo: {
    alignItems: 'center',
    marginVertical: 16,
  },
  avatarContainer: {
    borderWidth: 1,
    borderColor: '#ddd',
    padding: 5,
    borderRadius: 75,
  },
  avatar: {
    width: 150,
    height: 150,
    borderRadius: 75,
  },
  statsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginVertical: 16,
  },
  stat: {
    alignItems: 'center',
  },
  statValue: {
    fontWeight: 'bold',
    fontSize: 16,
  },
  statLabel: {
    fontSize: 14,
    color: '#888',
  },
  bio: {
    fontSize: 14,
    textAlign: 'center',
    paddingHorizontal: 16,
    color: '#333',
  },
});
