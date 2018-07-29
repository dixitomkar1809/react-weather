import React from 'react';
import { Text } from 'react-native';
import { View, StyleSheet } from 'react-native';
import Appbar from './components/Appbar/Appbar';


export default class App extends React.Component {
  render() {
    return (
      <View style={styles.actionArea}>
        <Appbar />
        <Text>Hello !</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  actionArea:{
    marginTop:25
  }
})