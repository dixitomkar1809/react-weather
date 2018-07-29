import React, {Component} from 'react';
import {Platform, StyleSheet, Text} from "react-native";

export default class Appbar extends Component{

    constructor(props){
        super(props);
        console.log(Platform.OS);
    }
    render(){
        return(
            <Text>Appbar</Text>
        )
    }
}
