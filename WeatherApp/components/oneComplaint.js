import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity, Modal, Button, TextInput} from 'react-native';
import TopNav from './topNav';
import BotNav from './botNav';

const OneComplaint = props =>{
    return( 
      <View style={styles.complainCont}>
      <Text>Weather data location</Text>
      <Text>Weather data comment</Text>
      <Text>Forecast data</Text>
      <Text>Weather data line3</Text>
      <Text>Weather data line4</Text>
      <Text>Weather data line5</Text>
      <Text>Weather data line6</Text>
      <Text>user email/name</Text>
      <Text>comment id</Text>
      <Text>Weather comment date</Text>
      </View>
  )
};

const styles = StyleSheet.create({
      complainCont:{
        flex: 0.3,
        flexDirection: 'column',
        alignContent: 'center',
        alignSelf: 'center',
        flexWrap: 'wrap',
        borderWidth: 1,
        borderRadius: 5,
        padding:10,
        width: 350 
      }
});

export default OneComplaint;