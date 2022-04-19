import React, { useEffect, useState } from 'react';
import {View, Text, StyleSheet, TouchableOpacity, Modal, Button, TextInput} from 'react-native';
import TopNav from './topNav';
import BotNav from './botNav';
import { getLocation } from '../API/API';
import {db} from '../firebase';
import { collection, getDocs, getDoc, query, where, doc, deleteDoc,addDoc} from "firebase/firestore";


const WeatherLines = props =>{
  const [savedComment, saveNewComment] = useState('');
  const [savedLocation, saveNewLocation] = useState('');
  const [savedTemp, saveNewTemp] = useState('');
  const [savedFeels, saveNewFeels] = useState('');
  const [savedWind, saveNewWind] = useState('');
  const [savedDesc, saveNewDesc] = useState('');
  const [data, setData] = useState(null)
  const [location, setLocation] =useState({input: "", isLoading: false})



  useEffect(()=>{
    setData(null);
    const cb = setTimeout(()=>{

      getLocation(location.input).then(data => {
        if (data.cod === "400" || data.cod === "404") {
          setData(null)
        } else {
          setData(data)
        }
        setLocation({...location, isLoading: false})
      })
    },3000)
    return ()=>{
      clearTimeout(cb)
    }
  },[location.input])
let getSaved = () =>{
  if (data!=null&&!location.isLoading&& data.weather!=null) {
    saveNewLocation(data.name)
    saveNewTemp(Math.floor(data.main.temp - 273.15))
    saveNewFeels(Math.floor(data.main.feels_like - 273.15))
    saveNewWind(data.wind.speed)
    saveNewDesc(data.weather[0].main)

  } else {
    null
  }
}
  const inputHandlerComment = (inputFromUser) => {
    saveNewComment(inputFromUser);
  }
  async function makeComment(){
  await addDoc(collection(db, "Messages"), {
    location: savedLocation,
    comment: savedComment,
    temperature: savedTemp,
    feelsLike: savedFeels,
    wind: savedWind,
    description: savedDesc,
  });
  props.closeWData()
}
  

    return( 
      <Modal visible={props.wDataVis} animationType='slide'  transparent={true}>
        <TopNav></TopNav>
        
    <View style={styles.weatherCont}>
      {location.isLoading && <View style={styles.dataCont}>
      <Text>Loading...</Text>
      </View>}
    {!location.isLoading && data !== null && data.name && (
    <View style={styles.dataCont} onLayout={getSaved}>
      <Text>{data.name}</Text>
      {data.weather.length > 0 && <Text>{data.weather[0].main}</Text>}
      <Text>Temperature:   {Math.floor(data.main.temp - 273.15)}°C</Text>
      <Text>Feels like:   {Math.floor(data.main.feels_like - 273.15)}°C</Text>
      <Text>Wind speed:   {data.wind.speed} m/s</Text>
      </View>)}
      {!location.isLoading && data !== null && data.message && (
      <View style={styles.dataCont}>
      <Text>{data.message}</Text>
      </View>)}
      <Text>Your location</Text>
            <TextInput style={styles.weathTextField}
    placeholder='Your location' onChangeText={(text)=>setLocation({input: text, isLoading: true})} value={location.input}/>
    <Text>Your review</Text>
                <TextInput style={styles.weathTextField}
    placeholder='Type your review'
    value={savedComment}
    onChangeText={inputHandlerComment}/>
    <View style={styles.buttonContainer}>
        <Button disabled={
          data === null } onPress={makeComment} title="Post comment" color="#c4c4c4"></Button>
        <Button onPress={props.closeWData} title="Close this view" color="#c4c4c4"></Button>
    </View>
    </View>
    <BotNav></BotNav>
    </Modal>
  )
};

const styles = StyleSheet.create({
    weatherCont:{
        flex: 0.8,
        flexDirection: 'column',
        width: 400,
        padding:10,
        alignContent: 'center',
        justifyContent: 'space-around',
        alignSelf: 'center',
        marginTop: 10,
        backgroundColor: '#ffce94',
        borderRadius: 5,
        borderWidth: 0.5
      },
      weathTextField:{
          borderWidth: 1,
          padding: 10,

      },
      textLine:{
        alignSelf: 'center',
          padding: 10
      },
      buttonContainer:{
          flex: 0.3,
        justifyContent: 'space-around'
      },
      dataCont:{
        flex: 0.5,
        flexDirection: 'column',
        alignContent: 'space-around',
        flexWrap: 'wrap',
      }
});

export default WeatherLines;