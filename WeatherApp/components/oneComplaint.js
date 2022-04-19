import React from 'react';
import {View, Text, StyleSheet, Pressable, Modal, Button, TextInput} from 'react-native';
import TopNav from './topNav';
import BotNav from './botNav';
import {db} from '../firebase'
import { collection, getDocs, getDoc, query, where, doc, deleteDoc} from "firebase/firestore"; 


const OneComplaint = props =>{

  console.log(props)
  let uidi = props.data[2]
  const msgRef = collection(db, "Messages")
  const docRef = doc(db, "Messages", `${uidi}`);

  async function deleteComment(){
    await deleteDoc(docRef);
  }


  //console.log(props)
  return( 
    <Pressable style={styles.complainCont} onPress={deleteComment}>
      <View>
          <View>
      <Text>
            Location: {props.data[1]}
      </Text>
      <Text>
            Description: {props.data[6]} 
      </Text>
      <Text>
            Temperature: {props.data[3]} 
      </Text>
      <Text>
            Feels like: {props.data[4]} 
      </Text>
      <Text>
            Wind speed: {props.data[5]} 
      </Text>
      </View>
      <View style={styles.complaint}>
      <Text>
            Comment: {props.data[0]}
      </Text>
      </View>
      </View>
    </Pressable>


  )
};

const styles = StyleSheet.create({
      complainCont:{
        flex: 1,
        flexDirection: 'column',
        alignContent: 'center',
        alignSelf: 'center',
        justifyContent: 'space-around',
        borderWidth: 1,
        borderRadius: 5,
        padding:10,
        width: 380, 
        margin: 3,
        backgroundColor: '#ffce94',
      },
      complaint:{
        flex: 1,
        flexWrap: 'nowrap'
      }
});

export default OneComplaint;