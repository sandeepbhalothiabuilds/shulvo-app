import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';

import SignIn from '../uiComponents/SignIn';

export default class Profile extends Component {
  render() {
    return (
      <View style={styles.container}>
           <SignIn /> 
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
 
});