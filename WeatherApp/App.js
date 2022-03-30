import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, Button, ScrollView,FlatList, Image } from 'react-native';
import React, {useState, useEffect} from 'react';
import TopNav from './components/topNav'
import BotNav from './components/botNav'
import UserLog from './components/userLogin'

export default function App() {
  return (
    <View style={styles.container}>
      <TopNav></TopNav>
      <UserLog></UserLog>
      <BotNav></BotNav>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#e2d2ba',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
});
