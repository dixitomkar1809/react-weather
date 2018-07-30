import React, {Component} from 'react';
import { Text } from 'react-native';
import { View, StyleSheet } from 'react-native';
import Appbar from './components/Appbar/Appbar';


export default class App extends Component {
  render() {
    return (
      <View>
        <Appbar />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  actionArea:{
    marginTop:25
  }
})