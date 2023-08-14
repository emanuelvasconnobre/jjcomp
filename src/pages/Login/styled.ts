import styled from "styled-components/native";

export const Container = styled.View`
  flex: 1;
  background-color: rgb(206 206 255);
  align-items: center;
  justify-content: center;
`;

export const LoginContainer = styled.View`
  width: 80%;
  height: 50%;
  background-color: rgb(233 233 233);
  border-radius: 10px;
`;

export const Title = styled.Text`
  font-size: 30px;
  font-weight: bold;
  color: black;
  margin-bottom: 20px;
  text-align: center;
  margin-top: 30px;
`;

export const InputsContainer = styled.View`
  width: 100%;
  height: 50%;
  align-items: center;
  justify-content: center;
`;

export const Input = styled.TextInput`
  width: 95%;
  height: 50px;
  background-color: white;
  border-radius: 10px;
  margin-bottom: 20px;
  align-self: center;
  padding-left: 10px;
  font-size: 20px;
  font-weight: bold;
  color: black;
`;

export const ButtonContainer = styled.View`
  width: 100%;
  align-items: center;
  justify-content: center;
`;
