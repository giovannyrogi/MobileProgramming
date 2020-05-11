import React from 'react';
import {StyleSheet, Text, View, StatusBar, Image, ImageBackground} from 'react-native';

import ActionButton from './ActionButton'
import { homeImg1, homeImg2, homeImg3, homeImg4, homeImg5, header1, header2, header3 } from '../../../../assets';


const Home = ({navigation}) => {
    const handleGoTo = screen => {
        navigation.navigate(screen)
    }
    return (
        <View style={styles.container}>
            {/* Status Bar */}
            
            <View>
                <StatusBar barStyle="light-content" backgroundColor="#808080"/>
            </View>
            {/* Content */}
                <View style={styles.containerContent}>
                    
                    <Image source={homeImg5} style={styles.containerImg}/>
                    <View>
                        <Text style={styles.textJudul}>Data Covid-19</Text>
                        <Text style={styles.textJudul}>Global & Indonesia</Text>
                        <View style={styles.saparator}></View>
                    </View>
                    <ActionButton 
                        title="Global" 
                        onPress={() => handleGoTo('DataGlobal')}
                    />
                    <ActionButton 
                        title="Indonesia" 
                        onPress={() => handleGoTo('DataIndonesia')}
                    />
    
                </View>
        </View>
    )
};

export default Home;

const styles = StyleSheet.create({
    container:{
      flex: 1,
    },
    containerContent:{
        flex: 1,
        paddingBottom: 100,
        justifyContent: 'center', 
        alignItems: 'center', 
        backgroundColor: 'white',    
    }, 
    containerImg:{
        height: 190,
        width: 219,
        backgroundColor: 'white',
    },
    textJudul:{
        textAlign: 'center',
        top: 10,
        fontSize: 20,
        fontWeight: 'bold',
        color: 'purple',
    },
    saparator:{
        backgroundColor: 'white',
        marginBottom: 80,
    }, 
    
  })