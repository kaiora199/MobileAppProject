import React, {useState} from 'react';
import {View, Text, StyleSheet, TouchableOpacity, Modal, Button, TextInput} from 'react-native';
import TopNav from './topNav';
import BotNav from './botNav';
import {auth} from '../firebase';
import { getAuth,createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";

const UserLog = props =>{
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [uLoc, setULoc] = useState("")

    const handleSignup = () => {
      auth
      createUserWithEmailAndPassword(auth, email, password)
      .then(userCredentials => {
        const user = userCredentials.user;
        console.log(user.email);
      })
      .catch(error => alert(error.message));
    }

    const handleLogin = () => {
      signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          // Signed in 
          const user = userCredential.user;
          console.log(user.email);
          // ...
          props.setE(email);
          handleLocation()
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
      });
      props.closeLogIn();
    }
    const handleLocation = () =>{
      props.setUL(uLoc)
    }
     
     

    
    return( 
<Modal visible={props.logInVis} animationType='slide' transparent={true}>
<TopNav/>
    <View style={styles.userLoginCont}>
            <TextInput style={styles.userTextFieltd}
              value={email}
              onChangeText={text => setEmail(text)}
              placeholder='Email'/>
            <TextInput style={styles.userTextFieltd}
              value={password}
              onChangeText={text => setPassword(text)}
              placeholder='Password'/>
            <TextInput style={styles.userTextFieltd}
              value={uLoc}
              onChangeText={text => setULoc(text)}
              placeholder='Your location'/>
    <View style={styles.buttonContainer}>

        <Button onPress={handleLogin} 
                title="Log In" 
                color="#c4c4c4">
        </Button>
        <Button onPress={handleSignup}
                title="Sign Up" 
                color="#c4c4c4">
        </Button>
        <Button onPress={props.closeLogIn}
                title="Continue as a quest" 
                color="#c4c4c4">
        </Button>
    </View>
    </View>
    <BotNav/>
    </Modal>
  )
};

const styles = StyleSheet.create({
    userLoginCont:{
        flex: 0.8,
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