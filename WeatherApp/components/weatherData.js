import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity, Modal, Button, TextInput} from 'react-native';

const WeatherLines = props =>{
    return( 
      <Modal visible={props.wDataVis} animationType='slide'>
    <View style={styles.weatherCont}>
      <View style={styles.dataCont}>
      <Text>Weather data line1</Text>
      <Text>Weather data line2</Text>
      <Text>Weather data line3</Text>
      <Text>Weather data line4</Text>
      <Text>Weather data line5</Text>
      <Text>Weather data line6</Text>
      <Text>Weather data line7</Text>
      <Text>Weather data line8</Text>
      </View>
            <TextInput style={styles.weathTextField}
    placeholder='Your location'/>
                <TextInput style={styles.weathTextField}
    placeholder='Type your review'/>
    <View style={styles.buttonContainer}>
        <Button onPress={props.closeWData} title="Post comment" color="#c4c4c4"></Button>
    </View>
    </View>
    </Modal>
  )
};

const styles = StyleSheet.create({
    weatherCont:{
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