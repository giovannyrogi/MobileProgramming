import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Colors } from 'react-native/Libraries/NewAppScreen';

/*
const Layout = () => {
    return (
        <View>
            <Text style={styles.textStyle}> Layout Component </Text>
            <Text style={[styles.textStyle, styles.redText]}> This text is red </Text>
        </View>
    )
}

const styles = StyleSheet.create({
    textStyle: {
        marginTop: 40,
        fontSize: 25,
        color: 'royalblue',
        fontWeight: 'bold'

    },
    redText: {
        marginTop: 0,
        color: 'red'
    }
})
*/

/*
//Flexbox
const Layout = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.box1}></Text>
            <Text style={styles.box2}></Text>
            <Text style={styles.box3}></Text>
        </View>
    )
}



const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column'
    },
    box1: {
        flex: 1,
        backgroundColor: 'royalblue'
    },
    box2: {
        flex: 10,
        backgroundColor: 'peru'  
    },
    box3: {
        flex: 0.5,
        backgroundColor: 'greenyellow'
    }
})
*/

//Justify Content & AlignItems
const Layout = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.box1}></Text>
            <Text style={styles.box2}></Text>
            <Text style={styles.box3}></Text>
        </View>
    )
}



const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        //justifyContent: 'flex-start'//akan menempel diawal layar
        //justifyContent: 'flex-end' //akan menempel diakhir layar
        //justifyContent: 'center'//akan menempel ditgh layar
        //justifyContent: 'space-between'//akan menempel di awal, tgh dan akhir layar
        justifyContent: 'space-between', //mirip seperti space-between tpi awal, tgh dan akhir tdk terlalu menempel ke ujung layar
        //alignItems: 'center' // alignItems untuk mengatur posisi dari kiri kekanan (jika column), atas ke bawah (jika row)
        alignItems: 'stretch'
    },
    box1: {
        width: 50,

        backgroundColor: 'royalblue'
    },
    box2: {
        width: 50,
        height: 50,
        backgroundColor: 'peru'  
    },
    box3: {
        width: 50,
        height: 50,
        backgroundColor: 'greenyellow'
    }
})

export default Layout;