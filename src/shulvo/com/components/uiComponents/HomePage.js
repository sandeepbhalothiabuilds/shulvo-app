import React, { Component } from 'react';
import { AppRegistry, StyleSheet, View, Button } from 'react-native';

import styles from '../uiComponents/Styles.js';

export default class HomePage extends Component {

  render() {
    return (
    <View style = {styles.container}>
    <Button style = {styles.submitButton} title = 'Log In' />
    <Button style = {styles.submitButton} title = 'Sign Up' />
    </View>
    );
  }
}

AppRegistry.registerComponent('shulvo-app', () =>HomePage)