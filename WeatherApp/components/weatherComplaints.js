import React, {useState, useEffect} from 'react';
import {View, Text, StyleSheet, TouchableOpacity, Modal, Button, TextInput, FlatList} from 'react-native';
import TopNav from './topNav';
import BotNav from './botNav';
import OneComplaint from './oneComplaint';
import {db} from '../firebase';
import { collection, getDocs, query} from "firebase/firestore"; 

const WeatherComplain = props =>{
const [savedText, saveNewText] = useState(['']);

  
  async function queryForDocuments() {
    const messageQuery = query(
      collection(db,'/Messages')
      );
      
      const msgList = [];
      const querySnapshot = await getDocs(messageQuery);
      /*console.log(querySnapshot);
      const docs = querySnapshot.map((snap) => {
        return [snap.data().comment, snap.data().location, snap.id()];
      
      }) 
      savedText(docs)*/
      

      const allDocs = querySnapshot.forEach((snap) =>{
      console.log(snap.data());
      const comment =snap.data().comment;
      const location = snap.data().location;

        const uid = snap.id; 
   
        msgList.push([comment,location,uid]);


      }
  
      );
      saveNewText(msgList);
  }
 
console.log(savedText)



    return( 
      <Modal visible={props.wCompVis} animationType='slide'  transparent={true}>
        <TopNav></TopNav>
    <View style={styles.weatherCont}>
      <View style={styles.searchCont}>
        <TextInput placeholder="Search for lokkaatio" style={styles.weatherSearch}></TextInput>
        <TouchableOpacity><Text>Search</Text></TouchableOpacity>

      </View>
      <Button onPress={queryForDocuments}> </Button>
      <FlatList 
          style={styles.complainers}
          keyGetter={(item)=> item.id}
          data={savedText}
          renderItem={({item})=>(
            <OneComplaint key={item.id}
            data={item}/>
      )}> </FlatList>
    <View style={styles.buttonContainer}>
        <Button onPress={props.closeComp} title="Close this view" color="#c4c4c4"></Button>
    </View>
    </View>
    <BotNav></BotNav>
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
        marginTop: 10,
        backgroundColor: '#ffce94',
        borderRadius: 5,
        borderWidth: 0.5
      },
      weathTextField:{
          borderWidth: 1,
          padding: 10
      },
      buttonContainer:{
          flex: 0.3,
        justifyContent: 'space-around'
      },
      complainers:{
        flex: 1,
        flexDirection: 'column',
        alignContent: 'center',
        flexWrap: 'wrap',
        borderWidth: 1,
        borderRadius: 5,
        margin:10
      },
      weatherSearch:{
        width:300,
        backgroundColor: '#ffffff',
        alignSelf: 'center',
        borderRadius: 5,
        borderWidth: 0.5,
        padding:5
      },
      searchCont:{
        flexDirection: 'row',
        padding:5,
      }
});

export default WeatherComplain;