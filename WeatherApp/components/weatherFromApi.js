import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity, Modal, Button, TextInput} from 'react-native';

const WeatherLinesFromApi = props =>{
    return( 
      <Modal visible={props.wApiVis} animationType='slide'>
    <View style={styles.weatherApiCont}>
      <View style={styles.dataApiCont}>
        <Text>Location of weather data</Text>
        <Text>Time when this data was taken</Text>
      <Text>Weather data line1</Text>
      <Text>Weather data line2</Text>
      <Text>Weather data line3</Text>
      <Text>Weather data line4</Text>
      <Text>Weather data line5</Text>
      <Text>Weather data line6</Text>
      <Text>Weather data line7</Text>
      <Text>Weather data line8</Text>
      </View>
    <View style={styles.buttonContainer}>
        <Button onPress={props.closeWApi} title="Review this forecast" color="#c4c4c4"></Button>
        <Button onPress={props.closeWApi} title="Close weather forecast" color="#c4c4c4"></Button>
    </View>
    </View>
    </Modal>
  )
};

const styles = StyleSheet.create({
    weatherApiCont:{
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
        borderWidth: 1
      },
      dataApiCont:{
        flex: 0.6,
        borderRadius: 5,
        borderWidth: 1,
        width: 300,
        padding: 10,
        alignContent: 'center',
        justifyContent: 'space-around',
        alignSelf: 'center',
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

export default WeatherLinesFromApi;