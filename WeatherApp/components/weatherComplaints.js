import React, {useState, useEffect} from 'react';
import {View, Text, StyleSheet, TouchableOpacity, Modal, Button, TextInput, FlatList, Pressable} from 'react-native';
import TopNav from './topNav';
import BotNav from './botNav';
import OneComplaint from './oneComplaint';
import {db} from '../firebase';
import { collection, getDocs, getDoc, query, where, doc, deleteDoc} from "firebase/firestore"; 

const WeatherComplain = props =>{
const [savedText, saveNewText] = useState(['']);
const [savedSearch, saveNewSearch] = useState('');
const [oldRes, newRes] = useState([]);

const inputHandlerSearch = (inputFromUser) => {
  saveNewSearch(inputFromUser);
}
 


  
  async function queryForDocuments() {
    const messageQuery = query(
      collection(db,'/Messages')
      );
      
      const msgList = [];
      const querySnapshot = await getDocs(messageQuery);
      const allDocs = querySnapshot.forEach((snap) =>{
      //console.log(querySnapshot);
      const comment =snap.data().comment;
      const location = snap.data().location;

        const uid = snap.id;    
        msgList.push([comment,location,uid]);
    }
      );
      saveNewText(msgList);
  }

    return( 
      <Modal visible={props.wCompVis} animationType='slide'  transparent={true}>
        <TopNav></TopNav>
    <View style={styles.weatherCont}>
    <Text style={styles.textLine}>You can delete posts by clicking them!</Text>
        <View style={styles.searchCont}>
        <TextInput onChangeText={inputHandlerSearch} value={savedSearch} placeholder="Search for location" style={styles.weatherSearch}></TextInput>
        <Pressable style={styles.searchButton}>
          <Text>Search</Text>
        </Pressable>
        </View>
        <Pressable style={styles.refresher} onPress={queryForDocuments}>
          <Text style={styles.textLine}>Refresh complaints</Text>
        </Pressable>
      <FlatList
          onLayout={queryForDocuments} 
          style={styles.complainers}
          keyGetter={(item)=> item.id}
          data={savedText}
          renderItem={({item})=>(
            <OneComplaint
            key={item.id}
            data={item}
            dbq={queryForDocuments}
            searchString={savedSearch}/>
      )}> </FlatList>
    <Pressable onPress={props.closeComp} style={styles.buttonContainer}>
        <Text style={styles.textLine}>Close this view</Text>
    </Pressable>
    </View>
    <BotNav></BotNav>
    </Modal>
  )
};

const styles = StyleSheet.create({
    weatherCont:{
        flex: 1,
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
      }
});

export default WeatherComplain;