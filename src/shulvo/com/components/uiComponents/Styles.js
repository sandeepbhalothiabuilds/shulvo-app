import React from 'react';
import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  submitButton: {
    flex: 1,
    flexDirection: 'row',
    padding: 15,
    alignItems:'center',
    justifyContent:'center',
    backgroundColor: '#43a1c9',
  },
  submitButtonText:{
          color: 'white'
  },
  buttonText: {
    fontSize: 20,
    textAlign: 'center'
  },
  container: {
        paddingTop: 23
  },
  input: {
        margin: 15,
        height: 40,
        borderColor: '#7a42f4',
        borderWidth: 1
  }
});