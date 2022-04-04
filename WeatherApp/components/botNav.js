import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity, Modal, Button} from 'react-native';

const TopNav = props =>{
    return( 
    <View style={styles.topNavContainer}>
        <Button title="HOME" color="#ffce94"></Button>
        <Button title="Bot Bar Action 2" color="#ffce94"></Button>
    </View>
  )
};

const styles = StyleSheet.create({
    topNavContainer:{
        flex: 0.1,
        flexDirection: 'row',
        width: 400,
        padding:10,
        alignContent: 'center',
        justifyContent: 'space-around',
        alignSelf: 'center',
        marginTop: 10,
        backgroundColor: '#ffce94',
        borderRadius: 5
      },
});

export default TopNav;