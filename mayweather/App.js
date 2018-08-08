import React from 'react';
import { StyleSheet, Text, View, Animated } from 'react-native';

import { DangerZone } from 'expo';
// const { Lottie } = DangerZone;

import { API_KEY } from './utils/WeatherAPIKey';

import Weather from './components/Weather/Weather';

export default class App extends React.Component {
  
  state = {
    isLoading: false,
    temperature: 0,
    weatherCondition: null,
    error: null,
    locationName: null
  };

  componentDidMount() {
    console.log(new Date().getHours());
    navigator.geolocation.getCurrentPosition(
      position => {
        this.fetchWeahter(position.coords.latitude, position.coords.longitude);
        this.findLocationName(position.coords.latitude, position.coords.longitude);
      },
      error => {
        this.setState({
          error: 'Error Getting Weather Condtions'
        });
      }
    );
  }

  findLocationName(lat, lon){
    fetch(`http://www.mapquestapi.com/geocoding/v1/reverse?key=MnWRVdOuu3FVpOqQbF8QmhnxroFd0qnF&location=${lat},${lon}&includeRoadMetadata=true&includeNearestIntersection=true`)
    .then(res => res.json())
    .then(json => {
      this.setState({
        locationName : json.results[0].locations[0].adminArea5
      })
    });
  }

  fetchWeahter(lat, lon) {
    fetch(
      `http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&APPID=${API_KEY}&units=metric`
    )
      .then(res => res.json())
      .then(json => {
        this.setState({
          temperature: json.main.temp,
          weatherCondition: json.weather[0].main,
          isLoading: true
        });
      });
  }

  render() {
    const { isLoading, weatherCondition, temperature, locationName } = this.state;
    return (
      <View style={styles.container}>
        {!isLoading ? (
          <View style={styles.loadingContainer}>
            <Text style={styles.loadingText}>Fetching The Weather</Text>
          </View>
        ) : (
          <Weather weather={weatherCondition} temperature={temperature} city={locationName}/>
        )}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'
  },
  loadingContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#FFFDE4'
  },
  loadingText: {
    fontSize: 30
  }
});