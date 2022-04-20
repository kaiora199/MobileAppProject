import React, {useState, useEffect} from 'react';
import {View, Text, StyleSheet, TouchableOpacity, Modal, Button, TextInput, FlatList, Pressable} from 'react-native';
import OneComplaint from './oneComplaint';
import {db} from '../firebase';
import { collection, getDocs, getDoc, query, where, doc, deleteDoc, orderBy} from "firebase/firestore"; 

const WeatherComplain = props =>{
const [savedText, saveNewText] = useState(['']);
const [savedSearch, saveNewSearch] = useState('');
const capitalSearch = savedSearch.charAt(0).toUpperCase() + savedSearch.slice(1);
const inputHandlerSearch = (inputFromUser) => {
  saveNewSearch(inputFromUser);
}

  async function queryForDocuments() {
    const messageQuery = query(collection(db,'/Messages'),orderBy('time','desc'));
      const msgList = [];
      const querySnapshot = await getDocs(messageQuery);
      const allDocs = querySnapshot.forEach((snap) =>{
      const temperature = snap.data().temperature
      const time = snap.data().time.toDate().toString()
      const feelsLike = snap.data().feelsLike
      const wind = snap.data().wind
      const description = snap.data().description
      const comment = snap.data().comment;
      const location = snap.data().location;
        const uid = snap.id;    
        msgList.push([comment,location,uid,temperature,feelsLike,wind,description, time]);
    }
      );
      saveNewText(msgList);
  }

  async function searchByCity() {
    const messageQuery = query(collection(db,'/Messages'),where("location","==",capitalSearch));
      const msgList = [];
      const querySnapshot = await getDocs(messageQuery);
      const allDocs = querySnapshot.forEach((snap) =>{
      const temperature = snap.data().temperature
      const time = snap.data().time.toDate().toString()
      const feelsLike = snap.data().feelsLike
      const wind = snap.data().wind
      const description = snap.data().description
      const comment = snap.data().comment;
      const location = snap.data().location;
        const uid = snap.id;    
        msgList.push([comment,location,uid,temperature,feelsLike,wind,description, time]);
    }
      );
      saveNewText(msgList);
  }

    return( 
  <Modal visible={props.wCompVis} animationType='slide'  transparent={true}>
    <View onLayout={queryForDocuments} style={styles.spacer}></View> 
    <View style={styles.weatherCont}>
    <Text style={styles.textLine}>You can delete posts by clicking them!</Text>
        <View style={styles.searchCont}>
        <TextInput autoCapitalize='words' onChangeText={inputHandlerSearch} value={savedSearch} placeholder="Search for location" style={styles.weatherSearch}></TextInput>
        <Pressable onPress={searchByCity} style={styles.searchButton}>
          <Text>Search</Text>
        </Pressable>
        </View>
        <Pressable style={styles.refresher} onPress={queryForDocuments}>
          <Text style={styles.textLine}>Refresh complaints</Text>
        </Pressable>
      <FlatList 
          style={styles.complainers}
          keyGetter={(item)=> item.id}
          data={savedText}
          renderItem={({item})=>(
            <OneComplaint
            key={item.id}
            data={item}
            dbq={queryForDocuments}
            />
      )}> </FlatList>
      <Pressable onPress={props.closeComp} style={styles.buttonContainer}>
        <Text style={styles.textLine}>Close this view</Text>
      </Pressable>
    </View>
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
        justifyContent: 'center',
        alignSelf: 'center',
        backgroundColor: '#ffce94',
        borderRadius: 5,
        borderWidth: 0.5,
        marginTop: 5,
        marginBottom: 5,
      },
      buttonContainer:{
        width:300,
        backgroundColor: '#e2d2ba',
        padding:10,
        alignContent: 'center',
        justifyContent: 'center',
        alignSelf: 'center',
        borderRadius: 5,
        margin:5,
      },
      spacer:{
        flex:0.1
      },
      complainers:{
        flex: 1,
        flexDirection: 'column',
        alignContent: 'center',
        borderWidth: 1,
        borderRadius: 5,
        marginTop: 5,
        backgroundColor: '#e2d2ba',
      },
      textLine:{
        alignSelf: 'center',
      },
      weatherSearch:{
        width:200,
        backgroundColor: '#ffffff',
        alignSelf: 'center',
        borderRadius: 5,
        borderWidth: 0.5,
        padding:5,
      },
      searchCont:{
        justifyContent: 'center',
        flexDirection:"row",
        margin: 5,
        padding: 5,
      },
      searchButton:{
        backgroundColor: '#e2d2ba',
        padding: 5,
        borderRadius: 5,
        marginLeft: 5
      },
      refresher:{
        width:300,
        backgroundColor: '#e2d2ba',
        padding:10,
        alignContent: 'center',
        justifyContent: 'center',
        alignSelf: 'center',
        borderRadius: 5,
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
});

export default WeatherComplain;