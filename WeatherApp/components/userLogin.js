import React, {useState} from 'react';
import {View, Text, StyleSheet, TouchableOpacity, Modal, Button, TextInput} from 'react-native';
import {auth} from '../firebase'

const UserLog = props =>{
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const handleSignup = () => {
      auth
      .createUserWithEmailAndPassword(email, password)
      .then(userCredentials => {
        const user = userCredentials.user;
        console.log(user.email);
      })
      .catch(error => alert(error.message));
    }


    return( 
    <View style={styles.userLoginCont}>
            <TextInput style={styles.userTextFieltd}
              value={email}
              onChangeText={text => setEmail(text)}
              placeholder='Email'/>
            <TextInput style={styles.userTextFieltd}
              value={password}
              onChangeText={text => setPassword(text)}
              placeholder='Password'/>
    <View style={styles.buttonContainer}>
        <Button title="Log In" color="#c4c4c4"></Button>
        <Button onPress={handleSignup}
                title="Sign Up" 
                color="#c4c4c4">
        </Button>
    </View>
    </View>
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
      }
});

export default UserLog;