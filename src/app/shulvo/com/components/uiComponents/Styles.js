import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  header: {
    color: 'black',
    fontSize: 40,
    fontStyle: 'italic',
    fontWeight: 'bold',
    textShadowColor: '#252525',
    textShadowOffset: { width: 2, height: 2 },
    textShadowRadius: 15,
    marginBottom: 20,
  },
  headerContainer: {
    justifyContent: 'center',
    alignItems : 'center',
    paddingTop: 10,
  },
  inputContainer: {
    margin: 20,
    marginBottom: 0,
    padding: 20,
    paddingBottom: 10,
    alignSelf: 'stretch',
    borderWidth: 1,
    borderColor: '#fff',
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
  },
  inputText: {
    fontSize: 16,
    height: 40,
    padding: 10,
    marginBottom: 10,
    backgroundColor: 'rgba(255, 255, 255, 1)',
  },
  buttonContainer: {
    alignSelf: 'stretch',
    margin: 20,
    padding: 20,
    borderWidth: 1,
    borderColor: '#fff',
    backgroundColor: 'rgba(255, 255, 255, .6)',
},
  buttonText: {
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center'
  },
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
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
  input: {
        margin: 15,
        height: 40,
        borderColor: '#7a42f4',
        borderWidth: 1
  }
});