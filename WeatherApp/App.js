import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Modal} from 'react-native';
import React, {useState, useEffect} from 'react';
import TopNav from './components/topNav'
import BotNav from './components/botNav'
import UserLog from './components/userLogin'
import WeatherLines from './components/weatherData';
import WeatherLinesFromApi from './components/weatherFromApi';
import WeatherComplain from './components/weatherComplaints'
import FrontSquare from './components/frontSquare'
import {data} from './components/userLogin'
import {db} from './firebase';
import { collection, getDocs, getDoc, query, where, doc, deleteDoc,addDoc,orderBy} from "firebase/firestore";

export default function App() {
  const [isLoginOpen, openLogin] = useState(false)
  const [isWDataOpen, openWData] = useState(false)
  const [isWFromApiOpen, openWFromApi] = useState(false)
  const [isCompOpen, openComplaints] = useState(false)
  const [userEmail, setUEmail] = useState(' ');
  const [uLoc, setULoc] = useState(' ');

  const closeLogIn = () =>{
    openLogin(false)
  }
  const closeWeatherData = () =>{
    openWData(false)
  }
  const closeWeatherFromApi = () =>{
    openWFromApi(false)
  }
  const closeWeatherComplaints = () =>{
    openComplaints(false)
  }

  return (
    <View style={styles.container}>
      <TopNav user={userEmail} clearE={setUEmail} uLoc={uLoc} clearUL={setULoc} openLogin={openLogin}/>
      <FrontSquare
      openLogin={openLogin}
      openComplainer={openWData}
      openWeather={openWFromApi}
      openComplaints={openComplaints}
      />
      <UserLog logInVis={isLoginOpen} closeLogIn={closeLogIn} setE={setUEmail} setUL={setULoc}></UserLog>
      <WeatherLines wDataVis={isWDataOpen} closeWData={closeWeatherData}></WeatherLines>
      <WeatherLinesFromApi uLoc={uLoc} wApiVis={isWFromApiOpen} closeWApi={closeWeatherFromApi}></WeatherLinesFromApi>
      <WeatherComplain wCompVis={isCompOpen} closeComp={closeWeatherComplaints}></WeatherComplain>
      </View>
  );}
      
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#e2d2ba',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
});
