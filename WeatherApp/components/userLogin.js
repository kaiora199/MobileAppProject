import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity, Modal, Button, TextInput} from 'react-native';
import TopNav from './topNav';
import BotNav from './botNav';

const UserLog = props =>{
    return(
      <Modal visible={props.logInVis} animationType='slide' transparent={true}>
        <TopNav></TopNav>
    <View style={styles.userLoginCont}>
            <TextInput style={styles.userTextFieltd}
    placeholder='UserName'/>
                <TextInput style={styles.userTextFieltd}
    placeholder='Password'/>
    <View style={styles.buttonContainer}>
        <Button title="Log In" color="#c4c4c4"></Button>
        <Button title="Sign Up" color="#c4c4c4" onPress={props.closeLogIn}></Button>
    </View>
    </View>
    <BotNav></BotNav>
    </Modal>
  )
};

const styles = StyleSheet.create({
    userLoginCont:{
        flex: 0.8,
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
      userTextFieltd:{
          borderWidth: 1,
          padding: 10
      },
      buttonContainer:{
          flex: 0.3,
        justifyContent: 'space-around'
      },
});

export default UserLog;