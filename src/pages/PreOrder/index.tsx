import { Container, Header, Title, ButtonsContainer, Body, Text, 
  NumPreOrderContainer, LineColumn, TextInputContainer, LineRow,
  Space, InputsContainer } from './styled';
import { ButtonCustom, DropdownCustom, InputCustom, Table } from '../../components';
import { SafeAreaView, ScrollView } from 'react-native';

export default function PreOrder(){
  const services = [
    {id: 0, label: ''},
    {id: 1, label: 'CONSERTO'},
    {id: 2, label: 'LONA'},
    {id: 3, label: 'TESTE'},
    {id: 4, label: 'REFORMA'},
    {id: 5, label: 'VULCANIZAÇÃO'}
  ];

  const marks = [
    {id: 0, label: ''},
    {id: 1, label: 'ABC VALADARES'},
    {id: 2, label: 'ACR'},
    {id: 3, label: 'ACT-BOR'},
    {id: 4, label: 'ADVANCE'},
    {id: 5, label: 'AEOLUS'}
  ];

  const preOrders = [
    {
      id: 0,
      numPreOrder: '65465545-45',
      date: '18/09/2003',
      nameClient: 'CLIENTE TESTE',
    },
    {
      id: 1,
      numPreOrder: '21121212-49',
      date: '14/08/2023',
      nameClient: 'NYCOLAZS',
    },
    {
      id: 2,
      numPreOrder: '64343532-49',
      date: '00/00/0000',
      nameClient: 'ZELDA',
    },
    {
      id: 3,
      numPreOrder: '65465545-54',
      date: '00/00/0000',
      nameClient: 'FSAFSADFSDF',
    },
    {
      id: 4,
      numPreOrder: '64343532-54',
      date: '00/00/0000',
      nameClient: 'CLIENTE TESTE',
    },
    {
      id: 5,
      numPreOrder: '64343532-54',
      date: '00/00/0000',
      nameClient: 'CLIENTE TESTE',
    },
    {
      id: 6,
      numPreOrder: '64343532-54',
      date: '00/00/0000',
      nameClient: 'CLIENTE TESTE',
    },
    {
      id: 7,
      numPreOrder: '64343532-54',
      date: '00/00/0000',
      nameClient: 'CLIENTE TESTE',
    },
    {
      id: 8,
      numPreOrder: '64343532-54',
      date: '00/00/0000',
      nameClient: 'CLIENTE TESTE',
    },
    {
      id: 9,
      numPreOrder: '64343532-54',
      date: '00/00/0000',
      nameClient: 'CLIENTE TESTE',
    }

  ]

  const titleTable = [
    "No. Pré-Ordem",
    "Data",
    "Cliente"
  ]

  return(
    <SafeAreaView>
      <ScrollView>
        <Container>
          <Header>
            <Title>Pré-ordem</Title>
          </Header>
          <ButtonsContainer>
            <ButtonCustom title="Incluir" />
            <ButtonCustom title="Salvar" />
            <ButtonCustom title="Cancelar" />
          </ButtonsContainer>
          <Body>
            <NumPreOrderContainer>
              <LineColumn>
                <Text>No. Pré-Ordem</Text>
                <Text>00000000-00</Text>
              </LineColumn>
              <ButtonCustom title="Fechar" color="red" />
            </NumPreOrderContainer>
            <TextInputContainer>
              <InputCustom label="CPF / CNPJ" keyboardType="numeric" mask="cpf" />
              <InputCustom label="Cliente" toUpperCase />
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
              <InputCustom label="Série" size="40" backgroundColor="red" keyboardType="numeric" />
              <Space $size="15" />
              <InputCustom label="Dot" size="30" keyboardType="numeric" />
            </InputsContainer>
            <DropdownCustom options={marks} label="Marca" />
            <ButtonsContainer>
              <ButtonCustom title="Alterar" />
              <ButtonCustom title="Excluir" />
            </ButtonsContainer>
            <Table title={titleTable} itens={preOrders} />
          </Body>
        </Container>
      </ScrollView>
    </SafeAreaView>
  );
}