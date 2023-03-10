import * as React from 'react';
import { Text, View, StyleSheet} from 'react-native';
import { createAppContainer, createSwitchNavigator} from 'react-navigation';
import Constants from 'expo-constants';


//You can import from local files.
import HomeScreen from './screens/HomeScreen';
import JokeScreen from './screens/jokeScreen';
import HoroScopeScreen from './screens/HoroScopeScreen';
import WeatherScreen from './screens/WeatherScreen';
import NewsScreen from './screens/NewsScreen';

export default class App extends React.Component {
  render() {
    return (
      <View>
        <AppContainer/>
      </View>
    );
  }
}
