import React from 'react';
import { BackHandler } from 'react-native';
import { Container, LoginContainer, InputsContainer, SpaceH, SpaceW, ButtonContainer, Title} from './styled';
import { useNavigation } from '@react-navigation/native';
import { InputLogin, ButtonLogin } from '../../components';

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

  function closeApp(){
    BackHandler.exitApp();
  }

  return(
    <Container>
      <LoginContainer>
        <InputsContainer>
          <InputLogin placeholder="Usuário" value={userName} onChangeText={setUserName} />
          <SpaceH $size="20" />
          <InputLogin placeholder="Senha" value={password} onChangeText={setPassword} secureTextEntry={true} />
        </InputsContainer>
        <ButtonContainer>
          <ButtonLogin title="Acessar" onPress={signIn} />
          <SpaceW $size="25" />
          <ButtonLogin title="Sair" onPress={closeApp} /> 
        </ButtonContainer>
      </LoginContainer>
    </Container>
  );
}