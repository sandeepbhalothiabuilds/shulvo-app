import React from 'react';
import { AppRegistry, StyleSheet, Text, View } from 'react-native';

import styles from './src/app/shulvo/com/components/uiComponents/Styles.js';
import HomePage from  './src/app/shulvo/com/components/uiComponents/HomePage';
import {createRootNavigator} from './src/app/shulvo/com/router/Router';


export default createRootNavigator();
/*export default class App extends React.Component {
  render() {
    return (

     <View style={styles.container}>
        <Text>Welcome to Shulvo Technology Pvt Ltd.!</Text>
        <HomePage />
      </View>
    );
  }
};*/

AppRegistry.registerComponent('App', () => 'App');