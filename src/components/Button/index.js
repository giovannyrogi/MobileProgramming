import React from 'react';

import {StyleSheet, Text, View} from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';


const Button = ({title, onPress}) => {
    return(
        <View style={styles.containerButton}>
            <TouchableOpacity style={styles.button} onPress={onPress}>
                <Text style={styles.textButton}> {title} </Text>
            </TouchableOpacity>
        </View>
    );
};

export default Button;

const styles = StyleSheet.create({
   
    containerButton:{
        marginBottom: 60, 
        maxWidth: 300, 
    },
    button:{
        backgroundColor: '#663399',
        borderRadius: 25,
        paddingVertical: 13,
        width: 240,
    },
    textButton:{
        fontSize: 15,
        fontWeight: 'bold',
        color: 'white',
        textTransform: 'uppercase',
        textAlign: 'center',
        letterSpacing: 1.5,
    }, 
    
  })