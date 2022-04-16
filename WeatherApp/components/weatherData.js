import React, {useState} from 'react';
import {View, Text, StyleSheet, TouchableOpacity, Modal, Button, TextInput} from 'react-native';
import TopNav from './topNav';
import BotNav from './botNav';
import { doc,getFirestore, setDoc, push, get, ref ,addDoc, collection } from "firebase/firestore";
import {db} from '../firebase'

const WeatherLines = props =>{
  const [comment, saveNewComment] = useState(' ');
  const [location, setNewLocation] = useState(' ');

  const inputHandlerComment = (inputFromUser) => {
    saveNewComment(inputFromUser);
  }    
  const inputHandlerLocation = (inputFromUser) => {
    setNewLocation(inputFromUser);
  }




  const postMessage = collection(db, '/Messages/');
  async function addNewComment(location, comment) {
    const newDoc = await addDoc(postMessage, {
      location: location,
      comment: comment
    })
  }

  const textClearHandler = () =>{
    addNewComment(location, comment)
    saveNewComment(' ')
    setNewLocation(' ')
    props.closeWData()             
  }






    return( 
      <Modal visible={props.wDataVis} animationType='slide'  transparent={true}>
        <TopNav></TopNav>
    <View style={styles.weatherCont}>
      <View style={styles.dataCont}>
      <Text>location</Text>
      <Text>weather.main</Text>
      <Text>main.temp</Text>
      <Text>main.feels_like</Text>
      <Text>wind</Text>
      <Text>clouds</Text>
      </View>
          <Text style={styles.textLine}>Location</Text>
            <TextInput style={styles.weathTextField}
    placeholder='location'
    onChangeText={inputHandlerLocation}
    value={location}
    />
                <TextInput style={styles.weathTextField}
    placeholder='comment'
    onChangeText={inputHandlerComment}
    value={comment}
    />
    <View style={styles.buttonContainer}>
        <Button onPress={textClearHandler} title="Post comment" color="#c4c4c4"></Button>
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