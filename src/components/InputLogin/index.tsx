import { Container, Input, Line } from './styled';

export default function InputLogin(props: any){
  return(
    <Container>
      <Input 
        placeholder={props.placeholder} 
        placeholderTextColor="#d5d5d5c1" 
        secureTextEntry={props.secureTextEntry}
        onChangeText={props.onChangeText}
      />
      <Line />
    </Container>
  );
}