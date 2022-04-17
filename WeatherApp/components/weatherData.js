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
    const cb = setTimeout(()=>{
      getLocation(location.input).then(data => {
        setData(data)
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
    saveNewTemp(data.main.temp)
    saveNewFeels(data.main.feels_like)
    saveNewWind(data.wind.speed)
    saveNewDesc(data.weather[0].main)
    console.log(savedLocation+" "+savedTemp+" "+savedFeels+" "+savedWind+" "+savedDesc)

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
    description: savedDesc
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
      <Text>{data.main.temp}</Text>
      <Text>{data.main.feels_like}</Text>
      <Text>{data.wind.speed}</Text>
      </View>)}
      {!location.isLoading && data !== null && data.message && (
      <View style={styles.dataCont}>
      <Text>{data.message}</Text>
      </View>)}
      
            <TextInput style={styles.weathTextField}
    placeholder='Your location' onChange={(e)=>setLocation({input: e.target.value, isLoading: true})} value={location.input}/>
                <TextInput style={styles.weathTextField}
    placeholder='Type your review'
    value={savedComment}
    onChangeText={inputHandlerComment}/>
    <View style={styles.buttonContainer}>
        <Button onPress={makeComment} title="Post comment" color="#c4c4c4"></Button>
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
        width: 450,
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