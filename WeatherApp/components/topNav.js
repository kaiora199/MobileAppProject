import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity, Modal, Button} from 'react-native';

const BotNav = props =>{
    return( 
    <View style={styles.topNavContainer}>
        <Button title="Home" color="#ffce94"></Button>
        <TouchableOpacity>
            <Text>Username</Text>
            <Text>Password</Text>

        </TouchableOpacity>
        <Button title="Logo" color="#ffce94"></Button>
    </View>
  )
};

const styles = StyleSheet.create({
    topNavContainer:{
        flex: 0.1,
        flexDirection: 'row',
        width: 400,
        padding:10,
        alignContent: 'space-around',
        justifyContent: 'space-between',
        alignSelf: 'center',
        marginTop: 10,
        backgroundColor: '#ffce94',
        borderRadius: 5
      },
});

export default BotNav;