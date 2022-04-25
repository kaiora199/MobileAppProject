import React, {useState} from 'react';
import {View, Text, StyleSheet, Pressable, Modal, Button} from 'react-native';
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
            {props.user !== ' ' && <Pressable
            onPress={LogOut}
            style={({ pressed }) => [
            {
                backgroundColor: pressed
                ? '#f2e1c7'
                : '#e2d2ba'
            },
            styles.userCont
            ]}>
    <Text>{props.user}</Text>
    <Text>{props.uLoc}</Text>
    <Text>Click to logout</Text>
            </Pressable>}

            {props.user === ' ' && <Pressable
            onPress={props.openLogin}
            style={({ pressed }) => [
            {
                backgroundColor: pressed
                ? '#f2e1c7'
                : '#e2d2ba'
            },
            styles.userCont2
            ]}>
    <Text>Log in</Text>
            </Pressable>}
        <Button title="Logo" color="#ffce94"></Button>
    </View>
  )
};

const styles = StyleSheet.create({
    topNavContainer:{
        flex: 0.1,
        flexDirection: 'row',
        width: 420,
        padding:10,
        marginTop: 10,
        alignContent: 'center',
        alignItems:'center',
        justifyContent: 'space-around',
        alignSelf: 'center',
        backgroundColor: '#ffce94',
        borderRadius: 5
      },
      userCont:{
          padding:5,
          borderRadius: 10,
          alignContent: 'center',
          alignItems:'center',
          justifyContent: 'space-around',
          alignSelf: 'center',
      },
      userCont2:{
        width: 100,
        padding:20,
        borderRadius: 10,
        alignContent: 'center',
        alignItems:'center',
        justifyContent: 'space-around',
        alignSelf: 'center',
    }
});

export default TopNav;