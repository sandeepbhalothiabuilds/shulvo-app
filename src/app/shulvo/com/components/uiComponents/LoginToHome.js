import React, { Component } from 'react';
import { AppRegistry, StyleSheet, TextInput, View, Button } from 'react-native';

import styles from '../uiComponents/Styles';

export default class LoginToHome extends Component {
    constructor(props) {
        super(props);

        this.state = { userName: 'Place Holder UserName', password: 'Password'};
    }
    render() {
        return (
            <View>

                <TextInput style={{height: 150, width: 200, borderColor: 'grey', borderStyle: 'solid'}} placeholder = 'Enter User name Here' onChangeText = {(userName) => this.setState(userName =>{userName})}
                value = {this.props.UserName}
                />
                <TextInput style={{height: 150, width: 200, borderColor: 'grey', borderStyle: 'solid'}} placeholder = 'Enter Password Here' onChangeText = {(password) => this.setState(password =>{password})}
                value = {this.props.password}
                />
            </View>
        );
    }
}
AppRegistry.registerComponent('LoginToHome', () => LoginToHome);