import React, { Component } from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native'

const List = () => {
    return (
        <View style={styles.container}>
            <FlatList
                horizontal
                data={[
                    { key: 'Devin' },
                    { key: 'Dan' },
                    { key: 'Dominic' },
                    { key: 'Jackson' },
                    { key: 'James' },
                    { key: 'Joel' },
                    { key: 'John' },
                    { key: 'Jillian' },
                    { key: 'Jimmy' },
                    { key: 'Julie' }
                ]}
                renderItem={({ item }) => <Text style={styles.item}>{item.key}</Text>}
                showsVerticalScrollIndicator={false}
                keyExtractor={((item) => item.key)}
            />
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 22
    },
    item: {
        padding: 10,
        fontSize: 18,
        height: 44,
    },
})


export default List;