import { useState } from 'react';
import { Container, Text, Input, Body } from './styled';

export default function InputCustom(props: any){
  const [value, setValue] = useState('');

  let keyboardType = 'default';

  if(props.keyboardType === 'numeric'){
    keyboardType = 'numeric';
  }

  let mask = null;

  if (props.mask === 'cpf') {
    mask = value.replace(/\D/g, '').replace(/(\d{3})(\d{3})(\d{3})(\d{2})/, '$1.$2.$3-$4');
    if(value.length > 11){
      mask = value.replace(/\D/g, '').replace(/(\d{2})(\d{3})(\d{3})(\d{4})(\d{2})/, '$1.$2.$3/$4-$5');
    }
    if(value.length > 18){
      mask = value.substring(0, value.length - 1);
    }
  } else if (props.mask === 'cnpj') {
    mask = value.replace(/\D/g, '').replace(/(\d{2})(\d{3})(\d{3})(\d{4})(\d{2})/, '$1.$2.$3/$4-$5');
    if(value.length > 18){
      mask = value.substring(0, value.length - 1);
    }
  }

  return(
    <Container $size={props.size}>
      <Body>
        <Text>{props.label}</Text>
        <Input 
          keyboardType={keyboardType}
          placeholder={props.placeholder}
          onChangeText={setValue}
          value={mask !== null ? mask : value}
        />
      </Body>
    </Container>
  );
}