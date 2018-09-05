import React from 'react';
import { AppRegistry, StyleSheet, Text, View } from 'react-native';

import styles from './src/shulvo/com/components/uiComponents/Styles.js';
import HomePage from  './src/shulvo/com/components/uiComponents/HomePage';

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>Welcome to Shulvo Technology Pvt Ltd.!</Text>
        <HomePage />
      </View>
    );
  }
};

AppRegistry.registerComponent('App', () => 'App');