import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Greeting from './src/components/Greeting';
import List from './src/components/List';

class App extends Component {

    constructor(){
      super();
      this.state = {
        greeting: 'Welcome to react native'
      }
    }

    componentDidMount(){

    }

  render() {
    return (
      <List />
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