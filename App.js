import React, {Component} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';
import Logout from  './src/screens/Logout';
import Login from './src/screens/LogIn';
import colors from './src/styles/colors';

class App extends Component {
  render() {
    return (
        <Login/>
    )
  }
}
export default App;
