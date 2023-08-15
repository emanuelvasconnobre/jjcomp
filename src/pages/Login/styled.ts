import styled from "styled-components/native";

export const Container = styled.View`
  flex: 1;
  background-color: #1e6094;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const LoginContainer = styled.View`
  width: 70%;
  height: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
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
  height: 30%;
  align-items: center;
  justify-content: center;
  margin: 0px;
`;

export const SpaceH = styled.View<{ $size?: number; }>`
  width: 100%;
  height: ${({ $size }) => $size || 0}px;
`;

export const SpaceW = styled.View<{ $size?: number; }>`
  width: ${({ $size }) => $size || 0}px;
`;

export const ButtonContainer = styled.View`
  display: flex;
  flex-direction: row;
  width: 100%;
  align-items: center;
  justify-content: center;
`;
