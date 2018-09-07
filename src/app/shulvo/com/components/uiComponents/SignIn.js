import React, { Component } from 'react';
import {
  View,
  Text,
  AppRegistry,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import { createStackNavigator } from 'react-navigation';

import styles from '../uiComponents/Styles';

export default class SignIn extends Component {

    static navigationOptions = {
        title: 'SignIn',
      };
  state = {
    email: '',
    password: '',
  };
  handleEmail = text => {
    this.setState({ email: text });
  };
  handlePassword = text => {
    this.setState({ password: text });
  };
  login = (email, pass) => {
    alert('email: ' + email + ' password: ' + pass);
  };
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.headerContainer}>
          <Text style={styles.header}>Login to Shulvo!</Text>
        </View>
        <View style={styles.inputContainer}>
          <TextInput
            underlineColorAndoroid="transparent"
            style={styles.inputText}
            placeholder="Email"
            onChangeText={this.handleEmail}
          />

          <TextInput
            underlineColorAndoroid="transparent"
            style={styles.inputText}
            placeholder="Password"
            secureTextEntry = {true}
            onChangeText={this.handlePassword}
          />

          <TouchableOpacity
            style={styles.buttonContainer}
            onPress={() => this.login(this.state.email, this.state.password)}>
            <Text style={styles.buttonText}> Submit </Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}
AppRegistry.registerComponent('SignIn', () => 'SignIn');
