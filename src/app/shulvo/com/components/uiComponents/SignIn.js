import React, { Component } from 'react';
import {
  View,
  Alert,
  Text,
  AppRegistry,
  TouchableOpacity,
  TextInput,
} from 'react-native';

import styles from '../uiComponents/Styles';
import  { callGetApi } from '../../gateway/RestCall';

export default class SignIn extends Component {
  constructor(props) {
    super(props);
  }
  static navigationOptions = ({ navigation, navigationOptions }) => {
    const { params } = navigation.state;

    return {
      title: params ? params.ScreenName : 'SignIn Screen',
      /* These values are used instead of the shared configuration! */
      headerStyle: {
        backgroundColor: navigationOptions.headerTintColor,
      },
      headerTintColor: navigationOptions.headerStyle.backgroundColor,
    };
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


  handlePress = async () => {
    const url = 'https://facebook.github.io/react-native/movies.json';
    callGetApi(url).then((res) => ( Alert.alert(res.title)));  
}

handlePress1 = async () => {
  fetch('http://192.168.0.27:3000/api/courses', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
          "name": "Course"
      })
})
.then((response) => response.json())
.then((responseJson) => {
      Alert.alert("name of Course :  " + responseJson.name);
    })
    .catch((error) => {
      console.error(error);
    });
}   


  render() {
    return ( 
      <View style={styles.container}>
        <View style = {styles.headerContainer}>
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
            secureTextEntry={true}
            onChangeText={this.handlePassword}
          />

          <TouchableOpacity
            style={styles.buttonContainer}
            //() => this.login(this.state.email, this.state.password)
            onPress={this.handlePress.bind(this)}>
            console.log('here-1');
            <Text style={styles.buttonText}> Submit </Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}
