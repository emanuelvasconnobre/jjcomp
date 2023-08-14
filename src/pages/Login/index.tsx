import React from 'react';
import styles from './style';
import { View, Text, TextInput, Button } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function Login(){
  const navigation = useNavigation();

  const [userName, setUserName] = React.useState('');
  const [password, setPassword] = React.useState('');

  function signIn(){
    if(userName === 'ADMIN' && password === '123456'){
      navigation.navigate('preorder');
    }else{
      alert('Usuário ou senha inválidos!');
    }
  }

  return(
    <View style={styles.container}>
      <View style={styles.loginContainer}>
        <Text style={styles.title}>Liberação</Text>
        <View style={styles.inputsContainer}>
          <View style={styles.input}>
            <Text>Nome</Text>
            <TextInput
              autoCapitalize={"characters"}
              onChangeText={(text) => setUserName(text.toUpperCase())}
            />
          </View>
          <View style={styles.input}>
            <Text>Senha</Text>
            <TextInput 
              secureTextEntry={true}
              onChangeText={text => setPassword(text)}
            />
          </View>
        </View>
        <View style={styles.buttonContainer}>
          <Button
            title="Entrar"
            color="#5c90ff"
            onPress={signIn}
          />
        </View>
      </View>
    </View>
  );
}