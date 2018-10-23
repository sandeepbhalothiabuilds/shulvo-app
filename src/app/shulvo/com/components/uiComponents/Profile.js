import React, { Component } from 'react';
import { StyleSheet, Text, View, Platform } from 'react-native';

import { Button } from 'react-native-elements';
import styles from '../uiComponents/Styles';



export default class Profile extends Component {
  
  static navigationOptions = ({ navigation }) => {
    return {
      header: null,
      // headerTitle: '$SHULVO$',
      // headerRight: (
      //   <Button
      //     onPress={navigation.getParam('increaseCount')}
      //     title="+1"
      //     color={Platform.OS === 'ios' ? '#fff' : null}
      //   />
      // ),
    };
  };

  render() {
    return (
      <View style={styles.container}>
      <View style = {styles.headerContainer}>
      <Text style={styles.header}>Shulvo</Text>
      </View>
      <View>
      <Button style={styles.buttonContainer} title = 'Log in' onPress = {() => this.props.navigation.navigate('SignIn', {ScreenName: 'SignIn Here'})}></Button>
      <Button style={styles.buttonContainer} title = 'Sign up' onPress = {() => this.props.navigation.navigate('SignUp', {ScreenName: 'SignUp Here'})}></Button>
      

      </View>
      </View>
    );
  }
  
}