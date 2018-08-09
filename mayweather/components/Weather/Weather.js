import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { weatherConditions } from '../../utils/WeatherCondition';
import Appbar from '../Appbar/Appbar';

const Weather = ({ weather, temperature, city }) => {
    return (
      <View style={[styles.weatherContainer, {backgroundColor: weatherConditions[weather].color}]}>
        <View style={styles.headerContainer}>
          <MaterialCommunityIcons size={48} name="weather-sunny" color={'#fff'} />
          <Text style={styles.tempText}>{temperature}˚</Text>
          <Text style={styles.cityName}>{city}</Text>
        </View>
        <View style={styles.bodyContainer}>
          <Text style={styles.title}>{weatherConditions[weather].title}</Text>
          <Text style={styles.subtitle}>{weatherConditions[weather].subtitle}</Text>
        </View>
        <Appbar />
      </View>
    );
};

const styles = StyleSheet.create({
  weatherContainer: {
    flex: 1,
    backgroundColor: '#f7b733'
  },
  headerContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  tempText: {
    fontSize: 48,
    color: '#fff'
  },
  cityName:{
    fontSize: 24,
    color: '#fff'
  },
  bodyContainer: {
    flex: 2,
    alignItems: 'flex-start',
    justifyContent: 'flex-end',
    paddingLeft: 25,
    marginBottom: 40
  },
  title: {
    fontSize: 48,
    color: '#fff'
  },
  subtitle: {
    fontSize: 24,
    color: '#fff'
  }
});

export default Weather;