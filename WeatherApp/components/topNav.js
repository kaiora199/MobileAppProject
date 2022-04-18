import React, {useState} from 'react';
import {View, Text, StyleSheet, TouchableOpacity, Modal, Button} from 'react-native';
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { auth } from '../firebase';




const TopNav = props =>{

   
    const LogOut = () => {
        auth
        .signOut()
        console.log('Signed out')
        props.clearE(' ');
        props.clearUL('')
    }



    return( 
    <View style={styles.topNavContainer}>
        <Button title="Home" color="#ffce94"></Button>
        <TouchableOpacity onPress={LogOut}>
            <Text>{props.user}</Text>
            <Text>{props.uLoc}</Text>
            <Text>Click to logout</Text>

        </TouchableOpacity>
        <Button title="Logo" color="#ffce94"></Button>
    </View>
  )
};

const styles = StyleSheet.create({
    topNavContainer:{
        flex: 0.1,
        flexDirection: 'row',
        width: 500,
        padding:10,
        alignContent: 'space-around',
        justifyContent: 'space-between',
        alignSelf: 'center',
        marginTop: 10,
        backgroundColor: '#ffce94',
        borderRadius: 5
      },
});

export default TopNav;