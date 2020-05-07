import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import GlobalApi from './src/components/GlobalApi';
import ApiIndoProvinsi from './src/components/ApiIndoProvinsi';


class App extends Component {
  
  constructor(){
    super();
    this.state = {
      greeting: 'Welcome to React Native'
    }
  }

  componentDidMount() {

  }

  render() {
    return (
      <View>
        <GlobalApi />
        <ApiIndoProvinsi />
      </View>
      
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default App;