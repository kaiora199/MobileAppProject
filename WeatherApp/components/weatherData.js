import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity, Modal, Button, TextInput} from 'react-native';
import TopNav from './topNav';
import BotNav from './botNav';

const WeatherLines = props =>{
    return( 
      <Modal visible={props.wDataVis} animationType='slide'  transparent={true}>
        <TopNav></TopNav>
    <View style={styles.weatherCont}>
      <View style={styles.dataCont}>
      <Text>location</Text>
      <Text>weather.main</Text>
      <Text>main.temp</Text>
      <Text>main.feels_like</Text>
      <Text>wind</Text>
      <Text>clouds</Text>
      </View>
            <TextInput style={styles.weathTextField}
    placeholder='Your location'/>
                <TextInput style={styles.weathTextField}
    placeholder='Type your review'/>
    <View style={styles.buttonContainer}>
        <Button onPress={props.closeWData} title="Post comment" color="#c4c4c4"></Button>
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
      dataCont:{
        flex: 0.5,
        flexDirection: 'column',
        alignContent: 'space-around',
        flexWrap: 'wrap',
      }
});

export default WeatherLines;