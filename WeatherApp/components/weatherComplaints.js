import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity, Modal, Button, TextInput, ScrollView} from 'react-native';
import TopNav from './topNav';
import BotNav from './botNav';
import OneComplaint from './oneComplaint';

const WeatherComplain = props =>{
    return( 
      <Modal visible={props.wCompVis} animationType='slide'  transparent={true}>
        <TopNav></TopNav>
    <View style={styles.weatherCont}>
    <TextInput placeholder="Search for lokkaatio" style={styles.weatherSearch}></TextInput>
      <ScrollView style={styles.complainers} showsVerticalScrollIndicator={false}>
      <OneComplaint></OneComplaint>
      <OneComplaint></OneComplaint>
      <OneComplaint></OneComplaint>
      <OneComplaint></OneComplaint>
      <OneComplaint></OneComplaint>
      <OneComplaint></OneComplaint>
      </ScrollView>
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
      }
});

export default WeatherComplain;