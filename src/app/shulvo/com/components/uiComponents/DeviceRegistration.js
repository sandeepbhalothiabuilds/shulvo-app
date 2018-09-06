                 import React, { Component } from 'react';
                 import { AppRegistry, StyleSheet,Text, View} from 'react-native';

                 export default class DeviceRegistration extends Component {
                   render() {
                     return (
                       <View style={styles.container}>
                         <Text style={styles.title}>
                          Register your device here
                         </Text>
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
                   title: {
                     fontSize: 20,
                     textAlign: 'center',
                     margin: 10,
                   }
                 });

AppRegistry.registerComponent('DeviceRegistration', () => 'DeviceRegistration');