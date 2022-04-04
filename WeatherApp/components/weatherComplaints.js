import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity, Modal, Button, TextInput} from 'react-native';
import TopNav from './topNav';
import BotNav from './botNav';

const WeatherComplain = props =>{
    return( 
      <Modal visible={props.wCompVis} animationType='slide'  transparent={true}>
        <TopNav></TopNav>
    <View style={styles.weatherCont}>
      <View style={styles.complainCont}>
      <Text>Weather data location</Text>
      <Text>Weather data comment</Text>
      <Text>Weather data line3</Text>
      <Text>Weather data line4</Text>
      <Text>Weather comment date</Text>
      </View>
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
      weathTextField:{
          borderWidth: 1,
          padding: 10
      },
      buttonContainer:{
          flex: 0.3,
        justifyContent: 'space-around'
      },
      complainCont:{
        flex: 1,
        flexDirection: 'column',
        alignContent: 'center',
        flexWrap: 'wrap',
        borderWidth: 0.1,
        borderRadius: 5,
      }
});

export default WeatherComplain;