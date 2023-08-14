import React from 'react';
import { Container, LoginContainer, Title, InputsContainer, Input, ButtonContainer} from './styled';
import { Button } from 'react-native';
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
    <Container>
      <LoginContainer>
        <Title>Login</Title>
        <InputsContainer>
          <Input placeholder="Usuário" value={userName} onChangeText={setUserName} />
          <Input placeholder="Senha" value={password} onChangeText={setPassword} secureTextEntry={true} />
        </InputsContainer>
        <ButtonContainer>
          <Button title="Entrar" onPress={signIn} />
        </ButtonContainer>
      </LoginContainer>
    </Container>
  );
}