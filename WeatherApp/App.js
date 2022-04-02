import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, Button, ScrollView,FlatList, Image } from 'react-native';
import React, {useState, useEffect} from 'react';
import TopNav from './components/topNav'
import BotNav from './components/botNav'
import UserLog from './components/userLogin'
import WeatherLines from './components/weatherData';
import WeatherLinesFromApi from './components/weatherFromApi';

export default function App() {
  const [isLoginOpen, openLogin] = useState(false);
  const [isWDataOpen, openWData] = useState(false)
  const [isWFromApiOpen, openWFromApi] = useState(false)
  const closeLogIn = () =>{
    openLogin(false)
  }
  const closeWeatherData = () =>{
    openWData(false)
  }
  const closeWeatherFromApi = () =>{
    openWFromApi(false)
  }
  return (
    <View style={styles.container}>
      <TopNav></TopNav>
      <UserLog logInVis={isLoginOpen} closeLogIn={closeLogIn}></UserLog>
      <Button title="login" onPress={()=>openLogin(true)}></Button>
      <Button title="weather data" onPress={()=>openWData(true)}></Button>
      <Button title="weather api" onPress={()=>openWFromApi(true)}></Button>
      <WeatherLines wDataVis={isWDataOpen} closeWData={closeWeatherData}></WeatherLines>
      <WeatherLinesFromApi wApiVis={isWFromApiOpen} closeWApi={closeWeatherFromApi}></WeatherLinesFromApi>
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
