import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Header = () => {

    const nama = "John";
    const greeting = <Text style={styles.textStyle}>Welcome {nama}!</Text>;
    return (
        <View>
            {greeting}
            <Text>Hello world</Text>
            <Text>Hello world</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    textStyle: {
        fontSize: 26,
        color: 'red'
    }
});

export default Header;
