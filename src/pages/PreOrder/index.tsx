import { Container, Header, Title, TopButtonsContainer, Body, Text, 
  NumPreOrderContainer, LineColumn, TextInputContainer, LineRow,
  Space, InputsContainer } from './styled';
import { ButtonCustom, DropdownCustom, InputCustom } from '../../components';

export default function PreOrder(){
  const services = [
    {id: 0, label: ''},
    {id: 1, label: 'CONSERTO'},
    {id: 2, label: 'LONA'},
    {id: 3, label: 'TESTE'},
    {id: 4, label: 'REFORMA'},
    {id: 5, label: 'VULCANIZAÇÃO'}
  ];

  return(
    <Container>
      <Header>
        <Title>Pré-ordem</Title>
      </Header>
      <TopButtonsContainer>
        <ButtonCustom title="Incluir" />
        <ButtonCustom title="Salvar" />
        <ButtonCustom title="Cancelar" />
      </TopButtonsContainer>
      <Body>
        <NumPreOrderContainer>
          <LineColumn>
            <Text>No. Pré-Ordem</Text>
            <Text>00000000-00</Text>
          </LineColumn>
          <ButtonCustom title="Fechar" color="red" />
        </NumPreOrderContainer>
        <TextInputContainer>
          <InputCustom label="CPF" keyboardType="numeric" mask="cpf" />
          <InputCustom label="Cliente" />
        </TextInputContainer>
        <LineRow>
          <Text>ITENS</Text>
          <Space $size="50" />
          <ButtonCustom title="Incluir" />
          <ButtonCustom title="Salvar" />
        </LineRow>
        <TextInputContainer>
          <DropdownCustom options={services} label="Serviço" />
        </TextInputContainer>
        <InputsContainer>
          <InputCustom label="Série" size="50"/>
          <InputCustom label="Dot" />
        </InputsContainer>
      </Body>
    </Container>
  );
}