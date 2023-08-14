import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'rgb(206 206 255)',
    alignItems: 'center',
    justifyContent: 'center'
  },
  
  loginContainer:{
    width: '80%',
    height: '50%',
    backgroundColor: 'rgb(233 233 233)',
    borderRadius: 10,
  },

  title:{
    fontSize: 30,
    fontWeight: 'bold',
    color: 'black',
    marginBottom: 20,
    textAlign: 'center',
    marginTop: 30,
  },

  inputsContainer:{
    width: '100%',
    height: '50%',
    alignItems: 'center',
    justifyContent: 'center',
  },

  input:{
    width: '95%',
    height: 50,
    backgroundColor: 'white',
    borderRadius: 10,
    marginBottom: 20,
    alignSelf: 'center',
    paddingLeft: 10,
    fontSize: 20,
    fontWeight: 'bold',
    color: 'black',
  },

  buttonContainer:{
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  }
});

export default styles;