import { Container, Text } from "./styled";

export default function InputLogin(props: any){
  return(
    <Container
      onPress={props.onPress}
    >
      <Text>{props.title}</Text>
    </Container>
  );
}