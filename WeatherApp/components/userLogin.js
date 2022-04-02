import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity, Modal, Button, TextInput} from 'react-native';

const UserLog = props =>{
    return( 
      <Modal visible={props.logInVis} animationType='slide' style={styles.backGround}>
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
    </Modal>
  )
};

const styles = StyleSheet.create({
    userLoginCont:{
        flex: 0.5,
        flexDirection: 'column',
        width: 400,
        padding:10,
        alignContent: 'center',
        justifyContent: 'space-around',
        alignSelf: 'center',
        marginTop: 10,
        backgroundColor: '#ffce94',
        borderRadius: 5,
        borderWidth: 1
      },
      userTextFieltd:{
          borderWidth: 1,
          padding: 10
      },
      buttonContainer:{
          flex: 0.3,
        justifyContent: 'space-around'
      },
      backGround:{
        backgroundColor:'#ffce94'
      }
});

export default UserLog;