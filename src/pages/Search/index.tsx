import { SafeAreaView, ScrollView } from "react-native";
import { ButtonCustom, DateInput, InputCustom, Table } from "../../components";
import { Container, Text, InputsDateContainer, Line, InputsContainer } from "./styled";

export default function Search(){

  const preOrders = [
    {
      key: 0,
      numPreOrder: '65465545-45',
      date: '18/09/2003',
      nameClient: 'CLIENTE TESTE',
    },
    {
      key: 1,
      numPreOrder: '21121212-49',
      date: '14/08/2023',
      nameClient: 'NYCOLAZS',
    },
    {
      key: 2,
      numPreOrder: '64343532-49',
      date: '00/00/0000',
      nameClient: 'ZELDA',
    },
    {
      key: 3,
      numPreOrder: '65465545-54',
      date: '00/00/0000',
      nameClient: 'FSAFSADFSDF',
    },
    {
      key: 4,
      numPreOrder: '64343532-54',
      date: '00/00/0000',
      nameClient: 'CLIENTE TESTE',
    },
    {
      key: 5,
      numPreOrder: '64343532-54',
      date: '00/00/0000',
      nameClient: 'CLIENTE TESTE',
    },
    {
      key: 6,
      numPreOrder: '64343532-54',
      date: '00/00/0000',
      nameClient: 'CLIENTE TESTE',
    },
    {
      key: 7,
      numPreOrder: '64343532-54',
      date: '00/00/0000',
      nameClient: 'CLIENTE TESTE',
    },
    {
      key: 8,
      numPreOrder: '64343532-54',
      date: '00/00/0000',
      nameClient: 'CLIENTE TESTE',
    },
    {
      key: 9,
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
          <InputsDateContainer>
            <DateInput label="Data Inicial" />
            <Text>  a  </Text>
            <DateInput label="Data Final" />
          </InputsDateContainer>
          <Line>
            <InputCustom label="No. Pré" size="30" keyboardType="numeric" />
            <InputCustom label="Série" size="45" keyboardType="numeric" />
            <InputCustom label="Dot" size="30" keyboardType="numeric" />
          </Line>
          <InputsContainer>
            <ButtonCustom title="Pesquisar" />
            <ButtonCustom title="Fechar" color="red"/>
          </InputsContainer>
          <InputsContainer>
            <ButtonCustom title="Alterar" />
            <ButtonCustom title="Excluir" color="red"/>
          </InputsContainer>
          <Table title={titleTable} itens={preOrders} />
        </Container>
      </ScrollView>
    </SafeAreaView>
  );
}