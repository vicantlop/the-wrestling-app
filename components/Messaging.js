import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, FlatList, Image } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const Messaging = () => {
  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState([
    {
      id: '1',
      sender: 'me',
      text: 'Hey! How are you doing?',
      time: '10:15 AM',
      isSeen: true,
    },
    {
      id: '2',
      sender: 'them',
      text: 'I am doing great. Thanks for asking!',
      time: '10:20 AM',
      isSeen: true,
    },
    {
      id: '3',
      sender: 'me',
      text: 'That\'s great to hear!',
      time: '10:22 AM',
      isSeen: false,
    },
    {
      id: '4',
      sender: 'me',
      text: 'How\'s your day been so far?',
      time: '10:25 AM',
      isSeen: false,
    },
    {
      id: '5',
      sender: 'them',
      text: 'It\'s been pretty good. Just busy with work.',
      time: '10:30 AM',
      isSeen: false,
    },
  ]);

  const handleInputChange = (text) => {
    setMessage(text);
  };

  const handleSendMessage = () => {
    if (message.trim() === '') {
      return;
    }
    const newMessage = {
      id: `${messages.length + 1}`,
      sender: 'me',
      text: message,
      time: new Date().toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'}),
      isSeen: false,
    };
    setMessages([...messages, newMessage]);
    setMessage('');
  };

  const renderItem = ({ item }) => (
    <View style={[styles.messageContainer, { alignSelf: item.sender === 'me' ? 'flex-end' : 'flex-start' }]}>
      <View style={[styles.messageBubble, { backgroundColor: item.sender === 'me' ? '#007AFF' : '#EAEAEA' }]}>
        <Text style={[styles.messageText, { color: item.sender === 'me' ? '#fff' : '#000' }]}>{item.text}</Text>
        <Text style={[styles.messageTime, { color: item.sender === 'me' ? '#fff' : '#6E6E6E' }]}>{item.time}</Text>
        {item.sender === 'me' && (
          <Ionicons name={item.isSeen ? 'checkmark-done-sharp' : 'checkmark-done-outline'} size={20} color="#fff" style={{ marginLeft: 5 }} />
        )}
      </View>
    </View>
  );

  return (
    <View style={styles.container}>
      <FlatList
        style={styles.messagesContainer}
        data={messages}
        keyExtractor={(item) => item.id}
        renderItem={renderItem}
        inverted
      />
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Message"
          value={message}
          onChangeText={handleInputChange}
          onSubmitEditing={handleSendMessage}
        />
        <TouchableOpacity style={styles.sendButton} onPress={handleSendMessage}>
          <Ionicons name="send-sharp" size={24} color="#007AFF" />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#f5f5f5',
    },
    inputContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: 'white',
        paddingHorizontal: 20,
        paddingVertical: 10,
        borderTopWidth: StyleSheet.hairlineWidth,
        borderTopColor: '#e5e5e5',
      },
      input: {
        flex: 1,
        height: 40,
        backgroundColor: '#f2f2f2',
        borderRadius: 20,
        paddingHorizontal: 16,
        marginRight: 10,
      },
      sendButton: {
        backgroundColor: '#f2f2f2',
        borderRadius: 20,
        padding: 10,
      },
      messageContainer: {
        flexDirection: 'row',
        alignItems: 'flex-end',
        marginBottom: 10,
      },
      leftContainer: {
        justifyContent: 'flex-end',
      },
      rightContainer: {
        justifyContent: 'flex-end',
      },
      avatar: {
        width: 32,
        height: 32,
        borderRadius: 16,
        marginRight: 8,
      },
      messageBubble: {
        maxWidth: '80%',
        paddingVertical: 10,
        paddingHorizontal: 12,
        borderRadius: 20,
      },
      leftBubble: {
        backgroundColor: '#f2f2f2',
        borderBottomLeftRadius: 0,
      },
      rightBubble: {
        backgroundColor: '#007aff',
        borderBottomRightRadius: 0,
      },
      messageText: {
        fontSize: 16,
        lineHeight: 20,
        color: 'black',
      },
      messageTime: {
        fontSize: 12,
        marginTop: 5,
        color: 'gray',
      },
      leftTime: {
        textAlign: 'left',
      },
      rightTime: {
        textAlign: 'right',
      },
      messageIcon: {
        position: 'absolute',
        bottom: 5,
        right: 5,
      },
    });
    
    export default Messaging;
    