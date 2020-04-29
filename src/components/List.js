import React from 'react';
import { View, Text, FlatList } from 'react-native';

class List extends React.Component{
    constructor() {
        super();
        this.state = {
            global: [],
            refreshing: false
        }
    }

    renderItem = ({ item }) => (
        
        <View style={{ padding: 20, borderBottomWidth: 1, borderBottomColor: '#000',}}>
            <View>
                <Text>Confirmed: {item.confirmed}</Text>
                <Text>Recovered: {item.recovered}</Text>
                <Text>Deaths: {item.deaths}</Text>
            </View>
            
        </View>
    )

    onRefresh = () => {
        this.getDataApi();
    }

    componentDidMount = () => {
        this.getDataApi();
    }

    getDataApi = async () => {
        this.setState({ refreshing: true})

        const response = await fetch('https://covid19.mathdro.id/api');
        const json = await response.json();
        this.setState({ global: json, refreshing: false})
    }

    render(){

        return(
            <View>
                <FlatList
                    data={this.state.global}
                    renderItem={this.renderItem}
                    refreshing={this.state.refreshing}
                    onRefresh={this.onRefresh}
                    showsVerticalScrollIndicator={false}
                />
            </View>
        )
    }
}

export default List;