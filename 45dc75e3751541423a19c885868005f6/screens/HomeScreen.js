import React, { Component } from 'react';
import {
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  Header,
  Image,
} from 'react-native';

import AppHeader from '../components/AppHeader';
import db from '../config';
export default class HomeScreen extends Component {
  constructor(){
    super();
    this.state={
      like:0,
      dislike:0
    }
  }
  likecount=()=>{
    this.setState({like:this.state+1});
  }
  dislikecount=()=>{
    this.setState({dislike:this.state.dislike+1});
  }
    render () {
      return {
        <View>
          <AppHeader/>
          <View>
            <View style={styles.buttonsContainer}>
              <TouchableOpacity
                style={styles.buttone}
                onPress={() => this.props.navigation.navigate('JokeScreen')}>
                <Text>Read A Joke</Text>
              </TouchableOpacity>

              <TouchableOpacity
                style={styles.buttons}
                onPress={() => this.props.navigation.navigate('HoroScopeScreen')}>
                <Text>Horoscope</Text>
              </TouchableOpacity>

              <TouchableOpacity
                style={styles.buttons}
                onPress={() => this.props.navigation.navigate('WeatherScreen')}>
                <Text>Weather</Text>
              </TouchableOpacity>

              <TouchableOpacity
                style={styles.buttons}
                onPress={() => this.props.navigation.navigate('NewsScreen')}>
                <Text>Top News</Text>
              </TouchableOpacity>
              </View>  
      }
    }
}