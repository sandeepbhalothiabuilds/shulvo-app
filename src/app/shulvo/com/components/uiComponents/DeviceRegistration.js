import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  ScrollView,
  TextInput,
  TouchableOpacity,
} from 'react-native';

import styles from '../uiComponents/Styles';

export default class DeviceRegistration extends Component {
  render() {
    return (
      <View style={styles.container} >
        <View style={styles.headerContainer} >
          <Text style={styles.header}>Device Registration</Text>
        </View>
        <View style={styles.inputContainer}>
          <TextInput
            underlineColorAndoroid="transparent"
            style={styles.inputText}
            placeholder="Device Owner Id"
          />

          <TextInput
            underlineColorAndoroid="transparent"
            style={styles.inputText}
            placeholder="Device Type"
          />

          <TextInput
            underlineColorAndoroid="transparent"
            style={styles.inputText}
            placeholder="Device Name"
          />

          <TextInput
            underlineColorAndoroid="transparent"
            style={styles.inputText}
            placeholder="Manufacturing Company"
          />

          <TextInput
            underlineColorAndoroid="transparent"
            style={styles.inputText}
            placeholder="Serial Number"
          />

          <TextInput
            underlineColorAndoroid="transparent"
            style={styles.inputText}
            placeholder="Initial Reading"
          />

          <TextInput
            underlineColorAndoroid="transparent"
            style={styles.inputText}
            placeholder="Repair Due Date"
          />

          <TouchableOpacity
            onPress={this.RegisterDevice}
            style={styles.buttonContainer}>
            <Text style={styles.buttonText}>Register Device</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}
AppRegistry.registerComponent('DeviceRegistration', () => 'DeviceRegistration');
