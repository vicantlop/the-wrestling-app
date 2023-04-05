import React, { useState } from 'react';
import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';

const Journal = () => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  const onSavePress = () => {
    console.log(`Title: ${title}, Content: ${content}`);
    // Save the journal entry to a database or local storage
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.titleInput}
        placeholder="Title"
        value={title}
        onChangeText={setTitle}
      />
      <TextInput
        style={styles.contentInput}
        placeholder="Start typing here..."
        value={content}
        onChangeText={setContent}
        multiline={true}
      />
      <TouchableOpacity style={styles.saveButton} onPress={onSavePress}>
        <Text style={styles.saveButtonText}>Save</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
    paddingTop: 20,
    backgroundColor: '#fff',
  },
  titleInput: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  contentInput: {
    fontSize: 16,
    marginBottom: 20,
    textAlignVertical: 'top',
    minHeight: 200,
  },
  saveButton: {
    backgroundColor: '#007AFF',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    alignSelf: 'flex-end',
  },
  saveButtonText: {
    color: '#fff',
    fontSize: 18,
  },
});

export default Journal;

