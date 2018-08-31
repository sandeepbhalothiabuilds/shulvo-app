import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import LoginToHome from  './Com/Shulvo/Components/UIComponents/LoginToHome';

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>Welcome to Shulvo Technology Pvt Ltd.!!!</Text>
        <LoginToHome />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
