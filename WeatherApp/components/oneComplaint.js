import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity, Modal, Button, TextInput} from 'react-native';
import TopNav from './topNav';
import BotNav from './botNav';
import {db} from '../firebase'
import { collection, getDocs, query} from "firebase/firestore"; 


const OneComplaint = props =>{



  /*const fetchData =() =>{
    async function getComment() {
    const mySnapshot = await db('/Messages');
    if (mySnapshot.exists()) {
      const docData = mySnapshot.data();
      console.log('data is here');
    }
  }
}*/

/*console.log(props.data)*/

    return( 

      <View>
      <Text>
          {props.data[0]}
      </Text>
      <Text>
          {props.data[1]}
      </Text>
      <Text>
          {props.data[2]}
      </Text>

      </View>


  )
};

const styles = StyleSheet.create({
      complainCont:{
        flex: 0.3,
        flexDirection: 'column',
        alignContent: 'center',
        alignSelf: 'center',
        flexWrap: 'wrap',
        borderWidth: 1,
        borderRadius: 5,
        padding:10,
        width: 350 
      }
});

export default OneComplaint;