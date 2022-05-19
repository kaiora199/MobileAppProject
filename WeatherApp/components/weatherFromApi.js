import React, { useEffect, useState } from 'react';
import {View, Text, StyleSheet, TouchableOpacity, Modal, Button, TextInput} from 'react-native';
import {db} from '../firebase';
import TopNav from './topNav';
import { collection, getDocs, getDoc, query, where, doc, deleteDoc,addDoc,orderBy} from "firebase/firestore";
import { getLocation } from '../API/API';

const WeatherLinesFromApi = props =>{
  const [data, setData] = useState(null)
  const [location, setLocation] =useState({input: "", isLoading: false})

  const saveLocationSearch = () =>{
    setLocation({input: props.uLoc, isLoading: true})
  }

  
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

    return( 
      <Modal visible={props.wApiVis} animationType='slide'  transparent={true}>
        <View style={styles.spacer}></View> 
        <View style={styles.weatherCont} onLayout={saveLocationSearch}>
          {location.isLoading && <View style={styles.dataCont}>
          <Text style={styles.textLine}>Loading...</Text>
          </View>}
        {!location.isLoading && data !== null && data.name && (
        <View style={styles.dataCont}>
          <Text style={styles.textLine}>{data.name}</Text>
          {data.weather.length > 0 && <Text style={styles.textLine}>{data.weather[0].main}</Text>}
          <Text style={styles.textLine}>Temperature:   {Math.floor(data.main.temp - 273.15)}°C</Text>
          <Text style={styles.textLine}>Feels like:   {Math.floor(data.main.feels_like - 273.15)}°C</Text>
          <Text style={styles.textLine}>Wind speed:   {data.wind.speed} m/s</Text>
          </View>)}
          {!location.isLoading && data !== null && data.message && (
          <View style={styles.dataCont}>
          <Text>{data.message}</Text>
          </View>)}
        <View style={styles.buttonContainer}>
            <Button onPress={props.closeWApi} title="Close this view" color="#c4c4c4"></Button>
        </View>
        </View>
    </Modal>
  )
};

const styles = StyleSheet.create({
  weatherCont:{
    flex: 1,
    flexDirection: 'column',
    width: 400,
    padding:10,
    alignContent: 'center',
    justifyContent: 'space-around',
    alignSelf: 'center',
    backgroundColor: '#ffce94',
    borderRadius: 5,
    borderWidth: 0.5,
    marginTop: 5,
    marginBottom: 5,
  },
  weathTextField:{
      borderWidth: 1,
      padding: 10,
  },
  spacer:{
    flex:0.1
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
    flex: 0.4,
    flexDirection: 'column',
    alignContent: 'space-around',
    justifyContent: 'space-around',
    flexWrap: 'wrap',
    backgroundColor: '#e2d2ba',
    borderRadius: 5,
    borderWidth: 0.5
  },
  topNavContainer:{
    flex: 0.1,
    flexDirection: 'row',
    width: 400,
    padding:10,
    alignContent: 'space-around',
    justifyContent: 'space-between',
    alignSelf: 'center',
    backgroundColor: '#ffce94',
    borderRadius: 5
  },
  textLine:{
    alignSelf: 'center',
      padding: 10
  },
});

export default WeatherLinesFromApi;