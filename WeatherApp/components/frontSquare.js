import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, Button, ScrollView,FlatList, Image, Pressable, Modal} from 'react-native';
import React, {useState, useEffect} from 'react';



const FrontSquare = props =>{

    

    return(
    <View style={styles.container}>
        <Pressable onPress={()=>props.openLogin(true)} style={({ pressed }) => [
            {
                backgroundColor: pressed
                ? '#f2e1c7'
                : '#ffce94'
            },
            styles.frontSquare
            ]}>
            <Text>Login</Text>
        </Pressable>
        <Pressable onPress={()=>props.openComplainer(true)} style={({ pressed }) => [
            {
                backgroundColor: pressed
                ? '#f2e1c7'
                : '#ffce94'
            },
            styles.frontSquare
            ]}>
            <Text>Make a complaint</Text>
        </Pressable>
        <Pressable onPress={()=>props.openWeather(true)} style={({ pressed }) => [
            {
                backgroundColor: pressed
                ? '#f2e1c7'
                : '#ffce94'
            },
            styles.frontSquare
            ]}>
            <Text>Weather forecasts</Text>
        </Pressable>
        <Pressable onPress={()=>props.openComplaints(true)} style={({ pressed }) => [
            {
                backgroundColor: pressed
                ? '#f2e1c7'
                : '#ffce94'
            },
            styles.frontSquare
            ]}>
            <Text>Weathercomplaints</Text>
        </Pressable>
    </View>
  )
};


const styles = StyleSheet.create({
    frontSquare:{
        padding: 35,
        width: 250,
        alignItems: 'center',
      },
      container: {
        flex: 1,
        backgroundColor: '#e2d2ba',
        alignItems: 'center',
        justifyContent: 'space-around',
      },
});

export default FrontSquare;
